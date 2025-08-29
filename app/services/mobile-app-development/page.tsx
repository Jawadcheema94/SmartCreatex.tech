import { ServicePageTemplate } from "@/components/service-page-template"
import { Smartphone } from "lucide-react"

export const metadata = {
  title: "Mobile App Development Services - SmartCreatex.tech",
  description:
    "Professional mobile app development services using Flutter, iOS, Android apps, cross-platform solutions with intuitive UI/UX design.",
}

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Mobile App Development"
      description="Flutter, iOS, Android apps, cross-platform, intuitive UI/UX"
      detailedDescription="Transform your business ideas into powerful mobile applications with our comprehensive mobile app development services. We create native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices. Our team specializes in Flutter development, ensuring your app performs seamlessly on multiple platforms while maintaining native-like performance."
      keyBenefits={[
        "Cross-Platform Development",
        "Native Performance",
        "Intuitive UI/UX Design",
        "App Store Optimization",
        "Ongoing Support",
        "Cost-Effective Solutions",
      ]}
      features={[
        "Native iOS and Android app development",
        "Cross-platform development with Flutter",
        "Custom mobile app design and UI/UX",
        "App Store and Google Play Store deployment",
        "Mobile app testing and quality assurance",
        "App maintenance and updates",
        "Integration with backend services",
        "Push notifications and analytics",
      ]}
      technologies={[
        "Flutter",
        "React Native",
        "Swift",
        "Kotlin",
        "Java",
        "Objective-C",
        "Dart",
        "Firebase",
        "SQLite",
        "REST APIs",
        "GraphQL",
      ]}
      icon={Smartphone}
    />
  )
}
