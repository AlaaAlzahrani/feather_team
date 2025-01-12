"use client";

import PlatformPage from '@/components/reports/daily/PlatformTemplate';

export default function XPage() {
  const platformData = {
    name: "إكس",
    loginUrl: "https://ads.twitter.com/",
    videoUrl: "/videos/x-guide.mp4",
    prevPlatform: {
      name: "قوقل",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/goolge"
    }
  };

  return <PlatformPage platform={platformData} />;
}