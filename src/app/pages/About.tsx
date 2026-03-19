export default function About() {
  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#138A5A] mb-4 transform -rotate-1 inline-block">
            About Living Dub
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-12 transform rotate-0.5">
          <h2 className="font-['Bangers'] text-4xl text-[#E6392F] mb-6">
            Our Philosophy
          </h2>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700 mb-4">
            Living Dub's vision revolves around two words: connection and
            respect. They are at the core of the organization and are woven into
            every decision that shapes our concepts.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700">
            Respect is our fundamental attitude, from which connection is
            pursued. We see connection as a powerful path that is built on and
            begins with respect as its foundation.
          </p>
        </section>

        {/* Respect Section */}
        <section className="bg-gradient-to-br from-[#E6392F] to-[#F48C06] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-12 transform -rotate-1">
          <div className="bg-white rounded-2xl border-3 border-black p-6 inline-block mb-6">
            <h2 className="font-['Luckiest_Guy'] text-5xl text-[#E6392F] m-0">
              Respect
            </h2>
          </div>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white mb-4">
            We consider respect an umbrella value that includes all positive
            values. If you live with respect for yourself, others, materials,
            and nature, you are, in our view, living a positive way of life. It
            is therefore a basic attitude that we adopt and aim to carry out at
            all times.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white">
            It is the foundation of our organization. From that foundation, we
            deliberately chose to focus primarily on the reggae/dub genre. The
            lyrics, the messages shared within it, and the overall atmosphere
            all strive to express this value.
          </p>
        </section>

        {/* Connection Section */}
        <section className="bg-gradient-to-br from-[#138A5A] to-[#2EC4B6] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-12 transform rotate-1">
          <div className="bg-white rounded-2xl border-3 border-black p-6 inline-block mb-6">
            <h2 className="font-['Luckiest_Guy'] text-5xl text-[#138A5A] m-0">
              Connection
            </h2>
          </div>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white mb-4">
            From that attitude of respect, we strive for connection. We strongly
            believe connection is what people and society need in order to grow
            in positive ways.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white">
            This goes beyond belief alone. A wide range of scientific research
            supports our plea for connectedness as one of the basic human needs.
            Self-determination theory in psychology identifies it as one of the
            factors that leads to growth and well-being.
          </p>
        </section>

        {/* Quote Section */}
        <section className="bg-gradient-to-r from-[#F7C600] to-[#F48C06] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 md:p-16 text-center mb-12 transform -rotate-0.5">
          <div className="h-1 w-24 bg-black mx-auto rounded-full mb-6"></div>
          <blockquote className="font-['Permanent_Marker'] text-2xl md:text-3xl text-black leading-relaxed mb-6">
            No man is an island, so Connection and Respect is what the people
            want and what the people need.
          </blockquote>
          <p className="font-['Bangers'] text-xl md:text-2xl text-black mb-6">
            Ever faithful, Ever Sure
            <br />
            Ever Living Dub
          </p>
          <div className="h-1 w-24 bg-black mx-auto rounded-full"></div>
        </section>

        {/* Organization Section */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
          <h2 className="font-['Bangers'] text-4xl text-[#138A5A] mb-6">
            The Organization
          </h2>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700 mb-4">
            Living Dub Festival is organized by a dedicated team of music
            lovers, soundsystem operators, and community builders who share a
            passion for authentic dub culture and meaningful connection.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700 mb-4">
            We work year-round to curate lineups that honor the roots of reggae
            and dub while supporting emerging artists. We collaborate with local
            communities, environmental initiatives, and cultural organizations
            to ensure our festival leaves a positive impact.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700">
            This is not just our festival—it's yours. It belongs to everyone who
            shows up with respect, who connects with an open heart, and who
            believes in the power of music to bring people together.
          </p>
        </section>
      </div>
    </div>
  );
}
