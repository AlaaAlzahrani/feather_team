// components/reports/PlatformOverview.tsx

import React from 'react';
import { ArrowLeft, AlertCircle, ExternalLink, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const platforms = [
  {
    name: "TikTok Ads Manager",
    description: "Primary platform for TikTok advertising campaigns",
    keyPoints: [
      "Campaign performance metrics",
      "Audience insights",
      "Ad spend tracking"
    ]
  },
  {
    name: "Snapchat Ads",
    description: "Management platform for Snapchat advertising",
    keyPoints: [
      "Campaign analytics",
      "Demographic data",
      "Engagement metrics"
    ]
  },
  {
    name: "Meta Business Suite",
    description: "Unified platform for Facebook and Instagram",
    keyPoints: [
      "Cross-platform analytics",
      "Content scheduling",
      "Audience insights"
    ]
  },
  {
    name: "Google Ads",
    description: "Comprehensive Google advertising platform",
    keyPoints: [
      "Search campaign data",
      "Display network metrics",
      "Conversion tracking"
    ]
  }
];

export const PlatformOverview = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports/daily"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Daily Reports
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">Platform Overview</h1>
        <div className="flex items-center gap-2 text-[#1D3D6F]/70 mb-4">
          <AlertCircle className="w-4 h-4" />
          <p>Understanding our key reporting platforms and their purposes</p>
        </div>
      </div>

      {/* Introduction Card */}
      <Card className="mb-8 border-l-4 border-l-[#A8E5E2]">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h2 className="font-semibold text-[#1D3D6F] mb-2">Why These Platforms Matter</h2>
              <p className="text-[#1D3D6F]/70">
                Each platform provides unique insights into our marketing performance. Understanding how to navigate and extract data from these platforms is crucial for creating accurate daily reports.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Grid */}
      <div className="grid gap-6">
        {platforms.map((platform, index) => (
          <Card key={index} className="hover:border-[#F28579] hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[#1D3D6F]">{platform.name}</h3>
                <ExternalLink className="w-4 h-4 text-[#F28579]" />
              </div>
              <p className="text-[#1D3D6F]/70 mb-4">{platform.description}</p>
              <div className="space-y-2">
                {platform.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A8E5E2]" />
                    <p className="text-sm text-[#1D3D6F]/70">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pro Tip */}
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Pro tip: Bookmark these platforms for quick access during your daily reporting routine.
          </p>
        </div>
      </div>
    </div>
  );
};