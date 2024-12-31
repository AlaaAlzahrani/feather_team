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
      <header className="bg-gray-900 text-white">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">FEATHER</h1>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Feather Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started fast. Access tutorials and essential information all in one place. ✨
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border rounded-lg">
            <Video className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-600">Learn at your own pace with detailed video guides</p>
          </div>
          <div className="p-6 border rounded-lg">
            <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600">Comprehensive written guides and resources</p>
          </div>
          <div className="p-6 border rounded-lg">
            <Users className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Team Specific</h3>
            <p className="text-gray-600">Content tailored to your team&apos;s needs</p>
          </div>
        </div>

        {/* Teams Section */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Select Your Team</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {teams.map(team => (
              <Link
                key={team.id}
                href={`/${team.id}`}
                className="p-6 border rounded-lg text-left hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{team.name}</h4>
                    <p className="text-gray-600">{team.topicCount} topics</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}