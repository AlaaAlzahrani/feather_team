"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft,  MessageCircle, Music2, Camera, Search, Twitter, ChevronLeft, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CustomMetricOverview = () => {
  const platforms = [
    {
      name: "سناب شات",
      icon: MessageCircle,
      color: "#FFFC00",
      hoverColor: "#FFFC00", 
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric/snapchat"
    },
    {
      name: "تيك توك",
      icon: Music2,
      color: "#000000",
      hoverColor: "#808080", 
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric/tiktok"
    },
    {
      name: "ميتا",
      icon: Camera,
      color: "#e1306c",
      hoverColor: "#FF0000",
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric/meta"
    },
    {
      name: "قوقل",
      icon: Search,
      color: "#008000",
      hoverColor: "#008000", 
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric/google"
    },
    {
      name: "إكس",
      icon: Twitter,
      color: "#1DA1F2",
      hoverColor: "#1DA1F2", 
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric/x"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#1D3D6F]/70 mb-6">
        <Link href="/reports" className="hover:text-[#1D3D6F]">التقارير</Link>
        <ChevronLeft className="w-4 h-4" />
        <Link href="/reports/tasks/daily" className="hover:text-[#1D3D6F]">اليومية</Link>
        <ChevronLeft className="w-4 h-4" />
        <Link href="/reports/tasks/daily/process" className="hover:text-[#1D3D6F]">شروحات</Link>
        <ChevronLeft className="w-4 h-4" />
        <Link href="/reports/tasks/daily/process/prepare-additional" className="hover:text-[#1D3D6F]">شروحات إضافة </Link>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-[#1D3D6F]">البحث عن المقياس</span>
      </div>

      {/* Header */}
      <div className="py-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">استخرجي المقياس المختفي من المنصة</h1>
        <p className="text-[#1D3D6F]/70">
          أهلين! هنا بنتعلم مع بعض كيف نستخرج المقياس الي مايظهر تلقائياً في المنصة ✨
        </p>
      </div>


      {/* Quick Tip Card */}
      <Card className="mb-8 border-r-4 border-r-[#A8E5E2]">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h3 className="font-semibold text-[#1D3D6F] mb-1">نصيحة سريعة </h3>
              <p className="text-sm text-[#1D3D6F]/70">
                كل منصة لها شرح فيديو قصير يوضح الخطوات. شوف الفيديو وطبق معاه الخطوات، وإذا احتجت مساعدة لا تتردد تسأل! 
              </p>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Platform Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-2">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <Link key={index} href={platform.path} className="block">
              <Card 
                className="h-40 transition-all hover:shadow-lg group relative overflow-hidden"
                style={{ 
                  '--platform-color': platform.color,
                  '--platform-bg-color': `${platform.color}20`,
                  '--platform-hover-color': platform.hoverColor,
                } as React.CSSProperties}
              >
                <CardContent className="h-full p-4 flex flex-col items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-colors relative z-10"
                    style={{ backgroundColor: 'var(--platform-bg-color)' }}
                  >
                    <Icon 
                      className="w-8 h-8 transition-colors" 
                      style={{ color: 'var(--platform-color)' }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D3D6F] text-center transition-opacity group-hover:opacity-100">
                    {platform.name}
                  </h3>
                  <ChevronLeft className="w-5 h-5 text-[#000000] mt-2 transition-transform group-hover:translate-x-[-8px]" />
                </CardContent>
                <div className="absolute inset-0 bg-[var(--platform-hover-color)] opacity-0 group-hover:opacity-60 transition-opacity">
                  <div className="h-full p-4 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-16">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily/process/prepare-additional"
        className="flex items-center text-[#F28579] py-8 hover:text-[#1D3D6F] transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للشروحات الإضافية
      </Link>
    </div>
  );
};

export default CustomMetricOverview;

