"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react"

interface ServicePageTemplateProps {
  title: string
  description: string
  detailedDescription: string
  keyBenefits: string[]
  features: string[]
  technologies?: string[]
  icon: React.ComponentType<{ className?: string }>
}

export function ServicePageTemplate({
  title,
  description,
  detailedDescription,
  keyBenefits,
  features,
  technologies,
  icon: IconComponent,
}: ServicePageTemplateProps) {
  const handleContactUs = () => {
    window.location.href = `mailto:smartcreatex.tech@gmail.com?subject=Inquiry about ${title}&body=Hi, I'm interested in learning more about your ${title} services. Please provide more information.`
  }

  const handleRequestQuote = () => {
    window.location.href = `mailto:smartcreatex.tech@gmail.com?subject=Request Quote - ${title}&body=Hi, I would like to request a quote for ${title} services. Please find the project details below:%0D%0A%0D%0AProject Description:%0D%0ABudget Range:%0D%0ATimeline:%0D%0ASpecific Requirements:%0D%0A%0D%0AThank you!`
  }

  const handleScheduleMeeting = () => {
    window.location.href = `mailto:smartcreatex.tech@gmail.com?subject=Schedule Meeting - ${title}&body=Hi, I would like to schedule a meeting to discuss ${title} services for my project.`
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
              <IconComponent className="h-10 w-10 text-blue-200" />
            </div>
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/30 px-4 py-2">Professional Service</Badge>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                onClick={handleRequestQuote}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleContactUs}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 bg-transparent"
              >
                Contact Us
              </Button>
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-blue-600 font-semibold px-8 py-4 bg-transparent"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{detailedDescription}</p>
              <div className="space-y-4">
                <h3 className="font-semibold text-xl text-gray-900">What We Offer:</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={`/abstract-geometric-shapes.png?height=400&width=600&query=${title.toLowerCase().replace(/\s+/g, "-")}-service-illustration`}
                alt={`${title} Service`}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose SmartCreatex.tech for your {title.toLowerCase()} needs?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{benefit}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies (if provided) */}
      {technologies && technologies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">Technologies We Use</h2>
              <p className="text-xl text-gray-600">Cutting-edge tools and frameworks for optimal results</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your {title.toLowerCase()} requirements and get a customized solution.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-400" />
                <a
                  href="mailto:smartcreatex.tech@gmail.com"
                  className="text-lg text-gray-300 hover:text-blue-400 transition-colors"
                >
                  smartcreatex.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-lg text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={handleRequestQuote} size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold">
                Request a Quote
              </Button>
              <Button onClick={handleContactUs} variant="outline" size="lg" className="font-semibold bg-transparent">
                Contact Us
              </Button>
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                size="lg"
                className="font-semibold bg-transparent"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
