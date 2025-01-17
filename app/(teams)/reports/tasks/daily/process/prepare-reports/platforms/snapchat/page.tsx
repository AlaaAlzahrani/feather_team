import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, MessageCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';

export default function SnapchatPlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#FFFDD0] opacity-70 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#FFEA00] opacity-100" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
            تقارير سناب شات
          </h1>
        </div>
        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة تجهيز تقارير سناب شات ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="YcAHGay6tUE" />
        </CardContent>
      </Card>

      {/* Quick Access */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-[#1D3D6F] mb-4">روابط مهمة ⭐️</h3>
          <Link 
            href="https://ads.snapchat.com"
            target="_blank"
            className="flex items-center justify-between p-4 bg-[#DFF7F6] rounded-lg hover:bg-[#A8E5E2] transition-colors"
          >
            <span className="text-[#1D3D6F]">صفحة تسجيل الدخول سناب شات</span>
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
              <li>• تأكد من اختيار التاريخ الصحيح عند إعداد التقارير</li>
              <li>• راجع دليل المقاييس إذا احتجت تذكير بمعنى أي مقياس</li>
                <li>• تقدر تشوف الفيديو أكثر من مرة وتوقفه عشان تطبق الخطوات</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Platform Navigation */}
      <div className="flex justify-end">
        <Link
          href="/reports/tasks/daily/process/prepare-reports/platforms/tiktok"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
        >
          <span>تيك توك</span>
          <ChevronLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}