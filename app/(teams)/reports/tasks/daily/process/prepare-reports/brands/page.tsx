import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, SparkleIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BrandsOverview = () => {
  const brands = [
    {
      name: "Labelle",
      description: "شروحات التقارير لحملات لابيل",
      path: "/reports/tasks/daily/process/prepare-reports/brands/labelle"
    },
    {
      name: "Reefi",
      description: "شروحات التقارير لحملات ريفي",
      path: "/reports/tasks/daily/process/prepare-reports/brands/reefi"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-3">تقارير البراندات </h1>
        <p className="text-[#1D3D6F]/70">
          يا هلا! اختر البراند اللي تبي تشوف طريقة تقاريره. بعض البراندات  لها طريقة خاصة في كل منصة 
        </p>
      </div>

      {/* Brand Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <Link key={index} href={brand.path}>
            <Card className="h-full hover:border-[#F28579] hover:shadow-lg transition-all group">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Brand Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#DFF7F6] flex items-center justify-center flex-shrink-0">
                    <SparkleIcon className="w-8 h-8 text-[#1D3D6F] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D3D6F] mb-1">{brand.name}</h3>
                    <p className="text-[#1D3D6F]/70">{brand.description}</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-4 flex items-center justify-end text-[#F28579] group-hover:translate-x-[-4px] transition-transform">
                  <span className="text-sm">تفاصيل</span>
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsOverview;