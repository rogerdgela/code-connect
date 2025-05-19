import "./globals.css";
import { Aside } from "@/components/Aside";

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para conectar Devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Aside />
        {children}
      </body>
    </html>
  );
}
