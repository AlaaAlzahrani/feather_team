// app/(teams)/reports/tasks/daily/process/prepare-reports/platforms/snapchat/page.tsx
"use client";

import PlatformPage from '@/components/reports/daily/PlatformTemplate';

export default function SnapchatPage() {
  const platformData = {
    name: "سناب شات",
    loginUrl: "https://ads.snapchat.com",
    videoUrl: "/videos/snapchat-guide.mp4",
    nextPlatform: {
      name: "تيك توك",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/tiktok"
    }
  };

  return <PlatformPage platform={platformData} />;
}