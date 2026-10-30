import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';

export const metadata = {
  metadataBase: new URL("https://rafaoliveira.dev.br"),
  title: "Rafael Oliveira | Sites e apps de agendamento",
  description: "Desenvolvedor fullstack. Crio landing pages e sistemas de agendamento que enchem a agenda do seu negócio.",
  openGraph: {
    title: "Rafael Oliveira | Sites e apps de agendamento",
    description: "Landing pages e apps de agendamento sob medida.",
    url: "/pt",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.webp", width: 1200, height: 630 }],
  },
};

export default async function RootLayout({children}) {

  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>   
      </body>
    </html>
  );
}
