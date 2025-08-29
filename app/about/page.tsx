"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const handleScheduleMeeting = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const handleContactUs = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <section className="py-32 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="dots-animation-enhanced"></div>
        </div>
        <div className="absolute inset-0 glass-overlay"></div>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll fade-up relative z-10">
          <div className="glass-card-hero p-8 rounded-3xl backdrop-blur-xl border border-white/20">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              SmartCreatex.tech <span className="gradient-text-white">Turning Ideas into Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
              We are a global IT solutions company dedicated to helping businesses innovate, grow, and succeed.
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              With expertise across web, mobile, AI, and cloud technologies, we deliver solutions that shape the future.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-blue-600">Story & Vision</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Bridging Technology and Business Success with Innovation and
            Expertise
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between innovative
                technology and business success, SmartCreatex.tech has emerged
                as a leading IT solutions provider. We specialize in delivering
                cutting-edge technology solutions that drive digital
                transformation and create lasting value for our clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a simple belief: that every business
                deserves access to world-class technology solutions that can
                propel them toward success. Today, we serve clients across
                various industries, helping them navigate the complex digital
                landscape and achieve their business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleContactUs}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Learn More About Us
                </Button>
                <Button onClick={handleScheduleMeeting} variant="outline">
                  Schedule a Meeting
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/tech-team-collaboration.png"
                alt="SmartCreatex.tech Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that enhance productivity, efficiency, and growth. We strive
                  to be the trusted partner that transforms ideas into reality
                  through cutting-edge technology and exceptional service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To be the global leader in IT solutions, driving digital
                  transformation and creating lasting value for our clients. We
                  envision a future where technology seamlessly integrates with
                  business processes to unlock unlimited potential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Innovation, integrity, excellence, and client success are at
                  the core of everything we do. We believe in building long-term
                  partnerships based on trust, transparency, and mutual growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
              Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who founded SmartCreatex.tech and
              continue to drive our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  M. Mazhar Yousaf
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-600 mx-auto">
                  CEO (Chief Executive Officer)
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Mazhar brings extensive experience in technology leadership
                  and business strategy. His vision for innovative IT solutions
                  and commitment to client success has been instrumental in
                  establishing SmartCreatex.tech as a trusted technology
                  partner.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Jawad Ahmad
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-600 mx-auto">
                  Managing Director
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Jawad's expertise in operations management and strategic
                  planning drives the company's growth and operational
                  excellence. His focus on building strong client relationships
                  and delivering exceptional results has been key to our
                  success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
              Why Clients Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and proven track record make us the
              preferred choice for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">
                Proven Expertise
              </h3>
              <p className="text-gray-600">
                Years of experience delivering successful projects across
                various industries and technologies.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Skilled professionals with deep expertise in cutting-edge
                technologies and best practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">
                Results-Driven
              </h3>
              <p className="text-gray-600">
                Focus on delivering measurable results that drive business
                growth and success.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Serving clients worldwide with 24/7 support and comprehensive
                service offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional excellence across all areas of technology and
              business transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Full-Stack Development",
              "Cloud Architecture",
              "AI & Machine Learning",
              "Cybersecurity",
              "DevOps & Automation",
              "Digital Marketing",
              "UI/UX Design",
              "Mobile Development",
              "Blockchain Technology",
              "IT Consulting",
              "Project Management",
              "Quality Assurance",
            ].map((expertise, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how SmartCreatex.tech can help transform your
              business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleContactUs}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 font-semibold"
              >
                Contact Us Today
              </Button>
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                size="lg"
                className="font-semibold bg-transparent"
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
