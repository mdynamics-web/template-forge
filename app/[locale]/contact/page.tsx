import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: `${t('title1')} ${t('title2')} | NeuralForge`,
    description: t('subtitle'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 lg:pt-40 pb-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {t("contact.tag")}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
              {t("contact.title1")} <span className="gradient-text">{t("contact.title2")}</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 animate-in fade-in slide-in-from-left-4 duration-700">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="p-6 rounded-2xl bg-card border border-border card-shadow">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.email.label")}</div>
                      <div className="text-foreground font-medium">hello@corexia.es</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.phone.label")}</div>
                      <div className="text-foreground font-medium">+34 652 56 14 27</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.location.label")}</div>
                      <div className="text-foreground font-medium">Alicante - Valencia, España</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl gradient-bg text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-3">{t("footer.consultation")}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                  {t("footer.consultationDesc")}
                </p>
                <div className="text-sm font-medium text-secondary">{t("footer.response")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
