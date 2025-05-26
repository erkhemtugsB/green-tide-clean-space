
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
      src: "/lovable-uploads/d169a990-2517-49b0-8304-63b1e7f39435.png",
      alt: "Professional kitchen cleaning service"
    },
    {
      src: "/lovable-uploads/b4d81ca9-1348-4735-8876-106ead4021cf.png",
      alt: "Living room deep cleaning service"
    },
    {
      src: "/lovable-uploads/90aa6849-0ba1-4ce7-b5ca-6d6790545060.png",
      alt: "Professional bathroom cleaning"
    },
    {
      src: "/lovable-uploads/299481e1-d776-4072-9ae8-b825c8ffa93b.png",
      alt: "Eco-friendly kitchen cleaning with natural products"
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

        {/* Team in Action Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team in Action</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
