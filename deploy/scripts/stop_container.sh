#!/bin/bash
set -euo pipefail

CONTAINER_NAME="asksarah_web"

if docker ps -a --format '{{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
  echo "Stopping existing container ${CONTAINER_NAME}..."
  docker stop "${CONTAINER_NAME}" || true
  docker rm "${CONTAINER_NAME}" || true
else
  echo "Container ${CONTAINER_NAME} not found; nothing to stop."
fi

