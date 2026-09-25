"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig, ProductDetail } from "@/config/site";
import { FileText, Download, Check, Layers, Clock, ShieldCheck, ChevronRight } from "lucide-react";

export const B2BCatalog: React.FC = () => {
  const { language, t } = useCorporateLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductDetail | null>(null);

  const categories = [
    { id: "all", label: "Todas las Líneas" },
    { id: "retail", label: "Línea Retail (The Cántaro)" },
    { id: "sweetened", label: "Línea Azucarada" },
    { id: "economy", label: "Línea Rendimiento (La Becerrita)" },
    { id: "industrial", label: "Línea Bultos Kraft (5kg - 25kg)" }
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? corporateConfig.products
      : corporateConfig.products.filter((p) => p.category === selectedCategory);

  const handleSelectProductForQuote = (productName: string) => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.getElementById("product-interest") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = productName;
      }
    }
  };

  return (
    <section id="productos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            Catálogo Corporativo de Productos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight mt-3 mb-4">
            {t("catalogTitle")}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t("catalogSubtitle")}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#0B2545] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="corp-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {p.categoryLabel[language] || p.categoryLabel.es}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    SKU: {p.id.toUpperCase()}
                  </span>
                </div>

                {/* Product Image & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                  <div className="sm:col-span-5 relative h-48 bg-[#FAF8F5] rounded-xl border border-slate-100 flex items-center justify-center p-3">
                    <div className="relative w-36 h-44">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-7 space-y-2">
                    <h3 className="text-xl font-black text-[#0B2545] leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.description[language] || p.description.es}
                    </p>
                  </div>
                </div>

                {/* Technical Specs Compact Table */}
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200/80 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-bold text-slate-600">Presentaciones:</span>
                    <span className="font-semibold text-slate-900">{p.presentations.join(", ")}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-bold text-slate-600">Empaque & Sellado:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[200px]" title={p.packagingType}>
                      {p.packagingType}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-bold text-slate-600">Unidades por Paca/Bulto:</span>
                    <span className="font-semibold text-emerald-800">{p.unitsPerPack}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-600">Grasa / Proteína:</span>
                    <span className="font-semibold text-slate-900 font-mono">
                      {p.specifications.fatContent} / {p.specifications.protein}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Button Cluster */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(p)}
                  className="py-2.5 px-3 rounded-lg border border-slate-300 hover:border-[#0B2545] text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ficha Técnica</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectProductForQuote(p.name)}
                  className="py-2.5 px-3 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Cotizar Volumen</span>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spec Sheet Modal Popup */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between border-b border-slate-200 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase font-mono">
                    Ficha Técnica Oficial • Inversiones Mundilácteos S.A.S
                  </span>
                  <h3 className="text-xl font-black text-[#0B2545] mt-1">
                    {activeModalProduct.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <p className="leading-relaxed">
                  {activeModalProduct.description[language] || activeModalProduct.description.es}
                </p>

                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200 space-y-2 font-mono text-xs">
                  <p><strong className="font-sans text-slate-900 font-bold">Solubilidad:</strong> {activeModalProduct.specifications.solubility}</p>
                  <p><strong className="font-sans text-slate-900 font-bold">Humedad Máxima:</strong> {activeModalProduct.specifications.moisture}</p>
                  <p><strong className="font-sans text-slate-900 font-bold">Materia Grasa:</strong> {activeModalProduct.specifications.fatContent}</p>
                  <p><strong className="font-sans text-slate-900 font-bold">Proteína:</strong> {activeModalProduct.specifications.protein}</p>
                  <p><strong className="font-sans text-slate-900 font-bold">Atmósfera de Empaque:</strong> {activeModalProduct.packagingType}</p>
                  <p><strong className="font-sans text-slate-900 font-bold">Vida Útil:</strong> {activeModalProduct.shelfLife}</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs text-emerald-950">
                  <p className="font-bold mb-1">Uso Industrial & Comercial Recomendado:</p>
                  <p>{activeModalProduct.recommendedUse[language] || activeModalProduct.recommendedUse.es}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    alert(`Ficha técnica de ${activeModalProduct.name} lista para descarga.`);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Ficha en PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const name = activeModalProduct.name;
                    setActiveModalProduct(null);
                    handleSelectProductForQuote(name);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0B2545] text-white font-bold text-xs uppercase flex items-center justify-center gap-1.5"
                >
                  <span>Cotizar este Producto</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
