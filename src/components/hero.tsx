import Link from "next/link";
import { ArrowUpRight, Check, Search, Heart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient with warm tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Iloilo's
              </span>{" "}
              Traditional Crafts
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with local artisans and discover authentic handwoven
              fabrics, traditional crafts, and the stories behind each
              masterpiece from Iloilo's rich cultural heritage.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for fabrics, crafts, or artisans..."
                  className="pl-10 pr-4 py-3 text-base"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#products"
                className="inline-flex items-center px-8 py-4 text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors text-lg font-medium"
              >
                Explore Marketplace
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#artisans"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                Meet Our Artisans
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Authentic handmade crafts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Direct from artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Supporting local communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
