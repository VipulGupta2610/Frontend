import React from "react";
import { Factory, Target, Eye, CheckCircle } from "lucide-react";
import photo from "../assets/SunnyMama.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* --- HERO --- */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          About <span className="text-blue-600">Print N Pack Hub</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          A complete printing and packaging manufacturing house delivering
          premium quality offset printing solutions under one roof.
        </p>
      </section>

      {/* --- COMPANY INTRO --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Factory className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Who We Are</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Print N Pack Hub is a leading printing and packaging manufacturer 
              based in Saha, Ambala (Haryana). We specialize in mono cartons, 
              pharmaceutical packaging, commercial printing, and customized 
              branding solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              With advanced offset printing machines and premium finishing 
              technologies, we serve pharmaceutical, FMCG, food, cosmetics, 
              and retail industries across India.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl h-96 flex items-center justify-center text-slate-500">
            Factory / Machine Image Placeholder
          </div>

        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
<section className="py-20 px-4 bg-white dark:bg-slate-900">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Image */}
 <div className="rounded-3xl overflow-hidden h-96 shadow-xl">
  <img
    src={photo}
    alt="Founder"
    className="w-full h-full object-cover"
  />
</div>

    {/* Content */}
    <div>
      <h2 className="text-4xl font-bold mb-6">
        Message From The <span className="text-blue-600">Founder</span>
      </h2>

      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        At Print N Pack Hub, our mission has always been to deliver
        uncompromised quality and innovative packaging solutions.
        We believe in combining advanced technology with strong work ethics
        to help brands grow with confidence.
      </p>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Our commitment to precision, timely delivery, and customer
        satisfaction has helped us build long-term partnerships across
        pharmaceutical, FMCG, food, and retail industries.
      </p>

      <div className="mt-6">
        <p className="font-bold text-lg">Mr. Sunny Garg</p>
        <p className="text-blue-600 font-semibold">Founder & Managing Director</p>
      </div>
    </div>

  </div>
</section>

      {/* --- MISSION & VISION --- */}
      <section className="py-20 bg-white dark:bg-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-7 h-7 text-blue-600" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              To provide innovative, high-quality, and cost-effective printing 
              and packaging solutions that enhance our clients' brand identity 
              and product presentation.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-7 h-7 text-blue-600" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              To become a trusted leader in the printing and packaging industry 
              by continuously upgrading technology, maintaining quality standards, 
              and building long-term partnerships with our clients.
            </p>
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Advanced Offset Printing Machines",
              "Premium Paper & Finishing Quality",
              "Bulk Manufacturing Capacity",
              "Timely Delivery & Custom Orders"
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow hover:shadow-xl transition"
              >
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900/50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Industries We Serve</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Pharmaceutical",
              "FMCG",
              "Food & Bakery",
              "Cosmetics",
              "Retail"
            ].map((industry, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md"
              >
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Your Brand Together
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Contact our manufacturing unit in Ambala for customized packaging
          and printing solutions.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default About;