"use client";

"use client";

import React from 'react';
import { ArrowRight, BookOpen, Users, Video } from 'lucide-react';
import { teams } from '@/data/teams';
import '@fontsource/raleway';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-[Raleway]">
      {/* Header */}
      <header className="bg-[#1D3D6F] text-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">FEATHER</h1>
          <button className="bg-[#F28579] px-6 py-2.5 rounded-full text-white hover:bg-opacity-90 transition-all">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="text-center py-24 md:py-32">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1D3D6F] tracking-tight">
            Welcome to Feather
          </h2>
          <p className="text-[#1D3D6F]/70 text-xl max-w-xl mx-auto mb-8">
            Access everything you need, all in one place ✨
          </p>
          <button className="bg-[#F28579] px-8 py-4 rounded-full text-white hover:bg-opacity-90 transition-all text-lg font-semibold">
            Press Start
          </button>
        </div>

        {/* Features - Now Vertical */}
        <div className="space-y-8 mb-24 max-w-3xl mx-auto">
          <div className="p-12 rounded-2xl bg-[#DFF7F6] hover:shadow-xl transition-all duration-300 text-center">
            <div className="bg-[#A8E5E2] rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto">
              <Video className="w-12 h-12 text-[#1D3D6F]" />
            </div>
            <p className="text-[#1D3D6F]/70 text-lg">
              Learn at your own pace with our comprehensive video tutorials, designed to guide you through every step of the process
            </p>
          </div>
          
          <div className="p-12 rounded-2xl bg-[#DFF7F6] hover:shadow-xl transition-all duration-300 text-center">
            <div className="bg-[#A8E5E2] rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto">
              <BookOpen className="w-12 h-12 text-[#1D3D6F]" />
            </div>
            <p className="text-[#1D3D6F]/70 text-lg">
              Access our extensive documentation library, featuring clear and concise guides to help you master every aspect
            </p>
          </div>
          
          <div className="p-12 rounded-2xl bg-[#DFF7F6] hover:shadow-xl transition-all duration-300 text-center">
            <div className="bg-[#A8E5E2] rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto">
              <Users className="w-12 h-12 text-[#1D3D6F]" />
            </div>
            <p className="text-[#1D3D6F]/70 text-lg">
              Experience personalized content tailored specifically to your team's needs and objectives
            </p>
          </div>
        </div>

        {/* Teams Section */}
        <section className="pb-24">
          <h3 className="text-3xl font-bold mb-8 text-[#1D3D6F]">Select Your Team</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {teams.map(team => (
              <Link
                key={team.id}
                href={`/${team.id}`}
                className="p-8 rounded-2xl bg-white border-2 border-transparent hover:border-[#F28579] hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#1D3D6F]">{team.name}</h4>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#F28579] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

