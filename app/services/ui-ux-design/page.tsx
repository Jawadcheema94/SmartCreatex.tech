import { ServicePageTemplate } from "@/components/service-page-template"
import { Palette } from "lucide-react"

export const metadata = {
  title: "UI/UX Design Services - SmartCreatex.tech",
  description:
    "Professional UI/UX design services creating engaging, user-friendly interfaces for web and mobile applications.",
}

export default function UIUXDesignPage() {
  return (
    <ServicePageTemplate
      title="UI/UX Design"
      description="Engaging, user-friendly interfaces for web and mobile"
      detailedDescription="Create exceptional user experiences with our professional UI/UX design services. We combine user research, design thinking, and creative expertise to craft interfaces that are not only visually appealing but also intuitive and user-friendly. Our design process focuses on understanding your users' needs and creating solutions that drive engagement and satisfaction."
      keyBenefits={[
        "User-Centered Design",
        "Improved Usability",
        "Higher Engagement",
        "Brand Consistency",
        "Conversion Optimization",
        "Accessibility Compliance",
      ]}
      features={[
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design for all devices",
        "Usability testing and optimization",
        "Design system creation",
        "Accessibility and compliance",
        "Design handoff and documentation",
      ]}
      technologies={[
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
        "Adobe Creative Suite",
        "Zeplin",
        "Marvel",
        "Axure",
        "Balsamiq",
      ]}
      icon={Palette}
    />
  )
}
