"use client";

import React from "react";
import Link from "next/link";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateFooter } from "@/components/CorporateFooter";
import { SupplyChainOverview } from "@/components/SupplyChainOverview";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ShieldCheck, Award, FileCheck, CheckCircle2, ChevronRight, Microscope } from "lucide-react";
import { corporateConfig } from "@/config/site";

export default function QualityProcessCorporatePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      {/* Header */}
      <CorporateHeader />

      <main className="flex-grow">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] pt-12 pb-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Aseguramiento Técnico de la Calidad</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight leading-tight max-w-4xl mb-4">
              Calidad Certificada ISO 9001:2015 & Trazabilidad Láctea de Extremo a Extremo
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              En Inversiones Mundilácteos S.A.S operamos bajo rigurosos protocolos físico-químicos y microbiológicos validados por el INVIMA. Desde el acopio en fincas ganaderas seleccionadas hasta la deshidratación y envasado en atmósfera controlada de CO2 en nuestra planta de Cartagena.
            </p>
          </div>
        </section>

        {/* Traceability: Del Campo a su Empresa */}
        <SupplyChainOverview />

        {/* Quality Certifications Matrix Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-blue-50 px-3 py-1 rounded border border-blue-200">
                Respaldo Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] mt-2 mb-3">
                Certificaciones y Cumplimiento Normativo
              </h2>
              <p className="text-sm text-slate-600">
                Documentación técnica disponible para auditorías de proveedores de grandes superficies e industrias de alimentos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {corporateConfig.company.certifications.map((cert, idx) => (
                <div key={idx} className="corp-card rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
                      {cert.name}
                    </span>
                    <h3 className="text-base font-bold text-[#0B2545] mb-2">{cert.subtitle}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verificado por Lote</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Laboratory Spec Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B2545]">Fichas Técnicas y Análisis Bromatológico</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                    Suministramos fichas bromatológicas oficiales con cada despacho: porcentaje de materia grasa (≥ 26%), proteína láctea (≥ 24.5%), microbiología negativa para patógenos y humedad controlada (≤ 3.5%).
                  </p>
                </div>
              </div>

              <Link
                href="/contacto"
                className="px-6 py-3 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0 transition-colors cursor-pointer"
              >
                <span>Solicitar Dosier Técnico</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* Institutional Metrics Bar */}
        <ImpactMetrics />
      </main>

      {/* Footer */}
      <CorporateFooter />
    </div>
  );
}
