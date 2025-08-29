"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScheduleMeeting = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdUIDrbJl6QEd-8cddPO3P2wa_717ivmuUWN38KAcyeZ9raug/viewform?usp=header"
    );
  };

  const handleNavClick = (href: string) => {
    if (pathname === href) {
      // If already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the page
      router.push(href);
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick("/")}
            className="smartcreatex-logo cursor-pointer"
          >
            <span className="logo-smart-create">SmartCreate</span>
            <span className="logo-x">X</span>
            <span className="logo-tech">.tech</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("/")}
              className="text-gray-600 hover:text-gray-900 font-light transition-colors nav-link-robotic"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="text-gray-600 hover:text-gray-900 font-light transition-colors nav-link-robotic"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/products")}
              className="text-gray-600 hover:text-gray-900 font-light transition-colors nav-link-robotic"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-gray-600 hover:text-gray-900 font-light transition-colors nav-link-robotic"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-gray-600 hover:text-gray-900 font-light transition-colors nav-link-robotic"
            >
              Contact
            </button>
            <Button
              onClick={handleScheduleMeeting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-light px-6 py-2 h-auto button-glow-royal"
            >
              Schedule Meeting
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("/")}
                className="text-gray-600 hover:text-gray-900 font-light text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-gray-600 hover:text-gray-900 font-light text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("/products")}
                className="text-gray-600 hover:text-gray-900 font-light text-left"
              >
                Products
              </button>
              <button
                onClick={() => handleNavClick("/about")}
                className="text-gray-600 hover:text-gray-900 font-light text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("/contact")}
                className="text-gray-600 hover:text-gray-900 font-light text-left"
              >
                Contact
              </button>
              <Button
                onClick={handleScheduleMeeting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-light w-full button-glow-royal"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
