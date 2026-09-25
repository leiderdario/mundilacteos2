"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { Phone, MapPin, Globe, Menu, X, ChevronRight, FileText, Lock } from "lucide-react";

export const CorporateHeader: React.FC = () => {
  const { language, setLanguage, t } = useCorporateLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#quienes-somos", label: t("navWhoWeAre") },
    { href: "#compromisos", label: t("navCommitments") },
    { href: "#cadena-valor", label: t("navSupplyChain") },
    { href: "#productos", label: t("navProducts") },
    { href: "#alianzas", label: t("navImpact") },
    { href: "#contacto", label: t("navContact") }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* DFA-Style Top Utility Bar */}
      <div className="bg-[#0B2545] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#13315C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Location & Headquarters Badge */}
          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("topCoverageBadge")}</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{corporateConfig.company.contact.phoneMain}</span>
            </div>
          </div>

          {/* Right: B2B Quick Links & Language Switcher */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>{t("topPortalB2B")}</span>
            </a>

            <div className="flex items-center gap-1.5 bg-[#13315C] px-2 py-0.5 rounded text-[11px] font-bold">
              <Globe className="w-3 h-3 text-emerald-400" />
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-1 rounded transition-colors ${
                  language === "es" ? "text-white font-extrabold" : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <span className="text-slate-500">/</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1 rounded transition-colors ${
                  language === "en" ? "text-white font-extrabold" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0 bg-white border border-slate-200 rounded-lg p-1 flex items-center justify-center shadow-xs">
            <Image
              src="/images/logo.png"
              alt="Logo Inversiones Mundilácteos"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#0B2545] block leading-none">
              MUNDI<span className="text-emerald-700 font-semibold">LÁCTEOS</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Inversiones Mundilácteos S.A.S
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0B2545] border-b-2 border-transparent hover:border-emerald-600 py-1 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
          >
            <span>{t("navQuoteCTA")}</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-[#0B2545] text-white rounded-lg font-bold text-xs uppercase tracking-wider"
            >
              {t("navQuoteCTA")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
