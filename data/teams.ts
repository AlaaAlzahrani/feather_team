// data/teams.ts

"use client";

import { BookOpen, FileText, PieChart } from 'lucide-react';
import { Team, TeamData } from '@/types/teams';

export const teams: Team[] = [
  { 
    id: 'reports',
    name: 'Reports', 
    topicCount: 7,
    description: 'Access all the tools and guidelines you need to create impactful reports.'
  },
  { 
    id: 'content-writing',
    name: 'Content Writing', 
    topicCount: 10,
    description: 'Create compelling content with our writing resources.'
  },
  { 
    id: 'photography',
    name: 'Photography', 
    topicCount: 12,
    description: 'Capture amazing photos with professional techniques.'
  },
  { 
    id: 'design',
    name: 'Design', 
    topicCount: 8,
    description: 'Design beautiful interfaces with our design system.'
  }
];


export const teamData: Record<string, TeamData> = {

  /// CONTENT WRITING TEAM
  contentWriting: {
    memberCount: 6,
    resources: [
      {
        title: "Content Writing Methods",
        description: "Access standardized templates for different types of content writing",
        icon: FileText,
        count: "5 templates"
      },
      {
        title: "Content Writing Guide",
        description: "Learn best practices for content writing",
        icon: PieChart,
        count: "3 modules"
      },
      {
        title: "Style Guidelines",
        description: "Follow our organization's content writing standards",
        icon: BookOpen,
        count: "4 sections"
      }
    ],  
  },

  /// DESIGN TEAM
  design: {
    memberCount: 6,
    resources: [
      {
        title: "Design Methods",
        description: "Access standardized templates for different types of designs",
        icon: FileText,
        count: "5 templates"
      },
      {
        title: "Design Guide",
        description: "Learn best practices for design",
        icon: PieChart,
        count: "3 modules"
      },
      {
        title: "Style Guidelines",
        description: "Follow our organization's design standards",
        icon: BookOpen,
        count: "4 sections"
      }
    ],  
  },


  /// PHOTOGRAPHY TEAM
  photography: {
    memberCount: 12,
    resources: [
      {
        title: "Photography Methods",
        description: "Access standardized templates for different types of photos",
        icon: FileText,
        count: "5 templates"
      },
      {
        title: "Photography Guide",
        description: "Learn best practices for capturing photos",
        icon: PieChart,
        count: "3 modules"
      },
      {
        title: "Style Guidelines",
        description: "Follow our organization's photography standards",
        icon: BookOpen,
        count: "4 sections"
      }
    ],  
  },


  
/// REPORT TEAM
  reports: {
    memberCount: 12,
    resources: [
      {
        title: "Report Templates",
        description: "Access standardized templates for different types of reports",
        icon: FileText,
        count: "5 templates"
      },
      {
        title: "Data Visualization Guide",
        description: "Learn best practices for presenting data effectively",
        icon: PieChart,
        count: "3 modules"
      },
      {
        title: "Style Guidelines",
        description: "Follow our organization's reporting standards",
        icon: BookOpen,
        count: "4 sections"
      }
    ],
  },
  // Add other team data here as needed
};