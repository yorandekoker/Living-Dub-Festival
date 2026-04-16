import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Button from "../components/Button";
import { useState } from "react";

export default function Events() {
  const [activeTab, setActiveTab] = useState<"past" | "upcoming">("upcoming");

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1
            className="font-['Luckiest_Guy'] text-5xl md:text-6xl mb-4 transform rotate-1 inline-block"
            style={{
              color: "#138A5A",
              textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
            }}
          >
            Events
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700 max-w-2xl mx-auto">
            Join us at our Living Dub events throughout the year
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("past")}
            className={`font-['Bangers'] text-lg px-8 py-3 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeTab === "past"
                ? "bg-[#E6392F] text-white scale-105 rotate-1"
                : "bg-white text-black hover:scale-105 hover:rotate-1"
            }`}
          >
            Past Events
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`font-['Bangers'] text-lg px-8 py-3 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeTab === "upcoming"
                ? "bg-[#138A5A] text-white scale-105 rotate-1"
                : "bg-white text-black hover:scale-105 hover:rotate-1"
            }`}
          >
            Upcoming Events
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Upcoming Events Tab */}
          {activeTab === "upcoming" && (
            <div>
              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(-0.4deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/dub to goa.jpeg"
                    alt="Living Dub - From Dub to Goa"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#E6392F] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">UPCOMING</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Living Dub - From Dub to Goa with Tune Soundsystem & Fake
                  Hippies - @De Zlle, Ghent (17/04/2026)
                </h2>
              </div>
            </div>
          )}

          {/* Past Events Tab */}
          {activeTab === "past" && (
            <div className="space-y-6">
              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(-0.5deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/Sunny outdoor.png"
                    alt="Sunny Outdoor Dubsession"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">PAST EVENT</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Sunny Outdoor Dubsession, hosted by Guiding Youth + Tune
                  Soundsystem - with Soko Sound - Cafe Matheur, Sleidinge-dorp
                  (23/08)
                </h2>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(0.4deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/living dub 6.0.jpg"
                    alt="Living Dub 6.0 event"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">PAST EVENT</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Living Dub 6.0, hosted by Drijfkracht Soundsystem - Spring
                  Equinox Celebration with Crucial Soundsystem (warming up by
                  Untzslag) - 't Pand (21/03/2026)
                </h2>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(-0.4deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/dubisland.png"
                    alt="Living Dub 3.0 - De Dubisland Edition"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">PAST EVENT</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Living Dub 3.0 - De Dubisland Edition (01/04)
                </h2>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(0.5deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/bday bash.png"
                    alt="Living Dub invites Drijfkracht - Thomas' B-Day Bash"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">PAST EVENT</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Living Dub invites Drijfkracht - For Thomas' B-Day Bash -
                  @Molotov, Voetweg 48, Ghent (28/01/2026)
                </h2>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                  transform: "rotate(-0.3deg)",
                }}
              >
                <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
                  <ImageWithFallback
                    src="/images/events/living dub invites bloodhound.jpg"
                    alt="Living Dub invites Bloodhound and Unification"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
                  <span className="font-['Bangers'] text-sm">PAST EVENT</span>
                </div>
                <h2 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
                  Living Dub invites Bloodhound and Unification - De 4de van de
                  4de at De 4de Zaal (04/04) - 20:00 - 05:00
                </h2>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div
            className="bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] p-8 rounded-3xl border-3 border-black inline-block transform -rotate-1"
            style={{
              boxShadow: "8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            <p className="font-['Poppins'] text-white text-lg mb-4 max-w-2xl">
              Want to stay updated on all our upcoming events? Follow us on
              social media or join our mailing list.
            </p>
            <Button to="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
