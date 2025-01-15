import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, SparkleIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrepareReportsPage = () => {
  const paths = [
    {
      title: "شرح عام للمنصات",
      icon: SparkleIcon,
      description: "أعرفي كيف تستخرجين الأرقام من كل المنصات",
      preview: [
        "سناب شات",
        "تيك توك",
        "ميتا (انستقرام)",
        "قوقل ادز",
        "إكس (تويتر)"
      ],
      path: "/reports/tasks/daily/process/prepare-reports/platforms"
    },
    {
      title: "شرح خاص للبراندات",
      icon: SparkleIcon,
      description: "أعرفي كيف تستخرجين الأرقام لبعض البراندات ",
      preview: ["لابيل",
        "ريفي"
      ],
      path: "/reports/tasks/daily/process/prepare-reports/brands"
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
        <span className="text-[#1D3D6F]">إعداد التقارير</span>
      </div>


      {/* Header */}
      <div className="mb-8 py-6">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">إعداد التقارير </h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! اختر نوع الشرح اللي تبيه - إما شرح عام لكل المنصات، أو شرح مخصص للبراندات 👋
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


        {/* Back Navigation */}
        <Link
        href="/reports/tasks/daily/process"
        className="flex items-center text-[#F28579] py-8 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للشروحات 
        </Link>

    </div>
  );
};

export default PrepareReportsPage;