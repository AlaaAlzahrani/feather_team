// config/reports.ts
import { 
    FileBarChart, 
    FileSpreadsheet, 
    FileStack, 
    LayoutDashboard,
    LineChart,
    Building2
  } from 'lucide-react';
  import { GuideItem, ReportType } from '@/types/reports';
  
  export const commonGuides: GuideItem[] = [
    {
      id: 'platform-overview',
      title: 'Platform Overview',
      icon: LayoutDashboard,
      description: 'Learn about our key advertising platforms',
      duration: '10 min',
      path: '/reports/guides/platform-overview'
    },
    {
      id: 'ad-structure',
      title: 'Ad Structure Guide',
      icon: FileSpreadsheet,
      description: 'Understanding campaigns, ad sets, and ads',
      duration: '12 min',
      path: '/reports/guides/ad-structure'
    },
    {
      id: 'metrics-guide',
      title: 'Metrics Guide',
      icon: LineChart,
      description: 'Key metrics across different platforms',
      duration: '15 min',
      path: '/reports/guides/metrics-guide'
    },
    {
      id: 'brand-names',
      title: 'Brand Names',
      icon: Building2,
      description: 'Brand naming conventions across platforms',
      duration: '8 min',
      path: '/reports/guides/brand-names'
    }
  ];
  
  export const reportTypes: ReportType[] = [
    {
      id: 'daily',
      title: 'Daily Reports',
      icon: FileBarChart,
      description: 'Learn how to create and submit daily reports',
      duration: '15 min',
      path: '/reports/daily'
    },
    {
      id: 'weekly',
      title: 'Weekly Reports',
      icon: FileSpreadsheet,
      description: 'Master the weekly reporting process',
      duration: '20 min',
      path: '/reports/weekly'
    },
    {
      id: 'monthly',
      title: 'Monthly Reports',
      icon: FileStack,
      description: 'Comprehensive monthly reporting guide',
      duration: '25 min',
      path: '/reports/monthly'
    }
  ];