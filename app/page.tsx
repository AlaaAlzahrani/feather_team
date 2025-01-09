"use client";

import React from 'react';
import { ArrowRight, BookOpen, Users, Video, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  const features = [
    {
      number: "01",
      title: "Reports",
      description: "Access comprehensive reporting tools and guidelines",
      icon: Target
    },
    {
      number: "02",
      title: "Photography",
      description: "Master professional photography techniques",
      icon: Video
    },
    {
      number: "03",
      title: "Design",
      description: "Create beautiful interfaces with our design system",
      icon: Sparkles
    },
    {
      number: "04",
      title: "Content Writing",
      description: "Develop compelling content strategies",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1D3D6F] text-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">FEATHER</h1>
          <button className="bg-[#F28579] px-6 py-2.5 rounded-full text-white hover:bg-opacity-90 transition-all">
            Sign In
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[#1D3D6F] leading-tight">
              Welcome to Your Journey at Feather
            </h2>
            <p className="text-xl text-[#1D3D6F]/70">
              Start your onboarding journey with our comprehensive guides and resources. We're here to help you succeed! ✨
            </p>
            <button className="bg-[#F28579] px-8 py-4 rounded-full text-white hover:bg-opacity-90 transition-all text-lg font-semibold">
              Get Started
            </button>
          </div>
          <div className="bg-[#DFF7F6] p-8 rounded-3xl">
            <img 
              src="/landing-page/business-teamwork-sketch.avif"
              alt="Team collaboration"
              width={400}
              height={600}
              className="w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 py-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link
                key={index}
                href={`/${feature.title.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <div className="p-8 rounded-3xl bg-[#DFF7F6] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-bold text-[#F28579]">
                      {feature.number}
                    </span>
                    <div className="space-y-4 flex-1">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#1D3D6F]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1D3D6F]">
                        {feature.title}
                      </h3>
                      <p className="text-[#1D3D6F]/70">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#F28579] group-hover:translate-x-2 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Supporting Info */}
        <div className="text-center pb-24 px-4">
          <h3 className="text-2xl font-bold text-[#1D3D6F] mb-4">
            Your Success is Our Priority
          </h3>
          <p className="text-[#1D3D6F]/70 max-w-2xl mx-auto mb-8">
            Each section contains carefully curated resources to help you excel in your role. Choose your path and begin your journey with confidence.
          </p>
          <button className="bg-[#F28579] px-6 py-4 rounded-full text-white hover:bg-opacity-90 transition-all text-lg font-semibold group">
            <span className="inline-flex items-center">
              Let's Grow Together
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;