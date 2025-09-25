import { ServicePageTemplate } from "@/components/service-page-template";
import { Link } from "lucide-react";

export const metadata = {
  title: "Blockchain Development - SmartCreatex.tech",
  description:
    "Professional blockchain development services including smart contracts, crypto applications, and decentralized solutions.",
};

export default function BlockchainDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Blockchain Development"
      description="Smart contracts, crypto apps, decentralized solutions"
      detailedDescription="Embrace the future of technology with our blockchain development services. We create secure, transparent, and decentralized solutions that leverage blockchain technology to solve complex business challenges. From smart contracts to cryptocurrency applications, our blockchain experts help you harness the power of distributed ledger technology for your business needs."
      keyBenefits={[
        "Decentralized Solutions",
        "Enhanced Security",
        "Transparency",
        "Reduced Costs",
        "Global Accessibility",
        "Innovation Leadership",
      ]}
      features={[
        "Smart contract development and deployment",
        "Cryptocurrency and token creation",
        "Decentralized application (DApp) development",
        "Blockchain integration and consulting",
        "NFT marketplace development",
        "DeFi protocol development",
        "Blockchain security audits",
        "Wallet and exchange development",
      ]}
      technologies={[
        "Solidity",
        "Ethereum",
        "Bitcoin",
        "Hyperledger",
        "Polygon",
        "Binance Smart Chain",
        "Web3.js",
        "Truffle",
        "Hardhat",
        "MetaMask",
        "IPFS",
      ]}
      icon={<Link className="h-10 w-10 text-blue-200" />}
    />
  );
}
