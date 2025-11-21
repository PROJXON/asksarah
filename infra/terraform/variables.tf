variable "project_name" {
  description = "Base name for resources."
  type        = string
  default     = "asksarah"
}

variable "environment" {
  description = "Deployment environment (prod, staging, etc)."
  type        = string
  default     = "prod"
}

variable "aws_region" {
  description = "AWS region to deploy into."
  type        = string
  default     = "us-west-2"
}

variable "instance_type" {
  description = "EC2 instance type for the application."
  type        = string
  default     = "t3.small"
}

variable "app_port" {
  description = "Port exposed by the Docker container and ALB target group."
  type        = number
  default     = 3000
}

variable "asg_min_size" {
  description = "Minimum size of the Auto Scaling Group."
  type        = number
  default     = 1
}

variable "asg_max_size" {
  description = "Maximum size of the Auto Scaling Group."
  type        = number
  default     = 2
}

variable "asg_desired_capacity" {
  description = "Desired capacity of the Auto Scaling Group."
  type        = number
  default     = 1
}

variable "ssh_ingress_cidrs" {
  description = "CIDR blocks allowed to SSH into EC2 instances."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "github_owner" {
  description = "GitHub organization or user."
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name."
  type        = string
}

variable "github_branch" {
  description = "Git branch to build/deploy."
  type        = string
  default     = "main"
}

variable "ecr_repository_name" {
  description = "ECR repository to store Docker images."
  type        = string
  default     = "asksarah-web"
}

variable "additional_tags" {
  description = "Extra tags to append to all resources."
  type        = map(string)
  default     = {}
}

