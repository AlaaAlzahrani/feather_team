"use client";

import BrandPage from '@/components/reports/daily/BrandTemplate';
import { MessageCircle, Music2, Camera, Search } from 'lucide-react';

export default function LabellePage() {
  const brandData = {
    name: "Labelle",
    description: "يا هلا! هنا بتلاقي شرح مفصل لطريقة تجهيز تقارير Labelle في كل منصة. كل منصة لها متطلبات خاصة للبراند 🎯",
    platforms: [
      {
        name: "سناب شات",
        icon: MessageCircle,
        videoUrl: "/videos/labelle/snapchat-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/snapchat"
      },
      {
        name: "تيك توك",
        icon: Music2,
        videoUrl: "/videos/labelle/tiktok-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/tiktok"
      },
      {
        name: "ميتا",
        icon: Camera,
        videoUrl: "/videos/labelle/meta-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/meta"
      },
      {
        name: "قوقل",
        icon: Search,
        videoUrl: "/videos/labelle/google-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/labelle/google"
      }
    ]
  };

  return <BrandPage brand={brandData} />;
}
