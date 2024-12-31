"use client";

import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { teams, teamData } from '@/data/teams';
import Link from 'next/link';

export default function ReportsPage() {
  const team = teams.find(t => t.id === 'reports')!;
  const { resources, memberCount } = teamData['reports'];

  return (
    <div className="min-h-screen bg-white font-[Raleway]">
      {/* Header - Kept compact */}
      <header className="bg-gray-900 text-white">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">FEATHER | {team.name} Team</h1>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{memberCount} team members</span>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Welcome Section - Added more vertical space */}
        <div className="pt-24 pb-20">
          <h2 className="text-3xl font-bold mb-3">{team.name} Team Resources</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            {team.description}
          </p>
        </div>

        {/* Resources Grid - Improved spacing and hover states */}
        <section className="pb-24">
          <h3 className="text-xl font-bold mb-8">Essential Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div 
                  key={resource.title} 
                  className="p-6 bg-white border rounded-lg hover:border-blue-600 hover:shadow-md transition-all cursor-pointer group"
                >
                  <IconComponent className="w-6 h-6 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                  <span className="text-sm text-blue-600">{resource.count}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}