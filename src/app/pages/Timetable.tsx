import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Button from "../components/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getCrewImage, getWorkshopImage } from "../utils/imageLookup";

interface TimetableEvent {
  artist: string;
  stage: string;
  time: string;
  color: string;
  playingAgainst?: string;
}

interface ArtistDetail {
  name: string;
  stage: string;
  time: string;
  color: string;
  playingAgainst?: string;
  description: string;
  imageSrc?: string | null;
}

export default function Timetable() {
  const [activeDay, setActiveDay] = useState<"friday" | "saturday" | "sunday">(
    "friday",
  );
  const [selectedArtist, setSelectedArtist] = useState<ArtistDetail | null>(
    null,
  );
  const [activeWorkshopDay, setActiveWorkshopDay] = useState<
    "friday" | "saturday" | "sunday"
  >("friday");
  const [selectedWorkshop, setSelectedWorkshop] = useState<ArtistDetail | null>(
    null,
  );

  const timetableData: Record<
    "friday" | "saturday" | "sunday",
    TimetableEvent[]
  > = {
    friday: [
      {
        artist: "Guiding Youth (TO BE ANNOUNCED) & Selah Techniques ft. Della",
        stage: "Wooden Roots Floor",
        time: "14:00 – 20:00",
        color: "#E6392F",
        playingAgainst: "Creativ Dubs",
      },
      {
        artist: "Creativ Dubs",
        stage: "Wooden Roots Floor",
        time: "14:00 – 20:00",
        color: "#E6392F",
        playingAgainst:
          "Guiding Youth (TO BE ANNOUNCED) & Selah Techniques ft. Della",
      },
      {
        artist: "Ital Brew",
        stage: "Wooden Roots Floor",
        time: "20:00 – 23:00",
        color: "#E6392F",
        playingAgainst: "Little Man",
      },
      {
        artist: "Little Man",
        stage: "Wooden Roots Floor",
        time: "20:00 – 23:00",
        color: "#E6392F",
        playingAgainst: "Ital Brew",
      },
      {
        artist: "Steppin' Ground ft. Ras TimBo",
        stage: "Steppin' Grass Field",
        time: "16:00 – 22:00",
        color: "#138A5A",
      },
      {
        artist: "Jahmateur Hi Power",
        stage: "Steppin' Grass Field",
        time: "22:00 – 03:00",
        color: "#138A5A",
      },
      {
        artist: "Bloodhound ft. MC Kingten",
        stage: "Steppin' Grass Field",
        time: "22:00 – 03:00",
        color: "#138A5A",
      },
    ],
    saturday: [
      {
        artist: "Unification",
        stage: "Wooden Roots Floor",
        time: "12:00 – 20:00",
        color: "#E6392F",
        playingAgainst: "Fishermen ft. Wiseman Jarne, Deliverance, Poa Annua",
      },
      {
        artist: "Fishermen ft. Wiseman Jarne",
        stage: "Wooden Roots Floor",
        time: "12:00 – 20:00",
        color: "#E6392F",
        playingAgainst: "Unification, Deliverance, Poa Annua",
      },
      {
        artist: "Poa Annua",
        stage: "Wooden Roots Floor",
        time: "12:00 – 20:00",
        color: "#E6392F",
        playingAgainst: "Fishermen ft. Wiseman Jarne, Deliverance, Unification",
      },
      {
        artist: "Deliverance",
        stage: "Wooden Roots Floor",
        time: "12:00 – 20:00",
        color: "#E6392F",
        playingAgainst: "Fishermen ft. Wiseman Jarne, Unification, Poa Annua",
      },
      {
        artist: "UFO Collective (Unlisted Fanatic, MariJah & Moonshine Horns)",
        stage: "Wooden Roots Floor",
        time: "20:15 – 21:45",
        color: "#E6392F",
      },
      {
        artist: "Crucial ft. MC Tubbie",
        stage: "Wooden Roots Floor",
        time: "21:45 – 03:00",
        color: "#E6392F",
        playingAgainst: "Suncharm ft. Crownless I",
      },
      {
        artist: "Suncharm ft. Crownless I",
        stage: "Wooden Roots Floor",
        time: "21:45 – 03:00",
        color: "#E6392F",
        playingAgainst: "Crucial ft. MC Tubbie",
      },
      {
        artist: "Lowie",
        stage: "Steppin' Grass Field",
        time: "12:00 – 13:00",
        color: "#138A5A",
      },
      {
        artist: "Moksha Vibrations",
        stage: "Steppin' Grass Field",
        time: "13:00 – 15:00",
        color: "#138A5A",
      },
      {
        artist: "Pathseeker",
        stage: "Steppin' Grass Field",
        time: "15:00 – 17:00",
        color: "#138A5A",
      },
      {
        artist: "Untzslag",
        stage: "Steppin' Grass Field",
        time: "17:00 – 19:00",
        color: "#138A5A",
      },
      {
        artist: "Saga Sound Station",
        stage: "Steppin' Grass Field",
        time: "19:00 – 21:00",
        color: "#138A5A",
      },
      {
        artist: "Drijfkracht",
        stage: "Steppin' Grass Field",
        time: "21:00 – 03:00",
        color: "#138A5A",
        playingAgainst: "Tune",
      },
      {
        artist: "Tune",
        stage: "Steppin' Grass Field",
        time: "21:00 – 03:00",
        color: "#138A5A",
        playingAgainst: "Drijfkracht",
      },
    ],
    sunday: [
      {
        artist: "MUDA @ Living Dub",
        stage: "Wooden Roots Floor",
        time: "13:15 – 14:15",
        color: "#E6392F",
      },
      {
        artist: "Ventus",
        stage: "Wooden Roots Floor",
        time: "14:45 – 15:45",
        color: "#E6392F",
      },
      {
        artist: "MITCH & Paleo",
        stage: "Wooden Roots Floor",
        time: "16:15 – 17:15",
        color: "#E6392F",
      },
      {
        artist: "DJ Dédé",
        stage: "Wooden Roots Floor",
        time: "18:00 – 20:00",
        color: "#E6392F",
      },
      {
        artist: "DJ Ceductive",
        stage: "Wooden Roots Floor",
        time: "20:00 – 22:00",
        color: "#E6392F",
      },
      {
        artist: "Sotabosc",
        stage: "Steppin' Grass Field",
        time: "13:00 – 14:00",
        color: "#138A5A",
      },
      {
        artist: "Not Surrender",
        stage: "Steppin' Grass Field",
        time: "14:00 – 16:00",
        color: "#138A5A",
      },
      {
        artist: "Drijfkracht",
        stage: "Steppin' Grass Field",
        time: "16:00 – 18:00",
        color: "#138A5A",
        playingAgainst: "Tune",
      },
      {
        artist: "Tune",
        stage: "Steppin' Grass Field",
        time: "16:00 – 18:00",
        color: "#138A5A",
        playingAgainst: "Drijfkracht",
      },
      {
        artist: "Indica Dubs ft. Danman",
        stage: "Steppin' Grass Field",
        time: "18:00 – 22:00",
        color: "#138A5A",
      },
    ],
  };

  const workshopTimetableData: Record<
    "friday" | "saturday" | "sunday",
    TimetableEvent[]
  > = {
    friday: [
      {
        artist: "Henna Workshop",
        stage: "Irie Knowledge Hut",
        time: "15:00 – 17:00",
        color: "#F7C600",
      },
      {
        artist: "Henna Tattoos",
        stage: "Irie Knowledge Hut",
        time: "17:30 – 19:30",
        color: "#F7C600",
      },
      {
        artist: "Living Art",
        stage: "Irie Knowledge Hut",
        time: "20:00 – 21:00",
        color: "#F7C600",
      },
      {
        artist: "Ecstatic Dance",
        stage: "Irie Knowledge Hut",
        time: "21:30 – 22:30",
        color: "#F7C600",
      },
      {
        artist: "Fire show",
        stage: "Irie Knowledge Hut",
        time: "23:00 – 00:00",
        color: "#F7C600",
      },
    ],
    saturday: [
      {
        artist: "Mindfulness & Meditatie (Patricia van Wegen)",
        stage: "Irie Knowledge Hut",
        time: "12:00 – 13:00",
        color: "#F7C600",
      },
      {
        artist: "Integrale Yoga (Patricia van Wegen)",
        stage: "Irie Knowledge Hut",
        time: "13:15 – 14:15",
        color: "#F7C600",
      },
      {
        artist: "Airbrush & Kindergrime (Ellumine)",
        stage: "Irie Knowledge Hut",
        time: "14:30 – 18:30",
        color: "#F7C600",
      },
      {
        artist: "Roots and Colors: Graffiti Workshop (Jote & Elmo)",
        stage: "Irie Knowledge Hut",
        time: "19:00 – 20:00",
        color: "#F7C600",
      },
      {
        artist: "Natural Shapes (Burak)",
        stage: "Irie Knowledge Hut",
        time: "21:00 – 22:00",
        color: "#F7C600",
      },
      {
        artist: "Performance by Rodkint (Elise Deryckere)",
        stage: "Irie Knowledge Hut",
        time: "23:00 – 00:00",
        color: "#F7C600",
      },
    ],
    sunday: [
      {
        artist: "Organic farming and human care (Vzw Gooikenshoeve)",
        stage: "Irie Knowledge Hut",
        time: "13:00 – 14:00",
        color: "#F7C600",
      },
      {
        artist: "Needle felting (Studio Imela)",
        stage: "Irie Knowledge Hut",
        time: "14:30 – 16:30",
        color: "#F7C600",
      },
      {
        artist: "Fortune teller: free card reading (Jules Tingles)",
        stage: "Irie Knowledge Hut",
        time: "17:00 – 18:00, 19:00 – 20:00, 21:00 – 22:00",
        color: "#F7C600",
      },
    ],
  };

  const handleArtistClick = (event: TimetableEvent) => {
    const imageSrc = getCrewImage(event.artist);

    setSelectedArtist({
      name: event.artist,
      stage: event.stage,
      time: `${activeDay.toUpperCase().slice(0, 3)} ${event.time}`,
      color: event.color,
      playingAgainst: event.playingAgainst,
      description: `Experience ${event.artist} bringing dub and roots reggae vibes to ${event.stage}.`,
      imageSrc,
    });
  };

  const handleWorkshopClick = (event: TimetableEvent) => {
    setSelectedWorkshop({
      name: event.artist,
      stage: event.stage,
      time: `${activeWorkshopDay.toUpperCase().slice(0, 3)} ${event.time}`,
      color: event.color,
      description: `Join ${event.artist} at ${event.stage} for a creative and mindful festival workshop experience.`,
      imageSrc: getWorkshopImage(event.artist),
    });
  };

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Luckiest_Guy'] text-5xl sm:text-6xl md:text-7xl text-[#E6392F] mb-4 transform -rotate-1 inline-block">
            Timetable
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Plan your festival experience
          </p>
        </div>

        {/* Day Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12 w-full max-w-xl mx-auto">
          <button
            onClick={() => setActiveDay("friday")}
            className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeDay === "friday"
                ? "bg-[#E6392F] text-white scale-105 rotate-2"
                : "bg-white text-black hover:scale-105 hover:rotate-1"
            }`}
          >
            Friday
          </button>
          <button
            onClick={() => setActiveDay("saturday")}
            className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeDay === "saturday"
                ? "bg-[#F7C600] text-black scale-105 -rotate-2"
                : "bg-white text-black hover:scale-105 hover:-rotate-1"
            }`}
          >
            Saturday
          </button>
          <button
            onClick={() => setActiveDay("sunday")}
            className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeDay === "sunday"
                ? "bg-[#138A5A] text-white scale-105 rotate-1"
                : "bg-white text-black hover:scale-105 hover:rotate-0.5"
            }`}
          >
            Sunday
          </button>
        </div>

        {/* Stage Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black">
            <div className="w-4 h-4 rounded-full bg-[#E6392F] border-2 border-black"></div>
            <span className="font-['Poppins'] text-sm font-medium">
              Wooden Roots Floor
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black">
            <div className="w-4 h-4 rounded-full bg-[#138A5A] border-2 border-black"></div>
            <span className="font-['Poppins'] text-sm font-medium">
              Steppin' Grass Field
            </span>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timetableData[activeDay].map((event, index) => (
            <div
              key={index}
              onClick={() => handleArtistClick(event)}
              className="bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 max-h-[78vh] sm:max-h-none overflow-y-auto hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              <div className="w-full h-44 sm:h-[16.5rem] rounded-xl border-2 border-black mb-3 overflow-hidden bg-gray-100">
                {getCrewImage(event.artist) ? (
                  <ImageWithFallback
                    src={getCrewImage(event.artist) ?? ""}
                    alt={event.artist}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-['Bangers'] text-xl text-white"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.artist}
                  </div>
                )}
              </div>

              {/* Time */}
              <div
                className="inline-block px-3 py-1 rounded-lg border-2 border-black mb-3 font-['Fredoka'] text-sm font-bold text-white"
                style={{ backgroundColor: event.color }}
              >
                {event.time}
              </div>

              {/* Artist Name */}
              <h3
                className="font-['Fredoka'] text-lg sm:text-xl font-bold mb-2 break-words"
                style={{ color: event.color }}
              >
                {event.artist}
              </h3>

              {/* Stage */}
              <p className="font-['Poppins'] text-sm text-gray-600 mb-2">
                📍 {event.stage}
              </p>

              {/* Playing Against (Clash) */}
              {event.playingAgainst && (
                <p className="font-['Poppins'] text-xs text-gray-500 italic break-words">
                  vs. {event.playingAgainst}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Artist Detail Modal */}
        <Dialog
          open={selectedArtist !== null}
          onOpenChange={() => setSelectedArtist(null)}
        >
          <DialogContent className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md">
            <DialogHeader>
              <DialogTitle className="font-['Bangers'] text-3xl text-[#E6392F]">
                {selectedArtist?.name}
              </DialogTitle>
            </DialogHeader>

            {selectedArtist && (
              <div className="space-y-4">
                <div className="w-full h-72 rounded-2xl border-2 border-black overflow-hidden bg-gray-100">
                  {selectedArtist.imageSrc ? (
                    <ImageWithFallback
                      src={selectedArtist.imageSrc}
                      alt={selectedArtist.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white"
                      style={{ backgroundColor: selectedArtist.color }}
                    >
                      {selectedArtist.name}
                    </div>
                  )}
                </div>

                <div className="bg-[#FFF3D6] rounded-2xl border-2 border-black p-4">
                  <div className="mb-3">
                    <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                      Stage
                    </h4>
                    <p className="font-['Poppins'] text-base">
                      {selectedArtist.stage}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                      Time
                    </h4>
                    <p className="font-['Poppins'] text-base">
                      {selectedArtist.time}
                    </p>
                  </div>

                  {selectedArtist.playingAgainst && (
                    <div>
                      <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                        Playing Against
                      </h4>
                      <p className="font-['Poppins'] text-base text-[#E6392F] font-semibold">
                        {selectedArtist.playingAgainst}
                      </p>
                    </div>
                  )}
                </div>

                <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed">
                  {selectedArtist.description}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Workshops Section */}
        <section id="festival-workshops" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-['Bangers'] text-4xl sm:text-5xl text-[#2EC4B6] mb-4 transform -rotate-1 inline-block">
              Festival Workshops
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-700 max-w-3xl mx-auto">
              Workshops are grouped per day in a dedicated timetable. Click a
              workshop card to see details.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 w-full max-w-xl mx-auto">
            <button
              onClick={() => setActiveWorkshopDay("friday")}
              className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
                activeWorkshopDay === "friday"
                  ? "bg-[#E6392F] text-white scale-105 rotate-2"
                  : "bg-white text-black hover:scale-105 hover:rotate-1"
              }`}
            >
              Friday
            </button>
            <button
              onClick={() => setActiveWorkshopDay("saturday")}
              className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
                activeWorkshopDay === "saturday"
                  ? "bg-[#F7C600] text-black scale-105 -rotate-2"
                  : "bg-white text-black hover:scale-105 hover:-rotate-1"
              }`}
            >
              Saturday
            </button>
            <button
              onClick={() => setActiveWorkshopDay("sunday")}
              className={`w-full font-['Bangers'] text-base sm:text-xl px-3 sm:px-8 py-3 sm:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
                activeWorkshopDay === "sunday"
                  ? "bg-[#138A5A] text-white scale-105 rotate-1"
                  : "bg-white text-black hover:scale-105 hover:rotate-0.5"
              }`}
            >
              Sunday
            </button>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black">
              <div className="w-4 h-4 rounded-full bg-[#F7C600] border-2 border-black"></div>
              <span className="font-['Poppins'] text-sm font-medium">
                Irie Knowledge Hut
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopTimetableData[activeWorkshopDay].map((event, index) => (
              <div
                key={index}
                onClick={() => handleWorkshopClick(event)}
                className="bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 max-h-[78vh] sm:max-h-none overflow-y-auto hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer"
                style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
              >
                <div className="w-full h-44 sm:h-[16.5rem] rounded-xl border-2 border-black mb-3 overflow-hidden bg-gray-100">
                  {getWorkshopImage(event.artist) ? (
                    <ImageWithFallback
                      src={getWorkshopImage(event.artist) ?? ""}
                      alt={event.artist}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white bg-[#F7C600]">
                      Workshop
                    </div>
                  )}
                </div>

                <div className="inline-block px-3 py-1 rounded-lg border-2 border-black mb-3 font-['Fredoka'] text-sm font-bold text-black bg-[#F7C600]">
                  {event.time}
                </div>

                <h3 className="font-['Fredoka'] text-lg sm:text-xl font-bold mb-2 text-[#F7C600] break-words">
                  {event.artist}
                </h3>

                <p className="font-['Poppins'] text-sm text-gray-600 mb-2">
                  📍 {event.stage}
                </p>
              </div>
            ))}
          </div>

          <Dialog
            open={selectedWorkshop !== null}
            onOpenChange={() => setSelectedWorkshop(null)}
          >
            <DialogContent className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md">
              <DialogHeader>
                <DialogTitle className="font-['Bangers'] text-3xl text-[#F7C600]">
                  {selectedWorkshop?.name}
                </DialogTitle>
              </DialogHeader>

              {selectedWorkshop && (
                <div className="space-y-4">
                  <div className="w-full h-72 rounded-2xl border-2 border-black overflow-hidden bg-gray-100">
                    {selectedWorkshop.imageSrc ? (
                      <ImageWithFallback
                        src={selectedWorkshop.imageSrc}
                        alt={selectedWorkshop.name}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white bg-[#F7C600]">
                        Workshop
                      </div>
                    )}
                  </div>

                  <div className="bg-[#FFF3D6] rounded-2xl border-2 border-black p-4">
                    <div className="mb-3">
                      <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                        Stage
                      </h4>
                      <p className="font-['Poppins'] text-base">
                        {selectedWorkshop.stage}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                        Time
                      </h4>
                      <p className="font-['Poppins'] text-base">
                        {selectedWorkshop.time}
                      </p>
                    </div>
                  </div>

                  <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed">
                    {selectedWorkshop.description}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </section>
      </div>

      {/* Upcoming Events Section */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2
            className="font-['Bangers'] text-5xl mb-4 transform -rotate-1 inline-block"
            style={{
              color: "#138A5A",
              textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
            }}
          >
            Upcoming Events
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-700 max-w-2xl mx-auto">
            Join us at our next Living Dub gathering and celebrate the spring
            equinox with soundsystem culture and community.
          </p>
        </div>

        {/* Upcoming Event Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-[1.01] transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(-0.4deg)",
            }}
          >
            <div className="w-full rounded-2xl border-3 border-black overflow-hidden mb-5">
              <ImageWithFallback
                src="/images/events/living dub 6.0.jpg"
                alt="Living Dub 6.0 event"
                className="w-full h-auto object-contain object-center"
              />
            </div>

            <div className="bg-[#E6392F] text-white px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">UPCOMING</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2 leading-snug">
              Living Dub 6.0, hosted by Drijfkracht Soundsystem - Spring Equinox
              Celebration with Crucial Soundsystem (warming up by Untzslag) - 't
              Pand (21/03/2026)
            </h3>
          </div>
        </div>

        {/* Contact CTA */}
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
