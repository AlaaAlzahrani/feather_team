import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, CalendarCheck, CalendarDays, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reportTypes = [
  {
    id: 'daily',
    title: 'التقارير اليومية',
    titleEn: 'Daily Reports',
    description: 'تحديث يومي لأرقام المنصات',
    icon: Clock,
    path: '/reports/tasks/daily',
    frequency: 'تحديث يومي',
    highlight: true
  },
  {
    id: 'weekly',
    title: 'التقارير الأسبوعية',
    titleEn: 'Weekly Reports',
    description: 'ملخص أسبوعي لأداء الحملات',
    icon: CalendarDays,
    path: '/reports/tasks/weekly',
  },
  {
    id: 'monthly',
    title: 'التقارير الشهرية',
    titleEn: 'Monthly Reports',
    description: 'تحليل شامل للشهر كامل',
    icon: CalendarCheck,
    path: '/reports/tasks/monthly',
  }
];

export default function TasksMainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للتقارير
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">مهام التقارير</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          اختر نوع التقرير اللي تبي تتعلم عنه. نقترح تبدأ بالتقارير اليومية! 👋
        </p>
      </div>

      {/* Report Types Grid */}
      <div className="space-y-6">
        {reportTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Link key={type.id} href={type.path}>
              <Card className={`hover:shadow-lg transition-all ${
                type.highlight ? 'border-l-4 border-l-[#F28579]' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1D3D6F]" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-xl font-bold text-[#1D3D6F]">{type.title}</h2>
                          <p className="text-sm text-[#1D3D6F]/60">{type.titleEn}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#F28579]" />
                      </div>
                      
                      <p className="text-[#1D3D6F]/70 mb-4">
                        {type.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {type.highlight && (
                          <span className="px-3 py-1 bg-[#F28579] text-white text-sm rounded-full flex items-center">
                            <Sparkles className="w-4 h-4 mr-1" />
                            ابدأ هنا
                          </span>
                        )}
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
          <Calendar className="w-5 h-5 text-[#1D3D6F] mt-1" />
          <p className="text-sm text-[#1D3D6F]">
            نصيحة: اختار وقت ثابت يومياً لتحديث التقارير اليومية، وحط تذكير في التقويم للتقارير الأسبوعية والشهرية 💫
          </p>
        </div>
      </div>
    </div>
  );
}