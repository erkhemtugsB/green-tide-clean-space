
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Get Your Free Quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready for a cleaner, more peaceful space? Contact us today for a custom quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our team responds quickly and is always happy to assist with any questions,
                service requests, or custom inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
                      <a href="tel:+17473556316" className="font-semibold text-gray-800 hover:underline">
                        (747) 355-6316
                      </a>                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                      <p className="text-gray-600 text-sm sm:text-base break-all">greentidemadi@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 text-sm sm:text-base">12206 Magnolia Blvd, Los Angeles, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Instagram</h4>
                      <p className="text-gray-600 text-sm sm:text-base break-all">@greentide_cleaning</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your cleaning needs *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    placeholder="Describe your space, preferred schedule, and any special requests..."
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Send Message & Get Free Quote
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 2-4 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
