"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateFooter } from "@/components/CorporateFooter";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import {
  Building,
  ShieldCheck,
  CheckCircle2,
  Star,
  Quote,
  Handshake,
  Truck,
  ChevronRight,
  TrendingUp,
  MapPin
} from "lucide-react";

export default function CorporatePartnersPage() {
  const { t } = useCorporateLanguage();
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number>(0);

  const partnersDetail = [
    {
      name: "Olímpica S.A.",
      logo: "/images/cliente-olimpica.jpg",
      category: "Gran Superficie & Retail Nacional",
      years: "10+ Años de Alianza",
      sla: "99.8% Cumplimiento",
      description: "Cadena de retail líder con presencia en todo el territorio colombiano. Mundilácteos abastece las marcas The Cántaro y La Becerrita con alta rotación en góndola."
    },
    {
      name: "Megatiendas",
      logo: "/images/cliente-megatiendas.jpg",
      category: "Cadena de Supermercados",
      years: "8+ Años de Alianza",
      sla: "100% Cumplimiento",
      description: "Red de autoservicios y supermercados del Caribe con excelente posicionamiento en canastas familiares y formatos de ahorro."
    },
    {
      name: "Mr. Bono",
      logo: "/images/cliente-mrbono.jpg",
      category: "Sector Gastronómico & Panadería",
      years: "6+ Años de Alianza",
      sla: "99.9% Cumplimiento",
      description: "Cadena nacional de alimentos horneados. Mundilácteos suministra leche en polvo de alta estabilidad físico-química para recetas y bases comerciales."
    },
    {
      name: "GA Rosa",
      logo: "/images/cliente-garosa.jpg",
      category: "Industria de Alimentos & Materias Primas",
      years: "9+ Años de Alianza",
      sla: "99.7% Cumplimiento",
      description: "Distribución masiva de materias primas lácteas para procesadores de alimentos en el norte y oriente de Colombia."
    },
    {
      name: "Rapimercar",
      logo: "/images/cliente-rapimercar.jpg",
      category: "Distribución Regional & Autoservicios",
      years: "7+ Años de Alianza",
      sla: "99.9% Cumplimiento",
      description: "Supermercados líderes en Santa Marta y Magdalena, ofreciendo cobertura directa a miles de hogares con formatos individuales e institucionales."
    }
  ];

  const current = partnersDetail[selectedPartnerIndex];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      {/* Header */}
      <CorporateHeader />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] pt-12 pb-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-[#0B2545] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Handshake className="w-3.5 h-3.5 text-emerald-700" />
              <span>Red Comercial & Alianzas Estratégicas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight leading-tight max-w-4xl mb-4">
              Socios Comerciales que Respaldan Nuestra Trayectoria
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Más de una década abasteciendo a las principales cadenas de retail, industrias de panificación y distribuidores de alimentos en Colombia con cumplimiento estricto de SLA y calidad garantizada.
            </p>
          </div>
        </section>

        {/* 5 Color Partner Logos Grid */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Portafolio de Cuentas Clave
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] mt-1">
                Principales Clientes Corporativos
              </h2>
            </div>

            {/* 5 Cards with Vibrant Color Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {partnersDetail.map((p, idx) => {
                const isSelected = selectedPartnerIndex === idx;
                return (
                  <div
                    key={p.name}
                    onClick={() => setSelectedPartnerIndex(idx)}
                    className={`p-5 rounded-xl bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between hover:shadow-md ${
                      isSelected
                        ? "border-[#0B2545] ring-2 ring-[#0B2545]/15 shadow-md"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      {/* Color Logo */}
                      <div className="relative w-full h-16 mb-4 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-100">
                        <Image
                          src={p.logo}
                          alt={p.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-2">
                        {p.years}
                      </span>

                      <h3 className="text-sm font-bold text-[#0B2545] leading-snug">{p.name}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">{p.category}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">SLA:</span>
                      <span className="font-mono font-bold text-emerald-700">{p.sla}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Partner Highlight Box */}
            <div className="bg-[#FAF8F5] rounded-xl p-6 sm:p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
                <div className="relative w-40 h-16 bg-white rounded-lg p-2 border border-slate-200 mb-3 flex items-center justify-center">
                  <Image src={current.logo} alt={current.name} fill className="object-contain p-1" />
                </div>
                <h4 className="text-lg font-bold text-[#0B2545]">{current.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{current.category}</p>
                <div className="mt-2 text-xs font-mono font-bold text-emerald-700">{current.sla}</div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Alcance de la Relación B2B</span>
                <p className="text-sm text-slate-700 leading-relaxed">{current.description}</p>
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-600">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Órdenes EDI y facturación electrónica</span>
                  <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-emerald-600" /> Entregas a centros de distribución</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonial Spotlight: Ismael Sarmiento */}
        <section className="py-16 bg-[#0B2545] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#13315C] rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-700/80 relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Testimonio Institucional Verificado</span>
                </div>

                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 font-mono text-xs font-bold text-white">5.0 / 5.0</span>
                </div>
              </div>

              <blockquote className="text-lg sm:text-2xl font-normal italic leading-relaxed text-slate-100 mb-8">
                &ldquo;Mundilácteos es una empresa con una trayectoria intachable de más de 12 años. Tenemos años trabajando de la mano con ellos y reconocemos su calidad constante, cumplimiento en entregas y servicio ejemplar.&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-700 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white font-bold text-lg flex items-center justify-center">
                    IS
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>Ismael Sarmiento</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-300">Aliado Comercial • Distribuidor Regional Mayorista</p>
                    <p className="text-[11px] text-slate-400">Red de Abastecimiento Costa Caribe</p>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-300">
                  <span className="font-mono text-emerald-400 font-bold text-sm block">12+ Años</span>
                  <span>Relación Comercial Continuada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Trust Statement & Guarantees */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2545]">Garantía de Abastecimiento</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Stock permanente en Europark Cartagena para evitar roturas de inventario en clientes corporativos.
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
                    Cumplimiento estricto de estándares DIAN, órdenes de compra EDI y ventanas horarias de entrega en CEDI.
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
                    Acompañamiento a jefes de producción en formulación, sustitución de sólidos lácteos y rendimiento en costos.
                  </p>
                </div>
              </div>
            </div>

            {/* B2B Call to Action */}
            <div className="bg-gradient-to-r from-[#0B2545] to-[#13315C] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Convenios y Acuerdos de Suministro
                </span>
                <h3 className="text-2xl font-bold mt-1">¿Desea vincular su empresa como aliado comercial?</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Establecemos contratos marco con escala de precios por volumen y entregas programadas.
                </p>
              </div>

              <Link
                href="/contacto"
                className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0 transition-colors cursor-pointer"
              >
                <span>Contactar Dirección Comercial</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <CorporateFooter />
    </div>
  );
}
