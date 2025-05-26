
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Bed, Plus, Leaf, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "All Around the House",
      description: "Complete home cleaning including doors, baseboards, doorknobs, and light fixtures",
      features: [
        "Doors and door frame spots cleaned",
        "Baseboards dusted or wiped",
        "Doorknobs and showers disinfected",
        "Light fixtures & ceiling fans dusted"
      ]
    },
    {
      icon: Bed,
      title: "Living & Sleeping Areas",
      description: "Thorough cleaning of all living spaces with attention to detail",
      features: [
        "Furniture surfaces and shelves",
        "TVs and screens cleaned",
        "Picture frames dusted",
        "Stairs & closets vacuumed",
        "Linens made and organized"
      ]
    },
    {
      icon: Bath,
      title: "Bathrooms",
      description: "Deep cleaning and sanitization of all bathroom areas",
      features: [
        "Counters wiped down",
        "Sink, faucets, drains scrubbed",
        "Bathtubs and showers disinfected",
        "Grout scrubbed",
        "Toilets thoroughly disinfected"
      ]
    },
    {
      icon: Plus,
      title: "Add-On Services",
      description: "Extra services available upon request for a complete clean",
      features: [
        "Inside fridge cleaning",
        "Inside oven deep clean",
        "Inside cabinets organization",
        "Interior windows",
        "Laundry & folding service"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Our Services</h2>
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive eco-friendly cleaning services designed to make your space sparkle safely and sustainably
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-green-50"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Image */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center">
            <img
              src="/lovable-uploads/bathroom2.webp"
              alt="Green Tide Services Detail Sheet"
              className="max-w-xs w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose Green Tide Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Leaf className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Eco-Friendly Products</h4>
                  <p className="text-gray-600">We use non-toxic, environmentally safe cleaning products</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Detail-Focused Service</h4>
                  <p className="text-gray-600">Every corner receives attention with our thorough approach</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Home className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">2+ Years Experience</h4>
                  <p className="text-gray-600">Trusted by Los Angeles residents for consistent quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
