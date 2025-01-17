"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layout, Layers, Image, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdStructureGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" dir="rtl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">هيكلة الإعلانات </h1>
        <div className="text-[#1D3D6F]/70">
          <p>يا هلا فيك!  تخيل معي الإعلانات مثل شجرة عائلة صغيرة - كل شي فيها مرتب ومنظم! اليوم بنتعرف على تنظيم الإعلانات عشان نقدر نفهم أداء إعلاناتنا بشكل أفضل ونسوي قرارات ذكية! 💫</p>
        </div>
      </div>

      {/* Structure Visualization */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Campaign Level */}
            <div className="w-64 p-4 bg-[#1D3D6F] text-white rounded-lg text-center">
              <Layout className="w-6 h-6 mx-auto mb-2" />
              الحملة الإعلانية
            </div>
            
            <div className="h-8 w-px bg-[#1D3D6F]" />
            
            {/* Ad Sets Level */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-48 p-3 bg-[#A8E5E2] text-[#1D3D6F] rounded-lg text-center mb-4">
                  <Layers className="w-5 h-5 mx-auto mb-2" />
                  مجموعة إعلانية ١
                </div>
                <div className="h-8 w-px bg-[#1D3D6F] mb-4" />
                <div className="flex gap-2">
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    إعلان ١
                  </div>
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    إعلان ٢
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-48 p-3 bg-[#A8E5E2] text-[#1D3D6F] rounded-lg text-center mb-4">
                  <Layers className="w-5 h-5 mx-auto mb-2" />
                  مجموعة إعلانية ٢
                </div>
                <div className="h-8 w-px bg-[#1D3D6F] mb-4" />
                <div className="flex gap-2">
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    إعلان ٣
                  </div>
                  <div className="w-20 p-2 bg-[#F28579] text-white rounded-lg text-center text-xs">
                    <Image className="w-4 h-4 mx-auto mb-1" />
                    إعلان ٤
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
                  الحملة الإعلانية
                  <span className="text-lg font-normal text-[#1D3D6F]/70 mr-2">(Campaign)</span>
                </h2>
                <p className="text-[#1D3D6F]/70 mb-4">
                  هي زي المظلة الكبيرة اللي تجمع كل الإعلانات المتشابهة تحتها 🌂
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: "تخفيضات الشتاء ٢٠٢٤" - هي مظلة تجمع كل إعلانات عروض الشتاء! ❄️
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
                  زي العلبة اللي نحط فيها الإعلانات المتشابهة - مثلاً كل الإعلانات اللي تستهدف نفس المنطقة أو نفس الفئة العمرية 📦
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: "إعلانات منطقة الرياض" - كل الإعلانات اللي تستهدف سكان الرياض 🌆
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
                  هذا الإعلان نفسه! مثل الحلاوة في العلبة - لها شكلها الخاص ولونها المميز 🍬
                </p>
                <div className="bg-[#DFF7F6] p-3 rounded-lg">
                  <p className="text-[#1D3D6F]/80 text-sm">
                    مثال: "ستوري تخفيضات الشتاء ١" - إعلان ستوري يعرض العروض بتصميم خاص 🎨
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
              <h4 className="font-semibold text-[#1D3D6F] mb-1">نصائح 🌟</h4>
              <ul className="text-sm text-[#1D3D6F]/70 space-y-2">
                <li>• تقدر تشوف أداء الإعلانات  - سواء أداء الحملة كاملة أو مجموعة معينة أو حتى إعلان واحد </li>
                <li>• نصيحة: ابدأ بالنظرة العامة للحملة، وبعدين غوص في التفاصيل! عشان تفهم الصورة كاملة </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}