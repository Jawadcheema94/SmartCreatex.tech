"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Shield,
  Code,
  ShoppingCart,
  Users,
  Blocks,
  Lock,
} from "lucide-react";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactAction = (subject: string, body: string) => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const services = [
    {
      title: "Website Development",
      description:
        "Custom websites and web applications built with modern technologies",
      icon: Globe,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
        "Modern Frameworks",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Deployment",
      ],
    },
    {
      title: "DevOps & Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps automation",
      icon: Cloud,
      features: [
        "AWS/Azure/GCP",
        "CI/CD Pipelines",
        "Container Orchestration",
        "Infrastructure as Code",
      ],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Intelligent automation and AI-powered solutions",
      icon: Brain,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      title: "Web Application Development",
      description: "Full-stack web applications with modern architectures",
      icon: Code,
      features: [
        "Full-stack Development",
        "API Development",
        "Database Design",
        "Real-time Features",
      ],
    },
    {
      title: "Digital Marketing",
      description: "Growth-focused digital marketing strategies and campaigns",
      icon: TrendingUp,
      features: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting",
      ],
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications",
      icon: Users,
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions and risk assessment",
      icon: Shield,
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Incident Response",
      ],
    },
    {
      title: "Software & SaaS Development",
      description: "Custom software solutions and SaaS platforms",
      icon: Blocks,
      features: [
        "Custom Software",
        "SaaS Platforms",
        "API Integration",
        "Scalable Architecture",
      ],
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms and online stores",
      icon: ShoppingCart,
      features: [
        "Online Stores",
        "Payment Integration",
        "Inventory Management",
        "Multi-vendor Support",
      ],
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Strategic IT consulting and digital transformation guidance",
      icon: Users,
      features: [
        "Digital Strategy",
        "Technology Assessment",
        "Process Optimization",
        "Change Management",
      ],
    },
    {
      title: "Blockchain Development",
      description: "Blockchain solutions and decentralized applications",
      icon: Lock,
      features: [
        "Smart Contracts",
        "DApp Development",
        "Cryptocurrency",
        "NFT Platforms",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="dots-animation"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll fade-up relative z-10">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Our <span className="gradient-text-royal">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your
            business and drive digital innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card-royal animate-on-scroll fade-up glass-card-royal hover-lift-3d"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon-royal mb-6">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-600 font-light flex items-center"
                        >
                          <ArrowRight className="h-3 w-3 mr-2 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() =>
                        handleContactAction(
                          `${service.title} - Schedule Meeting`,
                          `Hi, I would like to schedule a meeting to discuss ${service.title} for my project.`
                        )
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white font-light px-6 py-2 h-auto text-sm button-glow-royal hover-lift-3d"
                    >
                      Schedule a Meeting
                    </Button>
                    <Button
                      onClick={() =>
                        handleContactAction(
                          `${service.title} - Get in Touch`,
                          `Hi, I would like to get in touch regarding ${service.title} services.`
                        )
                      }
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 font-light px-6 py-2 h-auto text-sm bg-transparent glass-button-royal hover-lift-3d"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
