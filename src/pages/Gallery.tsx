import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const years = ["2024", "2023", "2022", "2021", "2020"];
  
  const photosByYear = {
    "2024": [
      { id: 1, title: "Maharaja Agrasen Jayanti 2024", category: "Cultural", images: 8 },
      { id: 2, title: "Holi Celebration", category: "Festival", images: 12 },
      { id: 3, title: "Annual General Meeting", category: "Meeting", images: 6 },
    ],
    "2023": [
      { id: 4, title: "Teej Festival 2023", category: "Cultural", images: 15 },
      { id: 5, title: "Youth Program", category: "Youth", images: 10 },
      { id: 6, title: "Community Service", category: "Service", images: 8 },
    ],
    "2022": [
      { id: 7, title: "Diwali Celebration", category: "Festival", images: 20 },
      { id: 8, title: "Educational Seminar", category: "Education", images: 7 },
    ],
    "2021": [
      { id: 9, title: "Virtual Gathering", category: "Meeting", images: 5 },
      { id: 10, title: "Charity Drive", category: "Service", images: 12 },
    ],
    "2020": [
      { id: 11, title: "Foundation Day", category: "Anniversary", images: 9 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Photo Gallery
          </h1>
          <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
            Capturing precious moments and cherished memories of our community events and celebrations
          </p>
        </div>

        {/* Year-wise Photo Gallery */}
        <Tabs defaultValue="2024" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {years.map((year) => (
              <TabsTrigger key={year} value={year} className="text-base">
                {year}
              </TabsTrigger>
            ))}
          </TabsList>

          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photosByYear[year as keyof typeof photosByYear]?.map((album) => (
                  <Card key={album.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gold-200">
                    <div className="h-48 bg-gradient-to-br from-saffron-100 to-emerald-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-maroon-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-lg">{album.images}</span>
                        </div>
                        <p className="text-maroon-700 font-medium">Photos</p>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-maroon-800">{album.title}</CardTitle>
                        <Badge variant="secondary" className="bg-saffron-100 text-saffron-800">
                          {album.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-emerald-700 text-sm">
                        View all {album.images} photos from this event
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;