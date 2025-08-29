import { ServicePageTemplate } from "@/components/service-page-template"
import { Code } from "lucide-react"

export const metadata = {
  title: "Website Development Services - SmartCreatex.tech",
  description:
    "Professional website development services including custom websites, CMS, e-commerce, SEO-friendly, and responsive design solutions.",
}

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Website Development"
      description="Custom websites, CMS, e-commerce, SEO-friendly, responsive design"
      detailedDescription="Our website development services combine cutting-edge technology with creative design to deliver exceptional web experiences. We specialize in creating custom websites that are not only visually stunning but also highly functional, user-friendly, and optimized for search engines. From simple business websites to complex e-commerce platforms, we have the expertise to bring your vision to life."
      keyBenefits={[
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Custom Functionality",
        "Content Management",
        "E-commerce Integration",
      ]}
      features={[
        "Custom website design and development",
        "Content Management System (CMS) integration",
        "E-commerce platform development",
        "Responsive and mobile-friendly design",
        "Search Engine Optimization (SEO)",
        "Website maintenance and support",
        "Performance optimization",
        "Security implementation",
      ]}
      technologies={[
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "WordPress",
        "Shopify",
        "WooCommerce",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Node.js",
      ]}
      icon={Code}
    />
  )
}
