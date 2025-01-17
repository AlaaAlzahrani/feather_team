"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, BarChart2, Building2, LayoutDashboard, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const guides = [
  {
    title: "المنصات",
    description: "تعرف على منصات الإعلانات اللي نستخدمها",
    icon: LayoutDashboard,
    path: "/reports/guides/platforms",
  },
  {
    title: "هيكلة الإعلانات",
    description: "كيف تنظم حملاتك ومجموعات إعلاناتك",
    icon: FileText,
    path: "/reports/guides/ad-structure",
  },
  {
    title: "المقاييس",
    description: "أهم المقاييس في كل منصة",
    icon: BarChart2,
    path: "/reports/guides/metrics",
  },
  {
    title: "أسماء البراندات",
    description: "أسماء البراندات في كل منصة",
    icon: Building2,
    path: "/reports/guides/brand-names",
  }
];

export const ReportsGuidesIntro = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" dir="rtl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">الأدلة الأساسية ✨</h1>
        <p className="text-[#1D3D6F]/70">
          يلا نتعلم مع بعض أساسيات التقارير!
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid gap-4 mb-8">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <Link key={index} href={guide.path}>
              <Card className="hover:border-[#F28579] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1D3D6F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1D3D6F] mb-1">{guide.title}</h3>
                        <p className="text-[#1D3D6F]/70 text-sm">{guide.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Pro Tip */}
      <div className="p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            نصيحة: ابدأ بدليل المنصات عشان تفهم الأساسيات، وبعدين انتقل للأدلة الثانية 💡
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsGuidesIntro;