#!/bin/bash
set -euo pipefail

echo "Updating packages..."
dnf update -y

echo "Installing dependencies..."
dnf install -y docker jq ruby wget

systemctl enable docker
systemctl start docker
usermod -a -G docker ec2-user

echo "Configuring application port environment..."
cat <<EOF >/etc/profile.d/asksarah-port.sh
export APP_PORT=${app_port}
EOF

echo "Installing CodeDeploy agent..."
cd /tmp
wget https://aws-codedeploy-${region}.s3.${region}.amazonaws.com/latest/install
chmod +x ./install
./install auto
systemctl enable codedeploy-agent
systemctl start codedeploy-agent

echo "Bootstrap complete." > /var/log/asksarah-bootstrap.log

