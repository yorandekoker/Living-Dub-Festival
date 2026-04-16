import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import ArtistCard from "../components/ArtistCard";
import { getCrewImage, getWorkshopImage } from "../utils/imageLookup";
import {
  artistDescriptions,
  workshopDescriptions,
} from "../utils/festivalDescriptions";

interface LineupDetail {
  name: string;
  stage: string;
  description: string;
  imageSrc?: string | null;
}

const artistAliases: Record<string, string> = {
  "Steppin' Ground": "Steppin' Ground ft. Ras TimBo",
  Fishermen: "Fishermen ft. Wiseman Jarne",
  Bloodhound: "Bloodhound ft. MC Kingten",
  Crucial: "Crucial ft. MC Tubbie",
  Suncharm: "Suncharm ft. Crownless I",
  MUDA: "MUDA @ Living Dub",
  "UFO Collective ft. Unlisted Fanatic, Marijah and Moonshine Horns":
    "UFO Collective (Unlisted Fanatic, MariJah & Moonshine Horns)",
  "MC Kingten": "Bloodhound ft. MC Kingten",
  "MC Tubbie": "Crucial ft. MC Tubbie",
  "Crownless I": "Suncharm ft. Crownless I",
};

const workshopAliases: Record<string, string> = {
  "Fire Dance": "Fire show",
  "Mindfulness / Meditation": "Mindfulness & Meditatie (Patricia van Wegen)",
  "Integrale Yoga": "Integrale Yoga (Patricia van Wegen)",
  "Airbrush & Kids Facepainting": "Airbrush & Kindergrime (Elluminé)",
  "Graffiti Workshop": "Roots and Colors: Graffiti Workshop (Jote & Elmo)",
  "Performance Rodkint": "Performance by Rodkint (Elise Deryckere)",
};

const resolveArtistDescription = (name: string) => {
  const descriptionKey = artistAliases[name] ?? name;

  return (
    artistDescriptions[descriptionKey] ??
    `Experience ${name} bringing dub and roots reggae vibes to the festival.`
  );
};

const resolveWorkshopDescription = (name: string) => {
  const descriptionKey = workshopAliases[name] ?? name;

  return (
    workshopDescriptions[descriptionKey] ??
    `Join ${name} for a creative festival workshop experience.`
  );
};

