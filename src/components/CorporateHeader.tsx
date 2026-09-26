"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { Phone, MapPin, Globe, Menu, X, ChevronRight, FileText } from "lucide-react";

export const CorporateHeader: React.FC = () => {
  const { language, setLanguage, t } = useCorporateLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("navWhoWeAre") },
    { href: "/#compromisos", label: t("navCommitments") },
    { href: "/#productos", label: t("navProducts") },
    { href: "/calidad-y-proceso", label: "Calidad y Proceso" },
    { href: "/aliados", label: "Aliados" },
    { href: "/contacto", label: "Contacto Comercial" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top Utility Bar */}
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
            <Link
              href="/contacto"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>{t("topPortalB2B")}</span>
            </Link>

            <div className="flex items-center gap-1.5 bg-[#13315C] px-2 py-0.5 rounded text-[11px] font-bold">
              <Globe className="w-3 h-3 text-emerald-400" />
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-1 rounded transition-colors cursor-pointer ${
                  language === "es" ? "text-white font-extrabold" : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <span className="text-slate-500">/</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1 rounded transition-colors cursor-pointer ${
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Full Official Logo Image */}
        <Link href="/" className="flex items-center focus:outline-none transition-transform hover:scale-105">
          <div className="relative w-40 sm:w-48 md:w-52 h-9 sm:h-11 md:h-12 flex items-center">
            <Image
              src="/images/logo-mundilacteos-full.png"
              alt="Inversiones Mundilácteos"
              fill
              sizes="(max-width: 768px) 160px, 210px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider py-1 border-b-2 transition-all ${
                isActive(link.href)
                  ? "text-[#0B2545] border-emerald-600 font-black"
                  : "text-slate-700 border-transparent hover:text-[#0B2545] hover:border-emerald-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contacto"
            className="px-5 py-2.5 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t("navQuoteCTA")}</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-bold border-b border-slate-100 ${
                isActive(link.href) ? "text-emerald-700" : "text-slate-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-[#0B2545] text-white rounded-lg font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              {t("navQuoteCTA")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
