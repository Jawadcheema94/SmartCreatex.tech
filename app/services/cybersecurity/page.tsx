import { ServicePageTemplate } from "@/components/service-page-template"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Cybersecurity Services - SmartCreatex.tech",
  description:
    "Comprehensive cybersecurity services including vulnerability assessment, penetration testing, and threat mitigation solutions.",
}

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity Services"
      description="Vulnerability assessment, penetration testing, threat mitigation"
      detailedDescription="Protect your business from cyber threats with our comprehensive cybersecurity services. We provide end-to-end security solutions that safeguard your digital assets, ensure compliance with industry standards, and maintain business continuity. Our cybersecurity experts use advanced tools and methodologies to identify vulnerabilities and implement robust security measures."
      keyBenefits={[
        "Enhanced Security Posture",
        "Compliance Assurance",
        "Risk Mitigation",
        "Business Continuity",
        "Data Protection",
        "24/7 Monitoring",
      ]}
      features={[
        "Vulnerability assessment and scanning",
        "Penetration testing and ethical hacking",
        "Security audit and compliance",
        "Incident response and forensics",
        "Security awareness training",
        "Network and endpoint security",
        "Data encryption and protection",
        "Security monitoring and SIEM",
      ]}
      technologies={[
        "Nessus",
        "Metasploit",
        "Wireshark",
        "Nmap",
        "Burp Suite",
        "OWASP ZAP",
        "Splunk",
        "QRadar",
        "CrowdStrike",
        "Palo Alto",
        "Fortinet",
      ]}
      icon={Shield}
    />
  )
}
