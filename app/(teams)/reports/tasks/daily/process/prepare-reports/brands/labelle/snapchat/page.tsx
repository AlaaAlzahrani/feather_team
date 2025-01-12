"use client";

import { MessageCircle } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function LabelleSnapchatPage() {
  const pageData = {
    brand: {
      name: "Labelle",
      path: "/reports/tasks/daily/process/prepare-reports/brands/labelle"
    },
    platform: {
      name: "سناب شات",
      icon: MessageCircle,
      loginUrl: "https://ads.snapchat.com",
      videoUrl: "/videos/labelle/snapchat-guide.mp4"
    },
    navigation: {
      next: {
        name: "تيك توك",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/tiktok"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}