"use client";

import { Music2 } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function ReefiTikTokPage() {
  const pageData = {
    brand: {
      name: "Reefi",
      path: "/reports/tasks/daily/process/prepare-reports/brands/reefi"
    },
    platform: {
      name: "تيك توك",
      icon: Music2,
      loginUrl: "https://ads.tiktok.com",
      videoUrl: "/videos/reefi/tiktok-guide.mp4"
    },
    navigation: {
      prev: {
        name: "سناب شات",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/snapchat"
      },
      next: {
        name: "ميتا",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/meta"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}