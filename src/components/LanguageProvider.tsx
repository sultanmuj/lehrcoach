import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de';

interface Translations {
  // Loading
  loading_title: string;
  loading_subtitle: string;
  
  // Header
  search_placeholder: string;
  login: string;
  home: string;
  services: string;
  news: string;
  data: string;
  info: string;
  coaching: string;
  about: string;
  contact: string;
  blog: string;
  
  // Hero Section
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_description: string;
  hero_features: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_main_services: string;
  hero_services_desc: string;
  
  // Service Categories
  service_life_coaching: string;
  service_life_desc: string;
  service_business_coaching: string;
  service_business_desc: string;
  service_career_coaching: string;
  service_career_desc: string;
  service_team_coaching: string;
  service_team_desc: string;
  service_executive_coaching: string;
  service_executive_desc: string;
  
  // Trust Points
  trust_experience: string;
  trust_experience_desc: string;
  trust_approach: string;
  trust_approach_desc: string;
  trust_results: string;
  trust_results_desc: string;
  
  // Quick Access
  quick_access_badge: string;
  quick_access_title: string;
  quick_access_desc: string;
  start_now: string;
  estimated_time: string;
  completed_today: string;
  sessions_completed: string;
  average_response: string;
  satisfaction_rate: string;
  coaching_methods: string;
  
  // Services by Persona
  persona_title: string;
  persona_desc: string;
  persona_individual: string;
  persona_leader: string;
  persona_team: string;
  persona_entrepreneur: string;
  
  // Individual Services
  individual_life_goals: string;
  individual_career_change: string;
  individual_work_life: string;
  individual_confidence: string;
  
  // Leader Services
  leader_skills: string;
  leader_communication: string;
  leader_strategy: string;
  leader_team_building: string;
  
  // Team Services
  team_dynamics: string;
  team_performance: string;
  team_conflict: string;
  team_culture: string;
  
  // Entrepreneur Services
  entrepreneur_startup: string;
  entrepreneur_scaling: string;
  entrepreneur_strategy: string;
  entrepreneur_mindset: string;
  
  // Blog Section
  blog_title: string;
  blog_desc: string;
  articles_tab: string;
  insights_tab: string;
  
  // News Section
  news_tab: string;
  announcements_tab: string;
  news_scholarship_title: string;
  news_scholarship_desc: string;
  news_app_title: string;
  news_app_desc: string;
  news_festival_title: string;
  news_festival_desc: string;
  announce_holiday_title: string;
  announce_holiday_desc: string;
  announce_infrastructure_title: string;
  announce_infrastructure_desc: string;
  announce_health_title: string;
  announce_health_desc: string;
  category_education: string;
  category_technology: string;
  category_culture: string;
  
  // Sample Articles
  article_leadership_title: string;
  article_leadership_desc: string;
  article_goals_title: string;
  article_goals_desc: string;
  article_productivity_title: string;
  article_productivity_desc: string;
  
  // Sample Insights
  insight_trends_title: string;
  insight_trends_desc: string;
  insight_success_title: string;
  insight_success_desc: string;
  insight_mindset_title: string;
  insight_mindset_desc: string;
  
  // Events Section
  events_title: string;
  events_desc: string;
  view_all_events: string;
  event_workshop_title: string;
  event_webinar_title: string;
  event_masterclass_title: string;
  
  // Event Types
  workshop_type: string;
  webinar_type: string;
  masterclass_type: string;
  
  // Event Participants
  beginners_participants: string;
  professionals_participants: string;
  leaders_participants: string;
  
  // About Section
  about_badge: string;
  about_title_1: string;
  about_title_2: string;
  about_desc: string;
  about_features: string;
  
  // About Widgets
  experience_report: string;
  experience_desc: string;
  methodology: string;
  methodology_desc: string;
  success_stories: string;
  success_stories_desc: string;
  certifications: string;
  certifications_desc: string;
  
  // About Labels
  years_experience: string;
  coaching_hours: string;
  clients_served: string;
  success_rate: string;
  satisfaction: string;
  
  // Coach Profile
  coach_title: string;
  coach_desc: string;
  clients_coached: string;
  certifications_earned: string;
  satisfaction_score: string;
  view_profile: string;
  
  // Testimonials
  testimonials_title: string;
  testimonials_desc: string;
  testimonials_cta_1: string;
  testimonials_cta_2: string;
  testimonials_question: string;
  
  // Priority and Category Labels
  priority_important: string;
  priority_info: string;
  category_leadership: string;
  category_personal: string;
  category_business: string;
  popular_label: string;
  
