"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CalendarCheck, CalendarDays, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reportTypes = [
  {
    id: 'daily',
    title: 'التقارير اليومية',
    icon: Clock,
    path: '/reports/tasks/daily',
  },
  {
    id: 'weekly',
    title: 'التقارير الأسبوعية',
    icon: CalendarDays,
    path: '/reports/tasks/weekly',
  },
  {
    id: 'monthly',
    title: 'التقارير الشهرية',
    icon: CalendarCheck,
    path: '/reports/tasks/monthly',
  }
];

export default function TasksMainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">إعداد التقارير</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          اختر نوع التقرير اللي تبي تتعلم عنه. نقترح تبدأ بالتقارير اليومية! 👋
        </p>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reportTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Link key={type.id} href={type.path} className="block">
              <Card 
                className="h-48 transition-all hover:shadow-lg group relative overflow-hidden"
              >
                <CardContent className="h-full p-6 flex flex-col items-center justify-center relative">
                  <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center bg-[#DFF7F6] mb-4"
                    >
                      <Icon 
                        className="w-10 h-10 text-[#1D3D6F]"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-[#1D3D6F] text-center">{type.title}</h2>
                  </div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1D3D6F]/90 flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#A8E5E2] flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-[#1D3D6F]" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-4">{type.title}</h3>
                    <ArrowLeft className="w-6 h-6 text-[#F28579] transition-transform group-hover:translate-x-[-8px]" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Navigation */}
      <Link
        href="/reports"
        className="flex items-center text-[#F28579] py-8 hover:text-[#1D3D6F] transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للتقارير
      </Link>
    </div>
  );
}

