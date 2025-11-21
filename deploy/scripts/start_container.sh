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

REGION=$(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r '.region')

echo "Logging in to ECR in region ${REGION}..."
aws ecr get-login-password --region "${REGION}" | docker login --username AWS --password-stdin "$(echo "${IMAGE_URI}" | cut -d'/' -f1)"

echo "Pulling image ${IMAGE_URI}..."
docker pull "${IMAGE_URI}"

echo "Removing any existing container..."
docker rm -f "${CONTAINER_NAME}" >/dev/null 2>&1 || true

echo "Starting container ${CONTAINER_NAME}..."
docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart always \
  -p ${PORT}:${PORT} \
  -e PORT=${PORT} \
  -e NODE_ENV=production \
  "${IMAGE_URI}"

echo "Container ${CONTAINER_NAME} is running."

