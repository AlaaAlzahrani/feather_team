"use client";

import { MessageCircle } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function ReefiSnapchatPage() {
  const pageData = {
    brand: {
      name: "Reefi",
      path: "/reports/tasks/daily/process/prepare-reports/brands/reefi"
    },
    platform: {
      name: "سناب شات",
      icon: MessageCircle,
      loginUrl: "https://ads.snapchat.com",
      videoUrl: "/videos/reefi/snapchat-guide.mp4"
    },
    navigation: {
      next: {
        name: "تيك توك",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/tiktok"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}