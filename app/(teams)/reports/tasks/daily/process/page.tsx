import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ChevronRight, ScrollText, Gauge, Laptop, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProcessPage = () => {
  const paths = [
    {
      title: "طريقة تجهيز التقارير اليومية",
      icon: FileText,
      description: "تعرف على طريقة تحديث الأرقام اليومية من كل المنصات ",
      path: "/reports/tasks/daily/process/prepare-reports"
    },
    {
      title: "طريقة تجهيز ملف التقرير",
      icon: ScrollText,
      description: "تعلم كيف تنسق ملف التقرير اليومي ",
      path: "/reports/tasks/daily/process/prepare-sheet"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#1D3D6F]/70 mb-6">
        <Link href="/reports" className="hover:text-[#1D3D6F]">التقارير</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/reports/tasks" className="hover:text-[#1D3D6F]">المهام</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/reports/tasks/daily" className="hover:text-[#1D3D6F]">اليومية</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#1D3D6F]">العملية</span>
      </div>

      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للتقارير اليومية
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">عملية التقارير اليومية</h1>
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
                        <ChevronRight className="w-5 h-5 text-[#F28579]" />
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

      {/* Quick Links */}
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-3">
          <Laptop className="w-5 h-5 text-[#1D3D6F]" />
          <div>
            <h4 className="font-semibold text-[#1D3D6F] mb-1">مصادر مفيدة ✨</h4>
            <div className="flex gap-4">
              <Link href="/reports/guides/metrics" className="text-sm text-[#F28579] hover:text-[#1D3D6F] transition-colors">
                دليل المقاييس
              </Link>
              <Link href="/reports/guides/brand-names" className="text-sm text-[#F28579] hover:text-[#1D3D6F] transition-colors">
                دليل أسماء البراندات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;