import { ServicePageTemplate } from "@/components/service-page-template"
import { ShoppingCart } from "lucide-react"

export const metadata = {
  title: "E-commerce Solutions - SmartCreatex.tech",
  description:
    "Professional e-commerce development services including online stores, payment gateway integration, and marketplace solutions.",
}

export default function EcommerceSolutionsPage() {
  return (
    <ServicePageTemplate
      title="E-commerce Solutions"
      description="Online stores, payment gateway integration, marketplaces"
      detailedDescription="Launch and grow your online business with our comprehensive e-commerce solutions. We create feature-rich online stores that provide seamless shopping experiences, secure payment processing, and powerful management tools. From small boutique stores to large-scale marketplaces, we have the expertise to build e-commerce platforms that drive sales and customer satisfaction."
      keyBenefits={[
        "Secure Transactions",
        "Mobile-Optimized Design",
        "Inventory Management",
        "Multi-Payment Options",
        "SEO Optimization",
        "Analytics Integration",
      ]}
      features={[
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory and order management",
        "Product catalog and search functionality",
        "Customer account management",
        "Multi-vendor marketplace development",
        "Mobile commerce optimization",
      ]}
      technologies={[
        "Shopify",
        "WooCommerce",
        "Magento",
        "BigCommerce",
        "React",
        "Next.js",
        "Stripe",
        "PayPal",
        "Square",
        "AWS",
        "Node.js",
        "PHP",
      ]}
      icon={ShoppingCart}
    />
  )
}
