"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Clock,
  Users,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

export default function ContactPage() {
  const handleScheduleMeeting = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const handleGetInTouch = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="py-32 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="dots-animation-enhanced"></div>
        </div>
        <div className="absolute inset-0 glass-overlay"></div>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll fade-up relative z-10">
          <div className="glass-card-hero p-8 rounded-3xl backdrop-blur-xl border border-white/20">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              Contact SmartCreatex.tech{" "}
              <span className="gradient-text-white">Let's Build Something Great Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
              We're here to turn your ideas into powerful digital solutions.
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're ready to start a project, explore our services, or schedule a consultation we're just a
              click away.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Get in </span>
            <span className="text-blue-600">Touch with SmartCreatex.tech</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Let’s Transform Your Business Together with Innovative Technology
            Solutions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Ready to transform your business with innovative technology
                  solutions? Contact us today.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Email Us
                        </h3>
                        <p className="text-gray-600">
                          Send us an email anytime
                        </p>
                        <a
                          href="mailto:smartcreatex.tech@gmail.com"
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          smartcreatex.tech@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Call Us
                        </h3>
                        <p className="text-gray-600">
                          Available for consultations
                        </p>
                        <div className="space-y-1">
                          <p className="text-blue-600 font-medium">
                            +92 308 1311814
                          </p>
                          <p className="text-blue-600 font-medium">
                            +92 3064003598
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Business Hours
                        </h3>
                        <p className="text-gray-600">
                          We're available when you need us
                        </p>
                        <div className="text-gray-700 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM PKT</p>
                          <p>Saturday: 10:00 AM - 4:00 PM PKT</p>
                          <p>Sunday: By appointment only</p>
                          <p className="text-blue-600 font-medium">
                            24/7 Emergency Support Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                  About Our Company
                </h2>
                <p className="text-lg text-gray-600">
                  Learn more about SmartCreatex.tech and our commitment to
                  excellence.
                </p>
              </div>

              <div className="space-y-6">
                {/* Leadership */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Leadership Team
                        </h3>
                        <p className="text-gray-600">
                          Meet our experienced founders
                        </p>
                        <div className="text-gray-700 space-y-1">
                          <p>
                            <span className="font-medium text-blue-600">
                              M. Mazhar Yousaf
                            </span>{" "}
                            - CEO (Chief Executive Officer)
                          </p>
                          <p>
                            <span className="font-medium text-blue-600">
                              Jawad Ahmad
                            </span>{" "}
                            - Managing Director
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Expertise */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Our Expertise
                        </h3>
                        <p className="text-gray-600">
                          Comprehensive IT solutions
                        </p>
                        <div className="text-gray-700 space-y-1">
                          <p>• Website & Mobile App Development</p>
                          <p>• AI & Machine Learning Solutions</p>
                          <p>• DevOps & Cloud Infrastructure</p>
                          <p>• Digital Marketing & UI/UX Design</p>
                          <p>• Cybersecurity & IT Consulting</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mission */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow glass-card-royal hover-lift-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Our Mission
                        </h3>
                        <p className="text-gray-600">
                          Driving digital transformation
                        </p>
                        <p className="text-gray-700">
                          To empower businesses with innovative technology
                          solutions that enhance productivity, efficiency, and
                          growth through cutting-edge digital transformation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't wait! Contact us today to discuss your requirements and
                get a customized solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleScheduleMeeting}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 font-semibold button-glow-royal hover-lift-3d"
                >
                  Schedule a Meeting
                </Button>
                <Button
                  onClick={handleGetInTouch}
                  variant="outline"
                  size="lg"
                  className="font-semibold bg-transparent glass-button-royal hover-lift-3d"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
