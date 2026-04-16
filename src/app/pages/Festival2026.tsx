import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Button from "../components/Button";
import StageCard from "../components/StageCard";

export default function Festival2026() {
  const stages = [
    {
      name: "Wooden Roots Floor",
      description:
        "The main indoor stage featuring soundsystem clashes and roots reggae sessions. On Sunday we dedicate this stage to local artists from Evergem.",
      color: "#E6392F",
      rotation: "-1.5deg",
      imageSrc: "/images/stages/wooden roots floor.jpg",
    },
    {
      name: "Steppin' Grass Field",
      description:
        "Outdoor soundsystem main stage on the grass field. Dance under the sky, feel the earth beneath your feet, and step to the natural rhythm.",
      color: "#138A5A",
      rotation: "1deg",
      imageSrc: "/images/stages/steppin grass field.avif",
    },
    {
      name: "Irie Knowledge Hut",
      description:
        "Community learning space. Join workshops in henna art, yoga, meditation, graffiti and more. Or watch a fire dance or artistic performances. A place for creative expression and community connection.",
      color: "#F7C600",
      rotation: "-0.5deg",
      imageSrc:
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#E6392F] mb-4 transform rotate-1 inline-block">
            Festival 2026
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] mx-auto rounded-full"></div>
        </div>

        {/* Festival Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Poster/Image */}
            <div className="transform -rotate-2">
              <ImageWithFallback
                src="/images/events/affiche festival.jpg"
                alt="Living Dub Festival 2026"
                className="w-full h-[500px] object-cover object-center rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Festival Info */}
            <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 transform rotate-1">
              <h2 className="font-['Bangers'] text-4xl text-[#138A5A] mb-6">
                Join Us This Summer
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">📅</div>
                  <div>
                    <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800">
                      Date
                    </h4>
                    <p className="font-['Poppins'] text-lg text-gray-700">
                      3-5 July 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800">
                      Location
                    </h4>
                    <p className="font-['Poppins'] text-lg text-gray-700">
                      Schroonhoek Sleidinge
                    </p>
                    <p className="font-['Poppins'] text-sm text-gray-600">
                      Full details shared with ticket holders
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-3xl">🎵</div>
                  <div>
                    <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800">
                      Music
                    </h4>
                    <p className="font-['Poppins'] text-lg text-gray-700">
                      Local artists in rap, jazz, pop & local DJ's
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-3xl">⛺</div>
                  <div>
                    <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800">
                      Camping
                    </h4>
                    <p className="font-['Poppins'] text-lg text-gray-700">
                      On-site free camping available
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-['Poppins'] text-base leading-relaxed text-gray-700 mb-6">
                Three days of heavyweight dub, roots reggae, soundsystem
                culture, workshops and community connection in a beautiful
                natural setting.
              </p>

              <Button
                href="https://living-dub-festival-2026.eventsquare.store/"
                external
                variant="primary"
              >
                Get Your Tickets
              </Button>
            </div>
          </div>
        </section>

        {/* Stages Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-[#F7C600] mb-4 transform -rotate-1 inline-block">
              The Three Stages
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-700">
              Each stage offers its own unique experience and energy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stages.map((stage) => (
              <StageCard
                key={stage.name}
                name={stage.name}
                description={stage.description}
                color={stage.color}
                rotation={stage.rotation}
                linkTo="/timetable"
                imageSrc={stage.imageSrc}
              />
            ))}
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 md:p-12">
          <h3 className="font-['Bangers'] text-4xl text-white text-center mb-8">
            Explore More
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button to="/timetable" variant="primary">
              View Timetable
            </Button>
            <Button to="/lineup" variant="secondary">
              View Line-up
            </Button>
            <Button to="/timetable#festival-workshops" variant="outline">
              Workshops
            </Button>
            <Button to="/soundsystems" variant="primary">
              Soundsystems
            </Button>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-[#138A5A] mb-4 transform rotate-1 inline-block">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
              <div className="text-5xl mb-4 text-[#E6392F]">𖦹</div>
              <h4 className="font-['Fredoka'] text-2xl font-bold text-[#E6392F] mb-3">
                Authentic Soundsystem Culture
              </h4>
              <p className="font-['Poppins'] text-base leading-relaxed text-gray-700">
                Experience the true power of dub with soundsystems,
                soundclashes, and sessions from the best selectors and operators
                in the scene.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-3">
                Natural Setting
              </h4>
              <p className="font-['Poppins'] text-base leading-relaxed text-gray-700">
                Surrounded by nature, our festival grounds provide the perfect
                backdrop for music, camping, and connection with both the earth
                and each other.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-0.5">
              <div className="text-5xl mb-4">🧘</div>
              <h4 className="font-['Fredoka'] text-2xl font-bold text-[#2EC4B6] mb-3">
                Workshops & Healing Arts
              </h4>
              <p className="font-['Poppins'] text-base leading-relaxed text-gray-700">
                Beyond the music, expand your horizons with yoga, meditation,
                art workshops, henna and more or watch performances like fire
                dance, or art at the Irie Knowledge Hut.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-0.5">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="font-['Fredoka'] text-2xl font-bold text-[#F48C06] mb-3">
                Community Connection
              </h4>
              <p className="font-['Poppins'] text-base leading-relaxed text-gray-700">
                Meet like-minded souls, make new friends, and be part of a
                community built on respect, connection, and shared love for the
                culture.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
