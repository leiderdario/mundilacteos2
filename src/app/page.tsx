"use client";

import React from "react";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateHero } from "@/components/CorporateHero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { CommitmentPillars } from "@/components/CommitmentPillars";
import { B2BCatalog } from "@/components/B2BCatalog";
import { CorporateFooter } from "@/components/CorporateFooter";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      {/* Top Bar & Main Header with Cross-page Navigation */}
      <CorporateHeader />

      <main className="flex-grow">
        {/* Section: Hero with Audience Segmentation & CTA to /contacto */}
        <CorporateHero />

        {/* Section: Institutional Metrics Bar */}
        <ImpactMetrics />

        {/* Section: Strategic Commitment Pillars (Nosotros) */}
        <CommitmentPillars />

        {/* Section: B2B Commercial & Industrial Catalog (Productos) */}
        <B2BCatalog />
      </main>

      {/* Corporate Footer */}
      <CorporateFooter />
    </div>
  );
}
