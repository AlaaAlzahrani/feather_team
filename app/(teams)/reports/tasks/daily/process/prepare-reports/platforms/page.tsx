import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, MessageCircle, Music2, Camera, Search, Twitter, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PlatformsOverview = () => {
  const platforms = [
    {
      name: "سناب شات",
      icon: MessageCircle,
      color: "#FFFC00",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/snapchat"
    },
    {
      name: "تيك توك",
      icon: Music2,
      color: "#000000",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/tiktok"
    },
    {
      name: "ميتا",
      icon: Camera,
      color: "#e1306c",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/meta"
    },
    {
      name: "قوقل",
      icon: Search,
      color: "#008000",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/google"
    },
    {
      name: "إكس",
      icon: Twitter,
      color: "#1DA1F2",
      path: "/reports/tasks/daily/process/prepare-reports/platforms/x"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#1D3D6F]/70 mb-6">
        <Link href="/reports" className="hover:text-[#1D3D6F]">التقارير</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/reports/tasks/daily" className="hover:text-[#1D3D6F]">اليومية</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/reports/tasks/daily/process" className="hover:text-[#1D3D6F]">العملية</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#1D3D6F]">المنصات</span>
      </div>

      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily/process"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للعملية
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">المنصات الإعلانية 📱</h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! هنا راح تتعلم كيف تجمع البيانات من كل منصة. اختر المنصة اللي تبي تتعلم عنها 👋
        </p>
      </div>

      {/* Quick Tip Card */}
      <Card className="mb-8 border-r-4 border-r-[#A8E5E2]">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h3 className="font-semibold text-[#1D3D6F] mb-1">نصيحة سريعة ✨</h3>
              <p className="text-sm text-[#1D3D6F]/70">
                كل منصة لها شرح فيديو قصير يوضح الخطوات. شوف الفيديو وطبق معاه الخطوات، وإذا احتجت مساعدة لا تتردد تسأل! 
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Cards */}
      <div className="grid gap-4">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <Link key={index} href={platform.path}>
              <Card className="hover:border-[#F28579] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center"
                        style={{ backgroundColor: `${platform.color}20` }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: platform.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1D3D6F]">{platform.name}</h3>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#F28579]" />
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

export default PlatformsOverview;