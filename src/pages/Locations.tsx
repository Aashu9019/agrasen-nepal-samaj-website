import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Crown, Heart, Sparkles } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      id: "kathmandu",
      name: "Kathmandu",
      address: "Thamel, Kathmandu 44600",
      established: "2015",
    },
    {
      id: "pokhara", 
      name: "Pokhara",
      address: "Lakeside, Pokhara 33700",
      established: "2018",
    },
    {
      id: "chitwan",
      name: "Chitwan", 
      address: "Bharatpur, Chitwan 44200",
      established: "2020",
    },
    {
      id: "butwal",
      name: "Butwal",
      address: "Traffic Chowk, Butwal 32907", 
      established: "2021",
    },
  ];

  const committeeTypes = [
    {
      id: "committee",
      name: "Committee Members",
      icon: Crown,
      description: "Core leadership and administrative members",
      color: "maroon"
    },
    {
      id: "yuva",
      name: "Yuva Committee", 
      icon: Sparkles,
      description: "Youth committee members aged 18-35",
      color: "saffron"
    },
    {
      id: "mahila",
      name: "Mahila Committee",
      icon: Heart,
      description: "Women's committee for cultural programs",
      color: "emerald"
    },
    {
      id: "kanya",
      name: "Kanya Committee",
      icon: Users,
      description: "Young women's committee aged 16-25", 
      color: "gold"
    },
  ];

  const membersByLocation = {
    kathmandu: {
      committee: [
        { name: "Ram Agrawal", position: "President", phone: "+977-9841234567" },
        { name: "Sita Agrawal", position: "Vice President", phone: "+977-9841234568" },
        { name: "Hari Agrawal", position: "Secretary", phone: "+977-9841234569" },
      ],
      yuva: [
        { name: "Rajesh Agrawal", position: "Youth Leader", phone: "+977-9841234570" },
        { name: "Priya Agrawal", position: "Event Coordinator", phone: "+977-9841234571" },
      ],
      mahila: [
        { name: "Gita Agrawal", position: "Chairwoman", phone: "+977-9841234572" },
        { name: "Maya Agrawal", position: "Cultural Head", phone: "+977-9841234573" },
      ],
      kanya: [
        { name: "Sunita Agrawal", position: "Representative", phone: "+977-9841234574" },
        { name: "Anita Agrawal", position: "Coordinator", phone: "+977-9841234575" },
      ],
    },
    // Similar structure for other locations with different members
    pokhara: {
      committee: [
        { name: "Krishna Agrawal", position: "President", phone: "+977-9851234567" },
        { name: "Radha Agrawal", position: "Secretary", phone: "+977-9851234568" },
      ],
      yuva: [
        { name: "Suresh Agrawal", position: "Youth Leader", phone: "+977-9851234569" },
      ],
      mahila: [
        { name: "Kamala Agrawal", position: "Chairwoman", phone: "+977-9851234570" },
      ],
      kanya: [
        { name: "Ritu Agrawal", position: "Representative", phone: "+977-9851234571" },
      ],
    },
    chitwan: {
      committee: [
        { name: "Mohan Agrawal", position: "President", phone: "+977-9861234567" },
      ],
      yuva: [
        { name: "Bikash Agrawal", position: "Youth Leader", phone: "+977-9861234568" },
      ],
      mahila: [
        { name: "Laxmi Agrawal", position: "Chairwoman", phone: "+977-9861234569" },
      ],
      kanya: [
        { name: "Sapana Agrawal", position: "Representative", phone: "+977-9861234570" },
      ],
    },
    butwal: {
      committee: [
        { name: "Shyam Agrawal", position: "President", phone: "+977-9871234567" },
      ],
      yuva: [
        { name: "Rohit Agrawal", position: "Youth Leader", phone: "+977-9871234568" },
      ],
      mahila: [
        { name: "Sarita Agrawal", position: "Chairwoman", phone: "+977-9871234569" },
      ],
      kanya: [
        { name: "Pooja Agrawal", position: "Representative", phone: "+977-9871234570" },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Our Locations
          </h1>
          <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
            Nepal Agrawal Samaj chapters across different cities with dedicated committee members
          </p>
        </div>

        {/* Location Tabs */}
        <Tabs defaultValue="kathmandu" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {locations.map((location) => (
              <TabsTrigger key={location.id} value={location.id} className="text-base">
                {location.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {locations.map((location) => (
            <TabsContent key={location.id} value={location.id}>
              {/* Location Info */}
              <Card className="mb-6 border-gold-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-maroon-800 flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    {location.name} Chapter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-emerald-700"><strong>Address:</strong> {location.address}</p>
                      <p className="text-emerald-700"><strong>Established:</strong> {location.established}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Committee Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {committeeTypes.map((committee) => {
                  const Icon = committee.icon;
                  const members = membersByLocation[location.id as keyof typeof membersByLocation]?.[committee.id as keyof typeof membersByLocation.kathmandu] || [];
                  
                  return (
                    <Card key={committee.id} className="border-gold-200">
                      <CardHeader>
                        <CardTitle className="text-xl text-maroon-800 flex items-center gap-2">
                          <Icon className={`h-5 w-5 text-${committee.color}-600`} />
                          {committee.name}
                        </CardTitle>
                        <p className="text-emerald-700 text-sm">{committee.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {members.map((member, index) => (
                            <div key={index} className="bg-gradient-to-r from-saffron-50 to-emerald-50 p-3 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold text-maroon-800">{member.name}</h4>
                                  <p className="text-emerald-700 text-sm">{member.position}</p>
                                </div>
                                <p className="text-saffron-700 text-sm">{member.phone}</p>
                              </div>
                            </div>
                          ))}
                          {members.length === 0 && (
                            <p className="text-emerald-600 text-center py-4">
                              Committee members will be updated soon
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Locations;