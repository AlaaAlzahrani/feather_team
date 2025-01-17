import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';

export default function GooglePlatformPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#cce5cc] opacity-60 flex items-center justify-center">
            <Search className="w-5 h-5 text-[#008000] opacity-100" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D3D6F]">
          تقارير قوقل - Labelle
          </h1>
        </div>
        <p className="text-[#1D3D6F]/70">
        شرح تفصيلي لطريقة تجهيز تقارير قوقل لحملات Labelle ✨
        </p>
      </div>

      {/* Video Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <YouTubePlayer videoId="g7ynTVaA5io" />
        </CardContent>
      </Card>

      {/* Platform Navigation */}
      <div className="flex justify-between">
        <Link
          href="/reports/tasks/daily/process/prepare-reports/brands/labelle/meta"
          className="flex items-center gap-2 text-[#F28579] hover:text-[#1D3D6F] transition-colors">
          <ChevronRight className="w-5 h-5" />
          <span>ميتا</span>
        </Link>
      </div>
    </div>
  );
}