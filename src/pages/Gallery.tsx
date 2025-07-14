import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Download, Share2 } from "lucide-react";

const Gallery = () => {
  const years = ["2024", "2023", "2022", "2021", "2020"];
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const photosByYear = {
    "2024": [
      { 
        id: 1, 
        title: "Maharaja Agrasen Jayanti 2024", 
        category: "Cultural", 
        images: 8,
        photos: [
          "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
          "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800"
        ]
      },
      { 
        id: 2, 
        title: "Holi Celebration", 
        category: "Festival", 
        images: 12,
        photos: [
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
          "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
          "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
          "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800",
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
          "https://images.unsplash.com/photo-1519452634681-4d9183532732?w=800",
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800"
        ]
      },
      { 
        id: 3, 
        title: "Annual General Meeting", 
        category: "Meeting", 
        images: 6,
        photos: [
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
          "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
        ]
      },
    ],
    "2023": [
      { 
        id: 4, 
        title: "Teej Festival 2023", 
        category: "Cultural", 
        images: 15,
        photos: Array(15).fill("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800")
      },
      { 
        id: 5, 
        title: "Youth Program", 
        category: "Youth", 
        images: 10,
        photos: Array(10).fill("https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800")
      },
      { 
        id: 6, 
        title: "Community Service", 
        category: "Service", 
        images: 8,
        photos: Array(8).fill("https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800")
      },
    ],
    "2022": [
      { 
        id: 7, 
        title: "Diwali Celebration", 
        category: "Festival", 
        images: 20,
        photos: Array(20).fill("https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800")
      },
      { 
        id: 8, 
        title: "Educational Seminar", 
        category: "Education", 
        images: 7,
        photos: Array(7).fill("https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800")
      },
    ],
    "2021": [
      { 
        id: 9, 
        title: "Virtual Gathering", 
        category: "Meeting", 
        images: 5,
        photos: Array(5).fill("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800")
      },
      { 
        id: 10, 
        title: "Charity Drive", 
        category: "Service", 
        images: 12,
        photos: Array(12).fill("https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800")
      },
    ],
    "2020": [
      { 
        id: 11, 
        title: "Foundation Day", 
        category: "Anniversary", 
        images: 9,
        photos: Array(9).fill("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800")
      },
    ],
  };

  const openGallery = (album: any) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === selectedAlbum.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1
      );
    }
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
                  <Card 
                    key={album.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gold-200 cursor-pointer animate-fade-in"
                    onClick={() => openGallery(album)}
                  >
                    <div className="h-48 bg-gradient-to-br from-saffron-100 to-emerald-100 flex items-center justify-center relative overflow-hidden group">
                      <img 
                        src={album.photos?.[0] || "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400"} 
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                            <span className="font-bold text-lg">{album.images}</span>
                          </div>
                          <p className="font-medium">Click to View</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-maroon-800 hover-scale">{album.title}</CardTitle>
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

          {/* Photo Gallery Modal */}
          {selectedAlbum && (
            <Dialog open={!!selectedAlbum} onOpenChange={() => setSelectedAlbum(null)}>
              <DialogContent className="max-w-5xl max-h-[90vh] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="text-2xl text-maroon-800">
                    {selectedAlbum.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="relative">
                  <img
                    src={selectedAlbum.photos[currentImageIndex]}
                    alt={`${selectedAlbum.title} - Photo ${currentImageIndex + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedAlbum.photos.length}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail Strip */}
                <div className="p-4 max-h-32 overflow-x-auto">
                  <div className="flex gap-2">
                    {selectedAlbum.photos.map((photo: string, index: number) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded cursor-pointer transition-all ${
                          index === currentImageIndex 
                            ? 'ring-2 ring-saffron-500 scale-110' 
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;