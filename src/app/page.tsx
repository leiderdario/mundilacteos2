"use client";

import React from "react";
import { CorporateLanguageProvider } from "@/context/LanguageContext";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateHero } from "@/components/CorporateHero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { CommitmentPillars } from "@/components/CommitmentPillars";
import { SupplyChainOverview } from "@/components/SupplyChainOverview";
import { B2BCatalog } from "@/components/B2BCatalog";
import { PartnerShowcase } from "@/components/PartnerShowcase";
import { InstitutionalQuoteForm } from "@/components/InstitutionalQuoteForm";
import { CorporateFooter } from "@/components/CorporateFooter";

export default function CorporatePage() {
  return (
    <CorporateLanguageProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
        {/* DFA-Style Top Bar & Main Header */}
        <CorporateHeader />

        <main className="flex-grow">
          {/* Hero with Audience Segmentation */}
          <CorporateHero />

          {/* Institutional Metrics Bar */}
          <ImpactMetrics />

          {/* Strategic Commitment Pillars */}
          <CommitmentPillars />

          {/* Traceability: Del Campo a su Empresa */}
          <SupplyChainOverview />

          {/* B2B Commercial & Industrial Catalog */}
          <B2BCatalog />

          {/* Corporate Partners & Alliances */}
          <PartnerShowcase />

          {/* Institutional Quote Form */}
          <InstitutionalQuoteForm />
        </main>

        {/* Corporate Footer */}
        <CorporateFooter />
      </div>
    </CorporateLanguageProvider>
  );
}
