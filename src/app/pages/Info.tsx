import { useState } from "react";
import Button from "../components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog";

export default function Info() {
  const [showTerms, setShowTerms] = useState(false);

  const faqs = [
    {
      question: "What should I bring?",
      answer:
        "Camping gear (tent, sleeping bag), comfortable shoes, weather-appropriate clothing, reusable water bottle, sunscreen, and good vibes!",
    },
    {
      question: "Is camping included?",
      answer:
        "Yes! All tickets include access to our camping area. Set up your tent and make yourself at home for the weekend.",
    },
    {
      question: "Can I bring my kids?",
      answer:
        "Absolutely! Living Dub Festival is family-friendly. We have special activities for children at the Irie Knowledge Hut.",
    },
    {
      question: "Is there food available?",
      answer:
        "Yes, we have multiple food vendors offering a variety of options including vegetarian and vegan choices.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "We love animals, but for safety and comfort of all attendees, we ask that you leave pets at home.",
    },
    {
      question: "What about accessibility?",
      answer:
        "We strive to make the festival accessible to everyone. Contact us in advance for specific accessibility needs.",
    },
  ];

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#F48C06] mb-4 transform -rotate-1 inline-block">
            Practical Info
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Everything you need to know for your festival experience
          </p>
        </div>

        <section className="space-y-8 mb-12">
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#F7C600] mb-4">
              Prices and Tickets
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-3 leading-relaxed">
              Ticket prices are:
            </p>
            <ul className="font-['Poppins'] text-base text-gray-700 space-y-2 list-disc list-inside mb-4">
              <li>€60 = weekend ticket (3 days)</li>
              <li>€25 = day ticket</li>
              <li>€5 = parking</li>
              <li>€5 = campervan-camping</li>
              <li>€5 = bus Sleidinge Station - Festival</li>
              <li>FREE = camping</li>
              <li>FREE = children under 12 (with valid proof of age)</li>
              <li>
                FREE = nearby streets (informed in advance; only on proof of
                residency)
              </li>
            </ul>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Buy your tickets via the link below, which takes you directly to
              the ticket page!
            </p>
            <a
              href="https://living-dub-festival-2026.eventsquare.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 font-['Bangers'] text-lg px-6 py-3 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-1"
            >
              Buy Tickets
            </a>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed mb-4">
              Please also read the general terms and conditions. Failing to
              follow them can result in denied access to the festival grounds.
            </p>
            <button
              onClick={() => setShowTerms(true)}
              className="inline-block font-['Bangers'] text-lg px-6 py-3 bg-[#E6392F] text-white rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-1"
            >
              View Terms & Conditions
            </button>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#F7C600] mb-4">
              Bicycle
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              Living Dub Festival promotes cycling from an ecological point of
              view. That is why bicycle parking on site is free. The bicycle
              parking entrance is located at the end of the street. We recommend
              locking your bike well, as the bicycle parking area is not
              permanently supervised. The organization cannot be held
              responsible for damage or theft. The distance from Ghent to the
              festival grounds is only 10 km. A pleasant bike ride of about 35
              minutes is definitely a realistic option to get there.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-0.5">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-4">
              How to get there by public transport & The Living Dub Bus
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Met een combinatie van het openbaar vervoer en de bus die Living
              Dub zal inleggen, bereik je makkelijk het festivalterrein. Kies of
              je met De Lijn of met de trein naar Sleidinge station komt en neem
              van hieraf vervolgens onze bus richting het festivalterrein en de
              camping. Een heen- en terug kaartje kost slechts €5 en kan je
              aankopen in onze ticketshop.
            </p>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed font-bold">
              Belangrijk: de Living Dub Bus rijdt slechts op beperkte uren.
            </p>
            <ul className="font-['Poppins'] text-base text-gray-700 space-y-1 list-disc list-inside mb-6">
              <li>Vrijdag 03/07: tbc</li>
              <li>Zaterdag 04/07: tbc</li>
              <li>Zondag 05/07: tbc</li>
              <li>Maandag 06/07: tbc</li>
            </ul>

            <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-3">
              Trein – NMBS
            </h4>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Vanaf zowel Gent-Sint-Pieters, Gentbrugge als Gent-Dampoort kan je
              de trein richting Eeklo nemen en afstappen in Sleidinge. De
              treinreis duurt ongeveer 25 minuten als je vertrekt vanuit
              Gent-Sint-Pieters. De Living Dub Bus vertrekt aan het station van
              Sleidinge.
            </p>

            <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-3">
              Bus – De Lijn
            </h4>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              Sleidinge is bereikbaar met Lijn 56. Deze vertrekt vanaf de halte
              Gent Zuid en je dient af te stappen aan de halte Sleidinge
              Wurmstraat. De rit duurt ongeveer 25 minuten. Van hieruit is het
              nog 13 minuten stappen tot Sleidinge station, van waaruit de
              Living Dub bus vertrekt.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#F7C600] mb-4">
              Accessibility for persons with reduced mobility
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              Because Living Dub Festival wants to include everyone, we have
              provided accessible toilets on both the festival grounds and the
              camping area. Every stage is accessible, and no raised obstacles
              were added.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-0.5">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-4">
              Policy
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Living Dub Festival is rooted in its core values: connection and
              respect. Anyone who does not behave according to these values may
              be denied access to the grounds. A key part of respect is
              following our policy. You can find it in the general terms and
              conditions available during ticket purchase.
            </p>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Important camping rules:
            </p>
            <ul className="font-['Poppins'] text-base text-gray-700 space-y-2 list-disc list-inside mb-4">
              <li>
                No amplified music is allowed after festival hours until 07:00
                in the morning.
              </li>
              <li>
                No BBQs or other gas fires are allowed. Plenty of food options
                are provided by us.
              </li>
              <li>No campfires are allowed.</li>
            </ul>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              You can find our general terms and conditions in the document
              below.
            </p>
            <button
              onClick={() => setShowTerms(true)}
              className="inline-block mt-4 font-['Bangers'] text-lg px-6 py-3 bg-[#138A5A] text-white rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform -rotate-1"
            >
              View Terms & Conditions
            </button>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-0.5">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#2EC4B6] mb-4">
              Facilities on the festival grounds
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              In addition to the cultural and two musical stages, the festival
              grounds offer many other features. There is also a small market, a
              children's garden (until 22:00 every day), and a bar.
            </p>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              There are also three food trucks (Njam Njam Jamaica, De Volxkeuken
              and Strazoli) and an organic ice cream/dessert stand (Ni Amo).
            </p>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              The festival grounds are also equipped with sufficient
              gender-inclusive toilets and portable sinks.
            </p>{" "}
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              A handwashing sink is also available on the festival grounds where
              you can freshen up.
            </p>{" "}
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#E6392F] mb-4">
              Facilities on the camping area
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              An info point is available on the campsite. Breakfast is also
              served there on Saturday and Sunday morning from 09:00 to 11:00.
              The camping area is also equipped with sufficient toilets and
              portable sinks.
            </p>
            <p className="font-['Poppins'] text-base text-gray-700 mt-4 leading-relaxed">
              A handwashing sink is also available at the campsite where you can
              freshen up.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#F7C600] mb-4">
              Important extra camping rules
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-3 leading-relaxed">
              We would like to emphasize the following camping rules:
            </p>
            <ul className="font-['Poppins'] text-base text-gray-700 space-y-2 list-disc list-inside">
              <li>
                No amplified music is allowed after festival hours until 07:00
                in the morning.
              </li>
              <li>
                No BBQs or other gas fires are allowed. Plenty of food options
                are provided by us.
              </li>
              <li>No campfires are allowed.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-0.5">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-4">
              Backpacks and the festival grounds
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              For safety reasons, backpacks are not allowed at Living Dub
              Festival. Exceptions apply to the backpacks of our artists and
              stand holders. An exception is also made for parents of young
              children (under 6 years old), as we are a family festival and
              these children may need extra items that are not available on the
              festival grounds. Security at the entrance will strictly enforce
              this. Small handbags, crossbody bags, or waist pouches are allowed
              so visitors can keep their most valuable belongings with them.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-0.5">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#2EC4B6] mb-4">
              Animals
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              Animals are not allowed on the festival grounds or campsite
              because they may pose a potential risk to the public and to each
              other. This will be checked at the entrance. Exceptions are made
              for guide dogs and assistance dogs.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#E6392F] mb-4">
              Photography and videography
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-700 mb-4 leading-relaxed">
              When buying a ticket you waive your portrait rights. This means
              smile, you're on camera.
            </p>
            <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-3">
              Photography
            </h4>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4 leading-relaxed">
              Our festival photographer is Noah (Instagram: @bootvannoot).
              Fascinated by music and visuals from a young age, he found in
              photography a way to bring those two worlds together and offer a
              glimpse into the underground music scene that has welcomed him for
              many years. He studied professional photography at KISP in Ghent,
              where he developed his own colorful and distinctive portrait
              style. In recent years, he has gained experience at events
              (festivals, concerts, free parties, and club nights) in Belgium,
              but also in the UK, where he found his second home. Through his
              colorful lens, he captures spontaneity, connection, and unfiltered
              beauty.
            </p>
            <div className="mb-6">
              <img
                src="/images/crews/fotograaf.jpg"
                alt="Festival photographer Noah"
                className="w-full max-w-[18rem] h-auto rounded-2xl border-3 border-black"
              />
            </div>
            <h4 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-3">
              Videography
            </h4>
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed">
              This fantastic edition of Living Dub will be filmed and edited by
              Josse (@Josse.vfx). He started editing in Adobe Premiere Pro at
              age twelve, where he mainly made gaming videos. Later, he
              discovered reggae and dub culture. Since then, he has focused more
              on filming and editing reggae and dub events, shaping the warm
              atmosphere into a beautiful aftermovie. He is currently 17 and
              recently started studying videography at school to broaden his
              skills.
            </p>
            <div className="mt-4">
              <img
                src="/images/crews/videograaf.jpg"
                alt="Festival videographer Josse"
                className="w-full max-w-xl h-auto rounded-2xl border-3 border-black"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-['Luckiest_Guy'] text-5xl text-[#138A5A] mb-2 transform rotate-1 inline-block">
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                style={{ transform: `rotate(${Math.random() * 1 - 0.5}deg)` }}
              >
                <h4 className="font-['Fredoka'] text-lg font-bold text-gray-800 mb-2">
                  {faq.question}
                </h4>
                <p className="font-['Poppins'] text-base text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-['Poppins'] text-base text-gray-700 mb-4">
              Have more questions? We're here to help!
            </p>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </section>

        {/* Terms and Conditions Modal */}
        <Dialog open={showTerms} onOpenChange={setShowTerms}>
          <DialogContent className="max-h-[80vh] overflow-y-auto max-w-4xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                General Terms and Conditions
              </DialogTitle>
              <DialogClose />
            </DialogHeader>
            <div className="font-['Poppins'] text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Living Dub Festival Terms and Conditions
                </h3>
                <p className="mb-2">2026</p>
              </div>

              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  Festival tickets are non-refundable and cannot be exchanged
                  for tickets to another event.
                </li>
                <li>
                  Loss or theft of the festival ticket is the responsibility of
                  the purchaser and does not entitle replacement or refund.
                </li>
                <li>
                  It is not permitted to bring professional photography, film
                  and recording equipment to the festival grounds. Beverages,
                  glass objects, plastic bottles, cans, drugs, fireworks,
                  weapons, sharp objects or other objects deemed dangerous by
                  the organization are prohibited on the festival grounds.
                  Security personnel will confiscate these items at the
                  entrance. This list is not exhaustive and may be supplemented
                  at any time.
                </li>
                <li>
                  It is strictly forbidden to make open fires on the festival
                  grounds or camping areas. This includes the use of BBQs,
                  campfires, gas fires, etc. This list is not limitative.
                </li>
                <li>
                  By entering the festival grounds, you agree to all preventive
                  and controlling measures taken by the organization or security
                  team. This includes, among other things, that your pockets and
                  bags can be checked and that you can be frisked by a security
                  officer. Failure to comply with these measures will result in
                  denial of access to the festival grounds.
                </li>
                <li>
                  Do not buy festival tickets on the street. These tickets may
                  be counterfeit. Only buy festival tickets through official
                  websites.
                </li>
                <li>
                  Neither the artists and the organization of the festival, nor
                  the Belgian Railways, nor bus companies are liable for damage,
                  loss or theft, or for any accident that may occur on the way
                  to the festival.
                </li>
                <li>
                  Official sales of T-shirts and souvenirs are only possible
                  within the festival grounds.
                </li>
                <li>
                  Festival tickets may not be used for commercial or promotional
                  purposes unless authorized by the organization. It is
                  forbidden to engage in any form of promotional or commercial
                  activity on the festival grounds without prior authorization
                  from the organization.
                </li>
                <li>
                  The ticket purchaser must comply with the 'Belgian law
                  concerning the sale of event tickets'. 'The law concerning the
                  sale of access tickets to events (BS 30 July 2013).'
                </li>
                <li>
                  Changes in the line-up have no consequences for the festival
                  ticket, whole or in part. The organization is not responsible
                  for changes due to force majeure.
                </li>
                <li>
                  Since the event takes place outdoors, the organization wishes
                  to draw your attention to possible risks for which we disclaim
                  all liability.
                </li>
                <li>
                  Illegal copying of the festival ticket will be prosecuted by
                  law.
                </li>
                <li>
                  The organization cannot be held liable for any damage, loss or
                  theft on the camping grounds.
                </li>
                <li>
                  Recordings and photographs are taken during the festival. It
                  is possible that you will be filmed. By entering the festival,
                  you waive your portrait rights.
                </li>
                <li>
                  The organization and/or the official distributor of the
                  festival tickets reserves the right to verify the identity of
                  each festival visitor.
                </li>
                <li>
                  Living Dub Festival welcomes everyone, regardless of race,
                  origin, gender, sexual orientation or religion. Any form of
                  disrespect towards others will have legal consequences.
                </li>
                <li>
                  Alcohol is sold exclusively to persons aged 16 years or older.
                  Spirits are sold exclusively to persons aged 18 years or
                  older. You may be asked to provide proof of identity. If you
                  refuse, the organization may deny the sale.
                </li>
                <li>
                  Animals are not allowed on the festival grounds and camping
                  because they pose a potential risk to the public and to each
                  other. This will be monitored at the entrance. Exceptions are
                  made for guide dogs and service dogs.
                </li>
                <li>
                  For safety reasons, backpacks are not allowed at Living Dub
                  Festival. An exception to this concerns the backpacks of our
                  artists and stand holders. Furthermore, an exception is made
                  for parents of young children (under 6 years old) because
                  Living Dub Festival positions itself as a family festival and
                  these children sometimes need extra items that are not
                  available on the festival grounds. Security at the entrance
                  will strictly monitor this. What is allowed are small
                  handbags, pouches or waist bags so that the most valuable
                  items can be kept with you.
                </li>
                <li>
                  The organization cannot in any way be held liable for matters
                  arising from the behavior of visitors. Visitors bear full
                  responsibility for the consequences of their behavior.
                </li>
                <li>
                  Visitors commit to minimizing noise on the camping site. This
                  includes a ban on amplified sound systems after festival
                  closing hours.
                </li>
                <li>
                  When purchasing a 'Children under 12 years old' ticket, a
                  check will be performed at the entrance to the festival
                  grounds. Ticket holders must present their birth certificate
                  or other legitimate document with their child's date of birth
                  before access is granted.
                </li>
                <li>
                  The organization reserves the right to deny access to the
                  festival grounds and the entire site to anyone who violates
                  these terms and conditions, regardless of ticket purchase.
                </li>
              </ol>

              <div className="pt-2">
                <h4 className="font-bold text-base mb-2">
                  Explicit Emphasis on Additional Camping Rules
                </h4>
                <p className="mb-2">
                  We would like to emphasize the following camping rules once
                  again:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    No amplified music is allowed after festival hours until
                    07:00 in the morning.
                  </li>
                  <li>
                    No BBQs or other gas fires are allowed. We provide
                    sufficient food options.
                  </li>
                  <li>No campfires are allowed.</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
