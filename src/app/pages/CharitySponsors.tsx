import Button from "../components/Button";

export default function CharitySponsors() {
  const goldSponsors = [
    "/images/charity_sponsors/gouden%20sponsors/tout%20bien.png",
    "/images/charity_sponsors/gouden%20sponsors/tent%20events.jpeg",
    "/images/charity_sponsors/gouden%20sponsors/thijs%20lybeart.png",
    "/images/charity_sponsors/gouden%20sponsors/gold%20mustache%20ipa.png",
  ];

  const silverSponsors = [
    "/images/charity_sponsors/zilveren%20sponsors/prik%20en%20tik.jpg",
    "/images/charity_sponsors/zilveren%20sponsors/statamat.svg",
    "/images/charity_sponsors/zilveren%20sponsors/van%20wymeersch.png",
    "/images/charity_sponsors/zilveren%20sponsors/vzw%20gooikenshoeve.jpg",
  ];

  const bronzeSponsors = [
    "/images/charity_sponsors/bronzen%20sponsers/anelec.svg",
    "/images/charity_sponsors/bronzen%20sponsers/assecure.png",
    "/images/charity_sponsors/bronzen%20sponsers/bakkerij%20van%20hecke.jpg",
    "/images/charity_sponsors/bronzen%20sponsers/cafe%20matheus.png",
    "/images/charity_sponsors/bronzen%20sponsers/Christelijke%20mutaliteit.png",
    "/images/charity_sponsors/bronzen%20sponsers/cuddens.png",
    "/images/charity_sponsors/bronzen%20sponsers/go%20muda.png",
    "/images/charity_sponsors/bronzen%20sponsers/studio%20imela.jpg",
    "/images/charity_sponsors/bronzen%20sponsers/tms.png",
    "/images/charity_sponsors/bronzen%20sponsers/yoga.png",
  ];

  const renderSponsorRow = (images: string[], imageSizeClass: string) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
      {images.map((src) => {
        const isExtraLargeSponsor =
          src.includes("tent%20events") || src.includes("tout%20bien");
        const isSlightlySmallerSponsor =
          src.includes("gold%20mustache%20ipa") ||
          src.includes("thijs%20lybeart");
        const sponsorSizeClass = isExtraLargeSponsor
          ? "h-[16rem] md:h-[18rem]"
          : isSlightlySmallerSponsor
            ? "h-[8rem] md:h-[10rem]"
            : imageSizeClass;
        const wrapperClass = isExtraLargeSponsor
          ? "flex items-center justify-center min-h-20 lg:col-span-2"
          : "flex items-center justify-center min-h-20";

        return (
          <div key={src} className={wrapperClass}>
            <img
              src={src}
              alt="Sponsor"
              className={`${sponsorSizeClass} w-auto object-contain`}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#138A5A] mb-4 transform rotate-1 inline-block">
            Charity & Sponsors
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Supporting community and culture
          </p>
        </div>

        {/* Charity Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#E6392F] to-[#F48C06] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform -rotate-1">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              Our Charity Partner
            </h2>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 transform rotate-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="w-full bg-white">
                  <img
                    src="/images/charity_sponsors/vzw%20hooikenshoeve.jpg"
                    alt="Vzw Gooikenshoeve"
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="w-full bg-white">
                  <img
                    src="/images/charity_sponsors/vzw%20hooikenshoeve%20sfeerfoto.png"
                    alt="Vzw Gooikenshoeve sfeerfoto"
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
              </div>

              {/* Charity Info */}
              <div>
                <h3 className="font-['Bangers'] text-3xl text-[#138A5A] mb-4">
                  Vzw Gooikenshoeve
                </h3>

                <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
                  Living Dub Festival koos ervoor om een deel van de opbrengsten
                  te doneren aan een lokaal goed doel dat nauw aansluit bij hun
                  kernwaarden: verbinding en respect.
                </p>

                <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
                  Vzw Gooikenshoeve is een zorgboerderij in Ertvelde, die een
                  warm nest biedt voor jongeren tussen 16 en 25 jaar met
                  psychische moeilijkheden. Er wordt gestreefd naar mentaal
                  herstel door warme nabijheid, diepmenselijke connectie en
                  onvoorwaardelijk engagement, niet gedreven door protocollen en
                  therapeutische reflexen. Alles draait om verbinding, met de
                  natuur, met elkaar en met zichzelf.
                </p>

                <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
                  Vzw Gooikenshoeve zorgt voor een complementair aanbod aan de
                  klassieke voorzieningen voor psychiatrische zorg en bijzondere
                  jeugdhulp. De meerwaarde van de werking berust vooral op de
                  absolute rust en pracht van de locatie en de veilige sociale
                  interactie binnen een kleinschalige en warme leefgemeenschap.
                </p>

                <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
                  Jongeren, vrijwilligers en begeleiders zorgen samen voor een
                  groot aantal boerderijdieren en doen aan biotuinbouw.
                  Geestelijke gezondheidszorg is het doel, kleinschalige land-
                  en tuinbouw het middel, gebaseerd op respect voor de natuur en
                  duurzaamheid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#138A5A] to-[#2EC4B6] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform rotate-1">
            <h2 className="font-['Luckiest_Guy'] text-4xl md:text-5xl text-white text-center">
              Our Sponsors
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 mb-6 transform -rotate-1">
                <h3 className="font-['Bangers'] text-4xl md:text-5xl text-[#F48C06] text-center">
                  Goud
                </h3>
              </div>
              {renderSponsorRow(goldSponsors, "max-h-[14rem] md:max-h-[16rem]")}
            </div>

            <div>
              <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 mb-6 transform rotate-1">
                <h3 className="font-['Bangers'] text-4xl md:text-5xl text-[#9CA3AF] text-center">
                  Zilver
                </h3>
              </div>
              {renderSponsorRow(
                silverSponsors,
                "max-h-[10.5rem] md:max-h-[12rem]",
              )}
            </div>

            <div>
              <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 mb-6 transform -rotate-0.5">
                <h3 className="font-['Bangers'] text-4xl md:text-5xl text-[#8B5E3C] text-center">
                  Brons
                </h3>
              </div>
              {renderSponsorRow(bronzeSponsors, "max-h-28 md:max-h-32")}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#E6392F] via-[#F7C600] to-[#138A5A] rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 text-center transform -rotate-0.5">
          <h3 className="font-['Bangers'] text-3xl text-white mb-4">
            Wil je sponsor worden?
          </h3>
          <p className="font-['Poppins'] text-lg text-white mb-6">
            Neem contact op voor sponsormogelijkheden
          </p>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </section>
      </div>
    </div>
  );
}
