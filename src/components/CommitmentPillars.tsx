"use client";

import React from "react";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { HeartPulse, Sprout, ShieldAlert, Cpu } from "lucide-react";

export const CommitmentPillars: React.FC = () => {
  const { t } = useCorporateLanguage();

  const pillars = [
    {
      title: "Nutrición y Salud Humana",
      tagline: "Proteína y calcio de alto valor biológico",
      desc: "Procesamos leche pura de vaca mediante tecnología de evaporación y secado que preserva los macronutrientes esenciales para el desarrollo de las familias colombianas.",
      icon: HeartPulse
    },
    {
      title: "Respaldo al Ganadero Local",
      tagline: "Comercio justo y desarrollo agropecuario",
      desc: "Trabajamos en alianza directa con productores y ganaderos de la Región Caribe, fomentando prácticas de ordeño higiénico y garantizando precios estables en el campo.",
      icon: Sprout
    },
    {
      title: "Innovación en Atmósfera de CO2",
      tagline: "Tecnología de barrera y vida útil de 12 meses",
      desc: "Nuestros empaques trilaminados termosellados dosifican una microatmósfera inerte de CO2 que aísla el oxígeno y la humedad sin requerir conservantes químicos nocivos.",
      icon: Cpu
    },
    {
      title: "Calidad ISO 9001 e Inocuidad",
      tagline: "Control microbiológico riguroso por lote",
      desc: "Laboratorio propio de control de calidad físico-químico y microbiológico que audita acidez, materia grasa, solubilidad y estabilidad microbiológica bajo normativa INVIMA.",
      icon: ShieldAlert
    }
  ];

  return (
    <section id="compromisos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            Principios Corporativos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight mt-3 mb-4">
            {t("commitmentsTitle")}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t("commitmentsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="corp-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 font-mono">
                  <span>PILAR ESTRATÉGICO 0{idx + 1}</span>
                  <span className="text-emerald-700">MUNDILÁCTEOS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
