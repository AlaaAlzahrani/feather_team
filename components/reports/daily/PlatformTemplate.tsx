import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, ChevronLeft, Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PlatformPageProps {
  platform: {
    name: string;
    loginUrl: string;
    videoUrl: string;
    prevPlatform?: {
      name: string;
      path: string;
    };
    nextPlatform?: {
      name: string;
      path: string;
    };
  };
}

const PlatformPage: React.FC<PlatformPageProps> = ({ platform }) => {
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
        <Link href="/reports/tasks/daily/process/prepare-reports" className="hover:text-[#1D3D6F]">المنصات</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#1D3D6F]">{platform.name}</span>
      </div>

      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily/process/prepare-reports"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للمنصات
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">
          تقارير {platform.name}
        </h1>
        <p className="text-[#1D3D6F]/70">
          في هذا القسم راح نتعلم كيف نجمع البيانات من {platform.name}. شوف الفيديو وطبق معاه الخطوات 🎥
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="aspect-video bg-[#DFF7F6] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-12 h-12 text-[#1D3D6F] mx-auto mb-4" />
              <p className="text-[#1D3D6F]">فيديو شرح {platform.name}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-[#1D3D6F] mb-4">روابط مهمة ⭐️</h3>
          <Link 
            href={platform.loginUrl}
            target="_blank"
            className="flex items-center justify-between p-4 bg-[#DFF7F6] rounded-lg hover:bg-[#A8E5E2] transition-colors"
          >
            <span className="text-[#1D3D6F]">صفحة تسجيل الدخول</span>
            <ExternalLink className="w-5 h-5 text-[#1D3D6F]" />
          </Link>
        </CardContent>
      </Card>

      {/* Navigation Between Platforms */}
      <div className="flex justify-between items-center">
        {platform.prevPlatform ? (
          <Link
            href={platform.prevPlatform.path}
            className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{platform.prevPlatform.name}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {platform.nextPlatform && (
          <Link
            href={platform.nextPlatform.path}
            className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
          >
            <span>{platform.nextPlatform.name}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PlatformPage;