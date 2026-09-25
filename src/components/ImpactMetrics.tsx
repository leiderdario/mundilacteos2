"use client";

import React from "react";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { corporateConfig } from "@/config/site";
import { Award, Users, MapPin, CheckCircle2 } from "lucide-react";

export const ImpactMetrics: React.FC = () => {
  const { t } = useCorporateLanguage();

  const metrics = [
    {
      value: t("statYearsVal"),
      label: t("statYearsLabel"),
      icon: Award
    },
    {
      value: t("statClientsVal"),
      label: t("statClientsLabel"),
      icon: Users
    },
    {
      value: t("statCoverageVal"),
      label: t("statCoverageLabel"),
      icon: MapPin
    },
    {
      value: t("statQualityVal"),
      label: t("statQualityLabel"),
      icon: CheckCircle2
    }
  ];

  return (
    <section className="bg-[#0B2545] text-white py-14 border-t border-b border-[#13315C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="flex flex-col border-l-2 border-emerald-500/80 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {m.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-snug font-medium">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
