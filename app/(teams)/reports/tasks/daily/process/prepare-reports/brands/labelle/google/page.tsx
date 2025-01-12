"use client";

import { Search } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function LabelleGooglePage() {
  const pageData = {
    brand: {
      name: "Labelle",
      path: "/reports/tasks/daily/process/prepare-reports/brands/labelle"
    },
    platform: {
      name: "قوقل",
      icon: Search,
      loginUrl: "https://ads.google.com",
      videoUrl: "/videos/labelle/google-guide.mp4"
    },
    navigation: {
      prev: {
        name: "ميتا",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/meta"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}