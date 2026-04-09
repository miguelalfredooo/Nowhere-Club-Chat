"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { InputGroupDemo } from "@/components/input-group-demo"
import { SplineBackground } from "@/components/backgrounds"
import { ThumbnailGallery } from "@/components/thumbnail-gallery"
import { ImageConstellation } from "@/components/image-constellation"

export default function Page() {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <SidebarProvider className="h-svh">
      <AppSidebar />
      <main className="relative flex flex-1 flex-col justify-end overflow-hidden">
        <SplineBackground />
        <div className="relative z-10 p-6 h-full flex flex-col justify-end gap-6">
          <ImageConstellation />
          <ThumbnailGallery isFocused={isInputFocused} />
          <InputGroupDemo
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </div>
      </main>
    </SidebarProvider>
  )
}
