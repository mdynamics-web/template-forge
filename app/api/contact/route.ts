import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { COREXIA_EMAIL } from "@/lib/contact";

const contactPayloadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional().default(""),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(10).max(2000),
  source: z.enum(["general", "alicante", "valencia", "location"]).optional().default("general"),
  locale: z.enum(["es", "en"]).optional().default("es"),
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const payload = contactPayloadSchema.parse(body);
    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Corexia <onboarding@resend.dev>";
    const sourceLabel = payload.locale === "es"
      ? payload.source === "general"
        ? "Página de contacto"
        : payload.source === "alicante"
          ? "Landing Alicante"
          : payload.source === "valencia"
            ? "Landing Valencia"
            : "Página de ubicación"
      : payload.source === "general"
        ? "Contact page"
        : payload.source === "alicante"
          ? "Alicante landing"
          : payload.source === "valencia"
            ? "Valencia landing"
            : "Location page";

    const subject = payload.locale === "es"
      ? `Nuevo lead web: ${payload.name}`
      : `New website lead: ${payload.name}`;
    const labels = payload.locale === "es"
      ? {
          title: "Nuevo lead recibido",
          subtitle: "Formulario web · Corexia",
          name: "Nombre",
          company: "Empresa",
          email: "Email",
          phone: "Teléfono",
          service: "Servicio",
          source: "Origen",
          language: "Idioma",
          message: "Mensaje",
          empty: "No especificado",
        }
      : {
          title: "New lead received",
          subtitle: "Website form · Corexia",
          name: "Name",
          company: "Company",
          email: "Email",
          phone: "Phone",
          service: "Service",
          source: "Source",
          language: "Language",
          message: "Message",
          empty: "Not specified",
        };

    await resend.emails.send({
      from: fromEmail,
      to: COREXIA_EMAIL,
      replyTo: payload.email,
      subject,
      html: `
        <div style="margin:0;padding:24px;background-color:#0b1220;font-family:Inter,Segoe UI,Arial,sans-serif;color:#e2e8f0;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;border-collapse:separate;border-spacing:0;">
            <tr>
              <td style="padding:0;">
                <div style="background:linear-gradient(135deg,#00C2FF 0%,#A855F7 100%);border-radius:18px 18px 0 0;padding:20px 24px;">
                  <div style="font-size:12px;letter-spacing:1.2px;text-transform:uppercase;font-weight:700;color:#e0f2fe;">${labels.subtitle}</div>
                  <div style="margin-top:8px;font-size:24px;line-height:1.2;font-weight:800;color:#ffffff;">${labels.title}</div>
                </div>
                <div style="background-color:#111827;border:1px solid #1f2937;border-top:none;border-radius:0 0 18px 18px;padding:24px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.name}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.company}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.company || labels.empty)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.email}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.email)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.phone}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.phone || labels.empty)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.service}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.service || labels.empty)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#93c5fd;font-size:13px;font-weight:600;">${labels.source}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(sourceLabel)}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;color:#93c5fd;font-size:13px;font-weight:600;">${labels.language}</td>
                      <td style="padding:10px 0;color:#f8fafc;font-size:14px;text-align:right;">${escapeHtml(payload.locale.toUpperCase())}</td>
                    </tr>
                  </table>
                  <div style="margin-top:20px;padding:16px;border:1px solid #1f2937;background-color:#0b1220;border-radius:12px;">
                    <div style="font-size:13px;font-weight:700;color:#93c5fd;margin-bottom:8px;">${labels.message}</div>
                    <div style="font-size:14px;line-height:1.7;color:#f8fafc;">${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message || "Invalid payload" }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
