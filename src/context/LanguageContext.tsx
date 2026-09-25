"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

export const corporateTranslations: Translations = {
  // Top utility bar
  topCustomerCare: { es: "Atención Corporativa & Ventas:", en: "Corporate Customer Care & Sales:" },
  topCoverageBadge: { es: "Sede Central: Cartagena • Cobertura Nacional", en: "Headquarters: Cartagena • Nationwide Coverage" },
  topPortalB2B: { es: "Portal Clientes B2B", en: "B2B Client Portal" },

  // Navigation
  navWhoWeAre: { es: "Quiénes Somos", en: "Who We Are" },
  navCommitments: { es: "Nuestros Compromisos", en: "Our Commitments" },
  navSupplyChain: { es: "Del Campo a su Mesa", en: "Farm to Table" },
  navProducts: { es: "Marcas & Productos", en: "Brands & Products" },
  navB2BSolutions: { es: "Soluciones Industriales", en: "Industrial Solutions" },
  navImpact: { es: "Historias & Alianzas", en: "Impact & Partners" },
  navContact: { es: "Contacto Corporativo", en: "Corporate Contact" },
  navQuoteCTA: { es: "Solicitar Cotización B2B", en: "Request B2B Quote" },

  // Hero DFA-inspired
  heroTagline: { es: "EMPRESA LÁCTEA COLOMBIANA CON ESTÁNDARES GLOBALES", en: "COLOMBIAN DAIRY PRODUCER WITH GLOBAL STANDARDS" },
  heroHeadline: {
    es: "Nutriendo el desarrollo de Colombia con lácteos de excelencia comprobada.",
    en: "Nourishing Colombia's growth with proven dairy excellence and reliability."
  },
  heroDescription: {
    es: "Con más de 12 años en el mercado y más de 869,000 clientes satisfechos, Inversiones Mundilácteos S.A.S provee leche en polvo entera, azucarada y derivados con certificación de calidad ISO 9001:2015 a cadenas de retail, industrias procesadoras y distribuidores de todo el país.",
    en: "With over 12 years in the market and more than 869,000 satisfied customers, Inversiones Mundilácteos S.A.S supplies whole milk powder, sweetened dairy blends, and derivatives with ISO 9001:2015 certification to retail chains, processors, and wholesalers nationwide."
  },
  heroAudiencePrompt: { es: "Selecciona el perfil de tu empresa:", en: "Select your business profile:" },
  heroAudience1: { es: "Distribuidor Mayorista", en: "Wholesale Distributor" },
  heroAudience2: { es: "Industria de Alimentos", en: "Food Industry / Processor" },
  heroAudience3: { es: "Supermercado o Retail", en: "Supermarket / Retail Chain" },

  // Stats
  statYearsVal: { es: "12+ Años", en: "12+ Years" },
  statYearsLabel: { es: "Liderazgo en el sector lácteo colombiano", en: "Leadership in the Colombian dairy sector" },
  statClientsVal: { es: "+869.000", en: "+869,000" },
  statClientsLabel: { es: "Clientes satisfechos en hogares y negocios", en: "Satisfied clients across homes and enterprises" },
  statCoverageVal: { es: "32 Dptos.", en: "32 States" },
  statCoverageLabel: { es: "Red logística con despachos garantizados", en: "Nationwide logistics with timely dispatch" },
  statQualityVal: { es: "ISO 9001", en: "ISO 9001" },
  statQualityLabel: { es: "Certificación de calidad y Registro INVIMA", en: "Certified quality management and INVIMA license" },

  // Commitments
  commitmentsTitle: { es: "Nuestros Compromisos Estratégicos", en: "Our Strategic Commitments" },
  commitmentsSubtitle: {
    es: "Inspirados en las mejores prácticas de la industria láctea internacional, operamos bajo cuatro pilares inquebrantables.",
    en: "Inspired by international dairy benchmarks, our operations rest on four uncompromised pillars."
  },

  // Supply Chain
  chainTitle: { es: "Del Campo a su Empresa: Trazabilidad Integral", en: "From Farm to Enterprise: Full Traceability" },
  chainSubtitle: {
    es: "Un proceso estructurado y certificado que garantiza frescura, pureza organoléptica y estabilidad microbiológica en cada lote.",
    en: "A structured, certified process ensuring freshness, organoleptic purity, and microbiological stability across every batch."
  },

  // B2B Catalog
  catalogTitle: { es: "Portafolio Comercial e Industrial", en: "Commercial & Industrial Portfolio" },
  catalogSubtitle: {
    es: "Presentaciones dosificadas desde consumo individual hasta sacos industriales Kraft de 25 kg para procesos a gran escala.",
    en: "Portioned formats ranging from retail packages to 25 kg multi-wall Kraft sacks for large-scale production."
  },
  specSheetLabel: { es: "Ficha Técnica Resumida", en: "Technical Summary Sheet" },
  requestSampleBtn: { es: "Solicitar Muestra Comercial", en: "Request Commercial Sample" },

  // Partners
  partnersTitle: { es: "Alianzas y Cadenas que Respaldan Nuestra Trayectoria", en: "Chains and Enterprises that Endorse Us" },
  partnersSubtitle: {
    es: "Grandes supermercados, industrias procesadoras y marcas reconocidas en Colombia confían en nuestro suministro continuo.",
    en: "Leading supermarkets, food processors, and national brands rely on our continuous supply."
  },

  // Form
  formTitle: { es: "Solicitud Institucional de Cotización y Muestras", en: "Institutional Quote & Sample Request" },
  formSubtitle: {
    es: "Nuestra gerencia comercial estructurará una propuesta a la medida de los requerimientos de volumen, frecuencia y destino de tu empresa.",
    en: "Our commercial team will formulate a tailored quotation aligned with your volume, frequency, and delivery needs."
  },
  formSubmitBtn: { es: "Radicar Solicitud Comercial", en: "Submit Commercial Request" },
  formSubmitting: { es: "Radicando solicitud...", en: "Submitting request..." },

  // Footer
  footerRights: { es: "Todos los derechos reservados. Inversiones Mundilácteos S.A.S", en: "All rights reserved. Inversiones Mundilácteos S.A.S" }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: (key: string) => key
});

export const CorporateLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("mundilacteos_corp_lang") as Language;
    if (saved === "es" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mundilacteos_corp_lang", lang);
  };

  const t = (key: string): string => {
    const entry = corporateTranslations[key];
    if (!entry) return key;
    return entry[language] || entry.es;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useCorporateLanguage = () => useContext(LanguageContext);
