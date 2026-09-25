"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCorporateLanguage } from "@/context/LanguageContext";
import { submitB2BQuote, B2BQuoteRequest } from "@/services/crm";
import { corporateConfig } from "@/config/site";
import { Send, CheckCircle2, AlertCircle, Loader2, Building2, Phone, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

const quoteSchema = z.object({
  companyName: z.string().min(3, "Indica la razón social o nombre de tu empresa"),
  nitOrTaxId: z.string().min(5, "Indica el NIT o documento tributario"),
  contactPerson: z.string().min(3, "Indica el nombre de la persona de contacto"),
  businessEmail: z.string().email("Ingresa un correo corporativo válido"),
  phone: z.string().min(7, "Indica un teléfono o celular de contacto"),
  businessType: z.enum(["distributor", "food_industry", "retail_supermarket", "horeca", "other"]),
  productOfInterest: z.string().min(2, "Selecciona el producto o línea"),
  monthlyVolumeEstimate: z.string().min(2, "Indica el volumen mensual aproximado"),
  destinationCity: z.string().min(2, "Indica la ciudad de destino"),
  notes: z.string().optional()
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const InstitutionalQuoteForm: React.FC = () => {
  const { t } = useCorporateLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      businessType: "distributor",
      productOfInterest: "The Cántaro — Leche Entera en Polvo",
      monthlyVolumeEstimate: "1 a 5 Toneladas / Mes",
      companyName: "",
      nitOrTaxId: "",
      contactPerson: "",
      businessEmail: "",
      phone: "",
      destinationCity: "",
      notes: ""
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitB2BQuote(data as B2BQuoteRequest);
      if (res.success) {
        setTicketNumber(res.ticketNumber || `COT-${Date.now().toString().slice(-6)}`);
        reset();
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      } else {
        setErrorMessage(res.message || "Ocurrió un error al procesar la cotización.");
      }
    } catch {
      setErrorMessage("No fue posible conectar con el centro comercial. Intenta por nuestra línea telefónica.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Office Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-blue-50 px-3 py-1 rounded border border-blue-200">
                Mesa Comercial B2B
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight mt-3 mb-4">
                {t("formTitle")}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t("formSubtitle")}
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Sede Operativa & Planta</strong>
                  <p className="text-slate-600">{corporateConfig.company.address.full}</p>
                  <p className="text-slate-500 font-mono text-xs mt-0.5">Cartagena, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 border-t border-slate-200/80 pt-4">
                <Phone className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Central Telefónica Comercial</strong>
                  <p className="text-slate-600">{corporateConfig.company.contact.phoneMain} / {corporateConfig.company.contact.phoneSecondary}</p>
                  <p className="text-emerald-700 font-semibold text-xs mt-0.5">{corporateConfig.company.contact.supportHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 border-t border-slate-200/80 pt-4">
                <Mail className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Canal de Licitaciones & Compras</strong>
                  <p className="text-slate-600">{corporateConfig.company.contact.salesEmail}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Atención directa para gerentes de compras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Quote Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {ticketNumber ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0B2545]">
                  Cotización Radicada Exitosamente
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Tu solicitud ha ingresado al sistema de gestión de Inversiones Mundilácteos S.A.S bajo el radicado:
                </p>
                <div className="inline-block px-4 py-2 bg-white rounded-lg border border-emerald-300 font-mono text-emerald-900 font-bold text-sm">
                  {ticketNumber}
                </div>
                <p className="text-xs text-slate-500">
                  Un asesor corporativo asignado te contactará en menos de 24 horas con la propuesta formal.
                </p>
                <button
                  type="button"
                  onClick={() => setTicketNumber(null)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Radicar Otra Solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Razón Social / Empresa *
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      placeholder="Ej. Distribuidora del Norte S.A.S"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.companyName && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.companyName.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      NIT / Identificación Tributaria *
                    </label>
                    <input
                      type="text"
                      {...register("nitOrTaxId")}
                      placeholder="Ej. 900.123.456-7"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.nitOrTaxId && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.nitOrTaxId.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Nombre del Contacto *
                    </label>
                    <input
                      type="text"
                      {...register("contactPerson")}
                      placeholder="Ej. Ing. Laura Gómez"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.contactPerson && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.contactPerson.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      type="email"
                      {...register("businessEmail")}
                      placeholder="compras@tuempresa.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.businessEmail && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.businessEmail.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Teléfono / Móvil *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+57 300 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Tipo de Empresa
                    </label>
                    <select
                      {...register("businessType")}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    >
                      <option value="distributor">Distribuidor Mayorista</option>
                      <option value="food_industry">Industria de Alimentos</option>
                      <option value="retail_supermarket">Supermercado / Retail</option>
                      <option value="horeca">Sector Horeca / Hoteles</option>
                      <option value="other">Otro Canal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Ciudad de Destino *
                    </label>
                    <input
                      type="text"
                      {...register("destinationCity")}
                      placeholder="Ej. Barranquilla / Bogotá"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    />
                    {errors.destinationCity && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.destinationCity.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Línea o Producto Requerido
                    </label>
                    <select
                      id="product-interest"
                      {...register("productOfInterest")}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    >
                      <option value="The Cántaro — Leche Entera en Polvo">The Cántaro — Leche Entera</option>
                      <option value="The Cántaro — Leche en Polvo Azucarada">The Cántaro — Leche Azucarada</option>
                      <option value="La Becerrita — Leche en Polvo Entera">La Becerrita — Leche Entera</option>
                      <option value="Saco Industrial Kraft 25kg">Saco Industrial Kraft 25kg (B2B)</option>
                      <option value="Varios / Portafolio Completo">Varios / Portafolio Completo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Volumen Estimado Mensual
                    </label>
                    <select
                      {...register("monthlyVolumeEstimate")}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545]"
                    >
                      <option value="Menos de 1 Tonelada / Mes">Menos de 1 Tonelada / Mes</option>
                      <option value="1 a 5 Toneladas / Mes">1 a 5 Toneladas / Mes</option>
                      <option value="5 a 20 Toneladas / Mes">5 a 20 Toneladas / Mes</option>
                      <option value="Más de 20 Toneladas / Mes (Contrato)">Más de 20 Toneladas / Mes (Contrato)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Especificaciones o Requerimientos Particulares
                  </label>
                  <textarea
                    rows={3}
                    {...register("notes")}
                    placeholder="Describe si requieres muestras físicas, fecha de inicio de suministro o frecuencias de entrega..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0B2545] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#0B2545] hover:bg-[#13315C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t("formSubmitting")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("formSubmitBtn")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
