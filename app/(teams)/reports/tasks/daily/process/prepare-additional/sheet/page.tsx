import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Text, AlertCircle, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';


export default function SheetPage() {
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
        <Link href="/reports/tasks/daily/process/prepare-additional" className="hover:text-[#1D3D6F]">شروحات إضافة </Link>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-[#1D3D6F]">تنسيق التقرير</span>
      </div>


      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#DFF7F6] flex items-center justify-center">
            <Text className="w-5 h-5 text-[#1D3D6F]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
            نسقي التقرير اليومي بالطريقة الصح! 
          </h1>
        </div>
        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة تنسيق التقرير اليومي  ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="ADD_VIDEO_ID" />
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
              <li>• ...... </li>
              <li>• ...... </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Back Navigation */}
      <Link
        href="/reports/tasks/daily/process/prepare-additional"
        className="flex items-center text-[#F28579] py-8 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للشروحات الإضافية
      </Link>

    </div>
  );
}