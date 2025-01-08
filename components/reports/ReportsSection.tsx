"use client";

import React from 'react';
import { ChevronRight, Clock, FileBarChart, FileSpreadsheet, FileStack, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const reportTypes = [
  {
    id: 'daily',
    title: 'Daily Reports',
    icon: FileBarChart,
    description: 'Learn how to create and submit daily reports',
    duration: '15 min',
    path: '/reports/daily'
  },
  {
    id: 'weekly',
    title: 'Weekly Reports',
    icon: FileSpreadsheet,
    description: 'Master the weekly reporting process',
    duration: '20 min',
    path: '/reports/weekly'
  },
  {
    id: 'monthly',
    title: 'Monthly Reports',
    icon: FileStack,
    description: 'Comprehensive monthly reporting guide',
    duration: '25 min',
    path: '/reports/monthly'
  }
];

export const ReportsSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1D3D6F] mb-3">Reports Training</h2>
          <div className="flex items-center gap-2 text-[#1D3D6F]/70">
            <AlertCircle className="w-4 h-4" />
            <p>Select a report type to begin learning. Each section is broken down into short, manageable lessons.</p>
          </div>
        </div>
        
        <div className="grid gap-4">
          {reportTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Link
                key={type.id}
                href={type.path}
                className="w-full text-left"
              >
                <Card className="hover:border-[#F28579] hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DFF7F6]">
                          <Icon className="w-6 h-6 text-[#1D3D6F]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-[#1D3D6F]">{type.title}</h3>
                          <p className="text-[#1D3D6F]/70 text-sm">{type.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-[#1D3D6F] bg-[#DFF7F6] px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{type.duration}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#F28579]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
          <div className="flex items-center gap-2 text-[#1D3D6F]">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">We recommend starting with Daily Reports to build a strong foundation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};