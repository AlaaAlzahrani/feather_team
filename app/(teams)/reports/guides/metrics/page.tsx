import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Eye, MousePointerClick, ShoppingCart, Calendar } from 'lucide-react';

const MetricsGuide = () => {
  const metrics = [
    {
      icon: DollarSign,
      nameEn: "Cost",
      nameAr: "التكلفة",
      description: "Total amount spent on advertising",
      platforms: {
        snapchat: "Amount Spent",
        tiktok: "Cost",
        meta: "Amount Spent",
        google: "Cost",
        x: "Spend"
      },
      example: "مثال: إذا صرفت 1000 ريال على إعلان، هذا هو التكلفة 💰"
    },
    {
      icon: MousePointerClick,
      nameEn: "Clicks",
      nameAr: "عدد الضغطات",
      description: "Number of times users clicked on your ad",
      platforms: {
        snapchat: "Clicks",
        tiktok: "Clicks (all)",
        meta: "Clicks (all)",
        google: "Clicks",
        x: "Clicks"
      },
      example: "مثال: لما يضغط شخص على إعلانك للتصفح، هذي تعتبر ضغطة 🖱️"
    },
    {
      icon: Eye,
      nameEn: "Impressions",
      nameAr: "عدد الظهور",
      description: "Number of times your ad was shown",
      platforms: {
        snapchat: "Paid Impressions",
        tiktok: "Impressions",
        meta: "Impressions",
        google: "Impressions",
        x: "Impressions"
      },
      example: "مثال: إذا شاف ١٠٠ شخص إعلانك، هذا يعني ١٠٠ ظهور 👀"
    },
    {
      icon: Users,
      nameEn: "Reach",
      nameAr: "الوصول",
      description: "Unique number of people who saw your ad",
      platforms: {
        snapchat: "Paid Reach",
        tiktok: "Reach",
        meta: "Reach",
        google: "Unique Users",
        x: "Reach"
      },
      example: "مثال: لو شاف نفس الشخص إعلانك ٣ مرات، يحسب كشخص واحد في الوصول 🎯"
    },
    {
      icon: ShoppingCart,
      nameEn: "Transactions",
      nameAr: "عدد الطلبات",
      description: "Number of completed purchases",
      platforms: {
        snapchat: "Purchases Total",
        tiktok: "Payments completed",
        meta: "Purchases",
        google: "Conversions",
        x: "Leads"
      },
      example: "مثال: كل طلب يتم إكماله من خلال الإعلان يحسب كعملية شراء 🛍️"
    },
    {
      icon: ShoppingCart,
      nameEn: "Revenue",
      nameAr: "العائد المادي",
      description: "Total monetary value generated from sales",
      platforms: {
        snapchat: "Purchases Value Total",
        tiktok: "Payment completion value",
        meta: "Purchases conversion value",
        google: "Conv. Value",
        x: "Not Avabilable"
      },
      example: "مثال: لو باع الإعلان منتجات بقيمة 5000 ريال، هذا هو العائد المادي 💰"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-4">دليل المقاييس | Metrics Guide</h1>
        <p className="text-[#1D3D6F]/70 text-lg">
        يا هلا والله! 👋 تبي تعرف ايش معنى المصطلحات اللي تشوفها في التقارير؟ لا تشيل هم! هنا نشرحها لك باختصار.   </p>
        <div className="bg-[#A8E5E2]/20 p-4 rounded-lg">
          <p className="text-[#1D3D6F] font-medium">
             أحيانا كل منصة تسمي المقياس باسم مختلف، هنا بتلاقي مسميات المقاييس الي تهمنا في خمس منصات نحب نستخدمها (سنابشات، تيكتوك، انستقرام، قوقل وإكس)  </p>
        </div>
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="border-l-4 border-l-[#A8E5E2] hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#DFF7F6] p-3 rounded-full">
                    <Icon className="w-6 h-6 text-[#1D3D6F]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-[#1D3D6F]">{metric.nameEn}</h3>
                      <span className="text-[#1D3D6F]/70">|</span>
                      <h3 className="text-xl font-semibold text-[#1D3D6F]">{metric.nameAr}</h3>
                    </div>
                    
                    <p className="text-[#1D3D6F]/70 mb-4">{metric.example}</p>
                    
                    <div className="bg-[#DFF7F6] rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-[#1D3D6F] mb-3">Platform Names:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {Object.entries(metric.platforms).map(([platform, term]) => (
                          <div key={platform} className="bg-white rounded-lg p-2">
                            <p className="text-sm font-medium text-[#1D3D6F] capitalize">{platform}:</p>
                            <p className="text-sm text-[#1D3D6F]/70">{term}</p>
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
        <p className="text-[#1D3D6F] text-sm">
        نصيحة: دايم راجع التوثيق الرسمي للمنصات عشان تشوف آخر التحديثات 💡
        </p>
      </div>
    </div>
  );
};

export default MetricsGuide;