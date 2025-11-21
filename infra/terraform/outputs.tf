output "alb_url" {
  description = "Public URL of the Application Load Balancer."
  value       = aws_lb.app.dns_name
}

output "pipeline_name" {
  description = "Name of the CodePipeline pipeline."
  value       = aws_codepipeline.app.name
}

output "ecr_repository_url" {
  description = "URL of the ECR repository."
  value       = aws_ecr_repository.app.repository_url
}

