"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { Check, ShieldCheck, Truck, Factory, Milk, Sparkles } from "lucide-react";

export const SupplyChainOverview: React.FC = () => {
  const { t } = useCorporateLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      stage: "Fase 01",
      title: "Acopio y Control de Origen",
      desc: "Selección rigurosa de leche cruda en cuencas ganaderas aliadas, con verificación inmediata de temperatura, densidad y acidez en tanques de enfriamiento a 4°C.",
      icon: Milk,
      checks: ["Prueba de alcohol e inhibidores en sitio", "Conservación estricta de la cadena de frío", "Trazabilidad desde la finca"]
    },
    {
      id: 1,
      stage: "Fase 02",
      title: "Pasteurización y Deshidratación",
      desc: "Eliminación microbiológica preventiva y proceso de secado por aspersión (spray dryer) que evapora el agua conservando intactas las proteínas, lípidos y vitaminas.",
      icon: Factory,
      checks: ["Tratamiento térmico pasteurizado", "Retención natural de calcio y fósforo", "Control microbiológico en línea"]
    },
    {
      id: 2,
      stage: "Fase 03",
      title: "Empaque y Atmósfera Modificada CO2",
      desc: "Envasado automatizado en salas limpias. Se inyecta una dosis controlada de CO2 en película BOOP trilaminada y sacos de papel Kraft de alta resistencia.",
      icon: Sparkles,
      checks: ["Barrera impermeable de 3 capas", "Cero oxidación lipídica", "12 meses de vida útil garantizada"]
    },
    {
      id: 3,
      stage: "Fase 04",
      title: "Distribución Nacional desde Cartagena",
      desc: "Almacenamiento paletizado en el Parque Industrial Europark Cartagena y flota de transporte hacia los 32 departamentos del territorio nacional.",
      icon: Truck,
      checks: ["Despachos masivos diarios", "Monitoreo de tiempos de entrega", "Atención postventa personalizada"]
    }
  ];

  return (
    <section id="cadena-valor" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Cadena de Suministro Certificada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight mt-3 mb-4">
            {t("chainTitle")}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t("chainSubtitle")}
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? "bg-white border-[#0B2545] shadow-md ring-2 ring-[#0B2545]/10"
                  : "bg-white/70 border-slate-200 hover:bg-white"
              }`}
            >
              <span className="text-[11px] font-bold text-emerald-700 block uppercase font-mono">
                {s.stage}
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#0B2545] mt-1 leading-snug">
                {s.title}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Step Display Detail with Real Plant Photography */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-mono">
                {steps[activeStep].stage} • MUNDILÁCTEOS S.A.S
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] mt-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {steps[activeStep].checks.map((chk, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold">{chk}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Norma ISO 9001:2015</span>
              </div>
              <span>•</span>
              <span>Parque Industrial Europark Cartagena</span>
            </div>
          </div>

          {/* Plant & Team Photo Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-60 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <Image
                src="/images/foto-planta.jpg"
                alt="Planta de proceso Mundilácteos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">Línea de Envasado Cartagena</span>
              </div>
            </div>

            <div className="relative h-60 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <Image
                src="/images/foto-equipo.jpg"
                alt="Equipo humano de operaciones"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">Control de Calidad en Planta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
