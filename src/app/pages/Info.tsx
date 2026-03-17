import Button from '../components/Button';

export default function Info() {
  const faqs = [
    {
      question: 'What should I bring?',
      answer: 'Camping gear (tent, sleeping bag), comfortable shoes, weather-appropriate clothing, reusable water bottle, sunscreen, and good vibes!',
    },
    {
      question: 'Is camping included?',
      answer: 'Yes! All tickets include access to our camping area. Set up your tent and make yourself at home for the weekend.',
    },
    {
      question: 'Can I bring my kids?',
      answer: 'Absolutely! Living Dub Festival is family-friendly. We have special activities for children at the Irie Knowledge Hut.',
    },
    {
      question: 'Is there food available?',
      answer: 'Yes, we have multiple food vendors offering a variety of options including vegetarian and vegan choices.',
    },
    {
      question: 'Are pets allowed?',
      answer: 'We love animals, but for safety and comfort of all attendees, we ask that you leave pets at home.',
    },
    {
      question: 'What about accessibility?',
      answer: 'We strive to make the festival accessible to everyone. Contact us in advance for specific accessibility needs.',
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

        {/* Location */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#138A5A] to-[#2EC4B6] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 transform rotate-0.5">
            <h2 className="font-['Bangers'] text-4xl text-white mb-6">
              📍 Location
            </h2>
            <div className="bg-white rounded-2xl border-3 border-black p-6">
              <p className="font-['Poppins'] text-lg text-gray-800 mb-4">
                <strong>Beautiful Natural Grounds</strong>
              </p>
              <p className="font-['Poppins'] text-base text-gray-700 mb-4">
                Living Dub Festival takes place in a stunning natural setting, surrounded by trees and open fields. 
                The exact location will be shared with all ticket holders closer to the event date.
              </p>
              <p className="font-['Poppins'] text-sm text-gray-600 italic">
                Detailed directions, parking information, and public transport options will be provided to all attendees.
              </p>
            </div>
          </div>
        </section>

        {/* Festival Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Opening Hours */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
            <div className="text-5xl mb-4">🕐</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#E6392F] mb-4">
              Opening Hours
            </h3>
            <div className="space-y-3 font-['Poppins'] text-base text-gray-700">
              <p><strong>Friday:</strong> Gates open 12:00 • Music from 14:00</p>
              <p><strong>Saturday:</strong> All day • Music from 10:00</p>
              <p><strong>Sunday:</strong> All day • Festival ends 22:00</p>
            </div>
          </div>

          {/* Tickets */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
            <div className="text-5xl mb-4">🎫</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#F7C600] mb-4">
              Tickets
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-4">
              Weekend passes include access to all stages, workshops, and camping. Limited tickets available.
            </p>
            <Button href="https://example.com/tickets" external variant="primary">
              Buy Tickets
            </Button>
          </div>

          {/* Camping */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-0.5">
            <div className="text-5xl mb-4">⛺</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#138A5A] mb-4">
              Camping
            </h3>
            <p className="font-['Poppins'] text-base text-gray-700 mb-2">
              <strong>Included with all tickets</strong>
            </p>
            <ul className="font-['Poppins'] text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Bring your own tent and camping gear</li>
              <li>Shared shower and toilet facilities</li>
              <li>Designated quiet camping area available</li>
              <li>No caravans or camper vans</li>
            </ul>
          </div>

          {/* Food & Drinks */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-0.5">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-[#2EC4B6] mb-4">
              Food & Drinks
            </h3>
            <ul className="font-['Poppins'] text-base text-gray-700 space-y-2">
              <li>✅ Multiple food vendors on-site</li>
              <li>✅ Vegetarian and vegan options</li>
              <li>✅ Fresh juices and smoothies</li>
              <li>✅ Bring reusable bottles (free water refills)</li>
              <li>❌ No outside alcohol</li>
            </ul>
          </div>
        </section>

        {/* Festival Rules */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#E6392F] to-[#F48C06] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 transform -rotate-0.5">
            <h2 className="font-['Bangers'] text-4xl text-white mb-6">
              Festival Rules
            </h2>
            <div className="bg-white rounded-2xl border-3 border-black p-6">
              <ul className="font-['Poppins'] text-base text-gray-700 space-y-3">
                <li><strong>Respect</strong> – Treat everyone with kindness and consideration</li>
                <li><strong>No Drugs</strong> – Zero tolerance policy</li>
                <li><strong>Environment</strong> – Leave no trace, use bins and recycling</li>
                <li><strong>Safety</strong> – Look out for each other</li>
                <li><strong>Sound Levels</strong> – Respect quiet camping areas</li>
                <li><strong>Photography</strong> – Always ask before photographing people</li>
                <li><strong>ID Required</strong> – Bring valid ID (18+ for alcohol)</li>
              </ul>
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
      </div>
    </div>
  );
}