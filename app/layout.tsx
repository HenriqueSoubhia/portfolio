import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const themeScript = `
  (function() {
    try {
      var hour = new Date().getHours();
      var bgColor;

      if (hour >= 0 && hour <= 5)
        bgColor = "#0f172a";
      else if (hour >= 6 && hour <= 7)
        bgColor = "#312e81";
      else if (hour >= 8 && hour <= 11)
        bgColor = "#9a3412";
      else if (hour >= 12 && hour <= 16)
        bgColor = "#7f1d1d";
      else if (hour >= 17 && hour <= 18)
        bgColor = "#581c87";
      else bgColor = "#1e1b4b";

      document.documentElement.style.setProperty("--bg-color", bgColor);
    } catch (e) {}
  })();
`;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Soubhia | Portfólio",
  description:
    "Portfólio pessoal construído com Next.js, TailwindCSS e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${outfit.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider />
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
