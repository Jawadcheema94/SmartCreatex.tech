import { ServicePageTemplate } from "@/components/service-page-template";
import { Cloud } from "lucide-react";

export const metadata = {
  title: "DevOps & Cloud Solutions - SmartCreatex.tech",
  description:
    "Professional DevOps and cloud services including CI/CD pipelines, AWS & Azure cloud solutions, and scalable infrastructure management.",
};

export default function DevOpsCloudPage() {
  return (
    <ServicePageTemplate
      title="DevOps & Cloud Solutions"
      description="CI/CD pipelines, AWS & Azure cloud, scalable infrastructure"
      detailedDescription="Accelerate your software delivery and improve operational efficiency with our comprehensive DevOps and cloud solutions. We help organizations implement robust CI/CD pipelines, migrate to cloud platforms, and build scalable infrastructure that grows with your business. Our expertise spans across major cloud providers including AWS, Azure, and Google Cloud Platform."
      keyBenefits={[
        "Faster Deployment",
        "Improved Reliability",
        "Cost Optimization",
        "Scalable Infrastructure",
        "Enhanced Security",
        "24/7 Monitoring",
      ]}
      features={[
        "CI/CD pipeline setup and optimization",
        "Cloud migration and architecture design",
        "Infrastructure as Code (IaC) implementation",
        "Container orchestration with Kubernetes",
        "Monitoring and logging solutions",
        "Security and compliance management",
        "Performance optimization",
        "Disaster recovery planning",
      ]}
      technologies={[
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitLab CI",
        "Terraform",
        "Ansible",
        "Prometheus",
        "Grafana",
        "ELK Stack",
      ]}
      icon={<Cloud className="h-10 w-10 text-blue-200" />}
    />
  );
}
