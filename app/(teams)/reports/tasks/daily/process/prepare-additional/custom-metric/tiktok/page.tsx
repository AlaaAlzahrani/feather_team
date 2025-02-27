import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Music2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';

export default function TikTokCustomPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#D3D3D3] flex items-center justify-center">
            <Music2 className="w-5 h-5 text-[#000000] opacity-100" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
          البحث عن المقياس في تيكتوك
         </h1>
        </div>

        <p className="text-[#1D3D6F]/70">
          شرح تفصيلي لطريقة البحث عن المقياس في تيكتوك ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="0P5EcJCb9fg" />
        </CardContent>
      </Card>

      {/* Next Platform Navigation */}
        <div className="flex justify-between">
        <Link
          href="/reports/tasks/daily/process/prepare-additional/custom-metric/snapchat"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
          <span>سناب شات</span>
        </Link>
        <Link
          href="/reports/tasks/daily/process/prepare-additional/custom-metric/meta"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors"
        >
          <span>ميتا</span>
          <ChevronLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}