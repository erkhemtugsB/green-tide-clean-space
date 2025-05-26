
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const beforeAfterImages = [
    {
      before: "/lovable-uploads/ccdbf1ff-26a4-4f36-891b-249bb20e6261.png",
      after: "/lovable-uploads/ccdbf1ff-26a4-4f36-891b-249bb20e6261.png",
      title: "Luxury Bathroom Deep Clean"
    },
    {
      before: "/lovable-uploads/64ae63db-ff0b-4dff-af3a-69ceecf5fed2.png",
      after: "/lovable-uploads/64ae63db-ff0b-4dff-af3a-69ceecf5fed2.png",
      title: "Master Bedroom Organization"
    },
    {
      before: "/lovable-uploads/ece1282d-da54-4da1-9f9d-cbe8ce8a4a9e.png",
      after: "/lovable-uploads/ece1282d-da54-4da1-9f9d-cbe8ce8a4a9e.png",
      title: "Living Room Deep Clean"
    },
    {
      before: "/lovable-uploads/1b235911-75a9-4741-be7f-4e28d44ae586.png",
      after: "/lovable-uploads/1b235911-75a9-4741-be7f-4e28d44ae586.png",
      title: "Refrigerator Interior Cleaning"
    }
  ];

  const additionalImages = [
    {
      src: "/lovable-uploads/e664cfa9-2d92-40ea-a964-69f0e3979818.png",
      alt: "Beautifully organized bedroom with heart decorations"
    },
    {
      src: "/lovable-uploads/1c6a5aba-0fa9-4d19-a1b3-8acdea358c6e.png",
      alt: "Clean and organized bedroom with yellow accent wall"
    },
    {
      src: "/lovable-uploads/42e94c92-7b71-4200-be21-acccff38db8a.png",
      alt: "Spotless kitchen sink and faucet cleaning"
    },
    {
      src: "/lovable-uploads/7f6e63dd-b370-4115-93fa-fe0914ca2ed3.png",
      alt: "Deep cleaned oven interior and stovetop"
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

        {/* Additional Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Professional Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalImages.map((image, index) => (
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
