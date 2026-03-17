import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Button from "../components/Button";
import WorkshopCard from "../components/WorkshopCard";

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
  playingAgainst?: string;
  description: string;
}

export default function Timetable() {
  const [activeDay, setActiveDay] = useState<"friday" | "saturday" | "sunday">(
    "friday",
  );
  const [selectedArtist, setSelectedArtist] = useState<ArtistDetail | null>(
    null,
  );

  const timetableData: Record<
    "friday" | "saturday" | "sunday",
    TimetableEvent[]
  > = {
    friday: [
      {
        artist: "Guiding Youth",
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
        playingAgainst: "Guiding Youth",
      },
      {
        artist: "Dreadical Warriors",
        stage: "Steppin' Grass Field",
        time: "16:00 – 22:00",
        color: "#138A5A",
      },
      {
        artist: "Henna Workshop",
        stage: "Irie Knowledge Hut",
        time: "15:00 – 17:00",
        color: "#F7C600",
      },
    ],
    saturday: [
      {
        artist: "Ital Brew",
        stage: "Wooden Roots Floor",
        time: "12:00 – 18:00",
        color: "#E6392F",
        playingAgainst: "Little Man",
      },
      {
        artist: "Little Man",
        stage: "Wooden Roots Floor",
        time: "12:00 – 18:00",
        color: "#E6392F",
        playingAgainst: "Ital Brew",
      },
      {
        artist: "Steppin' Ground",
        stage: "Steppin' Grass Field",
        time: "14:00 – 20:00",
        color: "#138A5A",
      },
      {
        artist: "Jahmateur Hi Power",
        stage: "Steppin' Grass Field",
        time: "20:00 – 02:00",
        color: "#138A5A",
      },
      {
        artist: "Yoga Flow",
        stage: "Irie Knowledge Hut",
        time: "10:00 – 11:30",
        color: "#F7C600",
      },
      {
        artist: "Ecstatic Dance",
        stage: "Irie Knowledge Hut",
        time: "16:00 – 18:00",
        color: "#F7C600",
      },
    ],
    sunday: [
      {
        artist: "Unification",
        stage: "Wooden Roots Floor",
        time: "11:00 – 17:00",
        color: "#E6392F",
      },
      {
        artist: "Crucial",
        stage: "Wooden Roots Floor",
        time: "17:00 – 22:00",
        color: "#E6392F",
      },
      {
        artist: "Tune",
        stage: "Steppin' Grass Field",
        time: "13:00 – 19:00",
        color: "#138A5A",
      },
      {
        artist: "Meditation",
        stage: "Irie Knowledge Hut",
        time: "09:00 – 10:00",
        color: "#F7C600",
      },
      {
        artist: "Fire Dance",
        stage: "Irie Knowledge Hut",
        time: "20:00 – 21:00",
        color: "#F7C600",
      },
    ],
  };

  const workshops = [
    {
      title: "Henna Workshop",
      time: "Friday: 15:00 - 16:00 & 16:15 - 17:15",
      instructor: "Ellumine",
      description:
        "Learn the ancient art of henna design. Create beautiful temporary body art using traditional techniques and natural henna.",
      color: "#E6392F",
    },
    {
      title: "Henna Tattoos",
      time: "All Days: Walk-in Sessions",
      instructor: "Ellumine",
      description:
        "Get your own custom henna tattoo throughout the festival. Walk-in sessions available all weekend.",
      color: "#E6392F",
    },
    {
      title: "Integrale Yoga",
      time: "Saturday: 10:00 - 11:30",
      instructor: "Yoga Masters",
      description:
        "Start your day with mindful movement. Integrate body, breath, and awareness in this comprehensive yoga flow.",
      color: "#138A5A",
    },
    {
      title: "Mindfulness / Meditation",
      time: "Sunday: 09:00 - 10:00",
      instructor: "Meditation Guide",
      description:
        "Begin the final day with stillness. Guided meditation to center yourself and cultivate inner peace.",
      color: "#F7C600",
    },
    {
      title: "Ecstatic Dance",
      time: "Saturday: 16:00 - 18:00",
      instructor: "Dance Facilitators",
      description:
        "Free-form movement and expression. Let the music move through you in this liberating dance experience.",
      color: "#F7C600",
    },
    {
      title: "Fire Dance",
      time: "Saturday: 22:00 - 23:00",
      instructor: "Fire Performers",
      description:
        "Mesmerizing fire performance and introduction to fire dancing. Watch the flames dance under the stars.",
      color: "#E6392F",
    },
    {
      title: "Graffiti Workshop",
      time: "Saturday: 14:00 - 16:00",
      instructor: "Street Artists",
      description:
        "Learn the fundamentals of graffiti art and street art culture. Create your own piece to take home.",
      color: "#E6392F",
    },
    {
      title: "Living Art",
      time: "All Days: Ongoing",
      instructor: "Community Artists",
      description:
        "Collaborative art space where everyone contributes. Add your mark to the collective festival canvas.",
      color: "#138A5A",
    },
    {
      title: "Airbrush & Kids Facepainting",
      time: "All Days: 12:00 - 18:00",
      instructor: "Face Painters",
      description:
        "Fun face painting for all ages. Transform yourself with colorful designs and creative airbrush art.",
      color: "#F7C600",
    },
    {
      title: "Natural Shapes",
      time: "Saturday: 11:00 - 13:00",
      instructor: "Nature Artist",
      description:
        "Create art using natural materials. Connect with nature through organic shapes and earth-based creativity.",
      color: "#138A5A",
    },
    {
      title: "Performance Rodkint",
      time: "Sunday: 17:00 - 18:00",
      instructor: "Rodkint Collective",
      description:
        "Live performance art experience. Witness boundary-pushing creative expression.",
      color: "#E6392F",
    },
  ];

  const handleArtistClick = (event: TimetableEvent) => {
    setSelectedArtist({
      name: event.artist,
      stage: event.stage,
      time: `${activeDay.toUpperCase().slice(0, 3)} ${event.time}`,
      playingAgainst: event.playingAgainst,
      description: `Experience ${event.artist} bringing heavyweight dub and roots reggae vibes to ${event.stage}.`,
    });
  };

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#E6392F] mb-4 transform -rotate-1 inline-block">
            Timetable
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Plan your festival experience
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveDay("friday")}
            className={`font-['Bangers'] text-xl px-8 py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeDay === "friday"
                ? "bg-[#E6392F] text-white scale-105 rotate-2"
                : "bg-white text-black hover:scale-105 hover:rotate-1"
            }`}
          >
            Friday
          </button>
          <button
            onClick={() => setActiveDay("saturday")}
            className={`font-['Bangers'] text-xl px-8 py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
              activeDay === "saturday"
                ? "bg-[#F7C600] text-black scale-105 -rotate-2"
                : "bg-white text-black hover:scale-105 hover:-rotate-1"
            }`}
          >
            Saturday
          </button>
          <button
            onClick={() => setActiveDay("sunday")}
            className={`font-['Bangers'] text-xl px-8 py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform ${
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
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black">
            <div className="w-4 h-4 rounded-full bg-[#F7C600] border-2 border-black"></div>
            <span className="font-['Poppins'] text-sm font-medium">
              Irie Knowledge Hut
            </span>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timetableData[activeDay].map((event, index) => (
            <div
              key={index}
              onClick={() => handleArtistClick(event)}
              className="bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              {/* Time */}
              <div
                className="inline-block px-3 py-1 rounded-lg border-2 border-black mb-3 font-['Fredoka'] text-sm font-bold text-white"
                style={{ backgroundColor: event.color }}
              >
                {event.time}
              </div>

              {/* Artist Name */}
              <h3
                className="font-['Fredoka'] text-xl font-bold mb-2"
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
                <p className="font-['Poppins'] text-xs text-gray-500 italic">
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
            <h2 className="font-['Bangers'] text-5xl text-[#2EC4B6] mb-4 transform -rotate-1 inline-block">
              Festival Workshops
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-700 max-w-3xl mx-auto">
              Workshops are also part of the festival program. Find every
              session from Irie Knowledge Hut here in the timetable page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <WorkshopCard
                key={workshop.title}
                title={workshop.title}
                time={workshop.time}
                instructor={workshop.instructor}
                description={workshop.description}
                color={workshop.color}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Regular Events Agenda Section */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2
            className="font-['Bangers'] text-5xl mb-4 transform -rotate-1 inline-block"
            style={{
              color: "#138A5A",
              textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
            }}
          >
            Regular Events Agenda
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-700 max-w-2xl mx-auto">
            Living Dub organizes regular events throughout the year. Join us for
            monthly soundsystem sessions, workshops, and community gatherings.
          </p>
        </div>

        {/* Monthly Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Monthly Soundsystem Session */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(-0.5deg)",
            }}
          >
            <div className="bg-[#E6392F] text-white px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">MONTHLY</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Soundsystem Session
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              First Saturday of every month
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Monthly soundsystem showcase featuring local and international
              selectors. Deep dub, roots reggae, and conscious vibrations.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#E6392F]"></div>
              <span className="font-['Poppins'] font-medium">
                21:00 - 04:00
              </span>
            </div>
          </div>

          {/* Yoga & Meditation */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(0.5deg)",
            }}
          >
            <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">WEEKLY</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Yoga & Meditation
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              Every Sunday morning
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Start your week centered. Community yoga and meditation sessions
              in nature. All levels welcome.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#138A5A]"></div>
              <span className="font-['Poppins'] font-medium">
                10:00 - 11:30
              </span>
            </div>
          </div>

          {/* Vinyl Selection Night */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(-0.3deg)",
            }}
          >
            <div className="bg-[#F7C600] text-black px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">BI-WEEKLY</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Vinyl Selection Night
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              Every other Friday
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Intimate vinyl listening sessions. Bring your records, share the
              vibes, connect through music culture.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#F7C600]"></div>
              <span className="font-['Poppins'] font-medium">
                19:00 - 23:00
              </span>
            </div>
          </div>

          {/* Workshop Series */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(0.3deg)",
            }}
          >
            <div className="bg-[#E6392F] text-white px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">MONTHLY</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Creative Workshop Series
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              Third Sunday of every month
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Rotating workshops: graffiti, henna, natural dyeing, instrument
              making, and more creative community activities.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#E6392F]"></div>
              <span className="font-['Poppins'] font-medium">
                14:00 - 17:00
              </span>
            </div>
          </div>

          {/* Community Gathering */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(-0.4deg)",
            }}
          >
            <div className="bg-[#138A5A] text-white px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">MONTHLY</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Community Gathering
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              Last Wednesday of every month
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Open community meeting to share ideas, plan events, and build
              connections. Potluck dinner included.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#138A5A]"></div>
              <span className="font-['Poppins'] font-medium">
                18:00 - 21:00
              </span>
            </div>
          </div>

          {/* Seasonal Celebration */}
          <div
            className="bg-white p-6 rounded-2xl border-3 border-black transform hover:scale-105 transition-transform"
            style={{
              boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
              transform: "rotate(0.4deg)",
            }}
          >
            <div className="bg-[#F7C600] text-black px-4 py-2 rounded-full inline-block mb-3">
              <span className="font-['Bangers'] text-sm">SEASONAL</span>
            </div>
            <h3 className="font-['Fredoka'] text-2xl mb-2">
              Seasonal Celebration
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
              Every solstice & equinox
            </p>
            <p className="font-['Poppins'] text-sm mb-4">
              Celebrate the turning of the seasons with music, food, fire, and
              community. Connect with natural rhythms.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#F7C600]"></div>
              <span className="font-['Poppins'] font-medium">
                16:00 - 23:00
              </span>
            </div>
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
              Want to stay updated on all our regular events? Follow us on
              social media or join our mailing list!
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
