import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* --- HEADER --- */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          Reach out to our manufacturing unit in Saha, Ambala for bulk
          printing and customized packaging solutions.
        </p>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* --- CONTACT FORM --- */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="5"
                placeholder="Describe Your Requirement"
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/918059021112"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* --- COMPANY INFO --- */}
          <div className="space-y-8">

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow border border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="text-blue-600" />
                <h3 className="font-bold text-lg">Phone</h3>
              </div>
              <p>80590 21112</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow border border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="text-blue-600" />
                <h3 className="font-bold text-lg">Email</h3>
              </div>
              <p>printnpackhub@gmail.com</p>
              <p>designprintnpackhub@gmail.com</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow border border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="text-blue-600" />
                <h3 className="font-bold text-lg">Address</h3>
              </div>
              <p>
                Plot No: 385, Sector 2, IGC, HSIIDC<br />
                Saha, Distt: Ambala (Haryana)<br />
                Pin Code: 133104
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP --- */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=IGC+HSIIDC+Saha+Ambala&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;