import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "JOVI Smart Assist | Debug Team",
  description:
    "JOVI Smart Assist: inteligência artificial que sugere o modo de câmera ideal e organiza conteúdos de estudo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-base font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
