import { ServicePageTemplate } from "@/components/service-page-template";
import { Brain } from "lucide-react";

export const metadata = {
  title: "AI & Machine Learning Services - SmartCreatex.tech",
  description:
    "Advanced AI and machine learning solutions including predictive analytics, AI automation, chatbots, and intelligent business solutions.",
};

export default function AIMachineLearningPage() {
  return (
    <ServicePageTemplate
      title="Artificial Intelligence & Machine Learning"
      description="Predictive analytics, AI automation, chatbots"
      detailedDescription="Harness the power of artificial intelligence and machine learning to transform your business operations and decision-making processes. Our AI/ML services help organizations automate complex tasks, gain valuable insights from data, and create intelligent solutions that drive innovation and competitive advantage."
      keyBenefits={[
        "Intelligent Automation",
        "Data-Driven Insights",
        "Predictive Analytics",
        "Enhanced Efficiency",
        "Competitive Advantage",
        "Scalable Solutions",
      ]}
      features={[
        "Custom AI model development and training",
        "Machine learning algorithm implementation",
        "Natural Language Processing (NLP) solutions",
        "Computer vision and image recognition",
        "Chatbot and virtual assistant development",
        "Predictive analytics and forecasting",
        "AI-powered automation systems",
        "Data preprocessing and feature engineering",
      ]}
      technologies={[
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI",
        "Hugging Face",
        "NLTK",
        "OpenCV",
        "Pandas",
        "NumPy",
        "Jupyter",
        "MLflow",
      ]}
      icon={<Brain className="h-10 w-10 text-blue-200" />}
    />
  );
}
