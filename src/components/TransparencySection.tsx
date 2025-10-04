import { FileText, TrendingUp, MessageCircle, Database, ExternalLink, Eye, Download, Share } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useLanguage } from './LanguageProvider';

// Unified Card Component with Dark Mode Support
const UnifiedCard = ({ 
  children, 
  className = "", 
  hover = true,
  variant = "default"
}: { 
  children: React.ReactNode, 
  className?: string,
  hover?: boolean,
  variant?: "default" | "stat" | "trust" | "service" | "transparency"
}) => {
  const baseClasses = "bg-card dark:bg-card border border-border/50 rounded-2xl p-6 shadow-sm transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-lg hover:border-primary/20 hover:-translate-y-1" : "";
  
  // Variant-specific classes for consistent dimensions
  const variantClasses = {
    service: "min-h-[160px] flex flex-col",
    stat: "min-h-[160px] flex flex-col justify-center text-center",
    trust: "min-h-[80px] flex flex-col justify-center p-3",
    transparency: "min-h-[280px] flex flex-col",
    default: ""
  };
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function TransparencySection() {
  const { t } = useLanguage();

  const transparencyWidgets = [
    {
      id: 'experience',
      icon: FileText,
      title: t.experience_report,
      description: t.experience_desc,
      value: 15,
      displayValue: '15+',
      subtitle: t.years_experience,
      progress: 100,
      link: '#',
      change: '+2',
      trend: 'up'
    },
    {
      id: 'methodology',
      icon: TrendingUp,
      title: t.methodology,
      description: t.methodology_desc,
      value: 8,
      displayValue: '8+',
      subtitle: t.coaching_hours,
      progress: 85,
      link: '#',
      change: '+1.2k',
      trend: 'up'
    },
    {
      id: 'success-stories',
      icon: MessageCircle,
      title: t.success_stories,
      description: t.success_stories_desc,
      value: 2847,
      displayValue: '2,847',
      subtitle: t.clients_served,
      progress: 95,
      link: '#',
      change: '+156',
      trend: 'up'
    },
    {
      id: 'certifications',
      icon: Database,
      title: t.certifications,
      description: t.certifications_desc,
      value: 12,
      displayValue: '12+',
      subtitle: t.success_rate,
      progress: 98,
      link: '#',
      change: '+2',
      trend: 'up'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      
      {/* Background Elements - Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/2 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-6"
          >
            <UnifiedCard hover={false} className="inline-block px-6 py-3 min-h-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-primary font-medium text-sm">
                  {t.about_badge}
                </span>
              </div>
            </UnifiedCard>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {t.about_title_1}
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t.about_title_2}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t.about_desc}
            <span className="block text-foreground font-medium mt-2">
              {t.about_features}
            </span>
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {transparencyWidgets.map((widget, index) => {
            const Icon = widget.icon;
            return (
              <motion.div
                key={widget.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer h-full"
              >
                <UnifiedCard variant="transparency" className="relative h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10 w-8 h-8">
                        <Download className="w-3 h-3 text-foreground/60" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10 w-8 h-8">
                        <ExternalLink className="w-3 h-3 text-foreground/60" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                        {widget.title}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {widget.description}
                      </p>
                    </div>
                    
                    {/* Value Display */}
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center justify-between">
                        <motion.span 
                          className="text-2xl font-bold text-foreground"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                        >
                          {widget.value < 1000 ? (
                            <AnimatedCounter end={widget.value} />
                          ) : (
                            widget.displayValue
                          )}
                        </motion.span>
                        
                        <motion.div 
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          <TrendingUp className="w-3 h-3" />
                          {widget.change}
                        </motion.div>
                      </div>
                      
                      <p className="text-xs text-foreground/50 font-medium">{widget.subtitle}</p>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-foreground/60">
                          <span>{t.progress}</span>
                          <span className="font-medium">{widget.progress}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.8, duration: 1 }}
                          className="w-full bg-border rounded-full h-2"
                        >
                          <div 
                            className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${widget.progress}%` }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </UnifiedCard>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Dashboard Preview */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <UnifiedCard hover={false} className="text-center min-h-0">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t.portal_title}</h3>
              <p className="text-sm text-foreground/60">{t.portal_desc}</p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: t.clients_coached, value: "2847", percentage: 95 },
                { title: t.certifications_earned, value: "12", percentage: 100 },
                { title: t.satisfaction_score, value: "4.9", percentage: 98 }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="text-xl font-bold text-foreground mb-1"
                  >
                    <AnimatedCounter end={parseFloat(item.value.replace(/[^0-9.]/g, ''))} suffix={item.value.includes('T') ? 'T' : ''} />
                  </motion.div>
                  <p className="text-sm text-foreground/60 mb-2">{item.title}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 1, duration: 1 }}
                    className="w-full bg-border rounded-full h-1"
                  >
                    <div 
                      className="bg-gradient-to-r from-primary to-blue-600 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3.5 text-base font-semibold rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                <Database className="w-5 h-5 mr-2" />
                {t.view_profile}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </UnifiedCard>
        </motion.div>
      </div>
    </section>
  );
}