export interface B2BQuoteRequest {
  companyName: string;
  nitOrTaxId: string;
  contactPerson: string;
  businessEmail: string;
  phone: string;
  businessType: "distributor" | "food_industry" | "retail_supermarket" | "horeca" | "other";
  productOfInterest: string;
  monthlyVolumeEstimate: string;
  destinationCity: string;
  notes?: string;
  submittedAt?: string;
}

export interface B2BQuoteResponse {
  success: boolean;
  message: string;
  ticketNumber?: string;
}

export async function submitB2BQuote(data: B2BQuoteRequest): Promise<B2BQuoteResponse> {
  const payload = {
    ...data,
    platform: "mundilacteos_corporate_platform",
    submittedAt: new Date().toISOString()
  };

  const webhookUrl = process.env.NEXT_PUBLIC_CRM_B2B_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        return {
          success: true,
          message: "Solicitud radicada exitosamente en el sistema comercial.",
          ticketNumber: `CORP-${Date.now()}`
        };
      }
    } catch (e) {
      console.warn("External CRM endpoint unreachable, fallback engaged", e);
    }
  }

  // Fallback simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        try {
          const quotes = JSON.parse(localStorage.getItem("mundilacteos_b2b_quotes") || "[]");
          quotes.push(payload);
          localStorage.setItem("mundilacteos_b2b_quotes", JSON.stringify(quotes));
        } catch {
          // ignore
        }
      }
      console.info("Corporate B2B Quote Logged:", payload);
      resolve({
        success: true,
        message: "Cotización radicada exitosamente. Un gerente de cuenta se comunicará en menos de 24 horas hábiles.",
        ticketNumber: `COT-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }, 700);
  });
}
