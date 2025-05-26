
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

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
                Eco-Friendly Cleaning & Organization
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
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">Los Angeles, CA</p>
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
                src="/lovable-uploads/263e353d-292a-484a-9e2f-d4e4fd75a3c6.png"
                alt="Professional cleaning team member"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/lovable-uploads/bdcc6d21-95f5-46bd-8f24-d49fd195a520.png"
                alt="Professional cleaning in action"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/lovable-uploads/ffa2cb9b-7163-4866-ad4a-b62fe5f5d542.png"
                alt="Living room cleaning service"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/lovable-uploads/c0cc5064-06cf-44ef-88f3-3d09186a6cf3.png"
                alt="Eco-friendly cleaning supplies"
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
