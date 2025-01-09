"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layout, Layers, Image, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdStructureGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports/guides"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowRight className="w-4 h-4 ml-2" />
        رجوع للدليل
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">هيكلة الإعلانات </h1>
        <div className="text-[#1D3D6F]/70">
          <p>أهلين! 👋 هنا بنقدم لك شرح مختصر عن هيكلة (ترتيب) الحملات الإلكترونية. بس ليش مهم نعرفها؟ لأن في أوقات بنحتاج نعرف أداء الحملة كاملة، وأحياناً نبي نشوف أداء جزء معين من الحملة 💡</p>
        </div>
      </div>

      {/* Structure Visualization */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Campaign Level */}
            <div className="w-64 p-4 bg-[#1D3D6F] text-white rounded-lg text-center">
              <Layout className="w-6 h-6 mx-auto mb-2" />
              Campaign - الحملة
            </div>
            
            <div className="h-8 w-px bg-[#1D3D6F]" />
            
            {/* Ad Sets Level */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-48 p-3 bg-[#A8E5E2] text-[#1D3D6F] rounded-lg text-center mb-4">
                  <Layers className="w-5 h-5 mx-auto mb-2" />
                  Ad Set 1 - مجموعة إعلانات ١
                </div>
                <div className="h-8 w-px bg-[#1D3D6F] mb-4" />
                <div className="flex gap-2">
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    Ad 1 - إعلان ١
                  </div>
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    Ad 2 - إعلان ٢
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-48 p-3 bg-[#A8E5E2] text-[#1D3D6F] rounded-lg text-center mb-4">
                  <Layers className="w-5 h-5 mx-auto mb-2" />
                  Ad Set 2 - مجموعة إعلانات ٢
                </div>
                <div className="h-8 w-px bg-[#1D3D6F] mb-4" />
                <div className="flex gap-2">
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    Ad 3 - إعلان ٣
                  </div>
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    Ad 4 - إعلان ٤
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Structure Cards */}
      <div className="grid gap-6 mb-8">
        {/* Campaign Level */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                <Layout className="w-6 h-6 text-[#1D3D6F]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1D3D6F] mb-2">
                  الحملة
                  <span className="text-lg font-normal text-[#1D3D6F]/70 mr-2">(Campaign)</span>
                </h2>
                <p className="text-[#1D3D6F]/70 mb-4">
                  هي المستوى الأعلى اللي يجمع كل الإعلانات المترابطة مع بعض
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: &quotتخفيضات الشتاء ٢٠٢٤&quot - حملة تجمع كل إعلانات عروض الشتاء
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Set Level */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-[#1D3D6F]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1D3D6F] mb-2">
                  مجموعة الإعلانات
                  <span className="text-lg font-normal text-[#1D3D6F]/70 mr-2">(Ad Set)</span>
                </h2>
                <p className="text-[#1D3D6F]/70 mb-4">
                  مجموعات الإعلانات اللي تستهدف شريحة معينة أو هدف محدد
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: &quotمنطقة الإمارات&quot - مجموعة إعلانات مخصصة لعملاء الإمارات
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Level */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                <Image className="w-6 h-6 text-[#1D3D6F]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1D3D6F] mb-2">
                  الإعلان
                  <span className="text-lg font-normal text-[#1D3D6F]/70 mr-2">(Ad)</span>
                </h2>
                <p className="text-[#1D3D6F]/70 mb-4">
                  الإعلان نفسه بتصميمه ورسالته الخاصة
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: &quotستوري تخفيضات الشتاء &quot - إعلان ستوري محدد بتصميمه الخاص
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips Section */}
      <div className="space-y-4">
        <div className="p-4 bg-[#DFF7F6] rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h4 className="font-semibold text-[#1D3D6F] mb-1">نصائح سريعة:</h4>
              <ul className="text-sm text-[#1D3D6F]/70 space-y-2">
                <li>• تقدر تشوف الأداء على مستوى الحملة، المجموعة، أو الإعلان</li>
                <li>• ابدأ بمراجعة أداء الحملة كاملة، وبعدين ادخل في تفاصيل المجموعات والإعلانات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

