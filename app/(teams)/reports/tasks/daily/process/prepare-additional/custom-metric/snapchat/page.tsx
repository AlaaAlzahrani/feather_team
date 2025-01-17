import React from 'react';
import Link from 'next/link';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';

export default function SnapchatCustomPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#FFFDD0] opacity-70 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#FFEA00] opacity-100" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
          البحث عن المقياس في سنابشات
         </h1>
        </div>

        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة البحث عن المقياس في سنابشات ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="xd9O7UdLKvA" />
        </CardContent>
      </Card>

      {/* Next Platform Navigation */}
      <div className="flex justify-end">
        <Link
          href="/reports/tasks/daily/process/prepare-additional/custom-metric/tiktok"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
        >
          <span>تيك توك</span>
          <ChevronLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}