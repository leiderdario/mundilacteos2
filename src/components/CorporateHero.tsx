"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { ShieldCheck, CheckCircle2, ChevronRight, Download, Truck, Factory, Store } from "lucide-react";

export const CorporateHero: React.FC = () => {
  const { t } = useCorporateLanguage();
  const [selectedAudience, setSelectedAudience] = useState<"distributor" | "industry" | "retail">("distributor");

  const audienceData = {
    distributor: {
      title: "Soluciones de Alto Margen y Rotación para Distribuidores",
      bullets: [
        "Pacas estandarizadas de 12 a 300 unidades optimizadas para cubicaje y flete",
        "Precios mayoristas competitivos con escala por volumen mensual",
        "Vida útil de 12 meses garantizada por sellado con atmósfera de CO2",
        "Soporte comercial con material POP para canal tradicional"
      ],
      icon: Truck
    },
    industry: {
      title: "Suministro Masivo Grado Industrial para Transformación",
      bullets: [
        "Sacos Kraft triple capa de 5kg, 12.5kg y 25kg con barrera antihumedad",
        "Índice de solubilidad estandarizado y ficha bromatológica lote a lote",
        "Certificados de conformidad microbiológica e inocuidad INVIMA",
        "Abastecimiento programado mensual con entregas directas a planta"
      ],
      icon: Factory
    },
    retail: {
      title: "Marcas Consolidadas de Confianza para Cadenas y Supermercados",
      bullets: [
        "Marcas The Cántaro y La Becerrita con posicionamiento en hogares colombianos",
        "Código de barras EAN-13 registrado y empaque de alta vistosidad en góndola",
        "Cumplimiento riguroso de fechas y acuerdos de nivel de servicio (SLA)",
        "Presentaciones convenientes desde porción personal (27g) hasta 1000g"
      ],
      icon: Store
    }
  };

  const currentAudience = audienceData[selectedAudience];
  const AudienceIcon = currentAudience.icon;

  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] pt-12 pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t("heroTagline")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2545] tracking-tight leading-[1.12] mb-6">
            {t("heroHeadline")}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {t("heroDescription")}
          </p>
        </div>

        {/* DFA-Style Audience Switcher Interactive Console */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {t("heroAudiencePrompt")}
            </span>

            {/* Audience Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setSelectedAudience("distributor")}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedAudience === "distributor"
                    ? "bg-[#0B2545] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>{t("heroAudience1")}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedAudience("industry")}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedAudience === "industry"
                    ? "bg-[#0B2545] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>{t("heroAudience2")}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedAudience("retail")}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedAudience === "retail"
                    ? "bg-[#0B2545] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>{t("heroAudience3")}</span>
              </button>
            </div>
          </div>

          {/* Dynamic Audience Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Key Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <AudienceIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                  {currentAudience.title}
                </h3>
              </div>

              <div className="space-y-3">
                {currentAudience.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-snug">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="/contacto"
                  className="px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Propuesta para este Perfil</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/calidad-y-proceso"
                  className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Ver Fichas Técnicas
                </a>
              </div>
            </div>

            {/* Right: Crisp Product Presentation Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-xl p-6 border border-slate-200 flex flex-col items-center justify-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72">
                <Image
                  src={
                    selectedAudience === "industry"
                      ? "/images/bulto-industrial.png"
                      : selectedAudience === "retail"
                      ? "/images/the-cantaro-bolsa.png"
                      : "/images/the-cantaro-doble.png"
                  }
                  alt="Presentación Mundilácteos"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="text-center mt-3">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wide">
                  {selectedAudience === "industry"
                    ? "Línea Bulto Kraft 25kg"
                    : selectedAudience === "retail"
                    ? "The Cántaro Formato Retail"
                    : "The Cántaro Entera 380g - 900g"}
                </span>
                <p className="text-[11px] text-slate-500">Fabricado en Cartagena bajo norma ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
