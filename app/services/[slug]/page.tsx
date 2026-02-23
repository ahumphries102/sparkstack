"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const SERVICE_COMPONENTS: Record<string, any> = {
  // Ensure these keys match the 'route' in your serviceData.ts
  "frontend": dynamic(() => import("@/components/frontendService")),
  "backend": dynamic(() => import("@/components/backendService")),
  "fullstack": dynamic(() => import("@/components/fullstackService")),
  "webdevelopment": dynamic(() => import("@/components/webdevelopmentService")),
};

export default function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); 
  const SelectedService = SERVICE_COMPONENTS[slug];
  console.log("Selected Service:", slug, SelectedService);
  if (!SelectedService) return notFound();

  return (
    <div className="min-h-screen pt-20">
      <SelectedService />
    </div>
  );
}