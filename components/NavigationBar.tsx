"use client";


import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, Home, HelpCircle } from 'lucide-react';

// Flat path translations for simpler lookup
const PATH_TRANSLATIONS: { [key: string]: string } = {
  // Main sections
  'reports': 'التقارير',
  'photography': 'التصوير',
  'design': 'التصميم',
  'content-writing': 'كتابة المحتوى',

  // Reports section
  'guides': 'الدليل',
  'tasks': 'المهام',
  'daily': 'اليومية',
  'weekly': 'الأسبوعية',
  'monthly': 'الشهرية',
  
  // Guide pages
  'metrics': 'المقاييس',
  'platforms': 'المنصات',
  'ad-structure': 'هيكلة الإعلانات',
  'brand-names': 'أسماء البراندات',
  'list': 'القائمة',

  // Platform pages
  'snapchat': 'سناب شات',
  'tiktok': 'تيك توك',
  'meta': 'ميتا',
  'google': 'قوقل',
  'x': 'إكس',

  // Process pages
  'process': 'شروحات',
  'schedule': 'الجدول',
  'prepare-reports': 'شروحات أساسية',
  'prepare-additional': 'شروحات إضافية',

  // Brands
  'brands': 'البراندات',
  'labelle': 'لابيل',
  'reefi': 'ريفي',

  // Additional sections
  'custom-metric': ' البحث عن المقياس',
  'sheet': 'الجدول',
};

// Section colors
const SECTION_COLORS: { [key: string]: string } = {
  'reports': '#DFF7F6',
  'photography': '#F6E4DD',
  'design': '#E4E4FC',
  'content-writing': '#FFE8E4'
};

const NavigationBar = () => {
  const pathname = usePathname();

  // Function to get Arabic name for a path segment
  const getArabicName = (pathSegment: string): string => {
    return PATH_TRANSLATIONS[pathSegment] || pathSegment;
  };

  // Generate breadcrumbs with Arabic names
  const generateBreadcrumbs = () => {
    if (!pathname) return [];

    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      
      return {
        nameAr: getArabicName(segment),
        path: path,
        isLast: index === segments.length - 1
      };
    });
  };

  const breadcrumbs = generateBreadcrumbs();
  const mainSection = breadcrumbs[0]?.path.split('/')[1];
  const sectionColor = SECTION_COLORS[mainSection] || '#FFFFFF';

  return (
    <nav 
      className="sticky top-0 z-50 shadow-sm transition-colors duration-300" 
      style={{ backgroundColor: sectionColor }}
      role="navigation"
      aria-label="التنقل الرئيسي"
    >
      <div className="max-w-7xl mx-auto px-4 py-3" dir="rtl">
        <div className="flex items-center justify-between">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-reverse space-x-2">
            <Link 
              href="/" 
              className="text-[#1D3D6F]/70 hover:text-[#1D3D6F] transition-colors"
              aria-label="الرئيسية"
            >
              <Home className="w-5 h-5" />
            </Link>
            
            {breadcrumbs.map(({ nameAr, path, isLast }) => (
              <React.Fragment key={path}>
                <ChevronLeft className="w-4 h-4 text-[#1D3D6F]/40" />
                {isLast ? (
                  <span 
                    className="font-medium text-[#1D3D6F]"
                    aria-current="page"
                  >
                    {nameAr}
                  </span>
                ) : (
                  <Link 
                    href={path}
                    className="text-[#1D3D6F]/70 hover:text-[#1D3D6F] hover:underline transition-colors"
                  >
                    {nameAr}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;