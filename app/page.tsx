"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <main>
      <p>Redirecting to login...</p> {/* Optional: Display this while redirecting */}
    </main>
  );
}
