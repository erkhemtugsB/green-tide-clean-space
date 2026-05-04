
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about.png";

export const About = () => {
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
            <h3 className="text-3xl font-bold text-gray-800">Who We Are</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi! We're Diana and Marina, Slavic founders of Green Tide Services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We built this company around one simple idea - cleaning should be reliable, detailed, and stress-free.
              Our background shaped a strong work ethic and attention to detail that we bring into every home.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We personally care about every job, and our trained team delivers results you can see the moment you walk
              in.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              If you're looking for a cleaning service you can trust - you're in the right place.
            </p>
          </div>

          <div>
            <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-900 to-teal-900">
              <img
                src={aboutImage}
                alt="Green Tide Services founders and team"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-5 sm:p-8 text-center">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Professional Team. Consistent Results.</h4>
                <p className="text-base sm:text-lg lg:text-xl text-emerald-100 leading-relaxed">
                  Our trained cleaners follow our standards to deliver the same high-quality service every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
