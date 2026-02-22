# Infrastructure & Deployment

This folder contains the infrastructure-as-code (IaC) needed to run Ask Sarah Conner on AWS using:

- **Docker** image built from the Next.js app (`Dockerfile`)
- **Amazon ECR** to host container images
- **EC2 Auto Scaling Group** (1+ instances) behind an Application Load Balancer
- **CodePipeline + CodeBuild + CodeDeploy** for CI/CD
- **Terraform** to provision everything end-to-end

## Prerequisites

1. Terraform `>= 1.7`
2. AWS CLI with credentials that can provision IAM, EC2, ECR, VPC, S3, and CodePipeline resources
3. Docker for local testing (optional)
4. A GitHub repository containing this code

## Terraform layout

```
infra/terraform
├── main.tf          # resources (VPC, EC2, pipeline, etc.)
├── variables.tf     # configurable inputs
└── outputs.tf       # stack outputs (ALB URL, pipeline name, ECR repo)
```

Important variables (see `variables.tf` for defaults):

- `project_name`, `environment`
- `github_owner`, `github_repo`, `github_branch`
- `aws_region`
- `instance_type`, `asg_*`, `app_port`, `ssh_ingress_cidrs`
- `ecr_repository_name`

## Deploying with Terraform

```bash
cd infra/terraform
terraform init
terraform apply \
  -var="github_owner=PROJXON" \
  -var="github_repo=asksarah" \
  -var="github_branch=main"
```

The apply step will:

1. Create a VPC with public subnets, security groups, and an ALB
2. Provision an EC2 launch template + Auto Scaling Group (instances bootstrap Docker + CodeDeploy agent)
3. Create an ECR repository for the Docker image
4. Stand up a CodeStar Connection to GitHub, an artifact bucket, CodeBuild project, CodeDeploy app/group, and CodePipeline

> After Terraform finishes, go to the AWS console → Developer Tools → Connections and **complete the GitHub authorization** for the generated CodeStar connection. CodePipeline will remain paused until this handshake is complete.

## CI/CD flow

1. CodePipeline pulls the repo via CodeStar Connection
2. CodeBuild runs `buildspec.yml`
   - Builds the Docker image from `Dockerfile`
   - Pushes the image to ECR
   - Writes `deploy/imageDetail.json` containing the new image URI
3. CodeDeploy copies the artifact to each EC2 instance and runs the hook scripts to stop the old container and start the new one

You can also deploy locally by building the same image:

```bash
docker build -t asksarah-local .
docker run -p 3000:3000 asksarah-local
```

## Outputs

After `terraform apply`, note:

- `alb_url` – the public endpoint for the site
- `pipeline_name` – CI/CD pipeline for monitoring
- `ecr_repository_url` – repository to inspect pushed images

Feel free to extend this stack with Route 53 records, ACM certificates, or autoscaling policies as next steps.
