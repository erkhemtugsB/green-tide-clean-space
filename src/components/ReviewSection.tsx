import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ReviewSection = () => {
  const reviews = [
    {
      name: "Thumbtack",
      logo: "https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg",
      link: "https://www.thumbtack.com/ca/valley-village/house-cleaning/greentide-services/service/545684255742844938",
      color: "text-green-700",
      stars: 5,
      description: "7 reviews"
    },
    {
      name: "Yelp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1200px-Yelp_Logo.svg.png",
      link: "https://www.yelp.com/biz/greentide-services-san-fernando-valley",
      color: "text-red-600",
      stars: 5,
      description: "2 reviews"
    }
    // Removed Google entry
  ];

  useEffect(() => {
    // Dynamically load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="text-center bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img src={review.logo} alt={review.name} className="h-6 mx-auto mb-3" />
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium hover:underline ${review.color}`}
                >
                  GreenTide Services
                </a>
                <div className="flex justify-center mt-2 mb-1">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <img
                      key={i}
                      src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.description}</p>
              </CardContent>
            </Card>
          ))}
          {/* Elfsight Google Reviews Widget */}
          <div className="bg-white border border-gray-100 p-6 flex items-center justify-center">
            {/* Elfsight Google Reviews | Google - GreenTideCleaning.com */}
            <div className="elfsight-app-376b1632-72b2-4d8c-9a55-27b171498df6" data-elfsight-app-lazy></div>
          </div>
        </div>
      </div>
    </section>
  );
};