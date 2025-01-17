import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, ClipboardList, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sections = [
  {
    id: 'process',
    title: 'شروحات',
    description: 'شوفي مقاطع فيديو تشرح لك خطوة بخطوة كيف تسوين التقرير اليومي',
    icon: ClipboardList,
    path: '/reports/tasks/daily/process',
  },
  {
    id: 'schedule',
    title: 'جدول التحديث',
    description: 'أعرفي متى نسوي التقرير اليومي',
    icon: Clock,
    path: '/reports/tasks/daily/schedule',
  }
];

export default function DailyMainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
                        </div>
                        <ArrowLeft className="w-5 h-5 text-[#F28579]" />
                      </div>
                      
                      <p className="text-[#1D3D6F]/70 mb-4">
                        {section.description}
                      </p>
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
}