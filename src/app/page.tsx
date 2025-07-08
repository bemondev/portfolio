'use client'

import { CircularMenu } from "@/components/circularmenu";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Menú Circular */}
      <div className="relative w-[300px] h-[300px]">
        <CircularMenu />
      </div>
    </main>
  );
}
