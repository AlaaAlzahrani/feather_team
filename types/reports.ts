// types/reports.ts
import { LucideIcon } from 'lucide-react';

export interface GuideItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  path: string;
}

export interface ReportType extends GuideItem {}