  // Footer Accessibility
  accessibility: string;
  text_size: string;
  display_mode: string;
  light: string;
  dark: string;
  language: string;
  disability_support: string;
  access_guide: string;
  
  // Footer Links
  contact_us: string;
  coaching_services: string;
  about_coach: string;
  resources: string;
  social_media: string;
  privacy_policy: string;
  terms_conditions: string;
  sitemap: string;
  copyright: string;
}

const translations: Record<Language, Translations> = {
  de: {
    // Loading
    loading_title: "LehrCoach.ch",
    loading_subtitle: "Die Zukunft der Lehrstellensuche - Ihr Weg zum Traumjob beginnt hier...",
    
    // Header
    search_placeholder: "Lehrstellen suchen...",
    login: "Anmelden",
    home: "Startseite",
    services: "Plattform",
    news: "Ressourcen",
    data: "Dashboard",
    info: "Über uns",
    coaching: "Lehrstellensuche",
    about: "Plattform",
    contact: "Kontakt",
    blog: "Ressourcen",
    
    // Hero Section
    hero_badge: "Die revolutionäre Lehrstellenplattform für die Schweiz",
    hero_title_1: "Finden Sie Ihre",
    hero_title_2: "Traumlehrstelle",
    hero_description: "KI-gestützte Plattform für die erfolgreiche Lehrstellensuche mit Begleitung während der gesamten Lehrzeit",
    hero_features: "Zentralisiert • KI-gestützt • Faire Bewertungen",
    hero_cta_primary: "Lehrstellensuche starten",
    hero_cta_secondary: "Plattform entdecken",
    hero_main_services: "Plattform-Features",
    hero_services_desc: "Alles was Sie für eine erfolgreiche Lehrstellensuche brauchen",
    
    // Service Categories
    service_life_coaching: "Lehrstellensuche",
    service_life_desc: "Intelligente Suche, versteckte Stellen",
    service_business_coaching: "Bewerbungscoach",
    service_business_desc: "KI-gestützte Dokumentenprüfung",
    service_career_coaching: "Dashboard",
    service_career_desc: "Übersicht für Lehrpersonen & Coaches",
    service_team_coaching: "Lehrbegleitung",
    service_team_desc: "Support während der Lehrzeit",
    service_executive_coaching: "Mentoring",
    service_executive_desc: "Peer-to-Peer Unterstützung",
    
    // Trust Points
    trust_experience: "Zentralisierte Plattform",
    trust_experience_desc: "Alle Lehrstellen an einem Ort",
    trust_approach: "KI-gestützter Coach",
    trust_approach_desc: "Personalisierte Unterstützung",
    trust_results: "Faire Bewertungen",
    trust_results_desc: "Qualität vor Werbebudget",
    
    // Quick Access
    quick_access_badge: "Plattform-Features",
    quick_access_title: "Schneller Zugang zur Lehrstellensuche",
    quick_access_desc: "Nutzen Sie unsere innovativen Tools für eine erfolgreiche Lehrstellensuche und Lehrbegleitung",
    start_now: "Jetzt starten",
    estimated_time: "Suchzeit:",
    completed_today: "heute gefunden",
    sessions_completed: "Lehrstellen vermittelt",
    average_response: "Durchschnittliche Bewerbungszeit",
    satisfaction_rate: "Erfolgsrate bei Lehrstellensuche",
    coaching_methods: "KI-Tools",
    
    // Services by Persona
    persona_title: "Für jeden das Richtige",
    persona_desc: "Maßgeschneiderte Unterstützung für alle Beteiligten in der Lehrstellensuche und Berufsbildung",
    persona_individual: "Lernende",
    persona_leader: "Lehrpersonen", 
    persona_team: "Lehrbetriebe",
    persona_entrepreneur: "Berufsberater",
    persona_student: "Lernende",
    persona_family: "Lehrpersonen",
    persona_elderly: "Lehrbetriebe", 
    persona_business: "Berufsberater",
    
    // Individual Services
    individual_life_goals: "Lehrstellensuche starten",
    individual_career_change: "Bewerbungsunterlagen erstellen",
    individual_work_life: "Schnupperlehren organisieren",
    individual_confidence: "Karrierealternativen finden",
    
    // Leader Services
    leader_skills: "Klassenübersicht Dashboard",
    leader_communication: "Schüler-Fortschritt verfolgen",
    leader_strategy: "Gezielte Unterstützung bieten",
    leader_team_building: "Coaching-Gespräche vorbereiten",
    
    // Team Services
    team_dynamics: "Lernende rekrutieren",
    team_performance: "Ausbildungsqualität steigern",
    team_conflict: "Digitale Lehrbegleitung",
    team_culture: "Bewertungssystem nutzen",
    
    // Entrepreneur Services
    entrepreneur_startup: "Externe Beratung einbinden",
    entrepreneur_scaling: "Berufswahl unterstützen",
    entrepreneur_strategy: "Schüler vernetzen",
    entrepreneur_mindset: "Karrierewege aufzeigen",
    
    // Student (Lernende) Services
    student_domicile: "Lehrstellensuche starten",
    student_legalization: "Bewerbungsunterlagen erstellen",
    student_poor_certificate: "Schnupperlehren buchen",
    student_scholarship: "Karrierealternativen erkunden",
    
    // Family (Lehrpersonen) Services  
    family_birth_cert: "Klassenübersicht Dashboard",
    family_card: "Schülerfortschritt verfolgen",
    family_marriage: "Coaching-Gespräche planen",
    family_health: "Unterstützung koordinieren",
    
    // Elderly (Lehrbetriebe) Services
    elderly_social_aid: "Lernende rekrutieren",
    elderly_free_health: "Ausbildungsqualität bewerten",
    elderly_active_program: "Lehrbegleitung nutzen",
    elderly_consultation: "Digitale Tools verwenden",
    
    // Business (Berufsberater) Services
    business_siup_tdp: "Externe Beratung einbinden",
    business_permit: "Berufswahl unterstützen", 
    business_ads_permit: "Schülerprofile einsehen",
    business_tax: "Karrierewege empfehlen",
    
    // Blog Section
    blog_title: "Ressourcen für die Lehrstellensuche",
    blog_desc: "Hilfreiche Artikel, Tipps und Erfolgsgeschichten rund um die Berufswahl und Lehrstellensuche",
    articles_tab: "📚 Ratgeber",
    insights_tab: "🎯 Erfolgsgeschichten",
    
    // News Section
    news_tab: "📰 Neuigkeiten",
    announcements_tab: "📢 Ankündigungen",
    news_scholarship_title: "Neue Lehrstellenangebote im Bereich Gesundheitswesen",
    news_scholarship_desc: "Über 150 neue Ausbildungsplätze wurden in Schweizer Spitälern und Gesundheitszentren ausgeschrieben...",
    news_app_title: "LehrCoach.ch erweitert KI-Features für bessere Bewerbungsunterstützung",
    news_app_desc: "Die Plattform führt neue intelligente Tools zur Optimierung von Bewerbungsunterlagen ein...",
    news_festival_title: "SwissSkills 2025: Berufe-Festival in Bern angekündigt",
    news_festival_desc: "Das größte Berufsbildungs-Event der Schweiz findet vom 15.-17. September in Bern statt...",
    announce_holiday_title: "Wichtig: Bewerbungsfristen für Lehrbeginn 2026 beachten",
    announce_holiday_desc: "Viele Unternehmen schließen ihre Bewerbungsverfahren bereits im März. Jetzt bewerben!",
    announce_infrastructure_title: "Neue Partnerschaften mit Schweizer Grossunternehmen",
    announce_infrastructure_desc: "LehrCoach.ch erweitert das Netzwerk um 50 neue Ausbildungsbetriebe...",
    announce_health_title: "Digitale Berufsberatung: Neue Online-Sprechstunden verfügbar",
    announce_health_desc: "Ab sofort bieten wir täglich von 14-16 Uhr kostenlose Online-Beratungsgespräche an...",
    category_education: "Bildung",
    category_technology: "Technologie",
    category_culture: "Events",
    
    // Sample Articles
    article_leadership_title: "So schreibst du eine überzeugende Bewerbung für deine Traumlehrstelle",
    article_leadership_desc: "Tipps und Tricks für ein perfektes Motivationsschreiben und einen professionellen Lebenslauf...",
    article_goals_title: "Schnupperlehre erfolgreich absolvieren: Der ultimative Guide",
    article_goals_desc: "Wie du das Beste aus deiner Schnupperlehre herausholst und einen bleibenden Eindruck hinterlässt...",
    article_productivity_title: "Plan B und C: Alternativen zu deinem Wunschberuf finden",
    article_productivity_desc: "Strategien zur Erkundung verwandter Berufsfelder und Backup-Optionen für die Lehrstellensuche...",
    
    // Sample Insights
    insight_trends_title: "Digitale Transformation in der Berufsbildung: Was 2025 wichtig wird",
    insight_trends_desc: "Wie neue Technologien die Lehrstellensuche und Ausbildung revolutionieren...",
    insight_success_title: "Von der Absage zum Traumjob: Wie Lisa ihre Lehrstelle als KV-Lernende fand",
    insight_success_desc: "Eine inspirierende Geschichte über Durchhaltevermögen und die richtige Strategie...",
    insight_mindset_title: "Mentoring in der Lehre: Wie ältere Lernende jüngeren helfen können",
    insight_mindset_desc: "Die Kraft des Peer-to-Peer Lernens in der Berufsausbildung...",
    
    // Events Section
    events_title: "Workshops & Infoveranstaltungen",
    events_desc: "Besuchen Sie unsere Veranstaltungen für Lernende, Lehrpersonen und Ausbildungsverantwortliche",
    view_all_events: "Alle Events anzeigen",
    event_workshop_title: "Workshop: Erfolgreich bewerben mit KI-Unterstützung",
    event_webinar_title: "Webinar: Die Lehrstellensuche 2025 - Trends und Tipps",
    event_masterclass_title: "Infoveranstaltung: Digitale Tools für Lehrpersonen",
    
    // Event Types
    workshop_type: "Workshop",
    webinar_type: "Webinar",
    masterclass_type: "Infoveranstaltung",
    
    // Event Participants
    beginners_participants: "Schüler & Eltern",
    professionals_participants: "Lehrpersonen & Coaches",
    leaders_participants: "Ausbildungsverantwortliche",
    
    // About Section
    about_badge: "Über LehrCoach.ch",
    about_title_1: "Die Zukunft der",
    about_title_2: "Lehrstellensuche",
    about_desc: "Transparenz, Innovation und Erfolg - unsere Mission für die Schweizer Berufsbildung",
    about_features: "Innovativ • Vernetzt • Zukunftsorientiert",
    
    // About Widgets
    experience_report: "Plattform-Vision",
    experience_desc: "Revolutionäre Lehrstellensuche",
    methodology: "KI-Technologie",
    methodology_desc: "Intelligente Matching-Algorithmen",
    success_stories: "Erfolgsgeschichten",
    success_stories_desc: "Vermittelte Lehrstellen",
    certifications: "Partnerschaften",
    certifications_desc: "Bildungsinstitutionen & Unternehmen",
    
    // About Labels
    years_experience: "Lernende unterstützt",
    coaching_hours: "Lehrstellen vermittelt",
    clients_served: "Partner-Unternehmen",
    success_rate: "Erfolgsrate",
    satisfaction: "Zufriedenheit",
    
    // Coach Profile
    coach_title: "Unser KI-gestütztes System",
    coach_desc: "Entdecken Sie, wie unsere Plattform Ihnen bei der Lehrstellensuche und -begleitung hilft",
    clients_coached: "Unterstützte Lernende",
    certifications_earned: "Verfügbare Tools",
    satisfaction_score: "Plattform-Rating",
    view_profile: "Mehr erfahren",
    
    // Testimonials
    testimonials_title: "Erfolgsgeschichten von Lernenden und Lehrpersonen",
    testimonials_desc: "Erfahren Sie, wie unsere Plattform bereits vielen Jugendlichen zu ihrer Traumlehrstelle verholfen hat",
    testimonials_cta_1: "Erfahrung teilen",
    testimonials_cta_2: "Erfolgsgeschichte einreichen",
    testimonials_question: "Haben Sie Ihre Lehrstelle über unsere Plattform gefunden?",
    
    // Priority and Category Labels
    priority_important: "Wichtig",
    priority_info: "Info",
    category_leadership: "Lehrperson",
    category_personal: "Lernende",
    category_business: "Unternehmen",
    popular_label: "Beliebt",
    
    // Footer Accessibility
    accessibility: "Barrierefreiheit",
    text_size: "Schriftgröße",
    display_mode: "Anzeigemodus",
    light: "Hell",
    dark: "Dunkel",
    language: "Sprache",
    disability_support: "Barrierefreie Unterstützung",
    access_guide: "Zugänglichkeitsleitfaden",
    
    // Footer Links
    contact_us: "Kontakt",
    coaching_services: "Plattform-Features",
    about_coach: "Über die Plattform",
    resources: "Ressourcen",
    social_media: "Social Media",
    privacy_policy: "Datenschutz",
    terms_conditions: "AGB",
    sitemap: "Sitemap",
    copyright: "2025 LehrCoach.ch. Die Zukunft der Lehrstellensuche."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Default to German
      setLanguage('de');
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('language', language);
    
    // Set document language
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}