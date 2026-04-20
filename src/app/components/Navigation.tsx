import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [festivalDropdownOpen, setFestivalDropdownOpen] = useState(false);

  const mainNavLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  const festivalSubLinks = [
    { path: "/festival-2026", label: "What to Expect" },
    { path: "/timetable", label: "Timetable" },
    { path: "/lineup", label: "Line-up" },
    { path: "/soundsystems", label: "Soundsystems" },
    { path: "/info", label: "Info" },
    { path: "/charity-sponsors", label: "Charity & Sponsors" },
  ];

  const isFestivalActive =
    location.pathname === "/festival-2026" ||
    location.pathname === "/timetable" ||
    location.pathname === "/lineup" ||
    location.pathname === "/soundsystems" ||
    location.pathname === "/info" ||
    location.pathname === "/charity-sponsors";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-black">
        {/* Reggae Color Stripes */}
        <div className="h-2 flex">
          <div className="flex-1 bg-[#E6392F]"></div>
          <div className="flex-1 bg-[#F7C600]"></div>
          <div className="flex-1 bg-[#138A5A]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center absolute left-4 sm:left-6 lg:left-8"
            >
              <img
                src="/images/logo.png"
                alt="Living Dub Festival"
                className="h-[4.5rem] md:h-[5.25rem] w-auto"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-12">
              {/* Main Nav Links */}
              {mainNavLinks.slice(0, 2).map((link) => (
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

              {/* Festival 2026 Link (Desktop only) */}
              <Link
                to="/festival-2026"
                className={`font-['Poppins'] font-medium text-sm transition-colors hover:text-[#E6392F] ${
                  isFestivalActive
                    ? "text-[#E6392F] border-b-2 border-[#E6392F]"
                    : "text-gray-700"
                }`}
              >
                Festival 2026
              </Link>

              {mainNavLinks.slice(2).map((link) => (
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
            </div>

            {/* Buy Tickets Button - Right Side */}
            <a
              href="https://living-dub-festival-2026.eventsquare.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block font-['Bangers'] text-lg px-6 py-3 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-1 absolute right-4 sm:right-6 lg:right-8"
            >
              Buy Tickets
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 absolute right-4"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t-2 border-black">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {/* Main Nav Links */}
              {mainNavLinks.slice(0, 2).map((link) => (
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

              {/* Festival 2026 Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setFestivalDropdownOpen(!festivalDropdownOpen)}
                  className={`w-full text-left font-['Poppins'] font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between ${
                    isFestivalActive
                      ? "bg-[#E6392F] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Festival 2026
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      festivalDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Festival Dropdown */}
                {festivalDropdownOpen && (
                  <div className="bg-gray-50 border-l-3 border-[#E6392F] ml-4">
                    {festivalSubLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setFestivalDropdownOpen(false);
                        }}
                        className={`block font-['Poppins'] font-medium py-2 px-4 text-sm transition-colors ${
                          location.pathname === link.path
                            ? "bg-[#E6392F] text-white rounded"
                            : "text-gray-700 hover:bg-gray-200 rounded"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainNavLinks.slice(2).map((link) => (
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
    </>
  );
}
