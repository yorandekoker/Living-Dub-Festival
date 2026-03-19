import { Link } from "react-router";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#138A5A] text-white mt-20 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Living Dub Festival"
                className="h-[6.75rem] md:h-[7.875rem] w-auto"
              />
            </Link>
            <p className="font-['Poppins'] text-sm leading-relaxed">
              A celebration of soundsystem culture, reggae, dub, community and
              connection.
            </p>
            <p className="font-['Poppins'] text-sm mt-2">3-5 July 2026</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Bangers'] text-xl mb-4 text-[#F7C600]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
                >
                  About Living Dub
                </Link>
              </li>
              <li>
                <Link
                  to="/festival-2026"
                  className="font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
                >
                  Festival 2026
                </Link>
              </li>
              <li>
                <Link
                  to="/timetable"
                  className="font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
                >
                  Timetable
                </Link>
              </li>
              <li>
                <Link
                  to="/lineup"
                  className="font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
                >
                  Line-up
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
                >
                  Practical Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-['Bangers'] text-xl mb-4 text-[#F7C600]">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586308133217&sk=directory_basic_info"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#138A5A] p-3 rounded-full hover:bg-[#F7C600] hover:scale-110 transition-all border-2 border-black"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/livingdub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#138A5A] p-3 rounded-full hover:bg-[#F7C600] hover:scale-110 transition-all border-2 border-black"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:livingdub@outlook.com"
                className="bg-white text-[#138A5A] p-3 rounded-full hover:bg-[#F7C600] hover:scale-110 transition-all border-2 border-black"
              >
                <Mail size={20} />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-block font-['Poppins'] text-sm hover:text-[#F7C600] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-white/20 mt-8 pt-8 text-center">
          <p className="font-['Poppins'] text-sm">
            © 2026 Living Dub. All rights reserved.
          </p>
          <p className="font-['Poppins'] text-xs mt-1 opacity-90">
            Developed by Yoran Dekoker
          </p>
          <p className="font-['Poppins'] text-xs mt-2 opacity-80">
            Respect • Connection • Community
          </p>
        </div>
      </div>

      {/* Bottom Reggae Stripes */}
      <div className="h-2 flex">
        <div className="flex-1 bg-[#E6392F]"></div>
        <div className="flex-1 bg-[#F7C600]"></div>
        <div className="flex-1 bg-[#138A5A]"></div>
      </div>
    </footer>
  );
}
