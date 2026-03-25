import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Living Dub" },
    { path: "/festival-2026", label: "Festival 2026" },
    { path: "/timetable", label: "Timetable" },
    { path: "/lineup", label: "Line-up" },
    { path: "/soundsystems", label: "Soundsystems" },
    { path: "/info", label: "Info" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-black">
      {/* Reggae Color Stripes */}
      <div className="h-2 flex">
        <div className="flex-1 bg-[#E6392F]"></div>
        <div className="flex-1 bg-[#F7C600]"></div>
        <div className="flex-1 bg-[#138A5A]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Living Dub Festival"
              className="h-[4.5rem] md:h-[5.25rem] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-['Poppins'] font-medium text-sm transition-colors hover:text-[#E6392F] ${
                  location.pathname === link.path
                    ? "text-[#E6392F] border-b-2 border-[#E6392F]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Buy Tickets Button */}
            <a
              href="https://living-dub-festival-2026.eventsquare.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Bangers'] text-lg px-6 py-3 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-1"
            >
              Buy Tickets
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-black">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-['Poppins'] font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-[#E6392F] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Buy Tickets Button */}
            <a
              href="https://living-dub-festival-2026.eventsquare.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-['Bangers'] text-lg px-6 py-3 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
