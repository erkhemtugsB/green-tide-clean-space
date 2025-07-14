import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ReviewSection = () => {
  const reviews = [
    {
      name: "Yelp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1200px-Yelp_Logo.svg.png",
      link: "https://www.yelp.com/biz/greentide-services-san-fernando-valley",
      color: "text-red-600",
      stars: 5,
      description: "2 reviews"
    }
    // Removed Google entry and Thumbtack from array
  ];

  useEffect(() => {
    // Dynamically load Elfsight script
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);

    // Dynamically load Thumbtack widget script
    const thumbtackScript = document.createElement("script");
    thumbtackScript.src = "https://www.thumbtack.com/profile/widgets/scripts/?service_pk=545684255742844938&widget_id=review&type=star";
    thumbtackScript.async = true;
    document.body.appendChild(thumbtackScript);

    return () => {
      document.body.removeChild(elfsightScript);
      document.body.removeChild(thumbtackScript);
    };
  }, []);

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Thumbtack Card with custom widget content */}
          <Card className="text-center bg-white border border-gray-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg" alt="Thumbtack" className="h-6 mx-auto mb-3" />
              <a
                target="_blank"
                href="https://www.thumbtack.com/ca/valley-village/house-cleaning/greentide-services/service/545684255742844938"
                className="font-medium hover:underline text-green-700"
              >
                <div>GreenTide services</div>
              </a>
              <div id="tt-dynamic" className="flex justify-center mt-2 mb-1 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">7 reviews</span>
              </div>
            </CardContent>
          </Card>
          {/* Yelp Card */}
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