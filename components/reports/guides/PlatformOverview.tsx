import React from "react"
import { 
  ExternalLink, 
  ArrowLeft,
  MessageCircle,
  Music2,
  Camera,
  Search,
  X,
  Lightbulb
} from 'lucide-react'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const platforms = [
  {
    name: "Snapchat Ads",
    Icon: MessageCircle,
    link: "https://ads.snapchat.com",
    use: "منصة سناب شات للإعلانات - مناسبة للوصول للجمهور السعودي الشاب",
    example: "مثلاً: إعلانات فلاتر سناب، ستوري، سبونسر"
  },
  {
    name: "TikTok Ads Manager",
    Icon: Music2,
    link: "https://ads.tiktok.com",
    use: "منصة تيك توك للإعلانات - ممتازة للمحتوى الترفيهي والتفاعلي",
    example: "مثلاً: إعلانات الفيديوهات القصيرة، تحديات تيك توك"
  },
  {
    name: "Meta Business Suite",
    Icon: Camera,
    link: "https://business.facebook.com",
    use: "نستخدمها بشكل أساسي لإعلانات انستقرام (ملاحظة: ميتا تشمل فيسبوك وانستقرام)",
    example: "مثلاً: إعلانات الفيد، الستوري، الريلز"
  },
  {
    name: "Google Ads",
    Icon: Search,
    link: "https://ads.google.com",
    use: "منصة قوقل للإعلانات - مهمة للبحث والظهور في نتائج قوقل",
    example: "مثلاً: إعلانات البحث، إعلانات اليوتيوب"
  },
  {
    name: "X Ads Manager",
    Icon: X,
    link: "https://ads.twitter.com",
    use: "منصة إكس (تويتر سابقاً) للإعلانات - مناسبة للأخبار والتحديثات",
    example: "مثلاً: التغريدات المروجة، الترندات المدعومة"
  }
]

export const PlatformOverview = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">

      {/* Introduction */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D3D6F] mb-4">منصات الإعلانات عندنا </h1>
        <Card className="bg-[#DFF7F6]/30 border-none mb-6">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#1D3D6F] mt-1" />
              <div>
                <p className="text-[#1D3D6F]/80 text-lg">
                  يا هلا! عندنا 5 منصات رئيسية للإعلانات نستخدمها بشكل يومي. كل منصة لها مميزاتها الخاصة وتناسب أهداف مختلفة 
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-[#DFF7F6]">
            <tr>
              <th className="w-12 p-4 text-sm font-medium text-[#1D3D6F]">#</th>
              <th className="w-12 p-4"></th>
              <th className="text-right p-4 text-sm font-medium text-[#1D3D6F]">المنصة</th>
              <th className="text-right p-4 text-sm font-medium text-[#1D3D6F]">استخداماتها</th>
              <th className="text-center p-4 text-sm font-medium text-[#1D3D6F]">الرابط</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform, index) => {
              const IconComponent = platform.Icon;
              return (
                <tr 
                  key={index} 
                  className={`border-t border-gray-100 hover:bg-gray-50 transition-colors ${
                    platform.name === "Meta Business Suite" ? "bg-[#DFF7F6]/20" : ""
                  }`}
                >
                  <td className="p-4 text-sm text-center text-[#1D3D6F]/70 font-medium">
                    {index + 1}
                  </td>
                  <td className="p-4">
                    <div className="w-8 h-8 rounded-full bg-[#DFF7F6] flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-[#1D3D6F]" />
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[#1D3D6F] font-medium text-right">
                    {platform.name}
                  </td>
                  <td className="p-4 text-sm text-[#1D3D6F]/70 text-right">
                    <div>
                      <p>{platform.use}</p>
                      <p className="text-[#F28579] mt-1 text-xs">{platform.example}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-center">
                    <Link
                      href={platform.link}
                      className="inline-flex items-center text-[#F28579] hover:text-[#1D3D6F] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      فتح المنصة
                      <ExternalLink className="mr-1 w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Card className="border-l-4 border-l-[#A8E5E2] mt-6">
        <CardContent className="p-4">
          <p className="text-sm text-[#1D3D6F]/70">
            نصيحة: حط بوكمارك للروابط هذي عشان يسهل عليك الوصول للمنصات. وإذا واجهتك أي مشكلة في الدخول لأي منصة، تواصل مع فريقنا 💫
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PlatformOverview;