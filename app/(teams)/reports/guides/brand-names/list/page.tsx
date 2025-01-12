"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import BrandList from '@/components/reports/guides/BrandList';

export default function BrandListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports/guides/brand-names"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع لدليل المنصات
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">قائمة أسماء العلامات التجارية</h1>
        <p className="text-[#1D3D6F]/70 text-lg mb-6">
          قائمة شاملة بجميع العلامات التجارية وأسمائها في كل منصة
        </p>
      </div>

      {/* Brand List Component */}
      <BrandList />
    </div>
  );
}