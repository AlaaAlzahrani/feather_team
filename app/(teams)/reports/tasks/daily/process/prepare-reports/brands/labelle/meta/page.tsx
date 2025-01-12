"use client";

import { Camera } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function LabelleMetaPage() {
  const pageData = {
    brand: {
      name: "Labelle",
      path: "/reports/tasks/daily/process/prepare-reports/brands/labelle"
    },
    platform: {
      name: "ميتا",
      icon: Camera,
      loginUrl: "https://business.facebook.com",
      videoUrl: "/videos/labelle/meta-guide.mp4"
    },
    navigation: {
      prev: {
        name: "تيك توك",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/tiktok"
      },
      next: {
        name: "قوقل",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/google"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}