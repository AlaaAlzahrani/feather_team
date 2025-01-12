"use client";

import { Camera } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function ReefiMetaPage() {
  const pageData = {
    brand: {
      name: "Reefi",
      path: "/reports/tasks/daily/process/prepare-reports/brands/reefi"
    },
    platform: {
      name: "ميتا",
      icon: Camera,
      loginUrl: "https://business.facebook.com",
      videoUrl: "/videos/reefi/meta-guide.mp4"
    },
    navigation: {
      prev: {
        name: "تيك توك",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/tiktok"
      },
      next: {
        name: "قوقل",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/google"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}