import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Star,
  Heart,
  Filter,
  Search,
  MapPin,
  Award,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock data for products
  const featuredProducts = [
    {
      id: 1,
      name: "Traditional Hablon Fabric",
      price: "₱2,500",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&q=80",
      artisan: "Maria Santos",
      cooperative: "Miagao Weavers",
      rating: 4.9,
      category: "Fabric",
    },
    {
      id: 2,
      name: "Handwoven Banig Mat",
      price: "₱1,800",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      artisan: "Rosa Delgado",
      cooperative: "Barotac Nuevo Crafters",
      rating: 4.8,
      category: "Home Decor",
    },
    {
      id: 3,
      name: "Patadyong Dress",
      price: "₱3,200",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
      artisan: "Carmen Flores",
      cooperative: "Iloilo Traditional Wear",
      rating: 5.0,
      category: "Clothing",
    },
    {
      id: 4,
      name: "Bamboo Craft Set",
      price: "₱950",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      artisan: "Juan Mercado",
      cooperative: "Guimbal Bamboo Guild",
      rating: 4.7,
      category: "Crafts",
    },
  ];

  // Mock data for featured artisans
  const featuredArtisans = [
    {
      id: 1,
      name: "Maria Santos",
      specialty: "Traditional Hablon Weaving",
      location: "Miagao, Iloilo",
      experience: "25 years",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      bio: "Master weaver preserving the ancient art of Hablon fabric creation.",
      products: 12,
    },
    {
      id: 2,
      name: "Rosa Delgado",
      specialty: "Banig Mat Weaving",
      location: "Barotac Nuevo, Iloilo",
      experience: "18 years",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rosa",
      bio: "Expert in creating intricate patterns using traditional pandan leaves.",
      products: 8,
    },
    {
      id: 3,
      name: "Carmn Flores",
      specialty: "Patadyong Design",
      location: "Iloilo City",
      experience: "30 years",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carmen",
      bio: "Renowned designer of traditional Filipino formal wear.",
      products: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar />
      <Hero />

      {/* Search & Filter Section */}
      <section id="search" className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                Fabrics
              </Button>
              <Button variant="outline" size="sm">
                Clothing
              </Button>
              <Button variant="outline" size="sm">
                Home Decor
              </Button>
              <Button variant="outline" size="sm">
                Crafts
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Price: Low to High
              </Button>
              <Button variant="outline" size="sm">
                Rating
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover authentic handcrafted items from Iloilo's most talented
              artisans, each piece telling a unique story of tradition and
              craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <Badge
                      className="absolute top-2 left-2"
                      variant="secondary"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-3">
                    By {product.artisan} • {product.cooperative}
                  </CardDescription>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-600">
                    {product.price}
                  </span>
                  <Button size="sm">Quick View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Artisan Spotlight Section */}
      <section id="artisans" className="py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Artisans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the talented craftspeople behind each masterpiece.
              Their stories, skills, and dedication preserve Iloilo's rich
              cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <Card
                key={artisan.id}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={artisan.avatar} alt={artisan.name} />
                      <AvatarFallback>
                        {artisan.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{artisan.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium">
                    {artisan.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{artisan.experience} experience</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{artisan.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {artisan.products} products
                  </span>
                  <Button variant="outline" size="sm">
                    View Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Meet All Artisans
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Iloilo Crafts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to preserving traditional craftsmanship while
              connecting artisans directly with customers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Authentic Crafts",
                description: "100% handmade by skilled local artisans",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Quality Guaranteed",
                description: "Each piece is carefully inspected for quality",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Impact",
                description: "Supporting local cooperatives and families",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Cultural Heritage",
                description: "Preserving traditional Filipino craftsmanship",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-amber-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-amber-100">Local Artisans</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Unique Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-amber-100">Cooperatives Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of craft lovers and support local artisans while
            discovering unique, authentic pieces that tell a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Explore Marketplace
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
