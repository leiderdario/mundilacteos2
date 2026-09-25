export interface ProductDetail {
  id: string;
  name: string;
  category: "retail" | "sweetened" | "economy" | "industrial";
  categoryLabel: { es: string; en: string };
  image: string;
  packagingType: string;
  shelfLife: string;
  presentations: string[];
  unitsPerPack: string;
  recommendedUse: { es: string; en: string };
  specifications: {
    solubility: string;
    moisture: string;
    fatContent: string;
    protein: string;
  };
  description: { es: string; en: string };
}

export const corporateConfig = {
  company: {
    legalName: "Inversiones Mundilácteos S.A.S",
    brandName: "Mundilácteos",
    nit: "900.XXX.XXX-X",
    yearsInMarket: 12,
    satisfiedClients: "+869,000",
    slogan: {
      es: "Comprometidos con la nutrición de Colombia y el crecimiento de la industria láctea",
      en: "Committed to nourishing Colombia and empowering the dairy industry"
    },
    address: {
      full: "Km. 1 Vía Turbaco, Lote 2A – 2B, Parque Industrial Europark Cartagena R.P.H Bodega No. 28",
      city: "Cartagena",
      country: "Colombia"
    },
    contact: {
      phoneMain: "+57 319 7690990",
      phoneSecondary: "+57 311 4293448",
      email: "contacto@mundilacteos.com",
      salesEmail: "ventas@mundilacteos.com",
      supportHours: "Lunes a Viernes: 7:30 AM – 5:30 PM (COT)"
    },
    socials: {
      instagram: "https://www.instagram.com/mundilacteos/",
      facebook: "https://www.facebook.com/mundilacteos",
      youtube: "https://www.youtube.com"
    },
    certifications: [
      {
        name: "ISO 9001:2015",
        subtitle: "Sistema de Gestión de la Calidad",
        description: "Auditorías continuas de inocuidad, acopio y estandarización técnica."
      },
      {
        name: "Registro Sanitario INVIMA",
        subtitle: "Conformidad Sanitaria Nacional",
        description: "Habilitación sanitaria para comercialización y procesamiento de leche en polvo."
      },
      {
        name: "Control de Cadena de Frío",
        subtitle: "Estabilidad Físico-Química",
        description: "Preservación estricta de las propiedades organolépticas desde origen."
      }
    ]
  },

  partners: [
    { name: "Olímpica S.A.", logo: "/images/cliente-olimpica.jpg", category: "Gran Superficie" },
    { name: "Megatiendas", logo: "/images/cliente-megatiendas.jpg", category: "Cadena de Supermercados" },
    { name: "Mr. Bono", logo: "/images/cliente-mrbono.jpg", category: "Sector Gastronómico" },
    { name: "GA Rosa", logo: "/images/cliente-garosa.jpg", category: "Industria de Alimentos" },
    { name: "Rapimercar", logo: "/images/cliente-rapimercar.jpg", category: "Distribución Regional" }
  ],

  products: [
    {
      id: "the-cantaro-entera",
      name: "The Cántaro — Leche Entera en Polvo",
      category: "retail",
      categoryLabel: { es: "Consumo Masivo / Retail", en: "Consumer / Retail" },
      image: "/images/the-cantaro-doble.png",
      packagingType: "Bolsa trilaminada termosellada con barrera de atmósfera modificada CO2",
      shelfLife: "12 meses a partir de fecha de envasado",
      presentations: ["27g", "104g", "200g", "380g", "400g", "500g", "750g", "800g", "900g", "1000g"],
      unitsPerPack: "Pacas de 12 a 300 unidades según gramaje",
      recommendedUse: {
        es: "Consumo directo en hogares, cafeterías, preparación de bebidas lácteas y distribución en canal tradicional (tiendas y minimercados).",
        en: "Household consumption, coffee shops, dairy beverages, and distribution via traditional mom-and-pop stores."
      },
      specifications: {
        solubility: "Índice de insolubilidad < 1.0 ml",
        moisture: "Humedad máxima 3.5%",
        fatContent: "Grasa láctea min. 26.0%",
        protein: "Proteína láctea min. 24.5%"
      },
      description: {
        es: "Leche entera en polvo obtenida por deshidratación mediante tecnología de secado por aspersión (spray dryer) de leche pura de vaca. Posee un sabor lácteo fresco inconfundible y solubilidad instantánea.",
        en: "Whole milk powder produced by spray-drying pure cow's milk. Features fresh dairy flavor, complete nutritional profile, and immediate cold/hot water solubility."
      }
    },
    {
      id: "the-cantaro-azucarada",
      name: "The Cántaro — Leche en Polvo Azucarada",
      category: "sweetened",
      categoryLabel: { es: "Fórmula Dulce / Repostería", en: "Sweetened Formula" },
      image: "/images/the-cantaro-3.png",
      packagingType: "Bolsa metalizada de alta barrera con sellado hermético",
      shelfLife: "12 meses",
      presentations: ["380g", "400g", "500g", "900g"],
      unitsPerPack: "Pacas de 12 a 30 unidades según gramaje",
      recommendedUse: {
        es: "Panificación, heladerías, batidos comerciales, postres y preparaciones que requieran base láctea endulzada homogénea.",
        en: "Bakeries, ice cream manufacturing, commercial smoothies, and confectionery requiring consistent sweetened dairy base."
      },
      specifications: {
        solubility: "Instantánea sin grumos",
        moisture: "Humedad controlada < 3.0%",
        fatContent: "Materia grasa seleccionada",
        protein: "Sólidos lácteos de alto valor"
      },
      description: {
        es: "Combinación balanceada de leche entera en polvo con sacarosa refinada de grado alimentario, formulada para ahorrar tiempo y optimizar costos en la preparación comercial.",
        en: "Carefully balanced blend of whole milk powder with food-grade refined sucrose, formulated to streamline preparation and optimize production costs."
      }
    },
    {
      id: "la-becerrita",
      name: "La Becerrita — Leche en Polvo Entera",
      category: "economy",
      categoryLabel: { es: "Línea Rendimiento Familiar", en: "Family Economy Line" },
      image: "/images/la-becerrita.png",
      packagingType: "Bolsa bilaminada de alta resistencia al impacto",
      shelfLife: "12 meses",
      presentations: ["380g", "400g", "500g", "900g"],
      unitsPerPack: "Pacas de 12 a 30 unidades según gramaje",
      recommendedUse: {
        es: "Ideal para distribuidores mayoristas de alta rotación, programas institucionales y canastas familiares con máxima eficiencia de costo.",
        en: "High-turnover wholesale distribution, institutional programs, and household staple baskets maximizing cost efficiency."
      },
      specifications: {
        solubility: "Rápida dilución en agua a temperatura ambiente",
        moisture: "Humedad < 4.0%",
        fatContent: "Grasa láctea balanceada",
        protein: "Aporte proteico esencial diario"
      },
      description: {
        es: "Marca líder en el mercado regional colombiano reconocida por su excelente relación costo-rendimiento por litro preparado, respaldada por la garantía de inocuidad Mundilácteos.",
        en: "Regional Colombian market leader recognized for its superior cost-to-yield ratio per prepared liter, backed by Mundilácteos' strict safety standards."
      }
    },
    {
      id: "bultos-industriales",
      name: "Saco Industrial Kraft Multi-Capa (5kg, 12.5kg y 25kg)",
      category: "industrial",
      categoryLabel: { es: "Soluciones Industriales B2B", en: "Industrial B2B Sacks" },
      image: "/images/bulto-industrial.png",
      packagingType: "Bolsa interna de polietileno de baja densidad + Saco Kraft de triple capa con barrera BOPP",
      shelfLife: "12 meses en condiciones secas",
      presentations: ["5kg", "12.5kg", "25kg"],
      unitsPerPack: "Bultos individuales paletizados para transporte pesado",
      recommendedUse: {
        es: "Empresas productoras de galletas, panaderías industriales, helados, chocolates, lácteos reconstituidos y distribuidores de materias primas.",
        en: "Industrial bakeries, biscuit plants, ice cream manufacturers, chocolate factories, and ingredient distributors."
      },
      specifications: {
        solubility: "Dispersión industrial estandarizada",
        moisture: "Bajo tenor de humedad para almacenamiento prolongado",
        fatContent: "Grasa láctea entera 26%",
        protein: "Proteína estandarizada certificada"
      },
      description: {
        es: "Presentación diseñada para soportar exigentes cadenas logísticas nacionales. Ofrece termosellado dosificado, atmósfera controlada y total protección contra la humedad e iluminación externa.",
        en: "Engineered for demanding nationwide supply chains. Delivers metered hermetic sealing, controlled atmosphere, and complete barrier against humidity and light."
      }
    }
  ] as ProductDetail[]
};
