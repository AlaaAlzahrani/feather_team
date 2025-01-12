"use client";

import PlatformPage from '@/components/reports/daily/PlatformTemplate';

export default function GooglePage() {
  const platformData = {
    name: "قوقل",
    loginUrl: "https://ads.google.com/",
    videoUrl: "/videos/google-guide.mp4",
    prevPlatform: {
      name: "ميتا",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/meta"
    },
    nextPlatform: {
      name: "إكس",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/x"
    }
  };

  return <PlatformPage platform={platformData} />;
}