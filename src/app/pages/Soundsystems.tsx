import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getSoundsystemImage } from "../utils/imageLookup";

interface SoundsystemCardProps {
  name: string;
  description: string;
  style: string;
  color: string;
  imageSrc?: string | null;
}

function SoundsystemCard({
  name,
  description,
  style,
  color,
  imageSrc,
}: SoundsystemCardProps) {
  return (
    <div
      className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
      style={{ transform: `rotate(${Math.random() * 3 - 1.5}deg)` }}
    >
      {/* Soundsystem Image Placeholder */}
      <div className="w-full h-36 rounded-2xl border-3 border-black mb-4 overflow-hidden bg-gray-100">
        {imageSrc ? (
          <ImageWithFallback
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <div className="font-['Luckiest_Guy'] text-3xl text-white text-center px-4">
              🔊
            </div>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-['Fredoka'] text-xl font-bold mb-2" style={{ color }}>
        {name}
      </h3>

      {/* Style */}
      <p className="font-['Poppins'] text-sm font-semibold text-gray-600 mb-3">
        🎵 {style}
      </p>

      {/* Description */}
      <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Soundsystems() {
  const soundsystems = [
    {
      name: "Ital Brew Soundsystem",
      description:
        "Heavyweight roots and dub from the heart. Known for deep bass and conscious selection.",
      style: "Roots & Dub",
      color: "#E6392F",
    },
    {
      name: "Guiding Youth Soundsystem",
      description:
        "Young energy meets classic soundsystem culture. Fresh perspectives on traditional vibes.",
      style: "Roots Reggae",
      color: "#138A5A",
    },
    {
      name: "Dreadical Warriors Soundsystem",
      description:
        "Warriors of the bass. Bringing militant dub and steppers riddims.",
      style: "Steppers & Dub",
      color: "#F48C06",
    },
    {
      name: "Jahmateur Hi Power Soundsystem",
      description:
        "High power, high energy. Modern dub with serious bass weight.",
      style: "Hi-Power Dub",
      color: "#2EC4B6",
    },
    {
      name: "Steppin' Ground Soundsystem",
      description:
        "Natural steppers vibes. Grounded in roots, reaching for the sky.",
      style: "Steppers",
      color: "#F7C600",
    },
    {
      name: "Tune Soundsystem",
      description:
        "Pure vibes and selection. Tuned to perfection, playing the finest cuts.",
      style: "Selection Culture",
      color: "#E6392F",
    },
    {
      name: "Drijfkracht Soundsystem",
      description:
        "Driving force in the scene. Pushing the culture forward with heavyweight sound.",
      style: "Dub & Roots",
      color: "#138A5A",
    },
    {
      name: "Saga Sound Station",
      description:
        "Every set tells a story. Journey through reggae, dub, and beyond.",
      style: "Reggae & Dub",
      color: "#F48C06",
    },
    {
      name: "Untzslag Soundsystem",
      description:
        "Conscious lyrics and deep bass. Sound clash ready with heavyweight selection.",
      style: "Soundclash Specialists",
      color: "#2EC4B6",
    },
    {
      name: "Unification Soundsystem",
      description:
        "Bringing people together through music. Unity is strength, music is the weapon.",
      style: "Roots & Culture",
      color: "#E6392F",
    },
    {
      name: "Crucial Soundsystem",
      description:
        "Essential vibes only. Crucial cuts and heavyweight dubplates.",
      style: "Dub & Steppers",
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
            <SoundsystemCard
              key={soundsystem.name}
              name={soundsystem.name}
              description={soundsystem.description}
              style={soundsystem.style}
              color={soundsystem.color}
              imageSrc={getSoundsystemImage(soundsystem.name)}
            />
          ))}
        </div>

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
