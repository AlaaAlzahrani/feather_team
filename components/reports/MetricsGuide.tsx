// components/reports/MetricsGuide.tsx

import React from 'react';
import { ArrowLeft, AlertCircle, LineChart, Target, Zap, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const metricCategories = [
  {
    title: "Engagement Metrics",
    icon: Zap,
    metrics: [
      {
        name: "Impressions",
        description: "Number of times your content is displayed",
        crossPlatform: {
          tiktok: "Impressions",
          snapchat: "Story Views",
          meta: "Impressions",
          google: "Impressions"
        }
      },
      {
        name: "Engagement Rate",
        description: "Interaction level with your content",
        crossPlatform: {
          tiktok: "Engagement Rate",
          snapchat: "Engagement Rate",
          meta: "Engagement Rate",
          google: "CTR"
        }
      }
    ]
  },
  {
    title: "Conversion Metrics",
    icon: Target,
    metrics: [
      {
        name: "Conversion Rate",
        description: "Percentage of users who complete desired actions",
        crossPlatform: {
          tiktok: "Conversion Rate",
          snapchat: "Conversion Rate",
          meta: "Conversion Rate",
          google: "Conv. Rate"
        }
      },
      {
        name: "Cost per Conversion",
        description: "Average cost for each conversion",
        crossPlatform: {
          tiktok: "Cost per Conversion",
          snapchat: "CPA",
          meta: "Cost per Result",
          google: "Cost/Conv."
        }
      }
    ]
  },
  {
    title: "Financial Metrics",
    icon: DollarSign,
    metrics: [
      {
        name: "Spend",
        description: "Total amount spent on advertising",
        crossPlatform: {
          tiktok: "Spend",
          snapchat: "Spend",
          meta: "Amount Spent",
          google: "Cost"
        }
      },
      {
        name: "ROAS",
        description: "Return on Ad Spend",
        crossPlatform: {
          tiktok: "ROAS",
          snapchat: "ROAS",
          meta: "Return on Ad Spend",
          google: "Conv. value/cost"
        }
      }
    ]
  }
];

export const MetricsGuide = () => {
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
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">Metrics Guide</h1>
        <div className="flex items-center gap-2 text-[#1D3D6F]/70 mb-4">
          <LineChart className="w-4 h-4" />
          <p>Understanding key metrics across different platforms</p>
        </div>
      </div>

      {/* Introduction Card */}
      <Card className="mb-8 border-l-4 border-l-[#A8E5E2]">
        <CardContent className="p-6">
          <p className="text-[#1D3D6F]/70">
            Different platforms may use different terms for similar metrics. This guide helps you understand how metrics map across platforms and what they mean for your reporting.
          </p>
        </CardContent>
      </Card>

      {/* Metric Categories */}
      <div className="space-y-8">
        {metricCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#DFF7F6]">
                  <Icon className="w-4 h-4 text-[#1D3D6F]" />
                </div>
                <h2 className="text-xl font-semibold text-[#1D3D6F]">{category.title}</h2>
              </div>

              <div className="grid gap-4">
                {category.metrics.map((metric, idx) => (
                  <Card key={idx} className="hover:border-[#F28579] hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#1D3D6F] mb-2">{metric.name}</h3>
                      <p className="text-[#1D3D6F]/70 text-sm mb-4">{metric.description}</p>
                      
                      <div className="bg-[#DFF7F6] rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-[#1D3D6F] mb-3">Platform Names</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm font-medium text-[#1D3D6F]">TikTok</p>
                            <p className="text-sm text-[#1D3D6F]/70">{metric.crossPlatform.tiktok}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1D3D6F]">Snapchat</p>
                            <p className="text-sm text-[#1D3D6F]/70">{metric.crossPlatform.snapchat}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1D3D6F]">Meta</p>
                            <p className="text-sm text-[#1D3D6F]/70">{metric.crossPlatform.meta}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1D3D6F]">Google</p>
                            <p className="text-sm text-[#1D3D6F]/70">{metric.crossPlatform.google}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro Tip */}
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Pro tip: Pay special attention to how conversion metrics are named differently across platforms.
          </p>
        </div>
      </div>
    </div>
  );
};