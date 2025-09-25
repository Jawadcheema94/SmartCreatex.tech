import { ServicePageTemplate } from "@/components/service-page-template";
import { Globe } from "lucide-react";

export const metadata = {
  title: "Web Application Development - SmartCreatex.tech",
  description:
    "Professional web application development services creating secure, dynamic, and scalable web applications for businesses.",
};

export default function WebApplicationDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Web Application Development"
      description="Secure, dynamic, scalable web apps for businesses"
      detailedDescription="Build powerful, scalable web applications that drive your business forward. Our web application development services focus on creating secure, high-performance applications that can handle complex business logic and large user bases. We use modern frameworks and best practices to ensure your web application is maintainable, scalable, and future-ready."
      keyBenefits={[
        "Scalable Architecture",
        "High Performance",
        "Enhanced Security",
        "User-Friendly Interface",
        "Cross-Browser Compatibility",
        "API Integration",
      ]}
      features={[
        "Custom web application development",
        "Database design and optimization",
        "API development and integration",
        "User authentication and authorization",
        "Real-time features and notifications",
        "Payment gateway integration",
        "Third-party service integration",
        "Performance monitoring and optimization",
      ]}
      technologies={[
        "React",
        "Angular",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Django",
        "Laravel",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
        "REST APIs",
      ]}
      icon={<Globe className="h-10 w-10 text-blue-200" />}
    />
  );
}
