import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mundilacteos.com"),
  title: "Inversiones Mundilácteos S.A.S — Plataforma Corporativa B2B",
  description:
    "Compañía láctea líder en Colombia con certificación ISO 9001:2015. Producción y distribución institucional de leche en polvo entera, azucarada y derivados para la industria de alimentos y cadenas de retail.",
  keywords: [
    "Mundilácteos",
    "leche en polvo Colombia B2B",
    "proveedor lácteo institucional",
    "The Cántaro",
    "La Becerrita",
    "leche industrial 25kg",
    "Cartagena lácteos"
  ],
  authors: [{ name: "Inversiones Mundilácteos S.A.S" }],
  openGraph: {
    title: "Inversiones Mundilácteos S.A.S — Plataforma Corporativa",
    description:
      "Nutriendo el desarrollo de Colombia con lácteos de excelencia comprobada. Certificación ISO 9001:2015, Registro INVIMA y cobertura en los 32 departamentos.",
    url: "https://mundilacteos.com",
    siteName: "Inversiones Mundilácteos S.A.S",
    images: [
      {
        url: "/images/the-cantaro-doble.png",
        width: 800,
        height: 800,
        alt: "Mundilácteos Corporativo"
      }
    ],
    locale: "es_CO",
    type: "website"
  },
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#F8FAFC] text-slate-900 antialiased selection:bg-[#0B2545] selection:text-white">
        {children}
      </body>
    </html>
  );
}