export default function Lineup() {
  const [selectedItem, setSelectedItem] = useState<LineupDetail | null>(null);

  const woodenRootsFloor = [
    "Selah Techniques ft. Della",
    "Break Bread",
    "Creativ Dubs",
    "Ital Brew",
    "Unification",
    "Fishermen",
    "Poa Annua",
    "Deliverance",
    "UFO Collective ft. Unlisted Fanatic, Marijah and Moonshine Horns",
    "Crucial",
    "Suncharm",
    "MUDA",
    "Ventus",
    "Paleo",
    "Mitch",
    "DJ Dédé",
    "DJ Ceductive",
    "Della",
  ];

  const steppinGrassField = [
    "Steppin' Ground",
    "Jahmateur Hi Power",
    "Bloodhound",
    "Not Surrender",
    "Lowie",
    "Moksha Vibrations",
    "Pathseeker",
    "Untzslag",
    "Saga Sound Station",
    "Drijfkracht",
    "Tune",
    "Sotabosc",
    "Indica Dubs ft. Danman",
  ];

  const mcs = ["MC Kingten", "MC Tubbie", "Crownless I"];

  const irieKnowledgeHut = [
    "Henna Workshop",
    "Henna Tattoos",
    "Living Art",
    "Ecstatic Dance",
    "Fire Dance",
    "Mindfulness / Meditation",
    "Integrale Yoga",
    "Airbrush & Kids Facepainting",
    "Graffiti Workshop",
    "Natural Shapes",
    "Performance Rodkint",
  ];

  const openArtist = (name: string, stage: string) => {
    setSelectedItem({
      name,
      stage,
      description: resolveArtistDescription(name),
      imageSrc: getCrewImage(name),
    });
  };

  const openWorkshop = (name: string, stage: string) => {
    setSelectedItem({
      name,
      stage,
      description: resolveWorkshopDescription(name),
      imageSrc: getWorkshopImage(name),
    });
  };

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#138A5A] mb-4 transform rotate-1 inline-block">
            Line-up 2026
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Meet the soundsystems and artists bringing the vibes
          </p>
        </div>

        {/* Wooden Roots Floor */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#F48C06] to-[#E6392F] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform -rotate-1">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              Wooden Roots Floor
            </h2>
            <p className="font-['Poppins'] text-center text-white mt-2">
              Indoor Main Stage • Dub & Roots Reggae
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {woodenRootsFloor.map((artist) => (
              <ArtistCard
                key={artist}
                name={artist}
                stage="Wooden Roots Floor"
                color="#F48C06"
                imageSrc={getCrewImage(artist)}
                onClick={() => openArtist(artist, "Wooden Roots Floor")}
              />
            ))}
          </div>
        </section>

        {/* Steppin' Grass Field */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#138A5A] to-[#2EC4B6] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform rotate-1">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              Steppin' Grass Field
            </h2>
            <p className="font-['Poppins'] text-center text-white mt-2">
              Outdoor Stage • Soundsystem Culture Under the Sky
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {steppinGrassField.map((artist) => (
              <ArtistCard
                key={artist}
                name={artist}
                stage="Steppin' Grass Field"
                color="#138A5A"
                imageSrc={getCrewImage(artist)}
                onClick={() => openArtist(artist, "Steppin' Grass Field")}
              />
            ))}
          </div>
        </section>

        {/* Irie Knowledge Hut */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#2EC4B6] to-[#F7C600] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform -rotate-0.5">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              Irie Knowledge Hut
            </h2>
            <p className="font-['Poppins'] text-center text-white mt-2">
              Workshops & Creative Activities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {irieKnowledgeHut.map((activity) => (
              <ArtistCard
                key={activity}
                name={activity}
                stage="Irie Knowledge Hut"
                color="#2EC4B6"
                imageSrc={getWorkshopImage(activity)}
                onClick={() => openWorkshop(activity, "Irie Knowledge Hut")}
              />
            ))}
          </div>
        </section>

        {/* MCs */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#E6392F] to-[#F48C06] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform rotate-0.5">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              MCs
            </h2>
            <p className="font-['Poppins'] text-center text-white mt-2">
              Master of Ceremonies • Sound Operators
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mcs.map((mc) => (
              <ArtistCard
                key={mc}
                name={mc}
                stage="Various Stages"
                color="#E6392F"
                imageSrc={getCrewImage(mc)}
                onClick={() => openArtist(mc, "Various Stages")}
              />
            ))}
          </div>
        </section>

        <Dialog
          open={selectedItem !== null}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md max-h-[85vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="font-['Bangers'] text-3xl text-[#138A5A]">
                {selectedItem?.name}
              </DialogTitle>
            </DialogHeader>

            {selectedItem && (
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                <div className="w-full h-72 rounded-2xl border-2 border-black overflow-hidden bg-gray-100">
                  {selectedItem.imageSrc ? (
                    <img
                      src={selectedItem.imageSrc}
                      alt={selectedItem.name}
                      className={`w-full h-full ${
                        /sotabosc|sotobosc/i.test(selectedItem.name)
                          ? "object-contain bg-white p-1"
                          : "object-cover object-center"
                      }`}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white"
                      style={{ backgroundColor: "#138A5A" }}
                    >
                      {selectedItem.name}
                    </div>
                  )}
                </div>

                <div className="bg-[#FFF3D6] rounded-2xl border-2 border-black p-4">
                  <div className="mb-3">
                    <h4 className="font-['Fredoka'] font-bold text-sm text-gray-600 mb-1">
                      Stage
                    </h4>
                    <p className="font-['Poppins'] text-base">
                      {selectedItem.stage}
                    </p>
                  </div>
                </div>

                <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedItem.description}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 text-center transform rotate-0.5">
          <h3 className="font-['Bangers'] text-3xl text-[#E6392F] mb-4">
            Ready to Experience the Vibes?
          </h3>
          <p className="font-['Poppins'] text-base text-gray-700 mb-6">
            Check the full timetable to plan your festival journey
          </p>
          <a
            href="/timetable"
            className="font-['Bangers'] text-lg px-8 py-4 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block transform rotate-1"
          >
            View Timetable
          </a>
        </section>
      </div>
    </div>
  );
}
