import type React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MoodProvider } from "@/components/mood-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MoodProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {children}
        </main>
        <Footer />
      </div>
    </MoodProvider>
  );
}