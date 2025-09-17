import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-amber-400 mb-4">
              Iloilo Crafts
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Connecting the world to Iloilo's rich cultural heritage through
              authentic handcrafted products and the stories of our talented
              artisans.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Iloilo City, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+63 33 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@iloilocrafts.com</span>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#products"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="#fabrics"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Traditional Fabrics
                </Link>
              </li>
              <li>
                <Link
                  href="#clothing"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="#home-decor"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Home Decor
                </Link>
              </li>
              <li>
                <Link
                  href="#crafts"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Handicrafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#artisans"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link
                  href="#cooperatives"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Cooperatives
                </Link>
              </li>
              <li>
                <Link
                  href="#stories"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Artisan Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#workshops"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="#cultural-heritage"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Cultural Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#help"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#shipping"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="#returns"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-gray-400 mb-4 md:mb-0 text-sm">
            © {currentYear} Iloilo Crafts. Preserving tradition, supporting
            communities.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs">
            Made with ❤️ for the artisans and craftspeople of Iloilo |
            <Link
              href="#privacy"
              className="hover:text-amber-400 transition-colors"
            >
              {" "}
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="#terms"
              className="hover:text-amber-400 transition-colors"
            >
              {" "}
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
