import { ServicePageTemplate } from "@/components/service-page-template";
import { TrendingUp } from "lucide-react";

export const metadata = {
  title: "Digital Marketing Services - SmartCreatex.tech",
  description:
    "Comprehensive digital marketing services including SEO, PPC, social media campaigns, and content marketing strategies.",
};

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      title="Digital Marketing"
      description="SEO, PPC, social media campaigns, content marketing"
      detailedDescription="Boost your online presence and drive business growth with our comprehensive digital marketing services. We create data-driven marketing strategies that increase brand visibility, generate qualified leads, and maximize your return on investment. Our team of digital marketing experts stays up-to-date with the latest trends and best practices to ensure your success."
      keyBenefits={[
        "Increased Online Visibility",
        "Higher Conversion Rates",
        "Better ROI",
        "Brand Awareness",
        "Targeted Audience Reach",
        "Measurable Results",
      ]}
      features={[
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing and management",
        "Content marketing and creation",
        "Email marketing campaigns",
        "Conversion rate optimization",
        "Analytics and performance tracking",
        "Online reputation management",
      ]}
      technologies={[
        "Google Analytics",
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "SEMrush",
        "Ahrefs",
        "Mailchimp",
        "HubSpot",
        "Hootsuite",
        "Buffer",
        "Canva",
      ]}
      icon={<TrendingUp className="h-10 w-10 text-blue-200" />}
    />
  );
}
