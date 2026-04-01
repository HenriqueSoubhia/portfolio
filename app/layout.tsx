import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";

const themeScript = `
  (function() {
    try {
      var hour = new Date().getHours();
      var bgColor;
      
      if (hour >= 0 && hour <= 5) bgColor = '#0f172a';
      else if (hour >= 6 && hour <= 7) bgColor = '#4338ca';
      else if (hour >= 8 && hour <= 11) bgColor = '#ea580c';
      else if (hour >= 12 && hour <= 16) bgColor = '#be123c';
      else if (hour >= 17 && hour <= 18) bgColor = '#6b21a8';
      else bgColor = '#1e1b4b';
      
      document.documentElement.style.setProperty('--bg-color', bgColor);
    } catch (e) {}
  })();
`;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Soubhia | Portfólio",
  description: "Portfólio pessoal construído com Next.js, TailwindCSS e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
