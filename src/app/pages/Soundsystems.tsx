import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getSoundsystemImage } from "../utils/imageLookup";

interface SoundsystemItem {
  name: string;
  color: string;
}

export default function Soundsystems() {
  const [selectedSoundsystem, setSelectedSoundsystem] =
    useState<SoundsystemItem | null>(null);

  const soundsystems = [
    {
      name: "Ital Brew Soundsystem",
      color: "#E6392F",
    },
    {
      name: "Jahmateur Hi Power Soundsystem",
      color: "#2EC4B6",
    },
    {
      name: "Steppin' Ground Soundsystem",
      color: "#F7C600",
    },
    {
      name: "Tune Soundsystem",
      color: "#E6392F",
    },
    {
      name: "Drijfkracht Soundsystem",
      color: "#138A5A",
    },
    {
      name: "Saga Sound Station",
      color: "#F48C06",
    },
    {
      name: "Untzslag Soundsystem",
      color: "#2EC4B6",
    },
    {
      name: "Unification Soundsystem",
      color: "#E6392F",
    },
    {
      name: "Crucial Soundsystem",
      color: "#138A5A",
    },
    {
      name: "Not Surrender Soundsystem",
      color: "#F48C06",
    },
    {
      name: "Moksha Vibrations Soundsystem",
      color: "#2EC4B6",
    },
    {
      name: "Break Bread Soundsystem",
      color: "#138A5A",
    },
  ];

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#F48C06] mb-4 transform rotate-1 inline-block">
            Soundsystems
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Meet the heavyweight soundsystems bringing the vibes
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 mb-16 transform -rotate-0.5">
          <h2 className="font-['Bangers'] text-4xl text-[#E6392F] text-center mb-4">
            Soundsystem Culture
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            At the heart of Living Dub Festival is authentic soundsystem
            culture. These are more than just speakers—each soundsystem is a
            community, a crew, a movement. They carry the legacy of reggae and
            dub forward, selecting the deepest cuts, dropping the heaviest bass,
            and holding space for the culture. Respect to all the soundsystems
            making this gathering possible.
          </p>
        </section>

        {/* Soundsystems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {soundsystems.map((soundsystem) => (
            <div
              key={soundsystem.name}
              onClick={() => setSelectedSoundsystem(soundsystem)}
              className="bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              <div className="w-full h-88 rounded-xl border-2 border-black mb-3 overflow-hidden bg-gray-100">
                {getSoundsystemImage(soundsystem.name) ? (
                  <ImageWithFallback
                    src={getSoundsystemImage(soundsystem.name) ?? ""}
                    alt={soundsystem.name}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white"
                    style={{ backgroundColor: soundsystem.color }}
                  >
                    Soundsystem
                  </div>
                )}
              </div>

              <h3
                className="font-['Fredoka'] text-lg sm:text-xl font-bold mb-2 leading-tight break-words"
                style={{ color: soundsystem.color }}
              >
                {soundsystem.name}
              </h3>
            </div>
          ))}
        </div>

        <Dialog
          open={selectedSoundsystem !== null}
          onOpenChange={() => setSelectedSoundsystem(null)}
        >
          <DialogContent className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl">
            <DialogHeader>
              <DialogTitle className="font-['Bangers'] text-2xl sm:text-3xl text-[#E6392F] pr-10 leading-tight break-words">
                {selectedSoundsystem?.name}
              </DialogTitle>
            </DialogHeader>

            {selectedSoundsystem && (
              <div className="w-full h-[70vh] rounded-2xl border-3 border-black overflow-hidden bg-gray-100">
                {getSoundsystemImage(selectedSoundsystem.name) ? (
                  <ImageWithFallback
                    src={getSoundsystemImage(selectedSoundsystem.name) ?? ""}
                    alt={selectedSoundsystem.name}
                    className="w-full h-full object-contain object-center"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-['Bangers'] text-4xl text-white text-center px-6"
                    style={{ backgroundColor: selectedSoundsystem.color }}
                  >
                    {selectedSoundsystem.name}
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Bottom CTA */}
        <section className="mt-16 bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 text-center transform rotate-0.5">
          <h3 className="font-['Luckiest_Guy'] text-4xl text-white mb-4">
            Experience the Bass
          </h3>
          <p className="font-['Poppins'] text-lg text-white mb-6">
            Check the timetable to see when each soundsystem plays
          </p>
          <a
            href="/timetable"
            className="font-['Bangers'] text-lg px-8 py-4 bg-white text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block transform -rotate-1"
          >
            View Timetable
          </a>
        </section>
      </div>
    </div>
  );
}
