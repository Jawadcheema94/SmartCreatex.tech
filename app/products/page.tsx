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
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Zap,
  Shield,
} from "lucide-react";

export default function ProductsPage() {
  const handleRequestDemo = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const handleGetStarted = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const handleScheduleMeeting = () => {
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
              PakPrint Wishes{" "}
              <span className="gradient-text-white">
                Revolutionizing the Printing Industry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
              Transform your creative ideas into premium-quality print products
              with ease.
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              From design to delivery, PakPrint Wishes makes printing faster,
              smarter, and more secure.
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our range of innovative products designed to meet your needs
            and help your business grow.
          </p>
        </div>
      </section>

      {/* Featured Product - PakPrint Wishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-600 px-4 py-2">
              Flagship Product
            </Badge>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
              PakPrint Wishes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ultimate online printing platform for personalized print
              products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900">
                Transform Your Printing Experience
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                PakPrint Wishes is an innovative online printing platform
                designed for businesses and individuals to design and order
                personalized print products. From business cards and invitations
                to banners, brochures, mugs, and more, our platform provides
                everything you need to create professional-quality printed
                materials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      User-Friendly Interface
                    </h4>
                    <p className="text-gray-600">
                      Intuitive design tools that make creating professional
                      prints easy
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Real-Time Previews
                    </h4>
                    <p className="text-gray-600">
                      See exactly how your designs will look before placing your
                      order
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      High-Quality Printing
                    </h4>
                    <p className="text-gray-600">
                      Premium materials and advanced printing technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fast Delivery
                    </h4>
                    <p className="text-gray-600">
                      Quick turnaround times to meet your deadlines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="ppw1.jpg"
                alt="PakPrint Wishes Platform Interface"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  Premium Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional-grade printing with premium materials and
                  finishes for exceptional results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  Fast Turnaround
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick processing and delivery to meet your tight deadlines and
                  urgent requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  Easy Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share designs with team members and clients for feedback and
                  approval before printing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  Secure Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your designs and personal information are protected with
                  enterprise-grade security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Product Categories */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center space-y-4 mb-12">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900">
                Product Categories
              </h3>
              <p className="text-lg text-gray-600">
                Wide range of customizable print products for every need
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Business Cards",
                "Invitations",
                "Banners",
                "Brochures",
                "Flyers",
                "Posters",
                "Mugs",
                "T-Shirts",
                "Stickers",
                "Calendars",
                "Booklets",
                "Postcards",
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-gray-900">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the power of PakPrint Wishes and transform your
              printing workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleRequestDemo}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleGetStarted}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 bg-transparent"
              >
                Get Started Now
              </Button>
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-blue-600 font-semibold px-8 bg-transparent"
              >
                Schedule Meeting
              </Button>
            </div>
            <div className="mt-8">
              <a
                href="https://www.pakprintwishes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
              >
                Visit PakPrint Wishes Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
