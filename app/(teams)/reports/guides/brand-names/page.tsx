"use client";

"use client";

import React from 'react';
import { ArrowLeft, Building2, ScrollText, AlertCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function BrandNamesGuidePage() {
  const keyPoints = [
    {
      title: "حساب الإعلانات",
      description: "كل منصة قد تستخدم اسم مختلف لنفس العلامة التجارية"
    },
    {
      title: "البريد الإلكتروني",
      description: "كل علامة تجارية مرتبطة ببريد إلكتروني محدد لإعلانات قوقل"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" dir="rtl">
      {/* Navigation */}
      <Link
        href="/reports/guides"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 ml-2" />
        رجوع للدليل
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">دليل أسماء العلامات التجارية</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          أهلاً! 👋 هذا الدليل يساعدك تعرف أسماء العلامات التجارية في كل منصة. لأن كل منصة ممكن تستخدم اسم مختلف لنفس العلامة التجارية.
        </p>
      </div>

      {/* Key Points */}
      <div className="grid gap-4 mb-8">
        {keyPoints.map((point, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#1D3D6F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1D3D6F] mb-1">{point.title}</h3>
                  <p className="text-[#1D3D6F]/70">{point.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
                  <h3 className="font-semibold text-[#1D3D6F] mb-1">قائمة العلامات التجارية الكاملة</h3>
                  <p className="text-[#1D3D6F]/70">اضغط هنا لعرض جميع العلامات التجارية وأسمائها في كل منصة</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#F28579]" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Pro Tips */}
      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
          <div>
            <h4 className="font-semibold text-[#1D3D6F] mb-2">نصائح مهمة:</h4>
            <ul className="text-sm text-[#1D3D6F]/70 space-y-2">
              <li>• تأكد من استخدام الاسم الصحيح لكل منصة عند سحب البيانات</li>
              <li>• احفظ الأسماء اللي تستخدمها بشكل متكرر</li>
              <li>• راجع القائمة دورياً لمعرفة أي تحديثات على الأسماء</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}