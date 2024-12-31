"use client";

import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Team, TeamData } from '../types/teams';
import '@fontsource/raleway';

interface TeamPageProps {
  team: Team;
  teamData: TeamData;
  onBack: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ team, teamData, onBack }) => {
  const { resources, recentReports, memberCount } = teamData;

  return (
    <div className="min-h-screen bg-white font-[Raleway]">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="hover:text-blue-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">FEATHER | {team.name} Team</h1>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-5 h-5" />
            <span>{memberCount} team members</span>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Welcome Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">{team.name} Team Resources</h2>
          <p className="text-gray-600 text-lg">
            {team.description}
          </p>
        </div>

        {/* Resources Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Essential Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.title} className="p-6 border rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer">
                  <IconComponent className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="text-sm text-blue-600">{resource.count}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Reports Section */}
        {recentReports && (
          <section>
            <h3 className="text-2xl font-bold mb-6">Recent Reports</h3>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div 
                  key={report.title}
                  className="p-6 border rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{report.title}</h4>
                      <p className="text-gray-600">By {report.author}</p>
                    </div>
                    <span className="text-sm text-gray-500">{report.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default TeamPage;