import { ServicePageTemplate } from "@/components/service-page-template"
import { Settings } from "lucide-react"

export const metadata = {
  title: "Software & SaaS Development - SmartCreatex.tech",
  description:
    "Custom software and SaaS development services including enterprise software, SaaS solutions, and automation tools.",
}

export default function SoftwareSaaSDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Software & SaaS Development"
      description="Enterprise software, SaaS solutions, automation tools"
      detailedDescription="Transform your business processes with custom software and SaaS solutions designed to meet your specific needs. We develop scalable, cloud-based applications that streamline operations, improve efficiency, and provide competitive advantages. Our expertise spans from enterprise software to multi-tenant SaaS platforms with advanced features and integrations."
      keyBenefits={[
        "Custom Solutions",
        "Scalable Architecture",
        "Cloud-Based Deployment",
        "Multi-Tenant Support",
        "Integration Capabilities",
        "Ongoing Maintenance",
      ]}
      features={[
        "Custom enterprise software development",
        "Multi-tenant SaaS platform creation",
        "Business process automation",
        "Third-party integrations and APIs",
        "User management and authentication",
        "Subscription and billing systems",
        "Analytics and reporting dashboards",
        "Cloud deployment and scaling",
      ]}
      technologies={[
        "React",
        "Node.js",
        "Python",
        "Java",
        "C#",
        ".NET",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "MongoDB",
        "Stripe",
        "Auth0",
      ]}
      icon={Settings}
    />
  )
}
