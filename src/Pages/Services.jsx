import React from "react";
import {
  Printer,
  Package,
  Layers,
  ShieldCheck,
  PenTool,
  Truck
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Offset Printing",
      description:
        "High-quality offset printing with sharp text, vibrant colors, and precision alignment for bulk production.",
      icon: <Printer className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Custom Packaging Development",
      description:
        "Tailor-made mono cartons and packaging solutions designed to enhance brand visibility and protection.",
      icon: <Package className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Lamination & Finishing",
      description:
        "Matte, Glossy, Velvet lamination, UV coating, embossing, and premium finishing options.",
      icon: <Layers className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Pharma-Compliant Printing",
      description:
        "Accurate and regulation-compliant printing solutions for pharmaceutical packaging and labels.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Creative Design Support",
      description:
        "Professional layout design assistance for cartons, brochures, and branding materials.",
      icon: <PenTool className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Bulk Manufacturing & Delivery",
      description:
        "Efficient production processes ensuring timely delivery for large-scale orders.",
      icon: <Truck className="w-10 h-10 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* --- HERO --- */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          Comprehensive printing and packaging services designed to support
          your brand from concept to final production.
        </p>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-900 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">
            Our Working Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Requirement Analysis",
              "Design & Approval",
              "Production & Printing",
              "Quality Check & Delivery"
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-md"
              >
                <div className="text-3xl font-extrabold text-blue-600 mb-4">
                  0{i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Let’s create high-quality packaging and printing solutions
          for your brand.
        </p>

        <a
          href="/contact"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Request a Quote
        </a>
      </section>

    </div>
  );
};

export default Services;