
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/bc83d6f5-04c4-4699-bb93-6a392c58ffcf.png"
                alt="Green Tide Services Logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold">Green Tide Services</h3>
                <p className="text-gray-300">Eco-Friendly Cleaning</p>
              </div>
            </div>
            <p className="text-gray-300">
              Creating cleaner, more peaceful spaces safely and sustainably throughout Los Angeles.
            </p>
            <a
              href="https://www.instagram.com/greentide_cleaning/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Instagram className="w-5 h-5 text-green-400" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+17473556316" className="hover:underline">
                  (747) 355-6316
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>greentidemadi@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>12206 Magnolia Blvd, Los Angeles, CA</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-green-400" />
                <span>@greentide_cleaning</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Residential Cleaning</li>
              <li>• Commercial Cleaning</li>
              <li>• Deep Cleaning</li>
              <li>• Move-in/Move-out</li>
              <li>• Recurring Cleaning</li>
              <li>• Organizing Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">

          <p>&copy; 2025 Green Tide Services. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};
