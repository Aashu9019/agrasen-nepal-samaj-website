
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Nepal Agrawal Samaj",
        "Kathmandu, Nepal",
        "Ward No. 32, Bagbazar"
      ],
      color: "text-maroon-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+977-1-XXXXXXX",
        "+977-98XXXXXXXX"
      ],
      color: "text-saffron-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@nepalagrawalsamaj.org",
        "contact@nepalagrawalsamaj.org"
      ],
      color: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 10:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ],
      color: "text-gold-600"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Membership Information",
    "Event Registration",
    "Volunteer Opportunity",
    "Business Partnership",
    "Media Inquiry",
    "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-saffron-200 mb-4">हामीसँग सम्पर्क गर्नुहोस्</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach Nepal Agrawal Samaj
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-saffron-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-maroon-700">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl border-saffron-200">
              <CardHeader className="bg-gradient-to-r from-saffron-100 to-emerald-100">
                <CardTitle className="text-2xl text-maroon-700">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1"
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-3 text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Embedded Map */}
            <Card className="shadow-2xl border-saffron-200">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon-700">Find Us</CardTitle>
                <CardDescription>
                  Visit us at our office in Kathmandu
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80 bg-gradient-to-br from-saffron-100 to-emerald-100 rounded-b-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-maroon-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-maroon-700">Interactive Map</p>
                    <p className="text-gray-600">Google Maps integration</p>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media and Quick Contact */}
            <Card className="shadow-2xl border-saffron-200">
              <CardHeader>
                <CardTitle className="text-2xl text-maroon-700">Connect With Us</CardTitle>
                <CardDescription>
                  Follow us on social media for updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 bg-saffron-100 hover:bg-saffron-200 p-4 rounded-lg transition-colors flex-1"
                  >
                    <Facebook className="h-6 w-6 text-saffron-600" />
                    <div>
                      <p className="font-semibold text-maroon-700">Facebook</p>
                      <p className="text-sm text-gray-600">@nepalagrawalsamaj</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center space-x-3 bg-emerald-100 hover:bg-emerald-200 p-4 rounded-lg transition-colors flex-1"
                  >
                    <Instagram className="h-6 w-6 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-maroon-700">Instagram</p>
                      <p className="text-sm text-gray-600">@nepal_agrawal_samaj</p>
                    </div>
                  </a>
                </div>
                
                <div className="bg-gradient-to-r from-maroon-50 to-saffron-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-maroon-700 mb-4">Quick Contact</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium">Emergency Contact:</span> +977-98XXXXXXXX
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">WhatsApp:</span> +977-98XXXXXXXX
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">President:</span> president@nepalagrawalsamaj.org
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final spacing */}
      <div className="py-12"></div>
    </div>
  );
};

export default Contact;
