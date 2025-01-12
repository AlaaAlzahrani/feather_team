"use client";

import { Search } from 'lucide-react';
import BrandPlatformPage from '@/components/reports/daily/BrandPlatformTemplate';

export default function ReefiGooglePage() {
  const pageData = {
    brand: {
      name: "Reefi",
      path: "/reports/tasks/daily/process/prepare-reports/brands/reefi"
    },
    platform: {
      name: "قوقل",
      icon: Search,
      loginUrl: "https://ads.google.com",
      videoUrl: "/videos/reefi/google-guide.mp4"
    },
    navigation: {
      prev: {
        name: "ميتا",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/meta"
      }
    }
  };

  return <BrandPlatformPage data={pageData} />;
}