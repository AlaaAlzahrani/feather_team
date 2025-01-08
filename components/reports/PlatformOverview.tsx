"use client";

import React from "react"
import { 
  ExternalLink, 
  ArrowLeft,
  MessageCircle,
  Music2,
  Camera,
  Search,
  X
} from 'lucide-react'
import Link from "next/link"

const platforms = [
  {
    name: "Snapchat Ads",
    Icon: MessageCircle,
    link: "https://ads.snapchat.com",
    use: "Snapchat's advertising platform"
  },
  {
    name: "TikTok Ads Manager",
    Icon: Music2,
    link: "https://ads.tiktok.com",
    use: "TikTok's advertising platform"
  },
  {
    name: "Meta Business Suite",
    Icon: Camera,
    link: "https://business.facebook.com",
    use: "We primarily use this for Instagram ads (Note: Meta includes both Facebook & Instagram)"
  },
  {
    name: "Google Ads",
    Icon: Search,
    link: "https://ads.google.com",
    use: "Google's advertising platform"
  },
  {
    name: "X Ads Manager",
    Icon: X,
    link: "https://ads.twitter.com",
    use: "X (formerly Twitter) advertising platform"
  }
]

export const PlatformOverview = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Navigation */}
      <Link
        href="/reports/daily"
        className="flex items-center text-[#F28579] hover:text-[#1D3D6F] transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Daily Reports
      </Link>

      {/* Introduction */}
      <div className="mb-8">
        <h1 className="text-xl font-medium text-[#1D3D6F] mb-4"> Our Advertising Platforms</h1>
        <ul className="space-y-2 text-[#1D3D6F]/80 text-sm">
          <li className="flex items-center gap-2"> ⋆ We mainly use 5 ads platforms: Snapchat, TikTok, Meta, Goolge Ads, and X.  </li>
          <li className="flex items-center gap-2"> ⋆ Check the table below for more information. </li>
        </ul>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-[#DFF7F6]">
            <tr>
              <th className="w-12 p-4 text-sm font-medium text-[#1D3D6F]">#</th>
              <th className="w-12 p-4"></th>
              <th className="text-left p-4 text-sm font-medium text-[#1D3D6F]">Platform</th>
              <th className="text-left p-4 text-sm font-medium text-[#1D3D6F]">Use</th>
              <th className="text-left p-4 text-sm font-medium text-[#1D3D6F]">Link</th>
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
                  <td className="p-4 text-sm text-[#1D3D6F] font-medium">
                    {platform.name}
                  </td>
                  <td className="p-4 text-sm text-[#1D3D6F]/70">
                    {platform.use}
                  </td>
                  <td className="p-4 text-sm">
                    <Link
                      href={platform.link}
                      className="inline-flex items-center text-[#F28579] hover:text-[#1D3D6F] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Platform
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-[#1D3D6F]/60">
        Note: Bookmark these links for easy access to each platform.
      </div>
    </div>
  )
}

export default PlatformOverview;