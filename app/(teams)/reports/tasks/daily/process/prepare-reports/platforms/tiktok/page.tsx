"use client";

import PlatformPage from '@/components/reports/daily/PlatformTemplate';

export default function TikTokPage() {
  const platformData = {
    name: "تيك توك",
    loginUrl: "https://ads.tiktok.com",
    videoUrl: "/videos/tiktok-guide.mp4",
    prevPlatform: {
      name: "سناب شات",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/snapchat"
    },
    nextPlatform: {
      name: "ميتا",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/meta"
    }
  };

  return <PlatformPage platform={platformData} />;
}