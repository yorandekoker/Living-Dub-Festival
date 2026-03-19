import { Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#FFF9E6] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Luckiest_Guy'] text-6xl md:text-7xl text-[#2EC4B6] mb-4 transform rotate-1 inline-block">
            Contact Us
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-700">
            Get in touch with the Living Dub Festival team
          </p>
        </div>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-center transform -rotate-1">
            <div className="bg-[#E6392F] w-16 h-16 rounded-full border-3 border-black flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-2">
              Email
            </h3>
            <a
              href="mailto:livingdub@outlook.com"
              className="font-['Poppins'] text-sm text-[#E6392F] hover:underline"
            >
              livingdub@outlook.com
            </a>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-center transform rotate-1">
            <div className="bg-[#138A5A] w-16 h-16 rounded-full border-3 border-black flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-white" size={28} />
            </div>
            <h3 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-2">
              Social Media
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600">
              Follow us for updates
            </p>
          </div>

          {/* Response Time */}
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-center transform -rotate-0.5">
            <div className="bg-[#F7C600] w-16 h-16 rounded-full border-3 border-black flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⏱️</span>
            </div>
            <h3 className="font-['Fredoka'] text-xl font-bold text-gray-800 mb-2">
              Response Time
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-600">
              We reply within 48 hours
            </p>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="bg-gradient-to-r from-[#138A5A] to-[#2EC4B6] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 mb-16 transform rotate-0.5">
          <h2 className="font-['Bangers'] text-3xl text-white text-center mb-6">
            Connect on Social Media
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61586308133217&sk=directory_basic_info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#138A5A] p-4 rounded-full hover:bg-[#F7C600] hover:scale-110 transition-all border-3 border-black"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://instagram.com/livingdub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#138A5A] p-4 rounded-full hover:bg-[#F7C600] hover:scale-110 transition-all border-3 border-black"
            >
              <Instagram size={32} />
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 transform -rotate-0.5">
          <h2 className="font-['Bangers'] text-4xl text-[#E6392F] mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-['Fredoka'] font-bold text-gray-800 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-3 border-black font-['Poppins'] text-base focus:outline-none focus:ring-2 focus:ring-[#F7C600]"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-['Fredoka'] font-bold text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-3 border-black font-['Poppins'] text-base focus:outline-none focus:ring-2 focus:ring-[#F7C600]"
                placeholder="livingdub@outlook.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block font-['Fredoka'] font-bold text-gray-800 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-3 border-black font-['Poppins'] text-base focus:outline-none focus:ring-2 focus:ring-[#F7C600]"
              >
                <option value="">Select a subject</option>
                <option value="tickets">Tickets & Registration</option>
                <option value="camping">Camping Information</option>
                <option value="workshops">Workshops & Activities</option>
                <option value="accessibility">Accessibility</option>
                <option value="vendors">Vendor Inquiries</option>
                <option value="press">Press & Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-['Fredoka'] font-bold text-gray-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-3 border-black font-['Poppins'] text-base focus:outline-none focus:ring-2 focus:ring-[#F7C600] resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-['Bangers'] text-xl px-8 py-4 bg-[#F7C600] text-black rounded-full border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-0.5 hover:rotate-0"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
