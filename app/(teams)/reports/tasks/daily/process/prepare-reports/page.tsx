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

      {/* Header */}
      <div className="mb-8 py-6">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">شروحات أساسية</h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! هنا بتلقين نصائح مهمة بتساعدك - إما شرح عام لكل المنصات، أو شرح مخصص للبراندات 👋
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

export default PrepareReportsPage;