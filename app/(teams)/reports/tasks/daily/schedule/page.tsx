import React from 'react';
import { ArrowLeft, Calendar, Clock, AlertCircle, CalendarCheck, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const DailySchedulePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <Link
        href="/reports/tasks/daily"
        className="flex items-center text-[#F28579] mb-6 hover:text-[#1D3D6F] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        رجوع للتقارير اليومية
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">جدول تحديث التقارير اليومية</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          يا هلا! هنا بنشرح لك متى وكيف تحدث التقارير اليومية 👋
        </p>
      </div>

      {/* Main Schedule Card */}
      <Card className="mb-6 border-l-4 border-l-[#A8E5E2]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#1D3D6F]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1D3D6F] mb-3">التحديث اليومي</h2>
              <p className="text-[#1D3D6F]/70 mb-4">
                كل يوم، نحدث أرقام اليوم اللي قبله في الشيت المخصص. 
              </p>
              <div className="bg-[#DFF7F6] p-4 rounded-lg mb-4">
                <p className="text-[#1D3D6F]/80">
                  مثال: اليوم 12 يناير 2025، راح تضيف أرقام يوم 11 يناير 2025 💡
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekend Schedule */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
              <CalendarDays className="w-6 h-6 text-[#1D3D6F]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1D3D6F] mb-3">تحديث أيام الويكند </h2>
              <p className="text-[#1D3D6F]/70 mb-4">
                يوم الأحد (أول يوم في الأسبوع)، نحدّث الشيت ونضيف فيها أرقام الخميس والجمعة والسبت.
              </p>
              <div className="bg-[#DFF7F6] p-4 rounded-lg">
                <p className="text-[#1D3D6F]/80">
                  مثال: يوم الأحد 14 يناير، راح تضيف أرقام:
                </p>
                <ul className="mt-2 space-y-1 text-[#1D3D6F]/70">
                  <li>• الخميس (11 يناير)</li>
                  <li>• الجمعة (12 يناير)</li>
                  <li>• السبت (13 يناير)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Check */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
              <CalendarCheck className="w-6 h-6 text-[#1D3D6F]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1D3D6F] mb-3">المراجعة الشهرية 📊</h2>
              <p className="text-[#1D3D6F]/70 mb-4">
                في نهاية كل شهر، نسوي مراجعة شاملة للتأكد من اكتمال البيانات
              </p>
              
              <div className="bg-[#DFF7F6] p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-[#1D3D6F] mb-2">قائمة المراجعة:</h3>
                <ul className="space-y-2 text-[#1D3D6F]/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F28579]"></div>
                    نتأكد أن أضفنا أرقام لكل يوم في الشهر
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F28579]"></div>
                    نتأكد أن الشيت مافيها أرقام غير منطقية
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F28579]"></div>
                    نقارن الأرقام في الشيت بالأرقام الموجودة بكل منصة عشان نتأكد أن حساباتنا صح 💯
                  </li>
                </ul>
              </div>

              <div className="bg-[#DFF7F6]/50 p-4 rounded-lg">
                <p className="text-[#1D3D6F]/80 text-sm">
                  مثال: في 1 فبراير  2025، راح تتأكد إن الشيت فيه أرقام من 1 يناير إلى 31 يناير. ونتأكد بعد أن أرقام الشيت صحيحة وتطابق أرقام المنصات  💡
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <div className="space-y-4">
        <div className="p-4 bg-[#DFF7F6] rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1D3D6F] mt-1" />
            <div>
              <h4 className="font-semibold text-[#1D3D6F] mb-2">نصائح مهمة:</h4>
              <ul className="text-sm text-[#1D3D6F]/70 space-y-2">
                <li>• قائد الفريق راح يشارك معك الشيت المخصص للتحديث</li>
                <li>• حاول تحدث الأرقام في نفس الوقت يومياً عشان تكون منتظم</li>
                <li>• إذا عندك أي سؤال، لا تتردد تسأل قائد الفريق 💫</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySchedulePage;