
import { useState, useEffect } from "react";
import { Calendar, Users, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const events = [
    {
      title: "Teej Celebration 2024",
      description: "Traditional Teej festival celebration with cultural programs",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      date: "September 2024"
    },
    {
      title: "Holi Festival",
      description: "Colorful Holi celebration bringing community together",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      date: "March 2024"
    },
    {
      title: "Samuhik Bhoj",
      description: "Community feast strengthening bonds among members",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      date: "January 2024"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron-100 via-emerald-50 to-gold-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-maroon-800 mb-6 font-serif">
                Welcome to
                <span className="block text-saffron-600">Nepal Agrawal Samaj</span>
              </h1>
              <p className="text-xl text-emerald-700 mb-4 font-medium">
                नेपाल अग्रवाल समाज में आपका स्वागत है
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Following the noble ideals of Maharaja Agrasen, we unite the Agrawal community 
                in Nepal to preserve our rich heritage, foster unity, and promote cultural values 
                for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-3 text-lg">
                  <Link to="/membership">
                    Become a Member
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-saffron-600 text-saffron-700 hover:bg-saffron-50 px-8 py-3 text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/lovable-uploads/4c8e1252-8fc4-4179-b13a-d4d7a06f9936.png"
                  alt="Maharaja Agrasen"
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl border-4 border-gold-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-saffron-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold text-sm">Maharaja Agrasen</p>
                  <p className="text-xs">Our Guiding Light</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Our Purpose</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by the principles of unity, equality, and prosperity established by Maharaja Agrasen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-saffron-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-saffron-600" />
                </div>
                <CardTitle className="text-maroon-700">Unity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Bringing together Agrawal families across Nepal to strengthen our community bonds 
                  and create lasting relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-maroon-700">Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Preserving and celebrating our rich cultural traditions, customs, and values 
                  for future generations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gold-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-gold-600" />
                </div>
                <CardTitle className="text-maroon-700">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Supporting community development through educational, cultural, and social initiatives 
                  that benefit all members.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Our Cultural Events</h2>
            <p className="text-lg text-gray-600">
              Celebrating traditions and creating memories together
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                      <p className="text-lg mb-2">{event.description}</p>
                      <p className="text-saffron-200 font-medium">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-maroon-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-maroon-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-maroon-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3">
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
