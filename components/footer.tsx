"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 glass-footer footer-3d-container">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-light text-gray-900 mb-4 block hover-lift-3d footer-logo-3d">
              SmartCreatex<span className="font-normal text-blue-600">.tech</span>
            </Link>
            <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-md">
              Leading IT company providing comprehensive technology solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600 font-light transition-colors hover-lift-3d"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-gray-600 hover:text-blue-600 font-light transition-colors hover-lift-3d"
              >
                Services
              </Link>
              <Link
                href="/products"
                className="block text-gray-600 hover:text-blue-600 font-light transition-colors hover-lift-3d"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-blue-600 font-light transition-colors hover-lift-3d"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover-lift-3d">
                <Mail className="h-4 w-4 text-blue-600" />
                <a
                  href="mailto:smartcreatex.tech@gmail.com"
                  className="text-gray-600 hover:text-blue-600 font-light transition-colors"
                >
                  smartcreatex.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 hover-lift-3d">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600 font-light">+92 308 1311814</span>
              </div>
              <div className="flex items-center space-x-3 hover-lift-3d">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600 font-light">+92 3064003598</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <p className="text-gray-500 font-light text-sm text-center">© 2024 SmartCreatex.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
