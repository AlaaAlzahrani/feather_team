import React, { useState } from 'react';
import { Search, Building2, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export const BrandList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const brands = [
    { id: 1, name: "Labelle", platforms: { snapchat: "Balsam | بلسم Self Service", tiktok: "Labelle", meta: "Labelle", google: "Balsam", account: "marketing@[...].com" }},
    { id: 2, name: "Brio", platforms: { snapchat: "Balsam | بلسم Self Service", tiktok: "Brio", meta: "Labelle", google: "Balsam", account: "marketing@[...].com" }},
    { id: 3, name: "Bonita", platforms: { snapchat: "Balsam | بلسم Self Service", tiktok: "Bonita", meta: "Labelle", google: "Balsam", account: "marketing@[...].com" }},
    { id: 4, name: "Labelle Egypt", platforms: { snapchat: "Labelle Egypt", tiktok: "Labelle Egypt", meta: "Labelle Ads Account - EG", google: "NA", account: "" }},
    { id: 5, name: "Mor", platforms: { snapchat: "NA", tiktok: "MOR Ad account", meta: "NA", google: "NA", account: "" }},
    { id: 6, name: "Atom", platforms: { snapchat: "Atom Self Service", tiktok: "Atom Ads Account", meta: "Atom", google: "ATOM", account: "marketing@[...].com" }},
    { id: 7, name: "Alreef", platforms: { snapchat: "Self Service الريف الثلاثي", tiktok: "AlReef Store", meta: "Al-Reef SixSns", google: "الريف الثلاثي", account: "fe.marketing@[...].com" }},
    { id: 8, name: "WOW", platforms: { snapchat: "Wow new", tiktok: "WOW - واو", meta: "WOW Ad Account", google: "wowforbeauty", account: "marketing@[...].com" }},
    { id: 9, name: "Forher", platforms: { snapchat: "Forher Sa Self Service", tiktok: "For Her | فور هر", meta: "For Her Ads", google: "Forher", account: "fe.marketing@[...].com" }},
    { id: 10, name: "FootLab", platforms: { snapchat: "FootLab Self Service", tiktok: "Foot Lab", meta: "Foot Lab", google: "FootLab", account: "marketing@[...].com" }},
    { id: 11, name: "Dream Hush", platforms: { snapchat: "DreamyHush Self Service", tiktok: "Alwassen Alhalim (DreamyHush)0624", meta: "Dreamyhush_ad_account", google: "DreamyHush", account: "fe.marketing@[...].com" }},
    { id: 12, name: "Kaizen", platforms: { snapchat: "Kaizen Ad Account", tiktok: "Kaizen Ads Account", meta: "Kaizen Ads Account", google: "KaizenSA", account: "fe.marketing@[...].com" }},
    { id: 13, name: "Ryola", platforms: { snapchat: "ريولا كلينك", tiktok: "Riola Clinic Ad Account", meta: "Riola", google: "Riola Clinics", account: "fe.marketing@[...].com" }},
    { id: 14, name: "Alsaddah", platforms: { snapchat: "alsaddahrest Self Service", tiktok: "شركة السدة لتقديم الوجبات0329", meta: "241577966694393", google: "Alsaddah", account: "fe.marketing@[...].com" }},
    { id: 15, name: "Awa", platforms: { snapchat: "Reefi Self Service", tiktok: "Reefi", meta: "Reefi", google: "Reefi Google Ads", account: "fe.marketing@[...].com" }},
    { id: 16, name: "Reefi", platforms: { snapchat: "Reefi Self Service", tiktok: "Reefi", meta: "Reefi", google: "Reefi", account: "fe.marketing@[...].com" }},
    { id: 17, name: "Blanco", platforms: { snapchat: "Blanco - Ad account", tiktok: "blanco - بلانكو", meta: "blanco - بلانكو", google: "Blanco", account: "fe.marketing@[...].com" }},
    { id: 18, name: "Shameem", platforms: { snapchat: "Shmeem - Ad Account", tiktok: "شميم - شميم", meta: "Shmeem - شميم", google: "Shmeem", account: "fe.marketing@[...].com" }},
    { id: 19, name: "Ojin", platforms: { snapchat: "Ojin - Ad Account", tiktok: "Ojin - أوجين", meta: "Ojin - أوجين", google: "Ojin", account: "fe.marketing@[...].com" }},
    { id: 20, name: "Mahasen", platforms: { snapchat: "Mahasen Self Service", tiktok: "محاسن", meta: "Mahasen", google: "Mahasen", account: "fe.marketing@[...].com" }},
    { id: 21, name: "Doknah", platforms: { snapchat: "Doknah treading Self Service", tiktok: "مؤسسة دكنة للتجارة", meta: "Doknah Perfumes", google: "دكنة", account: "fe.marketing@[...].com" }},
    { id: 22, name: "Anesthesia", platforms: { snapchat: "Anesthesia Self Service", tiktok: "Anesthesia", meta: "Anesthesia Lenses", google: "Anesthesia", account: "fe.marketing@[...].com" }},
    { id: 23, name: "Palma", platforms: { snapchat: "Palma dates", tiktok: "PALMA DATES0210", meta: "PalmaDatesNew", google: "PalmaDates", account: "marketing@[...].com" }},
    { id: 24, name: "Joint", platforms: { snapchat: "Join Clinic | عيادات جوينت", tiktok: "Join Clinic", meta: "Joint Clinic", google: "Join Clinic | عيادات جوينت", account: "marketing@[...].com" }},
    { id: 25, name: "Matta", platforms: { snapchat: "Matta Self Service", tiktok: "شركة نسيج ماتا", meta: "Matta Ads", google: "Matta Ads", account: "fe.marketing@[...].com" }},
    { id: 26, name: "Fish Day", platforms: { snapchat: "Fishday Self Service", tiktok: "Fishday-fishday business", meta: "Fish Day - يوم السمك", google: "Fish Day - يوم السمك", account: "fe.marketing@[...].com" }},
    { id: 27, name: "Faridah Flowers", platforms: { snapchat: "faridaflowers Self Service", tiktok: "Farida Flowers Ad Account", meta: "Farida flowers", google: "Farida flowers", account: "fe.marketing@[...].com" }},
    { id: 28, name: "Dasman Tea", platforms: { snapchat: "DASMAN_TEA Self Service", tiktok: "Dasman Tea", meta: "Dasman Tea - شاي دسمان", google: "NA", account: "" }},
    { id: 29, name: "Surge", platforms: { snapchat: "Surge Perfumes Self Service", tiktok: "مؤسسة موجة تكوينات للتجارة", meta: "surge", google: "SURGE Perfume", account: "fe.marketing@[...].com" }},
];

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    Object.values(brand.platforms).some(value => 
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#1D3D6F]/40" />
          <Input
            type="text"
            placeholder="ابحث عن اسم المنصة..."
            className="pl-10 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Brands Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-[#DFF7F6]">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">#</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">Brand</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">Snapchat</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">TikTok</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">Meta</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">Google</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[#1D3D6F]">Account</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredBrands.map((brand) => (
              <tr key={brand.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-right text-sm text-[#1D3D6F]">{brand.id}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-medium text-[#1D3D6F]">{brand.name}</span>
                    <Building2 className="w-4 h-4 text-[#1D3D6F]" />
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-sm text-[#1D3D6F]">{brand.platforms.snapchat}</td>
                <td className="px-4 py-3 text-right text-sm text-[#1D3D6F]">{brand.platforms.tiktok}</td>
                <td className="px-4 py-3 text-right text-sm text-[#1D3D6F]">{brand.platforms.meta}</td>
                <td className="px-4 py-3 text-right text-sm text-[#1D3D6F]">{brand.platforms.google}</td>
                <td className="px-4 py-3 text-right text-sm text-[#F28579]">
                  {brand.platforms.account && (
                    <Link 
                      href={`mailto:${brand.platforms.account}`} 
                      className="flex items-center justify-end gap-1 hover:text-[#1D3D6F]"
                    >
                      {brand.platforms.account}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandList;