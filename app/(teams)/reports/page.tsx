"client use";

import React from 'react';
import { ChevronLeft, Sparkles, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const mainOptions = [
  {
    id: 'essentials',
    title: 'الأدلة الأساسية',
    description: 'جديد في التقارير؟ ابدأ هنا لتتعلم الأساسيات ✨',
    icon: Sparkles,
    path: '/reports/guides',
    bgColor: 'bg-[#DFF7F6]',
    borderColor: 'hover:border-[#A8E5E2]',
    recommendation: 'مناسب للموظفين الجدد'
  },
  {
    id: 'tasks',
    title: 'مهام التقارير',
    description: 'جاهز لإنشاء التقارير؟ اكتشف الأدلة التفصيلية هنا 📊',
    icon: Target,
    path: '/reports/tasks',
    bgColor: 'bg-[#FFF4F3]',
    borderColor: 'hover:border-[#F28579]',
    recommendation: 'للموظفين الملمين بالأساسيات'
  }
];

export const ReportsSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12" dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#1D3D6F] mb-4">
          مرحباً بك في تدريب التقارير 👋
        </h1>
        <p className="text-[#1D3D6F]/70 text-lg max-w-2xl mx-auto">
          اختر المسار المناسب لمستوى خبرتك
        </p>
      </div>

      {/* Main Options */}
      <div className="grid gap-6">
        {mainOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Link key={option.id} href={option.path}>
              <Card className={`transition-all duration-300 hover:shadow-lg ${option.borderColor}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${option.bgColor} flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-[#1D3D6F]" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-[#1D3D6F] mb-2">
                        {option.title}
                      </h2>
                      <p className="text-[#1D3D6F]/70 mb-4">
                        {option.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#1D3D6F]/60">
                          {option.recommendation}
                        </span>
                        <ChevronLeft className="w-5 h-5 text-[#F28579]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default ReportsSection;