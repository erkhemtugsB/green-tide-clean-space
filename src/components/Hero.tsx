
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-700 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
                  Green Tide
                </h1>
                <p className="text-2xl text-green-700 font-medium">Services</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Eco-Friendly Cleaning & Organizing
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We specialize in creating cleaner, more peaceful spaces using eco-friendly products.
                With over 2 years of experience in Los Angeles, we deliver detail-focused service with care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                onClick={() => window.open('sms:+17473556316', '_self')}
              >
                Message Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                onClick={() => window.open('tel:+17473556316')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Service Area</p>
                  <p className="font-semibold text-gray-800">Los Angeles, CA</p>
                  <p className="font-semibold text-gray-800">Seattle, WA</p>

                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <a href="tel:+17473556316" className="font-semibold text-gray-800 hover:underline">
                    (747) 355-6316
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800">Quick Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2x2 Image Grid */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img
                src={hero1}
                alt="Neatly made bedroom"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src={hero2}
                alt="Clean bathroom essentials"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src={hero3}
                alt="Spotless modern kitchen"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src={hero4}
                alt="Clean and cozy living room"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
