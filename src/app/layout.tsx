import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
import Header from "./components/layout/header";

export const metadata: Metadata = {
  title: "AI Traveler",
  description: "AI powered travel planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <main className="container mx-auto px-4">
            <Header />
          </main>
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
