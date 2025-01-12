"use client";

import PlatformPage from '@/components/reports/daily/PlatformTemplate';

export default function MetaPage() {
  const platformData = {
    name: "ميتا",
    loginUrl: "https://business.facebook.com/",
    videoUrl: "/videos/meta-guide.mp4",
    prevPlatform: {
      name: "تيك توك",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/tiktok"
    },
    nextPlatform: {
      name: "قوقل",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/google"
    }
  };

  return <PlatformPage platform={platformData} />;
}