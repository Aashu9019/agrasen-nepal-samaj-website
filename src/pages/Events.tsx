
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Search, Filter, Eye, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [favoriteEvents, setFavoriteEvents] = useState<number[]>([]);
  const { toast } = useToast();

  const events = [
    {
      id: 1,
      title: "Teej Mahotsav 2024",
      description: "Traditional Teej festival celebration with cultural programs, dance, and feast",
      fullDescription: "Join us for a grand celebration of Teej, one of the most important festivals in our culture. This event will feature traditional dance performances, cultural programs, and a community feast. Women will dress in traditional red and green attire, perform traditional songs and dances, and participate in the ritualistic worship. The event will also include storytelling sessions about the significance of Teej and its cultural importance in our community.",
      date: "2024-09-15",
      time: "10:00 AM - 6:00 PM",
      venue: "Community Hall, Kathmandu",
      category: "festival",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      attendees: 150,
      contact: "9841234567",
      organizer: "Cultural Committee",
      requirements: "Traditional attire recommended"
    },
    {
      id: 2,
      title: "Holi Celebration",
      description: "Colorful Holi festival bringing families together with colors, music, and joy",
      date: "2024-03-25",
      time: "2:00 PM - 8:00 PM",
      venue: "Open Ground, Pokhara",
      category: "festival",
      status: "past",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      attendees: 200
    },
    {
      id: 3,
      title: "Community AGM 2024",
      description: "Annual General Meeting to discuss community matters and future plans",
      date: "2024-12-01",
      time: "2:00 PM - 5:00 PM",
      venue: "Hotel Himalaya, Kathmandu",
      category: "meeting",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      attendees: 80
    },
    {
      id: 4,
      title: "Diwali Celebration",
      description: "Festival of lights celebration with traditional ceremonies and community feast",
      date: "2024-11-01",
      time: "6:00 PM - 10:00 PM",
      venue: "Community Center, Lalitpur",
      category: "festival",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      attendees: 250
    },
    {
      id: 5,
      title: "Youth Cultural Program",
      description: "Special program featuring performances by young members of our community",
      date: "2024-08-15",
      time: "4:00 PM - 8:00 PM",
      venue: "Nepal Academy Hall",
      category: "cultural",
      status: "past",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      attendees: 120
    },
    {
      id: 6,
      title: "Samuhik Bhoj",
      description: "Community feast strengthening bonds among members with traditional cuisine",
      date: "2024-10-15",
      time: "12:00 PM - 4:00 PM",
      venue: "Banquet Hall, Kathmandu",
      category: "social",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      attendees: 180
    }
  ];

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const previousEvents = events.filter(event => event.status === "past");

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === "all" || event.category === filter || event.status === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'festival': return 'bg-saffron-100 text-saffron-800';
      case 'meeting': return 'bg-emerald-100 text-emerald-800';
      case 'cultural': return 'bg-maroon-100 text-maroon-800';
      case 'social': return 'bg-gold-100 text-gold-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'upcoming' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-600';
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  const toggleFavorite = (eventId: number) => {
    setFavoriteEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
    toast({
      title: favoriteEvents.includes(eventId) ? "Removed from favorites" : "Added to favorites",
      description: "Event preference updated successfully."
    });
  };

  const handleRegister = (event: any) => {
    toast({
      title: "Registration Successful!",
      description: `You have been registered for ${event.title}. Check your email for confirmation.`
    });
  };

  const handleShare = (event: any) => {
    navigator.clipboard.writeText(`Check out this event: ${event.title} on ${formatDate(event.date)}`);
    toast({
      title: "Event shared!",
      description: "Event details copied to clipboard."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Community Events</h1>
            <p className="text-xl text-saffron-200 mb-4">सामुदायिक कार्यक्रमहरू</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating our rich cultural heritage through festivals, meetings, 
              and community gatherings that bring us together as one family.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Tabs for Upcoming and Previous Events */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-base">
                Upcoming Events ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="previous" className="text-base">
                Previous Events ({previousEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter(event => 
                    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((event) => (
                  <Card 
                    key={event.id} 
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-saffron-200 cursor-pointer transform hover:-translate-y-2 animate-fade-in"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          Upcoming
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-maroon-700 text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-saffron-600" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-maroon-600" />
                        <span>{event.venue}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-gold-600" />
                        <span>{event.attendees} attendees</span>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-saffron-600 hover:bg-saffron-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRegister(event);
                            }}
                          >
                            Register Now
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(event.id);
                            }}
                            className={favoriteEvents.includes(event.id) ? "text-red-500" : ""}
                          >
                            <Heart className={`h-4 w-4 ${favoriteEvents.includes(event.id) ? "fill-current" : ""}`} />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(event);
                            }}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="w-full text-saffron-600 hover:bg-saffron-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEventClick(event);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {upcomingEvents.filter(event => 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No upcoming events found.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="previous">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {previousEvents
                  .filter(event => 
                    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((event) => (
                  <Card 
                    key={event.id} 
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-saffron-200 cursor-pointer transform hover:-translate-y-2 animate-fade-in"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-600">
                          Completed
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-maroon-700 text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-saffron-600" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-maroon-600" />
                        <span>{event.venue}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-gold-600" />
                        <span>{event.attendees} attendees</span>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Navigate to gallery for this event
                            }}
                          >
                            View Gallery
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(event.id);
                            }}
                            className={favoriteEvents.includes(event.id) ? "text-red-500" : ""}
                          >
                            <Heart className={`h-4 w-4 ${favoriteEvents.includes(event.id) ? "fill-current" : ""}`} />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(event);
                            }}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="w-full text-gray-600 hover:bg-gray-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEventClick(event);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {previousEvents.filter(event => 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No previous events found.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Event Gallery</h2>
            <p className="text-lg text-gray-600">
              Memories from our recent celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.slice(0, 8).map((event, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    {event.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl text-maroon-800">{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700">Event Details</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-saffron-600" />
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-maroon-600" />
                      <span>{selectedEvent.venue}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold-600" />
                      <span>{selectedEvent.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge className={getCategoryColor(selectedEvent.category)}>
                      {selectedEvent.category}
                    </Badge>
                    <Badge className={getStatusColor(selectedEvent.status)}>
                      {selectedEvent.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700">Additional Information</h3>
                  
                  <div className="space-y-2">
                    <p><span className="font-medium">Organizer:</span> {selectedEvent.organizer || "Cultural Committee"}</p>
                    <p><span className="font-medium">Contact:</span> {selectedEvent.contact || "9841234567"}</p>
                    <p><span className="font-medium">Requirements:</span> {selectedEvent.requirements || "None"}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedEvent.status === 'upcoming' ? (
                      <Button 
                        className="w-full bg-saffron-600 hover:bg-saffron-700 text-white"
                        onClick={() => handleRegister(selectedEvent)}
                      >
                        Register for Event
                      </Button>
                    ) : (
                      <Button 
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white"
                        onClick={() => {/* Navigate to gallery */}}
                      >
                        View Event Gallery
                      </Button>
                    )}
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => toggleFavorite(selectedEvent.id)}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${favoriteEvents.includes(selectedEvent.id) ? "fill-current text-red-500" : ""}`} />
                        {favoriteEvents.includes(selectedEvent.id) ? "Favorited" : "Add to Favorites"}
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleShare(selectedEvent)}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Event
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-maroon-700 mb-3">About This Event</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.fullDescription || selectedEvent.description}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Events;
