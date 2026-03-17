import WorkshopCard from "../components/WorkshopCard";
import { getWorkshopImage } from "../utils/imageLookup";

export default function Workshops() {
  const workshops = [
    {
      title: "Henna Workshop",
      time: "Friday: 15:00 – 16:00 & 16:15 – 17:15",
      instructor: "Elluminé",
      description:
        "Learn the ancient art of henna design. Create beautiful temporary body art using traditional techniques and natural henna.",
      color: "#E6392F",
    },
    {
      title: "Henna Tattoos",
      time: "All Days: Walk-in Sessions",
      instructor: "Elluminé",
      description:
        "Get your own custom henna tattoo throughout the festival. Walk-in sessions available all weekend.",
      color: "#E6392F",
    },
    {
      title: "Integrale Yoga",
      time: "Saturday: 10:00 – 11:30",
      instructor: "Yoga Masters",
      description:
        "Start your day with mindful movement. Integrate body, breath, and awareness in this comprehensive yoga flow.",
      color: "#138A5A",
    },
    {
      title: "Mindfulness / Meditation",
      time: "Sunday: 09:00 – 10:00",
      instructor: "Meditation Guide",
      description:
        "Begin the final day with stillness. Guided meditation to center yourself and cultivate inner peace.",
      color: "#F7C600",
    },
    {
      title: "Ecstatic Dance",
      time: "Saturday: 16:00 – 18:00",
      instructor: "Dance Facilitators",
      description:
        "Free-form movement and expression. Let the music move through you in this liberating dance experience.",
      color: "#F7C600",
    },
    {
      title: "Fire Dance",
      time: "Saturday: 22:00 – 23:00",
      instructor: "Fire Performers",
      description:
        "Mesmerizing fire performance and introduction to fire dancing. Watch the flames dance under the stars.",
      color: "#E6392F",
    },
    {
      title: "Graffiti Workshop",
      time: "Saturday: 14:00 – 16:00",
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
      time: "All Days: 12:00 – 18:00",
      instructor: "Face Painters",
      description:
        "Fun face painting for all ages. Transform yourself with colorful designs and creative airbrush art.",
      color: "#F7C600",
    },
    {
      title: "Natural Shapes",
      time: "Saturday: 11:00 – 13:00",
      instructor: "Nature Artist",
      description:
        "Create art using natural materials. Connect with nature through organic shapes and earth-based creativity.",
      color: "#138A5A",
    },
    {
      title: "Performance Rodkint",
      time: "Sunday: 17:00 – 18:00",
      instructor: "Rodkint Collective",
      description:
        "Live performance art experience. Witness boundary-pushing creative expression.",
      color: "#E6392F",
    },
  ];

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#2EC4B6] mb-4 transform -rotate-1 inline-block">
            Workshops
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Expand your mind, body, and creativity at Irie Knowledge Hut
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-gradient-to-r from-[#2EC4B6] to-[#138A5A] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 mb-16 transform rotate-0.5">
          <h2 className="font-['Bangers'] text-4xl text-white text-center mb-4">
            Irie Knowledge Hut
          </h2>
          <p className="font-['Poppins'] text-lg text-white text-center leading-relaxed max-w-3xl mx-auto">
            Beyond the music, Living Dub Festival offers a space for learning,
            healing, and creative expression. Join workshops in art, movement,
            meditation, and more. All workshops take place at the Irie Knowledge
            Hut, our dedicated community space for growth and connection.
          </p>
        </section>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.title}
              title={workshop.title}
              time={workshop.time}
              instructor={workshop.instructor}
              description={workshop.description}
              color={workshop.color}
              imageSrc={getWorkshopImage(workshop.title)}
            />
          ))}
        </div>

        {/* Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#E6392F] mb-4">
              Location
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              All workshops and activities take place at the{" "}
              <strong>Irie Knowledge Hut</strong>, located in the peaceful zone
              of the festival grounds. Look for the colorful signage and relaxed
              community vibes.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <div className="text-5xl mb-4">ℹ️</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-4">
              Participation
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              Most workshops are{" "}
              <strong>free and open to all festival-goers</strong>. Some
              workshops have limited capacity, so arrive early to secure your
              spot. All skill levels welcome—come with an open mind and heart.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
