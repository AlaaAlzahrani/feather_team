"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Users, Video, Sparkles, Target, Feather } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    id: 'reports',
    title: 'التقارير',
    description: 'تعلم كيف تعد وتقدم تقارير متنوعة',
    icon: Target,
    color: 'bg-[#DFF7F6]'
  },
  {
    id: 'photography',
    title: 'التصوير',
    description: 'دليلك لإنتاج محتوى بصري احترافي',
    icon: Video,
    color: 'bg-[#F6E4DD]'
  },
  {
    id: 'design',
    title: 'التصميم',
    description: 'تعرف على أساسيات التصميم وأدواته',
    icon: Sparkles,
    color: 'bg-[#E4E4FC]'
  },
  {
    id: 'content-writing',
    title: 'كتابة المحتوى',
    description: 'اكتشف أسرار الكتابة المؤثرة',
    icon: BookOpen,
    color: 'bg-[#FFE8E4]'
  }
];

const features = [
  {
    icon: Video,
    title: "شروحات فيديو",
    description: "تعلم بسهولة مع شروحات الفيديو المفصلة"
  },
  {
    icon: BookOpen,
    title: "دليل تفصيلي",
    description: "اكتشف كل ما تحتاج معرفته خطوة بخطوة"
  },
  {
    icon: Users,
    title: "دعم الفريق",
    description: "تواصل مع فريقك بسهولة عند الحاجة"
  }
];

const FloatingFeather = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      className="fixed left-4 top-1/2 z-50"
      style={{ y, rotate }}
    >
      <Feather className="w-8 h-8 text-[#F28579]" />
    </motion.div>
  );
};

export default function ArabicLandingPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <FloatingFeather />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F28579] z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      {/* Header */}
      <motion.header 
        className="bg-[#1D3D6F] text-white sticky top-0 z-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FEATHER</h1>
          <motion.button 
            className="bg-[#F28579] px-6 py-2.5 rounded-full text-white hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تسجيل الدخول
          </motion.button>
        </nav>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#1D3D6F] mb-4">
            يا هلا بك في فيذر! 👋
          </h2>
          <p className="text-xl text-[#1D3D6F]/70 max-w-2xl mx-auto">
            مكان واحد يجمع كل اللي تحتاجه للبداية. اختر قسمك وابدأ رحلتك معنا ✨
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 0.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none bg-[#DFF7F6]/20 h-full rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <motion.h3 
                      className="w-16 h-16 rounded-full bg-[#DFF7F6] flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.2}}>
                      <Icon className="w-8 h-8 text-[#1D3D6F]" />
                    </motion.h3>
                    <h3 className="text-lg font-semibold text-[#1D3D6F] mb-2">{feature.title}</h3>
                    <p className="text-[#1D3D6F]/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sections Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link key={index} href={`/${section.id}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setHoveredSection(section.id)}
                  onHoverEnd={() => setHoveredSection(null)}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-none rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 15 }}
                        >
                          <Icon className="w-8 h-8 text-[#1D3D6F]" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#1D3D6F] mb-2">
                            {section.title}
                          </h3>
                          <p className="text-[#1D3D6F]/70 mb-4">
                            {section.description}
                          </p>
                          <motion.div 
                            className="flex items-center gap-2 text-[#F28579]"
                            animate={{ x: hoveredSection === section.id ? 8 : 0 }}
                          >
                            <span>اكتشف المزيد</span>
                            <ArrowLeft className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Supporting Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="border-none bg-[#DFF7F6]/20 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <motion.h3 
                className="text-xl font-bold text-[#1D3D6F] mb-3"
                whileHover={{ scale: 1.05 }}
              >
                مساعدتك مهمتنا 💫
              </motion.h3>
              <p className="text-[#1D3D6F]/70 max-w-2xl mx-auto">
                كل قسم فيه محتوى مخصص يساعدك تتعلم وتتطور في دورك الجديد. اختر القسم اللي يناسبك وابدأ رحلتك معنا
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}

