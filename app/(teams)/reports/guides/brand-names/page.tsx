"use client";

"use client";

import React from 'react';
import { ArrowLeft, Building2, ScrollText, AlertCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function BrandNamesGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" dir="rtl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">أسماء البراندات</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          يا هلا! كل براند عندنا له كذا اسم في المنصات المختلفة. هنا بنعرف الأسماء الصح للبراندات في كل منصة 👋
        </p>
      </div>

      {/* Main Info Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-[#1D3D6F]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1D3D6F] mb-3 text-lg">ليش مهم نعرف الأسماء؟</h3>
              <ul className="space-y-3 text-[#1D3D6F]/70">
                <li>• نفس البراند ممكن اسمه في سناب غير عن تيكتوك</li>
                <li>• كل براند له ايميل خاص في قوقل ادز</li>
                <li>• نحتاج نختار الاسم الصح عشان نطلع التقارير بشكل صحيح</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Link to Full List */}
      <Link href="/reports/guides/brand-names/list">
        <Card className="hover:border-[#F28579] hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-[#1D3D6F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1D3D6F] mb-1">شوف قائمة البراندات كاملة</h3>
                  <p className="text-[#1D3D6F]/70">اضغط هنا وبتلقى جدول فيه كل براند واسمه في كل منصة</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#F28579]" />
            </div>
          </CardContent>
        </Card>
      </Link>

    </div>
  );
}