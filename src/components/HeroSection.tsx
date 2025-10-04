import { ArrowRight, Users, Clock, Target, Phone, Search, FileText, BarChart3, User, BookOpen, GraduationCap, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageProvider';
import { useState } from 'react';

// Fixed Unified Card Component with Dark Mode Support
const UnifiedCard = ({ 
  children, 
  className = "", 
  hover = true,
  variant = "default"
}: { 
  children: React.ReactNode, 
  className?: string,
  hover?: boolean,
  variant?: "default" | "stat" | "trust" | "service"
}) => {
  const baseClasses = "bg-card dark:bg-card border border-border/50 rounded-2xl p-6 shadow-sm transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-lg hover:border-primary/20 hover:-translate-y-1" : "";
  
  // Variant-specific classes for consistent dimensions
  const variantClasses = {
    service: "min-h-[160px] flex flex-col",
    stat: "min-h-[160px] flex flex-col justify-center text-center",
    trust: "min-h-[80px] flex flex-col justify-center p-3",
    default: ""
  };
  
  return (
    <>{children}</>
  );
};

export function HeroSection() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchSuggestions = ['Lehrstelle', 'Kauffrau', 'Informatiker', 'Detailhandel', 'Gesundheit', 'Logistik', 'Elektro', 'Mechanik'];
  
  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  const popularServices = [
    {
      icon: Search,
      title: t.service_life_coaching,
      subtitle: t.service_life_desc,
      category: "Plattform",
      popular: true,
      color: "blue",
      gradient: "bg-gradient-blue"
    },
    {
      icon: FileText,
      title: t.service_business_coaching,
      subtitle: t.service_business_desc,
      category: "KI-Tools",
      popular: true,
      color: "purple",
      gradient: "bg-gradient-purple"
    },
    {
      icon: BarChart3,
      title: t.service_career_coaching,
      subtitle: t.service_career_desc,
      category: "Dashboard",
      popular: false,
      color: "teal",
      gradient: "bg-gradient-teal"
    },
    {
      icon: BookOpen,
      title: t.service_team_coaching,
      subtitle: t.service_team_desc,
      category: "Support",
      popular: false,
      color: "orange",
      gradient: "bg-gradient-orange"
    },
    {
      icon: MessageSquare,
      title: t.service_executive_coaching,
      subtitle: t.service_executive_desc,
      category: "Community",
      popular: false,
      color: "pink",
      gradient: "bg-gradient-warm"
    }
  ];

  const compactStats = [
    { number: '5,200+', label: 'Lernende unterstützt', sublabel: 'Erfolgreich vermittelt' },
    { number: '89%', label: 'Erfolgsrate', sublabel: 'Lehrstellen gefunden' },
    { number: '3,800+', label: 'Verfügbare Lehrstellen', sublabel: 'In der Schweiz' }
  ];

  const trustPoints = [
    { 
      icon: Search, 
      label: t.trust_experience, 
      desc: t.trust_experience_desc,
      color: "blue"
    },
    { 
      icon: GraduationCap, 
      label: t.trust_approach, 
      desc: t.trust_approach_desc,
      color: "purple"
    },
    { 
      icon: Target, 
      label: t.trust_results, 
      desc: t.trust_results_desc,
      color: "teal"
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background pt-20 md:pt-16">
      
      {/* Background Elements - More Colorful */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-blue opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-purple opacity-4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-teal opacity-3 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/6 w-48 h-48 bg-gradient-orange opacity-3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-8 md:py-16 text-center">
          
          {/* Government Badge - Consistent with UnifiedCard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <UnifiedCard hover={false} className="inline-block px-6 py-3 min-h-0 border-2 border-accent-blue/30 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">

                <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent font-semibold text-sm">
                  {t.hero_badge}
                </span>
              </div>
            </UnifiedCard>
          </motion.div>

          {/* Headline - Better Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 mb-8"
          >
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight px-4">
              <span className="text-foreground block">
                {t.hero_title_1}
              </span>
              <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent block mt-2">
                {t.hero_title_2}
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            >
              <span className="block mb-3">
                {t.hero_description}
              </span>
              <span className="block text-foreground font-semibold text-base sm:text-lg">
                {t.hero_features}
              </span>
            </motion.p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-2xl mx-auto mb-12 px-4"
          >
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Suche nach Lehrstellen, Berufen oder Unternehmen..."
                  className="pl-12 pr-20 h-14 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 focus:border-primary rounded-2xl text-base shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-cool hover:opacity-90 px-6 py-2 rounded-xl text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Suchen
                </Button>
              </div>
              
              <AnimatePresence>
                {showSuggestions && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-card rounded-2xl shadow-lg border border-border/50 z-50"
                  >
                    <div className="p-2">
                      <div className="text-xs text-muted-foreground px-3 py-2 font-medium">
                        Beliebte Suchbegriffe
                      </div>
                      {filteredSuggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          className="px-3 py-2 hover:bg-secondary/50 cursor-pointer text-sm rounded-xl transition-colors"
                          onClick={() => setSearchQuery(suggestion)}
                        >
                          <Search className="w-4 h-4 inline mr-2 text-muted-foreground" />
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Popular search tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground mr-2">Beliebt:</span>
                {[
                  { name: 'Informatiker', color: 'blue' },
                  { name: 'Kauffrau', color: 'purple' },
                  { name: 'Gesundheit', color: 'teal' },
                  { name: 'Detailhandel', color: 'orange' }
                ].map((tag) => (
                  <Button
                    key={tag.name}
                    variant="outline"
                    size="sm"
                    className={`text-xs px-3 py-1 h-7 rounded-full border-accent-${tag.color}/30 hover:border-accent-${tag.color}/60 hover:text-accent-${tag.color} hover:bg-accent-${tag.color}/5 transition-all duration-300 hover:shadow-md`}
                    onClick={() => setSearchQuery(tag.name)}
                  >
                    {tag.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Cards - Improved Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-5xl mb-12 px-4"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">{t.hero_main_services}</h3>
              <p className="text-sm text-muted-foreground">{t.hero_services_desc}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative cursor-pointer h-full"
                >
                  <UnifiedCard variant="service" className="relative h-full">

                    
                    {/* Icon - Fixed at top with colorful background */}
                    <div className={`w-12 h-12 bg-accent-${service.color}/10 border border-accent-${service.color}/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-${service.color}/15 group-hover:border-accent-${service.color}/30 transition-all duration-300 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-accent-${service.color}/10`}>
                      <service.icon className={`w-6 h-6 text-accent-${service.color}`} />
                    </div>
                    
                    {/* Content - Flexible space */}
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4 className={`font-semibold text-base text-foreground mb-2 group-hover:text-accent-${service.color} transition-colors leading-tight`}>
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {service.subtitle}
                        </p>
                      </div>
                      <div className={`text-xs text-accent-${service.color}/70 font-medium`}>
                        {service.category}
                      </div>
                    </div>
                  </UnifiedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards - Consistent Height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-5xl space-y-8 px-4"
          >

            
            {/* Trust Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustPoints.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  className="group cursor-pointer"
                >
                  <UnifiedCard variant="trust" className="text-center">
                    <div className={`w-6 h-6 bg-accent-${item.color}/10 border border-accent-${item.color}/20 rounded-lg flex items-center justify-center mx-auto mb-1 group-hover:bg-accent-${item.color}/15 group-hover:border-accent-${item.color}/30 transition-all duration-300 group-hover:shadow-md group-hover:shadow-accent-${item.color}/10`}>
                      <item.icon className={`w-3.5 h-3.5 text-accent-${item.color}`} />
                    </div>
                    <div>
                      <div className={`font-medium text-xs text-foreground group-hover:text-accent-${item.color} transition-colors mb-0.5`}>
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground opacity-70">
                        {item.desc}
                      </div>
                    </div>
                  </UnifiedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Subtle Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-1.5"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}