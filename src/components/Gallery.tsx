
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const beforeAfterImages = [
    {
      before: "/lovable-uploads/d535291e-0097-41d5-a0e6-458879379ff2.png",
      after: "/lovable-uploads/d535291e-0097-41d5-a0e6-458879379ff2.png",
      title: "Bathroom Deep Clean"
    },
    {
      before: "/lovable-uploads/0eada8ba-a5d7-4f8d-b318-a30b9eaedd43.png",
      after: "/lovable-uploads/0eada8ba-a5d7-4f8d-b318-a30b9eaedd43.png",
      title: "Toilet Restoration"
    },
    {
      before: "/lovable-uploads/6ae941ce-4473-4a3d-a7ae-2cd383e270ff.png",
      after: "/lovable-uploads/6ae941ce-4473-4a3d-a7ae-2cd383e270ff.png",
      title: "Stove Top Cleaning"
    },
    {
      before: "/lovable-uploads/a4c411d6-4469-41bf-9fed-022abce24f33.png",
      after: "/lovable-uploads/a4c411d6-4469-41bf-9fed-022abce24f33.png",
      title: "Living Room Organization"
    }
  ];

  const teamImages = [
    {
      src: "/lovable-uploads/263e353d-292a-484a-9e2f-d4e4fd75a3c6.png",
      alt: "Professional cleaning team member with duster"
    },
    {
      src: "/lovable-uploads/bdcc6d21-95f5-46bd-8f24-d49fd195a520.png",
      alt: "Eco-friendly cleaning in progress"
    },
    {
      src: "/lovable-uploads/ffa2cb9b-7163-4866-ad4a-b62fe5f5d542.png",
      alt: "Living room deep cleaning service"
    },
    {
      src: "/lovable-uploads/c0cc5064-06cf-44ef-88f3-3d09186a6cf3.png",
      alt: "Professional cleaner with eco supplies"
    },
    {
      src: "/lovable-uploads/4f2f784a-534b-419a-8c91-fac68f400671.png",
      alt: "Clean organized living space"
    },
    {
      src: "/lovable-uploads/e0758129-fc99-4e94-8861-8d8ff564de3d.png",
      alt: "Professional bathroom cleaning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">See Our Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from our professional cleaning services
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Before & After</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={image.before} 
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-center">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team in Action Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team in Action</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-600 text-center text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
