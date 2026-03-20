#!/bin/bash
set -euo pipefail

APP_DIR="/opt/asksarah"
IMAGE_DETAIL_FILE="${APP_DIR}/deploy/imageDetail.json"
CONTAINER_NAME="asksarah_web"
PORT=${APP_PORT:-3000}

if [[ ! -f "${IMAGE_DETAIL_FILE}" ]]; then
  echo "Image detail file not found at ${IMAGE_DETAIL_FILE}"
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required but not installed."
  exit 1
fi

IMAGE_URI=$(jq -r '.ImageURI' "${IMAGE_DETAIL_FILE}")

if [[ -z "${IMAGE_URI}" || "${IMAGE_URI}" == "null" ]]; then
  echo "ImageURI missing from ${IMAGE_DETAIL_FILE}"
  exit 1
fi

TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" || true)
if [[ -n "${TOKEN}" ]]; then
  REGION=$(curl -s -H "X-aws-ec2-metadata-token: ${TOKEN}" \
    http://169.254.169.254/latest/dynamic/instance-identity/document \
    | jq -r '.region')
else
  REGION=$(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document \
    | jq -r '.region')
fi

REGION=${AWS_DEFAULT_REGION:-${AWS_REGION:-$REGION}}

if [[ -z "${REGION}" || "${REGION}" == "null" ]]; then
  echo "Unable to determine AWS region."
  exit 1
fi

echo "Logging in to ECR in region ${REGION}..."
aws ecr get-login-password --region "${REGION}" | docker login --username AWS --password-stdin "$(echo "${IMAGE_URI}" | cut -d'/' -f1)"

echo "Pulling image ${IMAGE_URI}..."
docker pull "${IMAGE_URI}"

echo "Removing any existing container..."
docker rm -f "${CONTAINER_NAME}" >/dev/null 2>&1 || true

echo "Fetching secrets from SSM Parameter Store..."
RESEND_API_KEY=$(aws ssm get-parameter \
  --name "/asksarah/RESEND_API_KEY" \
  --with-decryption \
  --region "${REGION}" \
  --query "Parameter.Value" \
  --output text)

CONTACT_FROM_EMAIL=$(aws ssm get-parameter \
  --name "/asksarah/CONTACT_FROM_EMAIL" \
  --region "${REGION}" \
  --query "Parameter.Value" \
  --output text)

CONTACT_TO_EMAIL=$(aws ssm get-parameter \
  --name "/asksarah/CONTACT_TO_EMAIL" \
  --region "${REGION}" \
  --query "Parameter.Value" \
  --output text)

NEXT_PUBLIC_GA_MEASUREMENT_ID=$(aws ssm get-parameter \
  --name "/asksarah/NEXT_PUBLIC_GA_MEASUREMENT_ID" \
  --region "${REGION}" \
  --query "Parameter.Value" \
  --output text)

NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$(aws ssm get-parameter \
  --name "/asksarah/NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION" \
  --region "${REGION}" \
  --query "Parameter.Value" \
  --output text)

echo "Starting container ${CONTAINER_NAME}..."
docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart always \
  -p ${PORT}:${PORT} \
  -e PORT=${PORT} \
  -e NODE_ENV=production \
  -e RESEND_API_KEY="${RESEND_API_KEY}" \
  -e CONTACT_FROM_EMAIL="${CONTACT_FROM_EMAIL}" \
  -e CONTACT_TO_EMAIL="${CONTACT_TO_EMAIL}" \
  -e NEXT_PUBLIC_GA_MEASUREMENT_ID="${NEXT_PUBLIC_GA_MEASUREMENT_ID}" \
  -e NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="${NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}" \
  "${IMAGE_URI}"

echo "Container ${CONTAINER_NAME} is running."

