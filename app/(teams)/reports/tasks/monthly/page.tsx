import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ComingSoonPage () {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        <Card className="mb-8">
          <CardContent className="p-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-[#DFF7F6] flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-[#1D3D6F]" />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-[#1D3D6F] mb-4">
              سيتم إضافة محتوى هذه الصفحة قريباً
            </h1>

            {/* Description */}
            <p className="text-[#1D3D6F]/70 text-lg mb-6">
              نعمل حالياً على إعداد محتوى مميز لك. تابعنا للحصول على التحديثات ✨
            </p>

            {/* Visual Indicator */}
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F28579] animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-2 h-2 rounded-full bg-[#F28579] animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-[#F28579] animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};