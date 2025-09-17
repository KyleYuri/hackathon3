import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, ShoppingBag, Heart } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold text-amber-600">
          Iloilo Crafts
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#products"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#artisans"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Artisans
          </Link>
          <Link
            href="#stories"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Stories
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            About
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/wishlist"
                className="p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/cart"
                className="p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
