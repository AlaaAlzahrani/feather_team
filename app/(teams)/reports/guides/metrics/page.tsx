import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Eye, MousePointerClick, ShoppingCart, Calendar } from 'lucide-react';

const MetricsGuide = () => {
  const metrics = [
    {
      icon: DollarSign,
      nameEn: "Cost",
      nameAr: "التكلفة",
      description: "المبلغ اللي صرفته على الإعلان",
      platforms: {
        snapchat: "Amount Spent",
        tiktok: "Cost",
        meta: "Amount Spent",
        google: "Cost",
        x: "Spend"
      },
      example: "يعني: لو صرفت ١٠٠٠ ريال على الإعلان، هذا يعتبر تكلفة الإعلان 💰"
    },
    {
      icon: MousePointerClick,
      nameEn: "Clicks",
      nameAr: "عدد النقرات",
      description: "كم مرة الناس ضغطوا على إعلانك",
      platforms: {
        snapchat: "Clicks",
        tiktok: "Clicks (all)",
        meta: "Clicks (all)",
        google: "Clicks",
        x: "Clicks"
      },
      example: "يعني: كل ما شخص يضغط على إعلانك للتصفح، نعتبرها نقرة واحدة"
    },
    {
      icon: Eye,
      nameEn: "Impressions",
      nameAr: "عدد المشاهدات",
      description: "كم مرة ظهر إعلانك للناس",
      platforms: {
        snapchat: "Paid Impressions",
        tiktok: "Impressions",
        meta: "Impressions",
        google: "Impressions",
        x: "Impressions"
      },
      example: "يعني: لو ظهر إعلانك ١٠٠ مرة، هذا يعني عندك ١٠٠ مشاهدة 👀"
    },
    {
      icon: Users,
      nameEn: "Reach",
      nameAr: "عدد الأشخاص",
      description: "عدد الأشخاص المختلفين اللي شافوا إعلانك",
      platforms: {
        snapchat: "Paid Reach",
        tiktok: "Reach",
        meta: "Reach",
        google: "Unique Users",
        x: "Reach"
      },
      example: "يعني: لو نفس الشخص شاف إعلانك ٣ مرات، نحسبه كشخص واحد بس"
    },
    {
      icon: ShoppingCart,
      nameEn: "Transactions",
      nameAr: "عدد المبيعات",
      description: "عدد الطلبات المكتملة من إعلانك",
      platforms: {
        snapchat: "Purchases Total",
        tiktok: "Payments completed",
        meta: "Purchases",
        google: "Conversions",
        x: "Leads"
      },
      example: "يعني: كل طلب تم شراؤه من خلال إعلانك يحسب كعملية بيع واحدة"
    },
    {
      icon: ShoppingCart,
      nameEn: "Revenue",
      nameAr: "مبلغ المبيعات ",
      description: "إجمالي مبيعات الإعلان",
      platforms: {
        snapchat: "Purchases Value Total",
        tiktok: "Payment completion value",
        meta: "Purchases conversion value",
        google: "Conv. Value",
        x: "Not Available"
      },
      example: "يعني: لو باع إعلانك المنتج بـ ٥٠٠٠ ريال، هذا هو إجمالي مبيعات الإعلان"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-4">دليل مقاييس الإعلانات</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
          يا هلا! هنا راح نتعرف على المقاييس (Metrics) المهمة في تقارير الإعلانات 👋
        </p>
        <div className="bg-[#A8E5E2]/20 p-4 rounded-lg mt-4">
          <p className="text-[#1D3D6F] font-medium">
            كل منصة من المنصات الخمس (سناب شات، تيك توك، انستاقرام، قوقل، إكس) تستخدم أسماء مختلفة... بس معناها واحد! راح نشرح لك كل شي بالتفصيل
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="border-right-4 border-r-[#A8E5E2] hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#DFF7F6] p-3 rounded-full">
                    <Icon className="w-6 h-6 text-[#1D3D6F]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#1D3D6F]">{metric.nameAr}</h3>
                      <span className="text-sm text-[#1D3D6F]/70">({metric.nameEn})</span>
                    </div>
                    
                    <p className="text-[#1D3D6F]/70 mb-4 text-lg">{metric.description}</p>
                    
                    <div className="bg-[#DFF7F6] rounded-lg p-4 mb-4">
                      <p className="text-[#1D3D6F]/80">{metric.example}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-[#A8E5E2]">
                      <h4 className="text-sm font-bold text-[#1D3D6F] mb-3">اسمه في كل منصة:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {Object.entries(metric.platforms).map(([platform, term]) => (
                          <div key={platform} className="bg-[#DFF7F6] rounded-lg p-2">
                            <p className="text-sm font-medium text-[#1D3D6F] capitalize">{platform}</p>
                            <p className="text-sm text-[#1D3D6F]/70 mt-1">{term}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-[#DFF7F6] rounded-lg">
        <div className="text-[#1D3D6F]">
          <h4 className="font-bold mb-2 text-lg">تنبيه مهم عن العملات! 💰</h4>
          <p className="text-[#1D3D6F]/80 leading-relaxed">
            أحيانا المنصة تعرض مبلغ المبيعات بعملة غير الريال السعودي (دولار أمريكي أو درهم إماراتي). لازم ننتبه للعملة المستخدمة في المنصة ونتأكد من تحويلها للريال السعودي في التقرير.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MetricsGuide;