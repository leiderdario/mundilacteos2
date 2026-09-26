"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { MapPin, Phone, Mail, ShieldCheck, Globe } from "lucide-react";

export const CorporateFooter: React.FC = () => {
  const { language, setLanguage, t } = useCorporateLanguage();

  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-12 border-t border-[#13315C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          {/* Column 1: Corporate Identity & Slogan with Authentic Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <div className="relative w-48 sm:w-56 h-12 bg-white/95 rounded-2xl px-3 py-1 flex items-center shadow-md">
                <Image
                  src="/images/logo-mundilacteos-full.png"
                  alt="Inversiones Mundilácteos S.A.S"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {corporateConfig.company.slogan[language] || corporateConfig.company.slogan.es}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>NIT: {corporateConfig.company.nit}</p>
              <p>Registro Mercantil: Cámara de Comercio de Cartagena</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Estructura Corporativa
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("navWhoWeAre")}</Link></li>
              <li><Link href="/#compromisos" className="hover:text-emerald-400 transition-colors">{t("navCommitments")}</Link></li>
              <li><Link href="/#productos" className="hover:text-emerald-400 transition-colors">{t("navProducts")}</Link></li>
              <li><Link href="/calidad-y-proceso" className="hover:text-emerald-400 transition-colors">Calidad y Proceso</Link></li>
              <li><Link href="/aliados" className="hover:text-emerald-400 transition-colors">Aliados Comerciales</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-400 transition-colors">Contacto Comercial</Link></li>
            </ul>
          </div>

          {/* Column 3: Lines & Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Portafolio Técnico
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Leche Entera en Polvo (The Cántaro)</li>
              <li>Leche en Polvo Azucarada</li>
              <li>Línea Familiar La Becerrita</li>
              <li>Sacos Industriales Kraft 5kg a 25kg</li>
              <li>Atmósfera de CO2 y Envasado Termosellado</li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Sede Principal y Despachos
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{corporateConfig.company.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{corporateConfig.company.contact.phoneMain}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{corporateConfig.company.contact.email}</span>
              </div>
            </div>

            {/* Language Toggle in Footer */}
            <div className="pt-3 flex items-center gap-2 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Idioma:</span>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`hover:text-white cursor-pointer ${language === "es" ? "text-emerald-400 font-bold" : ""}`}
              >
                Español
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`hover:text-white cursor-pointer ${language === "en" ? "text-emerald-400 font-bold" : ""}`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {corporateConfig.company.legalName}. {t("footerRights")}.</p>
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Certificado ISO 9001:2015 & Registro INVIMA Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
