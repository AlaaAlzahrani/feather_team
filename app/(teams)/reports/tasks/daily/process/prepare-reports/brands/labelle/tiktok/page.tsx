"use client";

import { Music2 } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function LabelleTikTokPage() {
  const pageData = {
    brand: {
      name: "Labelle",
      path: "/reports/tasks/daily/process/prepare-reports/brands/labelle"
    },
    platform: {
      name: "تيك توك",
      icon: Music2,
      loginUrl: "https://ads.tiktok.com",
      videoUrl: "/videos/labelle/tiktok-guide.mp4"
    },
    navigation: {
      prev: {
        name: "سناب شات",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/snapchat"
      },
      next: {
        name: "ميتا",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/meta"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}