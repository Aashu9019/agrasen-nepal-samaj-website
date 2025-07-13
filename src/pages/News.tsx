
import { useState } from "react";
import { Calendar, User, Eye, Search, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const newsItems = [
    {
      id: 1,
      title: "Annual General Meeting 2024 Announcement",
      excerpt: "Nepal Agrawal Samaj cordially invites all members to attend the Annual General Meeting scheduled for December 1st, 2024.",
      content: "We are pleased to announce our Annual General Meeting for 2024. The meeting will cover important community matters, financial reports, and future planning. All registered members are encouraged to attend.",
      date: "2024-11-15",
      author: "Executive Committee",
      category: "announcement",
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: "Successful Teej Celebration 2024",
      excerpt: "Our Teej Mahotsav was celebrated with great enthusiasm, bringing together over 150 families in traditional festivities.",
      content: "The Teej festival celebration was a grand success with traditional dance performances, cultural programs, and community feast. We thank all volunteers and participants.",
      date: "2024-09-20",
      author: "Cultural Committee",
      category: "event-report",
      views: 189,
      featured: false
    },
    {
      id: 3,
      title: "New Scholarship Program for Students",
      excerpt: "Nepal Agrawal Samaj launches educational scholarship program to support talented students from our community.",
      content: "We are proud to announce our new scholarship program aimed at supporting deserving students from Agrawal families. Applications are now open for the academic year 2024-25.",
      date: "2024-11-10",
      author: "Education Committee",
      category: "social-initiative",
      views: 312,
      featured: true
    },
    {
      id: 4,
      title: "Diwali Celebration Preparations Underway",
      excerpt: "Preparations are in full swing for our grand Diwali celebration scheduled for November 1st, 2024.",
      content: "The festival committee is working diligently to organize a memorable Diwali celebration. We invite all members to participate in the festivities and volunteer for various activities.",
      date: "2024-10-25",
      author: "Festival Committee",
      category: "announcement",
      views: 156,
      featured: false
    },
    {
      id: 5,
      title: "Community Health Camp Success",
      excerpt: "Free health checkup camp organized by Nepal Agrawal Samaj served over 100 community members.",
      content: "Our recent health camp was a great success, providing free medical checkups, health awareness, and basic treatments to community members of all ages.",
      date: "2024-10-15",
      author: "Health Committee",
      category: "social-initiative",
      views: 203,
      featured: false
    },
    {
      id: 6,
      title: "Youth Cultural Program Highlights",
      excerpt: "Young members showcased exceptional talent in our recent cultural program, preserving traditional arts.",
      content: "The youth cultural program featured traditional dance, music, and theatrical performances by young members of our community, demonstrating their connection to our heritage.",
      date: "2024-08-20",
      author: "Youth Committee",
      category: "event-report",
      views: 178,
      featured: false
    }
  ];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      case 'announcement': return 'bg-saffron-100 text-saffron-800';
      case 'event-report': return 'bg-emerald-100 text-emerald-800';
      case 'social-initiative': return 'bg-maroon-100 text-maroon-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'announcement': return 'Announcement';
      case 'event-report': return 'Event Report';
      case 'social-initiative': return 'Social Initiative';
      default: return category;
    }
  };

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">News & Announcements</h1>
            <p className="text-xl text-saffron-200 mb-4">समाचार र घोषणाहरू</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and community updates 
              from Nepal Agrawal Samaj. Don't miss any important information!
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search news and announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-saffron-300 focus:border-saffron-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-xl border-gold-200 hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-saffron-100 to-gold-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(item.category)}>
                        <Tag className="h-3 w-3 mr-1" />
                        {getCategoryLabel(item.category)}
                      </Badge>
                      <Badge className="bg-gold-500 text-white">Featured</Badge>
                    </div>
                    <CardTitle className="text-2xl text-maroon-800 mb-3 font-serif">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {item.excerpt}
                    </CardDescription>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views} views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-saffron-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-maroon-700 font-serif line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.content}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views} views</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-saffron-300 text-saffron-700 hover:bg-saffron-50"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No news found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-saffron-100 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-maroon-800 mb-4 font-serif">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="flex-1 border-saffron-300 focus:border-saffron-500"
            />
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy and will never share your email address.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
