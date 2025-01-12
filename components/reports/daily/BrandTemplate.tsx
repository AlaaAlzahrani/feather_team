import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, MessageCircle, Music2, Camera, Search, Play, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface BrandPageProps {
  brand: {
    name: string;
    description: string;
    platforms: {
      name: string;
      icon: any;
      videoUrl: string;
      path: string;
    }[];
  };
}

const BrandPage: React.FC<BrandPageProps> = ({ brand }) => {
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
        <span className="text-[#1D3D6F]">{brand.name}</span>
      </div>

      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily/process/prepare-reports/brands"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للبراندات
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">تقارير {brand.name} 📊</h1>
        <p className="text-[#1D3D6F]/70">
          {brand.description}
        </p>
      </div>

      {/* Quick Tip */}
      <Card className="mb-8 border-r-4 border-r-[#A8E5E2]">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h3 className="font-semibold text-[#1D3D6F] mb-1">نصيحة سريعة ✨</h3>
              <p className="text-sm text-[#1D3D6F]/70">
                شوف الفيديو الخاص بكل منصة وطبق معاه الخطوات. كل منصة لها طريقة مخصصة لتقارير {brand.name}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Grid */}
      <div className="grid gap-6">
        {brand.platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <Link key={index} href={platform.path}>
              <Card className="hover:border-[#F28579] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
                    {/* Platform Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1D3D6F]" />
                    </div>

                    {/* Platform Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#1D3D6F] mb-2">{platform.name}</h3>
                                            
                      {/* Video Preview */}
                      <div className="bg-[#DFF7F6] rounded-lg p-4 flex items-center gap-3">
                        <Play className="w-5 h-5 text-[#1D3D6F]" />
                        <span className="text-sm text-[#1D3D6F]">شاهد طريقة تجهيز تقارير {platform.name}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-6 h-6 text-[#F28579]" />
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

export default BrandPage;