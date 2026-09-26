"use client";

import React from "react";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateFooter } from "@/components/CorporateFooter";
import { InstitutionalQuoteForm } from "@/components/InstitutionalQuoteForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, FileCheck } from "lucide-react";
import { corporateConfig } from "@/config/site";

export default function CorporateContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      {/* Header */}
      <CorporateHeader />

      <main className="flex-grow">
        {/* Top Header */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] pt-12 pb-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Canal Institucional & Ventas B2B</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight leading-tight max-w-4xl mb-4">
              Atención Comercial y Cotizaciones Directas de Fábrica
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Atención ejecutiva para compras mayoristas, distribuidores regionales, licitaciones institucionales e industrias de alimentos. Cotizaciones con escala de precios por volumen mensual y despacho a todo el país.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Horario: {corporateConfig.company.contact.supportHours}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Tiempo de respuesta estimado: Menor a 2 horas</span>
              </span>
            </div>
          </div>
        </section>

        {/* Institutional Form & Direct Channels */}
        <InstitutionalQuoteForm />
      </main>

      {/* Footer */}
      <CorporateFooter />
    </div>
  );
}
