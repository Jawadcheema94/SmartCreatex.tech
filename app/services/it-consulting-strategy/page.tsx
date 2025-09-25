import { ServicePageTemplate } from "@/components/service-page-template";
import { Users } from "lucide-react";

export const metadata = {
  title: "IT Consulting & Strategy - SmartCreatex.tech",
  description:
    "Professional IT consulting services including digital transformation, IT planning, technology audits, and strategic guidance.",
};

export default function ITConsultingStrategyPage() {
  return (
    <ServicePageTemplate
      title="IT Consulting & Strategy"
      description="Digital transformation, IT planning, audits"
      detailedDescription="Navigate the complex technology landscape with our expert IT consulting and strategy services. We help organizations make informed technology decisions, optimize their IT infrastructure, and develop comprehensive digital transformation strategies. Our consultants bring deep industry knowledge and technical expertise to guide your business toward sustainable growth and innovation."
      keyBenefits={[
        "Strategic Planning",
        "Cost Optimization",
        "Risk Assessment",
        "Technology Roadmap",
        "Digital Transformation",
        "Expert Guidance",
      ]}
      features={[
        "IT strategy development and planning",
        "Digital transformation consulting",
        "Technology audit and assessment",
        "Infrastructure optimization",
        "Vendor selection and management",
        "Project management and oversight",
        "Change management and training",
        "Compliance and governance",
      ]}
      technologies={[
        "ITIL",
        "COBIT",
        "Agile",
        "Scrum",
        "Microsoft Project",
        "Jira",
        "Confluence",
        "ServiceNow",
        "Tableau",
        "Power BI",
        "AWS",
        "Azure",
      ]}
      icon={<Users className="h-10 w-10 text-blue-200" />}
    />
  );
}
