import ArtistCard from '../components/ArtistCard';
import { getCrewImage, getWorkshopImage } from '../utils/imageLookup';

export default function Lineup() {
  const woodenRootsFloor = [
    'Guiding Youth', 'Selah Techniques', 'Creativ Dubs', 'Ital Brew',
    'Little Man', 'Unification', 'Fishermen', 'Poa Annua',
    'Deliverance', 'Crucial', 'Suncharm', 'MUDA',
    'Ventus', 'MITCH & Paleo', 'DJ Dédé'
  ];

  const steppinGrassField = [
    'Dreadical Warriors', "Steppin' Ground", 'Jahmateur Hi Power',
    'Bloodhound', 'Lowie', 'Moksha Vibrations', 'Pathseeker',
    'Untzslag', 'Saga Sound Station', 'Drijfkracht', 'Tune'
  ];

  const irieKnowledgeHut = [
    'Henna Workshop', 'Henna Tattoos', 'Living Art', 'Ecstatic Dance',
    'Fire Dance', 'Mindfulness / Meditation', 'Integrale Yoga',
    'Airbrush & Kids Facepainting', 'Graffiti Workshop', 'Natural Shapes',
    'Performance Rodkint'
  ];

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
              Indoor Main Stage • Heavyweight Dub & Roots Reggae
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
              />
            ))}
          </div>
        </section>

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