
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

  const serviceImages = [
    {
      src: "/lovable-uploads/4f2f784a-534b-419a-8c91-fac68f400671.png",
      alt: "Professional living room cleaning"
    },
    {
      src: "/lovable-uploads/e0758129-fc99-4e94-8861-8d8ff564de3d.png",
      alt: "Bathroom cleaning service"
    },
    {
      src: "/lovable-uploads/c675468a-c353-4a12-b261-9fa5c7bf7888.png",
      alt: "Kitchen cleaning with eco products"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

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

        {/* Service Images Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team in Action</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={serviceImages[currentImageIndex].src}
                alt={serviceImages[currentImageIndex].alt}
                className="w-full h-96 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
