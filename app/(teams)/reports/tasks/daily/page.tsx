import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, ClipboardList, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sections = [
  {
    id: 'process',
    title: 'طريقة العمل',
    titleEn: 'Process Guide',
    description: 'شرح خطوة بخطوة لكيفية تجهيز التقرير اليومي',
    icon: ClipboardList,
    path: '/reports/tasks/daily/process',
    duration: '10 دقايق',
    details: 'تعلم كيفية تجميع الأرقام وتنسيقها في التقرير'
  },
  {
    id: 'schedule',
    title: 'جدول التحديث',
    titleEn: 'Update Schedule',
    description: 'معرفة متى تحدث التقرير وكيف تتعامل مع العطل',
    icon: Clock,
    path: '/reports/tasks/daily/schedule',
    duration: '5 دقايق',
    details: 'تعرف على مواعيد التحديث والجداول الزمنية'
  }
];

export default function DailyMainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports/tasks"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للمهام
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">التقارير اليومية</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          يا هلا! هنا بتتعلم كل شي عن التقارير اليومية 👋
        </p>
      </div>


      {/* Sections */}
      <div className="grid gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.id} href={section.path}>
              <Card className="hover:border-[#F28579] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1D3D6F]" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-bold text-[#1D3D6F]">{section.title}</h2>
                          <p className="text-sm text-[#1D3D6F]/60 mb-2">{section.titleEn}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#F28579]" />
                      </div>
                      
                      <p className="text-[#1D3D6F]/70 mb-4">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-[#DFF7F6] text-[#1D3D6F] text-sm rounded-full flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {section.duration}
                        </span>
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
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1D3D6F] mt-1" />
          <p className="text-sm text-[#1D3D6F]">
            تذكير: إذا عندك أي سؤال أو استفسار، لا تتردد تسأل قائد الفريق - هم موجودين لمساعدتك! 💫
          </p>
        </div>
      </div>
    </div>
  );
}