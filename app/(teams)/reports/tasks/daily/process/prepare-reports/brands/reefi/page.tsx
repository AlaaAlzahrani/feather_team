
"use client";

import BrandPage from '@/components/reports/daily/BrandTemplate';
import { MessageCircle, Music2, Camera, Search } from 'lucide-react';

export default function ReefiPage() {
  const brandData = {
    name: "Reefi",
    description: "يا هلا! هنا بتلاقي شرح مفصل لطريقة تجهيز تقارير Reefi في كل منصة. كل منصة لها متطلبات خاصة للبراند ✨",
    platforms: [
      {
        name: "سناب شات",
        icon: MessageCircle,
        videoUrl: "/videos/reefi/snapchat-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/snapchat"
      },
      {
        name: "تيك توك",
        icon: Music2,
        videoUrl: "/videos/reefi/tiktok-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/tiktok"
      },
      {
        name: "ميتا",
        icon: Camera,
        videoUrl: "/videos/reefi/meta-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/meta"
      },
      {
        name: "قوقل",
        icon: Search,
        videoUrl: "/videos/reefi/google-guide.mp4",
        path: "/reports/tasks/daily/process/prepare-reports/brands/reefi/google"
      }
    ]
  };

  return <BrandPage brand={brandData} />;
}