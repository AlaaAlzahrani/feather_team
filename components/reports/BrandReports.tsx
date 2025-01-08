"use client";

import React from 'react';
import { ArrowLeft, AlertCircle, Building2, Newspaper, BarChart3, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const brands = [
  {
    name: "Reefi",
    icon: Globe,
    description: "Financial services brand focused on renewable energy",
    platforms: ["Meta", "Google Ads", "TikTok"],
    reportingFocus: [
      "Daily conversion tracking",
      "Cost per lead analysis",
      "Campaign performance by region"
    ]
  },
  {
    name: "Labelle",
    icon: Newspaper,
    description: "Beauty and lifestyle brand",
    platforms: ["Meta", "Snapchat", "TikTok"],
    reportingFocus: [
      "Engagement rates by content type",
      "Story performance metrics",
      "Influencer campaign tracking"
    ]
  },
  {
    name: "Blanco",
    icon: Building2,
    description: "Home improvement and interior design",
    platforms: ["Meta", "Google Ads", "Pinterest"],
    reportingFocus: [
      "Website traffic analysis",
      "Product category performance",
      "Seasonal campaign metrics"
    ]
  },
  {
    name: "ATOM",
    icon: BarChart3,
    description: "Tech and innovation products",
    platforms: ["Meta", "Google Ads", "LinkedIn"],
    reportingFocus: [
      "B2B lead generation metrics",
      "Professional audience engagement",
      "Product launch performance"
    ]
  }
];

export const BrandReports = () => {
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
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">Brand-specific Reports</h1>
        <div className="flex items-center gap-2 text-[#1D3D6F]/70 mb-4">
          <Building2 className="w-4 h-4" />
          <p>Learn how to create customized reports for each brand</p>
        </div>
      </div>

      {/* Introduction Card */}
      <Card className="mb-8 border-l-4 border-l-[#A8E5E2]">
        <CardContent className="p-6">
          <p className="text-[#1D3D6F]/70">
            Each brand has unique reporting requirements and KPIs. Learn how to create tailored reports that highlight the metrics that matter most for each brand.
          </p>
        </CardContent>
      </Card>

      {/* Brand Grid */}
      <div className="grid gap-6">
        {brands.map((brand, index) => {
          const Icon = brand.icon;
          return (
            <Card 
              key={index} 
              className="hover:border-[#F28579] hover:shadow-md transition-all cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DFF7F6] flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#1D3D6F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1D3D6F] mb-1">{brand.name}</h3>
                    <p className="text-[#1D3D6F]/70 text-sm mb-3">{brand.description}</p>
                    
                    {/* Platforms */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {brand.platforms.map((platform, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#DFF7F6] text-[#1D3D6F] text-sm rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>

                    {/* Reporting Focus */}
                    <div className="space-y-2">
                      {brand.reportingFocus.map((focus, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A8E5E2]" />
                          <p className="text-sm text-[#1D3D6F]/70">{focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pro Tip */}
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Pro tip: Save report templates for each brand to streamline your daily reporting process.
          </p>
        </div>
      </div>
    </div>
  );
};