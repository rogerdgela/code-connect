import { Prompt } from "next/font/google";

import "./globals.css";
import { Aside } from "@/components/Aside";

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para conectar Devs!",
};

const prompt = Prompt({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
