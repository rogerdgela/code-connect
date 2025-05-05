export const metadata = {
  title: "Code Connect",
  description: "Uma plataforma para conectar programadores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
