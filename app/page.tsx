import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCogs, faDollarSign, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/neon-lights-background-gradient-blue-violet_762785-145934.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-bold text-white mb-4">AI Content Generator</h1>
          <p className="text-xl text-white mb-8">Create high-quality content effortlessly with AI</p>
          <Link href='/dashboard'>
            <Button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg">Get Started</Button>
          </Link>
        </div>
      </div>

      <div className="py-20 px-5 md:px-20 ">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faClipboard} className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Templates</h3>
            <p>Create content with a variety of customizable templates</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faCogs} className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Customizable</h3>
            <p>Tailor content to suit your specific needs</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faDollarSign} className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Free to Use</h3>
            <p>Get started for free and upgrade as you grow</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faHeadset} className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mt-4 mb-2">24/7 Support</h3>
            <p>Our team is here to help you anytime</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe To Shivam Tiwari Tutorial</h2>
        <Link href="/">
          <Button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg">Subscribe</Button>
        </Link>
      </div>
    </div>
  );
}
