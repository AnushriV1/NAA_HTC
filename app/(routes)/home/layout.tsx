import type React from "react";
import { MoodProvider } from "@/components/mood-provider";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MoodProvider>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        {children}
      </div>
    </MoodProvider>
  );
}
