
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Heart, Award } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Eco-Friendly",
      description: "Non-toxic products safe for your family and pets"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Punctual, consistent cleaning on your schedule"
    },
    {
      icon: Heart,
      title: "Care & Attention",
      description: "Every detail matters in creating your peaceful space"
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "2+ years serving the Los Angeles community"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Green Tide Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you create a cleaner, more peaceful space using modern tools and eco-friendly practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Green Tide Services, we believe that a clean space creates a peaceful mind. Our team is dedicated to 
              providing exceptional cleaning services while protecting the environment and your family's health.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in eco-friendly residential and commercial cleaning, using non-toxic products and modern 
              tools to deliver detail-focused service with care. Every space deserves to sparkle safely and sustainably.
            </p>
            
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <p className="text-green-800 font-semibold italic">
                "We're here to help you create a cleaner, more peaceful space. Our team responds quickly 
                and is always happy to assist with any questions or custom inquiries."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
