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
            Living Dub Festival was born from a simple truth: music connects us. In a world that often 
            pulls us apart, we create a space where people come together through the power of reggae, 
            dub, and soundsystem culture.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700">
            We believe in the transformative power of bass, the wisdom of roots reggae, and the 
            importance of community. This festival is built on two core principles that guide 
            everything we do.
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
            Respect for each other, for the music, for the culture, and for the earth. We honor the 
            traditions of soundsystem culture while creating a safe, welcoming space for everyone.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white">
            Respect means listening as much as we speak, holding space for others, and recognizing 
            that we're all part of the same rhythm. It's the foundation of everything we build together.
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
            Human beings are wired for connection. Through music, dance, conversation, and shared 
            experience, we fulfill a fundamental human need—the need to belong, to be seen, and to 
            be part of something greater than ourselves.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-white">
            At Living Dub Festival, connection happens in many ways: the collective energy on the 
            dancefloor, a conversation at sunrise, a workshop that opens your mind, or simply 
            sharing space with like-minded souls.
          </p>
        </section>

        {/* Psychology of Connection */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-12">
          <h2 className="font-['Bangers'] text-4xl text-[#F48C06] mb-6">
            The Psychology of Connection
          </h2>
          <p className="font-['Poppins'] text-base leading-relaxed text-gray-700 mb-6">
            Research in self-determination theory shows that human beings have three fundamental 
            psychological needs: autonomy, competence, and relatedness. Living Dub Festival speaks 
            directly to the need for <strong>relatedness</strong>—the need to connect with others 
            and feel part of a community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFF3D6] rounded-2xl border-3 border-black p-6 transform -rotate-1">
              <div className="text-4xl mb-3">🎵</div>
              <h4 className="font-['Fredoka'] text-xl font-bold text-[#E6392F] mb-2">
                Musical Connection
              </h4>
              <p className="font-['Poppins'] text-sm text-gray-700">
                Shared musical experiences create bonds and collective memory
              </p>
            </div>
            <div className="bg-[#FFF3D6] rounded-2xl border-3 border-black p-6 transform rotate-1">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-['Fredoka'] text-xl font-bold text-[#138A5A] mb-2">
                Social Connection
              </h4>
              <p className="font-['Poppins'] text-sm text-gray-700">
                Face-to-face interactions build trust and meaningful relationships
              </p>
            </div>
            <div className="bg-[#FFF3D6] rounded-2xl border-3 border-black p-6 transform -rotate-0.5">
              <div className="text-4xl mb-3">🧘</div>
              <h4 className="font-['Fredoka'] text-xl font-bold text-[#2EC4B6] mb-2">
                Spiritual Connection
              </h4>
              <p className="font-['Poppins'] text-sm text-gray-700">
                Shared values and purpose create deeper meaning
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-gradient-to-r from-[#F7C600] to-[#F48C06] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 md:p-16 text-center mb-12 transform -rotate-0.5">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="font-['Permanent_Marker'] text-2xl md:text-3xl text-black leading-relaxed mb-6">
            No man is an island, so Connection and Respect is what the people want and what the people need.
          </blockquote>
          <div className="h-1 w-24 bg-black mx-auto rounded-full"></div>
        </section>

        {/* Organization Section */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
          <h2 className="font-['Bangers'] text-4xl text-[#138A5A] mb-6">
            The Organization
          </h2>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700 mb-4">
            Living Dub Festival is organized by a dedicated team of music lovers, soundsystem 
            operators, and community builders who share a passion for authentic dub culture and 
            meaningful connection.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700 mb-4">
            We work year-round to curate lineups that honor the roots of reggae and dub while 
            supporting emerging artists. We collaborate with local communities, environmental 
            initiatives, and cultural organizations to ensure our festival leaves a positive impact.
          </p>
          <p className="font-['Poppins'] text-lg leading-relaxed text-gray-700">
            This is not just our festival—it's yours. It belongs to everyone who shows up with 
            respect, who connects with an open heart, and who believes in the power of music to 
            bring people together.
          </p>
        </section>
      </div>
    </div>
  );
}