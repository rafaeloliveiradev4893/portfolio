import Arrow from "./arrow";
import { useTranslations } from "next-intl";

function Contact(){ 
  const t = useTranslations("Contact");
  return(
    <section id="contact" className="responsive-container border-t-4 border-(--color-secondary) py-20">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="title">{t("title")}</h1>
            <p className="text text-(--color-text)">{t("description")}</p>
          </div>
          <div className="flex flex-col gap-4">
            <a className="group flex flex-col gap-2 rounded-xl border border-(--color-secondary)/20 bg-white/70 p-5 transition-colors hover:border-(--color-secondary) hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="mailto:rafaelsilva039133@gmail.com">
              <span className="text-sm font-semibold uppercase tracking-wider text-(--color-assistant)">{t("email")}</span>
              <span className="flex flex-wrap items-center justify-between gap-2 text text-(--color-secondary)">
                <span className="break-all font-semibold">rafaelsilva039133@gmail.com</span>
                <span className="flex items-center gap-2 font-semibold">{t("emailAction")} <Arrow /></span>
              </span>
            </a>
            <a className="group flex flex-col gap-2 rounded-xl border border-(--color-secondary)/20 bg-white/70 p-5 transition-colors hover:border-(--color-secondary) hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="https://wa.me/557582986745" target="_blank" rel="noopener noreferrer">
              <span className="text-sm font-semibold uppercase tracking-wider text-(--color-assistant)">{t("whatsapp")}</span>
              <span className="flex flex-wrap items-center justify-between gap-2 text text-(--color-secondary)">
                <span className="font-semibold">(75) 8298-6745</span>
                <span className="flex items-center gap-2 font-semibold">{t("whatsappAction")} <Arrow /></span>
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="subtitle">{t("social")}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <a className="flex items-center justify-between gap-3 rounded-xl border border-(--color-secondary)/20 p-4 text text-(--color-secondary) transition-colors hover:border-(--color-secondary) hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="https://www.instagram.com/rafaeloliveiradev/" target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a>
            <a className="flex items-center justify-between gap-3 rounded-xl border border-(--color-secondary)/20 p-4 text text-(--color-secondary) transition-colors hover:border-(--color-secondary) hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="https://x.com/rafaoliveiradev" target="_blank" rel="noopener noreferrer">X (Twitter) <Arrow /></a>
            <a className="flex items-center justify-between gap-3 rounded-xl border border-(--color-secondary)/20 p-4 text text-(--color-secondary) transition-colors hover:border-(--color-secondary) hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="https://www.linkedin.com/in/rafaeloliveira-dev/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
            <a className="flex items-center justify-between gap-3 rounded-xl border border-(--color-secondary)/20 p-4 text text-(--color-secondary) transition-colors hover:border-(--color-secondary) hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)" href="https://www.threads.com/@rafaeloliveiradev" target="_blank" rel="noopener noreferrer">Threads <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;