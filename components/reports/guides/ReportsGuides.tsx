import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, BarChart2, Building2, LayoutDashboard, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const guides = [
  {
    title: "Platform Overview",
    description: "Learn about our key advertising platforms",
    icon: LayoutDashboard,
    path: "/reports/guides/platforms",
    duration: "2 min"
  },
  {
    title: "Ad Structure Guide",
    description: "Understanding campaigns, ad sets, and ads",
    icon: FileText,
    path: "/reports/guides/ad-structure",
    duration: "5 min"
  },
  {
    title: "Metrics Guide",
    description: "Key metrics across different platforms",
    icon: BarChart2,
    path: "/reports/guides/metrics",
    duration: "3 min"
  },
  {
    title: "Brand Names",
    description: "Brand naming conventions across platforms",
    icon: Building2,
    path: "/reports/guides/brand-names",
    duration: "5 min"
  }
];

export const ReportsGuidesIntro =() => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Reports
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">Essential Guides</h1>
        <p className="text-[#1D3D6F]/70">
          Master the fundamentals of reporting with these comprehensive guides.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid gap-4 mb-8">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <Link key={index} href={guide.path}>
              <Card className="hover:border-[#F28579] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1D3D6F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1D3D6F] mb-1">{guide.title}</h3>
                        <p className="text-[#1D3D6F]/70 text-sm">{guide.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-[#DFF7F6] px-3 py-1 rounded-full">
                      <span className="text-sm text-[#1D3D6F]">{guide.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Pro Tip */}
      <div className="p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Pro tip: Start with Platform Overview to get a solid foundation before diving into specific guides.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsGuidesIntro;