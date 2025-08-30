import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Code,
  Smartphone,
  Shield,
} from "lucide-react";

export default function HomePage() {
  const handleGetInTouch = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
      );
    }
  };

  const handleScheduleMeeting = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
      );
    }
  };

  const handleContactUsToday = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
      );
    }
  };

  const services = [
    {
      title: "Website Development",
      description: "Custom websites and web applications",
      icon: Globe,
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android applications",
      icon: Smartphone,
    },
    {
      title: "DevOps & Cloud Solutions",
      description: "Scalable cloud infrastructure",
      icon: Sparkles,
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation solutions",
      icon: Code,
    },
    {
      title: "Digital Marketing",
      description: "Growth-focused marketing strategies",
      icon: Zap,
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 hero-section-3d overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-3d-sphere"></div>
          <div className="hero-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="particle-dot"></div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="particle-dot-white"></div>
            ))}
          </div>
          <div className="hero-gradient-bg"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="animate-on-scroll fade-up">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight hero-title-3d">
              Transform Your Business with{" "}
              <span className="gradient-text-royal">Innovative</span> IT
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-12 max-w-4xl mx-auto leading-relaxed">
              We are the technology partner that takes your ideas from
              conception to reality. Empowering businesses with cutting-edge
              solutions that drive growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleScheduleMeeting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-light px-10 py-4 h-auto text-lg rounded-lg button-glow-royal hover-lift-3d"
              >
                Schedule a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleGetInTouch}
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/20 font-light px-10 py-4 h-auto text-lg bg-transparent glass-button-royal hover-lift-3d rounded-lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card-royal animate-on-scroll fade-up glass-card-royal hover-lift-3d"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon-royal">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-on-scroll fade-up">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-light px-8 py-3 h-auto bg-transparent glass-button-royal hover-lift-3d pulse-glow-royal"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-right">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                PakPrint Wishes
              </h2>
              <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                An innovative online printing platform for personalized print
                products. Design and order cards, invitations, banners,
                brochures, mugs, and more with our user-friendly interface and
                real-time previews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://www.pakprintwishes.com", "_blank");
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-light px-6 py-3 h-auto button-glow-royal hover-lift-3d"
                >
                  Visit PakPrint Wishes
                </Button>
                <Button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://www.pakprintwishes.com", "_blank");
                    }
                  }}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-light px-6 py-3 h-auto bg-transparent glass-button-royal hover-lift-3d"
                >
                  Explore Platform
                </Button>
              </div>
            </div>
            <div className="relative animate-on-scroll slide-left">
              <div className="image-container-3d">
                <img
                  src="ppw1.jpg"
                  alt="PakPrint Wishes Platform"
                  className="w-full h-auto rounded-lg shadow-2xl hover-lift-3d"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About SmartCreatex.tech
          </h2>
          <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
            We are a leading IT company dedicated to providing comprehensive
            technology solutions that drive business growth and digital
            transformation. Our expertise spans across modern technologies and
            innovative approaches to solve complex business challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="glass-card-royal hover-lift-3d">
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                To empower businesses with innovative technology solutions that
                enhance productivity, efficiency, and growth through
                cutting-edge digital transformation.
              </p>
            </div>
            <div className="glass-card-royal hover-lift-3d">
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                To be the global leader in IT solutions, driving digital
                innovation and creating lasting value for our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Project */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Send us an email
            and we'll get back to you with a detailed proposal and timeline.
          </p>
          <div className="glass-card-royal p-8">
            <p className="text-lg text-gray-700 font-light">
              📧 Drop us a line at{" "}
              <a
                href="mailto:smartcreatex.tech@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                smartcreatex.tech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 animate-on-scroll fade-up">
            Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center animate-on-scroll slide-up founder-card-enhanced hover-lift-3d">
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                M. Mazhar Yousaf
              </h3>
              <div className="founder-title-line"></div>
              <p className="text-blue-600 font-light text-xl mt-3">
                CEO (Chief Executive Officer)
              </p>
            </div>
            <div
              className="text-center animate-on-scroll slide-up founder-card-enhanced hover-lift-3d"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                Jawad Ahmad
              </h3>
              <div className="founder-title-line"></div>
              <p className="text-blue-600 font-light text-xl mt-3">
                Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 animate-on-scroll fade-up">
            Co-Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center animate-on-scroll slide-up founder-card-enhanced hover-lift-3d">
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                Hussain Ali
              </h3>
              <div className="founder-title-line"></div>
              <p className="text-blue-600 font-light text-xl mt-3">
                (CTO) Chief Technology Officer
              </p>
            </div>
            <div
              className="text-center animate-on-scroll slide-up founder-card-enhanced hover-lift-3d"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                M. Shahid Farooq
              </h3>
              <div className="founder-title-line"></div>
              <p className="text-blue-600 font-light text-xl mt-3">
                (CMO) Chief Marketing Officer
              </p>
            </div>
            <div
              className="text-center animate-on-scroll slide-up founder-card-enhanced hover-lift-3d"
              style={{ animationDelay: "400ms" }}
            >
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                Hussain Anwar
              </h3>
              <div className="founder-title-line"></div>
              <p className="text-blue-600 font-light text-xl mt-3">
                (COO) Chief Operation Officer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
