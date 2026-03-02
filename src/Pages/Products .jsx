import React from "react";
import { Package, Printer, FileText, ChevronRight } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Packaging Solutions",
      icon: <Package className="w-8 h-8 text-blue-600" />,
      description:
        "High-quality custom packaging solutions for Pharma, FMCG, Food, Cosmetics, and Retail industries.",
      items: [
        "Printed Mono Cartons",
        "Laminated Mono Cartons",
        "Window Mono Cartons",
        "Leafing Mono Cartons",
        "Blister Card Carton",
        "Cake Box Printing",
        "Toys Box"
      ]
    },
    {
      title: "Printing Solutions",
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      description:
        "Professional offset and digital printing services tailored to your branding needs.",
      items: [
        "Brochure & Catalogue Printing",
        "Pamphlets",
        "Bill Books",
        "Certificates",
        "Report Cards",
        "Menu Cards",
        "Letter Head",
        "Sticker Labels",
        "Printed Cloth Tags"
      ]
    },
    {
      title: "Pharmaceutical Products",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      description:
        "Specialized pharmaceutical packaging and printing solutions ensuring clarity and compliance.",
      items: [
        "Pharma LBL Card",
        "Pharma Reminder Card",
        "Prescription Pads",
        "Doctor File Printing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* --- HEADER SECTION --- */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          Comprehensive printing and packaging solutions manufactured with precision,
          premium materials, and advanced offset technology.
        </p>
      </section>

      {/* --- CATEGORY SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-16">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-10"
          >
            <div className="flex items-center space-x-4 mb-6">
              {category.icon}
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-3xl">
              {category.description}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{item}</h3>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Need Custom Packaging Solutions?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact our manufacturing unit in Saha, Ambala for bulk production
            and custom quotations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;