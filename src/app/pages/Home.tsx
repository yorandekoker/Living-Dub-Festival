import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Button from "../components/Button";
import StageCard from "../components/StageCard";
import WorkshopCard from "../components/WorkshopCard";
import { getWorkshopImage } from "../utils/imageLookup";

export default function Home() {
  const stages = [
    {
      name: "Wooden Roots Floor",
      description:
        "The main stage featuring dub and roots reggae vibes. Where the deepest bass meets conscious lyrics. On Sunday we dedicate this stage to local artists from Evergem.",
      color: "#E6392F",
      rotation: "-1deg",
      imageSrc: "/images/stages/wooden roots floor.jpg",
    },
    {
      name: "Steppin' Grass Field",
      description:
        "Outdoor soundsystem main stage on the grass field. Dance under the sky, feel the earth beneath your feet, and step to the natural rhythm.",
      color: "#138A5A",
      rotation: "1.5deg",
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

  const workshops = [
    {
      title: "Henna Art",
      imageKey: "Henna Workshop",
      time: "Friday 15:00 – 17:00",
      color: "#E6392F",
    },
    { title: "Yoga Flow", time: "Saturday 13:15 – 14:15", color: "#138A5A" },
    {
      title: "Meditation",
      imageKey: "Mindfulness / Meditation",
      time: "Sunday 09:00 – 10:00",
      color: "#F7C600",
    },
    { title: "Fire Dance", time: "Saturday 22:00 – 23:00", color: "#E6392F" },
  ];

  return (
    <div className="bg-[#FFF9E6]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7C600] via-[#E6392F] to-[#138A5A] border-b-4 border-black">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-25">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1746211986963-6b642702fb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdnYWUlMjBmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc3Mjc5Mjk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Festival crowd"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Festival Title - Stacked Text Blocks with Colored Outlines */}
          <div className="space-y-4 mb-8">
            <div className="inline-block">
              <h1
                className="home-hero-title text-5xl md:text-7xl m-0 transform -rotate-2"
                style={{
                  color: "#138A5A",
                  filter: "drop-shadow(6px 6px 0px rgba(0,0,0,0.3))",
                }}
              >
                Living Dub
              </h1>
            </div>
            <div className="inline-block">
              <h1
                className="home-hero-title text-5xl md:text-7xl m-0 transform rotate-1"
                style={{
                  color: "#E6392F",
                  filter: "drop-shadow(6px 6px 0px rgba(0,0,0,0.3))",
                }}
              >
                Festival
              </h1>
            </div>
            <div className="inline-block">
              <h1
                className="home-hero-title text-5xl md:text-7xl m-0 transform -rotate-1"
                style={{
                  color: "#F7C600",
                  filter: "drop-shadow(6px 6px 0px rgba(0,0,0,0.3))",
                }}
              >
                2026
              </h1>
            </div>
          </div>

          {/* Date */}
          <div className="inline-block bg-black px-6 py-3 rounded-full mb-8 transform rotate-1">
            <p className="font-['Bangers'] text-2xl text-[#F7C600] m-0">
              3-5 July 2026
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/timetable" variant="primary">
              View Timetable
            </Button>
            <Button to="/lineup" variant="secondary" className="text-black">
              View Line-up
            </Button>
            <Button
              href="https://living-dub-festival-2026.eventsquare.store/"
              external
              variant="outline"
              className="hover:bg-[#0F744C]"
              style={{
                backgroundColor: "#138A5A",
                color: "#000000",
                borderColor: "#000000",
              }}
            >
              Buy Tickets
            </Button>
          </div>
        </div>

        {/* Decorative Blob */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#138A5A] rounded-full opacity-20 -mb-32 -ml-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F7C600] rounded-full opacity-20 -mt-24 -mr-24"></div>
      </section>

      {/* Festival Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 transform -rotate-1">
          <h2 className="font-['Bangers'] text-4xl md:text-5xl text-[#138A5A] mb-6">
            Connection • Respect
          </h2>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700">
            Living Dub Festival is more than music—it's a celebration of
            soundsystem culture, roots reggae, and the power of human
            connection. For three days, we gather in respect and unity, sharing
            vibrations that uplift the spirit and connect the community. Join us
            for a journey through dub, bass, consciousness, and joy.
          </p>
        </div>
      </section>

      {/* Festival Stages */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-[#E6392F] mb-4 transform rotate-1 inline-block">
            Three Stages
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Each stage brings its own unique energy and vibe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Workshops Preview */}
      <section className="bg-gradient-to-br from-[#138A5A] to-[#2EC4B6] py-16 md:py-20 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-white mb-4 transform -rotate-1 inline-block">
              Workshops & Activities
            </h2>
            <p className="font-['Poppins'] text-lg text-white">
              Expand your mind, body, and spirit at Irie Knowledge Hut
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop) => (
              <WorkshopCard
                key={workshop.title}
                title={workshop.title}
                time={workshop.time}
                color={workshop.color}
                imageSrc={getWorkshopImage(workshop.imageKey ?? workshop.title)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/timetable#festival-workshops" variant="primary">
              View All Workshops
            </Button>
          </div>
        </div>
      </section>

      {/* Soundsystem Culture */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645536729519-134e3b7e9e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZHN5c3RlbSUyMHNwZWFrZXJzJTIwcmVnZ2FlfGVufDF8fHx8MTc3Mjc5Mjk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Soundsystem speakers"
              className="w-full h-96 object-cover object-center rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform rotate-2"
            />
          </div>
          <div className="bg-white rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
            <h3 className="font-['Bangers'] text-4xl text-[#E6392F] mb-4">
              Soundsystem Culture
            </h3>
            <p className="font-['Poppins'] text-base leading-relaxed text-gray-700 mb-6">
              Experience the authentic power of dub with heavyweight
              soundsystems from across the community. Feel the bass in your
              chest, the riddim in your feet, and the connection in the air.
            </p>
            <Button to="/soundsystems" variant="secondary">
              Meet the Soundsystems
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-[#138A5A] mb-4 transform rotate-1 inline-block">
            Festival Vibes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1573463908761-567b9356c64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbXVzaWMlMjBmZXN0aXZhbCUyMHN0YWdlfGVufDF8fHx8MTc3Mjc5Mjk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Festival stage"
            className="w-full h-64 object-cover object-center rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1593152961455-b943e1cea86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMG91dGRvb3JzfGVufDF8fHx8MTc3Mjc5Mjk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yoga session"
            className="w-full h-64 object-cover object-center rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629332791370-77208e6cbb67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW5uYSUyMGFydCUyMGhhbmR8ZW58MXx8fHwxNzcyNzkyOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Henna art"
            className="w-full h-64 object-cover object-center rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] py-20 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Luckiest_Guy'] text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Join the Gathering
          </h2>
          <p className="font-['Poppins'] text-xl text-white mb-8">
            Secure your place at Living Dub Festival 2026
          </p>
          <Button
            href="https://living-dub-festival-2026.eventsquare.store/"
            external
            variant="primary"
          >
            Get Your Tickets Now
          </Button>
        </div>
      </section>
    </div>
  );
}
