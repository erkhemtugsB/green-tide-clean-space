import { useEffect } from "react";

export const ReviewSection = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const elfsightScript = document.createElement("script");
      elfsightScript.src = "https://elfsightcdn.com/platform.js";
      elfsightScript.async = true;
      document.body.appendChild(elfsightScript);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what clients are saying about Green Tide Services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-4 sm:p-6 lg:p-8">
          <div className="elfsight-app-bc2b6796-760a-4f6d-8c17-585d45a9e379" data-elfsight-app-lazy></div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Reviews are loaded securely via Elfsight
          </p>
        </div>
      </div>
    </section>
  );
};
