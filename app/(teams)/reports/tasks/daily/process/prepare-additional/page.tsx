import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, SparkleIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdditionalTutorialsOverview = () => {
  const brands = [
    {
      name: "البحث عن المقياس",
      description: "أعرفي كيف تستخرجين المقياس المختفي في كل منصة",
      path: "/reports/tasks/daily/process/prepare-additional/custom-metric"
    },
    {
      name: "تنسيق التقرير",
      description: "أعرفي كيف تنسقين صفحة التقرير اليومي",
      path: "/reports/tasks/daily/process/prepare-additional/sheet"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#1D3D6F]/70 mb-6">
        <Link href="/reports" className="hover:text-[#1D3D6F]">التقارير</Link>
        <ChevronLeft className="w-4 h-4" />
        <Link href="/reports/tasks/daily" className="hover:text-[#1D3D6F]">اليومية</Link>
        <ChevronLeft className="w-4 h-4" />
        <Link href="/reports/tasks/daily/process" className="hover:text-[#1D3D6F]">شروحات</Link>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-[#1D3D6F]">شروحات إضافية</span>
      </div>

      {/* Header */}
      <div className="mb-10 py-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">شروحات إضافية </h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! هنا بتلقين نصائح بتساعدك كثير في إعداد التقرير اليومي 
        </p>
      </div>

      {/* Brand Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <Link key={index} href={brand.path}>
            <Card className="h-full hover:border-[#F28579] hover:shadow-lg transition-all group">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Brand Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                    <SparkleIcon className="w-8 h-8 text-[#1D3D6F] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D3D6F] mb-1">{brand.name}</h3>
                    <p className="text-[#1D3D6F]/70">{brand.description}</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-4 flex items-center justify-end text-[#F28579] group-hover:translate-x-[-4px] transition-transform">
                  <span className="text-sm">تفاصيل</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>


        {/* Back Navigation */}
        <Link
        href="/reports/tasks/daily/process/prepare-reports"
        className="flex items-center text-[#F28579] py-8 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للتقارير اليومية
      </Link>

    </div>
  );
};

export default AdditionalTutorialsOverview;