import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';

export default function XCustomPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#d1ecfc] opacity-60 flex items-center justify-center">
            <Twitter className="w-5 h-5 text-[#1DA1F2] opacity-100" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
          البحث عن المقياس في منصة إكس
         </h1>
        </div>

        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة البحث عن المقياس في منصة إكس ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="yyEWhGk5s6k" />
        </CardContent>
      </Card>

      {/* Next Platform Navigation */}
        <div className="flex justify-between">
        <Link
          href="/reports/tasks/daily/process/prepare-additional/custom-metric/google"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
          <span>قوقل</span>
        </Link>
      </div>
    </div>
  );
}