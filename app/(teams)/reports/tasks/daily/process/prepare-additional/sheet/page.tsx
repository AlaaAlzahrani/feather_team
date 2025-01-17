import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Text, AlertCircle, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubePlayer from '@/components/reports/YouTubePlayer';


export default function SheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

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
          <YouTubePlayer videoId="7CeTaJ-StoM" />
        </CardContent>
      </Card>
    </div>
  );
}