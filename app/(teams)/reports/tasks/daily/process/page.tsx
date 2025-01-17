import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, SparkleIcon, Laptop, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProcessPage = () => {
  const paths = [
    {
      title: "شروحات أساسية",
      icon: SparkleIcon,
      description: "أعرفي الأساسيات الهامة لإعداد التقرير اليومي ",
      path: "/reports/tasks/daily/process/prepare-reports"
    },
    {
      title: "شروحات إضافية",
      icon: SparkleIcon,
      description:"أعرفي تفاصيل إضافية عن إعداد التقرير اليومي",
      path: "/reports/tasks/daily/process/prepare-additional"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 py-6">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">شروحات التقارير اليومية</h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! 👋 اختر المسار اللي تبي تتعلم فيه عن تجهيز التقارير اليومية أو إعداد ملف التقرير
        </p>
      </div>

      {/* Path Cards */}
      <div className="grid gap-6">
        {paths.map((path, index) => {
          const Icon = path.icon;
          return (
            <Link key={index} href={path.path}>
              <Card className="hover:border-[#F28579] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#1D3D6F]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#1D3D6F]">{path.title}</h3>
                        <ChevronLeft className="w-5 h-5 text-[#F28579]" />
                      </div>
                      <p className="text-[#1D3D6F]/70 mb-4">{path.description}</p>
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

export default ProcessPage;