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
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      link: "https://www.google.com/search?sca_esv=188198e14d20be9a&sxsrf=AE3TifM3ju574ZOTyWa2TEM27nTslWzRyw:1752376471325&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7tGRcl3PMpHniPbd41QJDOGXqr41AP3ilZp2dnXwI8JCiBRQFJkbKqRmHk9Cqkwh7uqlgceUhLyAnahq_jniHy_oQQ5sN6LO_hC83Y41BhWEwEEjw%3D%3D&q=Green+tide+services+Reviews&sa=X&ved=2ahUKEwiM-9eI77iOAxWol4kEHW8dBCoQ0bkNegQIIBAD&biw=1536&bih=730&dpr=1.25",
      color: "text-blue-600",
      stars: 5,
      description: "10 reviews"
    }
  ];

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
        </div>
      </div>
    </section>
  );
};