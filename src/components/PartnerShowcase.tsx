"use client";

import React from "react";
import Image from "next/image";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { Building, ShieldCheck, CheckCircle2 } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  const { t } = useCorporateLanguage();

  return (
    <section id="alianzas" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Relaciones Corporativas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight mt-3 mb-4">
            {t("partnersTitle")}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t("partnersSubtitle")}
          </p>
        </div>

        {/* Client Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center mb-16">
          {corporateConfig.partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full h-28 p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center transition-all hover:shadow-md hover:border-slate-300"
            >
              <div className="relative w-full h-10 mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Corporate Trust Statement Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545]">Garantía de Abastecimiento</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Stock de contingencia permanente en bodega Europark Cartagena para evitar roturas de inventario en clientes corporativos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545]">Facturación Electrónica & SLA</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Cumplimiento estricto de estándares DIAN, órdenes de compra EDI y ventanas horarias de entrega en centros de distribución.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545]">Asesoría Técnica de Aplicación</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Acompañamiento a ingenieros de alimentos y jefes de producción en formulación, sustitución de sólidos y rendimiento en costos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
