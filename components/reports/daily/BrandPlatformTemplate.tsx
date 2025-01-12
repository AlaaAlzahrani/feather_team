import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Play, AlertCircle, ExternalLink, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface BrandPlatformPageProps {
  data: {
    brand: {
      name: string;
      path: string;
    };
    platform: {
      name: string;
      icon: any;
      loginUrl: string;
      videoUrl: string;
    };
    navigation: {
      prev?: {
        name: string;
        path: string;
      };
      next?: {
        name: string;
        path: string;
      };
    };
  };
}

const BrandPlatformPage: React.FC<BrandPlatformPageProps> = ({ data }) => {
  const { brand, platform, navigation } = data;
  const Icon = platform.icon;

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
        <Link href="/reports/tasks/daily/process/prepare-reports" className="hover:text-[#1D3D6F]">تجهيز التقارير</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/reports/tasks/daily/process/prepare-reports/brands" className="hover:text-[#1D3D6F]">البراندات</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={brand.path} className="hover:text-[#1D3D6F]">{brand.name}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#1D3D6F]">{platform.name}</span>
      </div>

      {/* Back Navigation */}
      <Link
        href={brand.path}
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع لتقارير {brand.name}
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#DFF7F6] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#1D3D6F]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
            تقارير {platform.name} - {brand.name}
          </h1>
        </div>
        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة تجهيز تقارير {platform.name} لحملات {brand.name} 
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="aspect-video bg-[#DFF7F6] rounded-lg mb-4">
            {/* Video player will be implemented here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-[#1D3D6F] mx-auto mb-4" />
                <p className="text-[#1D3D6F]">شرح تجهيز تقارير {platform.name}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#DFF7F6] rounded-lg">
            <span className="text-sm text-[#1D3D6F]">مدة الشرح: 5 دقائق</span>
            <button className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors">
              <span className="text-sm">تشغيل الفيديو</span>
              <Play className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-[#1D3D6F] mb-4">روابط مهمة ⭐️</h3>
          <Link 
            href={platform.loginUrl}
            target="_blank"
            className="flex items-center justify-between p-4 bg-[#DFF7F6] rounded-lg hover:bg-[#A8E5E2] transition-colors"
          >
            <span className="text-[#1D3D6F]">صفحة تسجيل الدخول {platform.name}</span>
            <ExternalLink className="w-5 h-5 text-[#1D3D6F]" />
          </Link>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="mb-8 border-r-4 border-r-[#A8E5E2]">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h3 className="font-semibold text-[#1D3D6F] mb-1">نصائح سريعة 💡</h3>
              <ul className="text-sm text-[#1D3D6F]/70 space-y-2">
                <li>• تأكد من تسجيل الدخول للحساب الصحيح الخاص بـ {brand.name}</li>
                <li>• راجع دليل المقاييس إذا احتجت تذكير بمعنى أي مقياس</li>
                <li>• تقدر تشوف الفيديو أكثر من مرة وتوقفه عشان تطبق الخطوات</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Between Platforms */}
      <div className="flex justify-between items-center">
        {navigation.prev ? (
          <Link
            href={navigation.prev.path}
            className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{navigation.prev.name}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {navigation.next && (
          <Link
            href={navigation.next.path}
            className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
          >
            <span>{navigation.next.name}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BrandPlatformPage;