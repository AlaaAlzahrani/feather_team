"use client";

import React from 'react';
import { ArrowLeft, Clock, ChevronRight, LayoutDashboard, BarChart2, Building2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// Simplified brand colors
const colors = {
  navy: '#1D3D6F',    // Primary color - text and important elements
  coral: '#F28579',   // Secondary color - interactive elements
  aqua: '#A8E5E2',    // Tertiary color - backgrounds and accents
  aquaLight: '#DFF7F6' // Light background variation
};

const modules = [
  { 
    title: 'Platform Overview',
    description: 'Learn about the key platforms we use for reporting',
    duration: '3 min',
    icon: LayoutDashboard
  },
  {
    title: 'Metrics Guide',
    description: 'Understanding key metrics across platforms',
    duration: '5 min',
    icon: BarChart2
  },
  {
    title: 'Brand-specific Reports',
    description: 'How to create reports for specific brands',
    duration: '7 min',
    icon: Building2
  }
];

export const DailyReportSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/reports"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Reports
      </Link>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1D3D6F] mb-2">Daily Reports</h2>
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-4 h-4" />
          <p>Complete these modules to master daily reporting.</p>
        </div>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card 
              key={index} 
              className="hover:border-[#F28579] hover:shadow-md transition-all cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DFF7F6]">
                      <Icon className="w-6 h-6 text-[#1D3D6F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D3D6F]">{module.title}</h3>
                      <p className="text-[#1D3D6F]/70 text-sm">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-[#1D3D6F] bg-[#DFF7F6] px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{module.duration}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#F28579]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-center gap-2 text-[#1D3D6F]">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">Pro tip: Start with Platform Overview to get a solid foundation!</p>
        </div>
      </div>
    </div>
  );
};