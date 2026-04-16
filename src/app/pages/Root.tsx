import { useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Root() {
  const location = useLocation();

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      {/* Desktop Festival Sub-Navigation - Only shows on Festival pages */}
      {isFestivalActive && (
        <div className="hidden lg:block bg-transparent mt-[130px] mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-2 gap-6 flex-wrap">
              {festivalSubLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-['Bangers'] text-lg px-6 py-3 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block text-center ${
                    location.pathname === link.path
                      ? "bg-[#E6392F] text-white transform -rotate-1 hover:rotate-0"
                      : "bg-[#F7C600] text-black transform rotate-1 hover:rotate-0"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <main
        className={`flex-1 overflow-x-hidden ${isFestivalActive ? "pt-8" : "pt-[106px]"}`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
