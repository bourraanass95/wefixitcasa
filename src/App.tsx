import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Settings, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  Zap,
  Globe,
  Code,
  Clock,
  Shield,
  Smartphone,
  Wrench,
  Database,
  ArrowRight,
  Search,
  Menu,
  X,
  Star,
  Wifi,
  Printer,
  Key,
  Cloud,
  Briefcase,
  Award,
  Heart,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
  Video
} from 'lucide-react';
import { cn } from './lib/utils';
import { useState, useEffect, ReactNode, FormEvent, ChangeEvent } from 'react';

// --- Global UI Components ---

const Loader = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className={cn("text-insta-gradient", className)}
  >
    <Loader2 size={size} />
  </motion.div>
);

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  onClick,
  isLoading = false,
  disabled,
  type = 'button'
}: { 
  children: ReactNode; 
  className?: string; 
  variant?: 'primary' | 'outline' | 'ghost' | 'success';
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const variants = {
    primary: 'bg-insta-gradient text-white shadow-lg hover:brightness-110 active:scale-95',
    outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
    ghost: 'text-slate-600 hover:bg-slate-100',
    success: 'bg-[#25D366] text-white shadow-lg hover:brightness-110 active:scale-95'
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || disabled}
      className={cn(
        'px-8 py-4 rounded-2xl font-black transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer uppercase tracking-tight disabled:opacity-70 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {isLoading && <Loader className="text-current" size={20} />}
      {children}
    </motion.button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pourquoi', href: '#why' },
    { name: 'Services', href: '#services' },
    { name: 'Méthode', href: '#how' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-white/20' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="bg-insta-gradient p-2 md:p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Settings className="text-white w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            </div>
            <span className="font-black text-lg md:text-2xl tracking-tighter text-slate-900 font-display uppercase italic">
              WEFIXIT<span className="text-insta-gradient not-italic">CASA</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] text-slate-900">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-insta-gradient transition-colors py-2">{link.name}</a>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              className="p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 border-b-4 border-slate-50 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Floating Graphics Component ---
const FloatingGraphics = () => {
  return (
    <div className="relative w-full max-w-2xl h-[450px] md:h-[600px] mx-auto flex items-center justify-center">
      {/* Central Assistance Icon */}
      <motion.div 
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 md:w-56 md:h-56 bg-insta-gradient rounded-[3rem] flex items-center justify-center shadow-[0_40px_80px_rgba(253,29,29,0.4)] z-20 border-4 border-white/20"
      >
        <Wrench size={72} className="text-white md:scale-150 drop-shadow-2xl" />
      </motion.div>

      {/* Floating Card: Home */}
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-4 left-0 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white flex items-center gap-4 z-30"
      >
        <div className="p-4 bg-brand-orange/20 rounded-2xl text-brand-orange">
          <Smartphone size={28} />
        </div>
        <div className="text-left py-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1 leading-none">Support</p>
          <p className="text-md font-black text-slate-800 tracking-tighter leading-none italic uppercase">À DOMICILE</p>
        </div>
      </motion.div>

      {/* Floating Card: Business */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-12 right-0 md:-right-12 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white flex items-center gap-4 z-30"
      >
        <div className="p-4 bg-brand-purple/20 rounded-2xl text-brand-purple">
          <Settings size={28} />
        </div>
        <div className="text-left py-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1 leading-none">Expertise</p>
          <p className="text-md font-black text-slate-800 tracking-tighter leading-none italic uppercase">POUR AGENCES</p>
        </div>
      </motion.div>

      {/* Orbiting Icon: Security */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-20 right-10 md:right-20 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 z-10 text-brand-pink"
      >
        <ShieldCheck size={32} />
      </motion.div>

      {/* Orbiting Icon: Network */}
      <motion.div 
        animate={{ 
          y: [0, 60, 0],
          x: [0, -40, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 md:left-20 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 z-10 text-brand-orange"
      >
        <Globe size={32} />
      </motion.div>

      {/* Small Floating Particles */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/4 right-1/4 w-4 h-4 bg-brand-pink rounded-full blur-sm" />
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-brand-purple rounded-full blur-md" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute top-1/2 left-10 w-3 h-3 bg-brand-yellow rounded-full blur-xs" />

      {/* Background Shapes */}
      <div className="absolute inset-0 bg-insta-gradient opacity-[0.04] rounded-full blur-[120px] -z-10" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-[3px] border-dashed border-slate-100/50 rounded-full -z-10"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-40px] border border-dashed border-slate-100/30 rounded-full -z-10"
      />
    </div>
  );
};

const LegalModal = ({ 
  isOpen, 
  onClose, 
  title, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  content: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{title}</h3>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 font-medium leading-relaxed prose prose-slate">
              {content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
            <div className="p-8 bg-slate-50 text-center">
              <Button onClick={onClose} variant="outline" className="w-full">J'ai compris</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Section Components ---

const servicesData = [
  {
    id: 'formatting',
    icon: Laptop,
    title: "Formatage & Boost PC",
    description: "Réinstallation propre de Windows avec optimisation complète (Kiet9el solution). Stable, rapide et 'nadi'.",
    color: "bg-brand-orange",
    details: [
      "Sauvegarde complète de vos données avant l'opération",
      "Installation de Windows/macOS (dernière version stable)",
      "Optimisation du démarrage et suppression du 'lkhikh'",
      "Installation des logiciels indispensables et drivers",
      "Nettoyage système pour une vitesse maximale"
    ]
  },
  {
    id: 'security_licences',
    icon: ShieldCheck,
    title: "Sécurité & Licences",
    description: "Protection contre les virus, malwares et fourniture de licences Windows & Office 100% authentiques.",
    color: "bg-brand-pink",
    details: [
      "Suppression radicale de virus, malwares et ransomwares",
      "Installation d'Antivirus pro (Kaspersky, Bitdefender, ESET)",
      "Fourniture de clés Windows et Office genuine (à vie)",
      "Mises à jour de sécurité critiques pour votre système",
      "Nettoyage profond et optimisation de la base de registre"
    ]
  },
  {
    id: 'cctv',
    icon: Video,
    title: "Caméras de Surveillance",
    description: "Installation et configuration complète de systèmes de sécurité pour votre domicile ou local pro.",
    color: "bg-brand-purple",
    details: [
      "Pose de caméras IP, WiFi et filaires (Full HD/4K)",
      "Configuration de l'accès distant sur smartphone",
      "Installation d'enregistreurs (NVR/DVR) avec backup",
      "Paramétrage des zones de détection et alertes",
      "Maintenance et dépannage de systèmes existants"
    ]
  },
  {
    id: 'data',
    icon: Database,
    title: "Récupération Data",
    description: "Fichiers perdus ou disque mort ? On fait tout pour sauver vos documents et photos précieux.",
    color: "bg-brand-yellow",
    details: [
      "Récupération après suppression accidentelle",
      "Sauvetage de données sur disque dur externe ou clé USB corrompue",
      "Extraction de fichiers sur PC qui ne démarre plus",
      "Solution de backup automatisée pour le futur",
      "Confidentialité totale de vos documents récupérés"
    ]
  },
  {
    id: 'wifi',
    icon: Wifi,
    title: "Wi-Fi & Réseau",
    description: "Installation et extension de signal. Un Wi-Fi fort partout dans l'agence ou la maison.",
    color: "bg-brand-purple",
    details: [
      "Diagnostic des zones mortes (pas de signal)",
      "Installation de répéteurs ou systèmes Mesh",
      "Optimisation des canaux pour éviter les interférences",
      "Sécurisation de votre réseau Wi-Fi",
      "Configuration de routeurs pro ou fibre"
    ]
  },
  {
    id: 'printer',
    icon: Printer,
    title: "Support Imprimante",
    description: "Configuration réseau, drivers et scanners. On règle les problèmes de bureau qui font mal à la tête.",
    color: "bg-brand-orange",
    details: [
      "Configuration de l'impression sans fil (Wi-Fi)",
      "Installation des drivers scanner et fax",
      "Partage d'imprimante pour toute l'équipe",
      "Résolution des bugs d'impression en file d'attente",
      "Conseils sur le choix du matériel d'impression"
    ]
  },
  {
    id: 'maintenance',
    icon: Briefcase,
    title: "Maintenance Agence",
    description: "Contrat mensuel de support illimité pour PMEs. Tranquillité totale pour vous concentrer sur votre business.",
    color: "bg-brand-yellow",
    details: [
      "Visite de maintenance préventive mensuelle",
      "Support technique prioritaire illimité",
      "Gestion de la sécurité de votre parc informatique",
      "Conseil en achat et évolution technologique",
      "Rapports d'intervention détaillés"
    ]
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: "Cloud & Setup Pro",
    description: "Migration M365/Google + setup complet PC neuf (bloatware removed). Prêt à l'emploi avec sauvegarde Cloud.",
    color: "bg-brand-pink",
    details: [
      "Configuration de OneDrive, Google Drive ou Dropbox",
      "Migration de vos emails vers Gmail Pro ou Outlook",
      "Passage d'un ancien PC vers un PC neuf sans perte",
      "Suppression des logiciels pré-installés inutiles",
      "Formation rapide sur les outils Cloud"
    ]
  },
  {
    id: 'digital',
    icon: Code,
    title: "Web, Mobile & Social",
    description: "Création de sites web, applications mobiles et gestion de réseaux sociaux pour booster votre présence.",
    color: "bg-brand-purple",
    details: [
      "Développement de sites vitrines et E-commerce",
      "Création d'applications mobiles (iOS & Android)",
      "Gestion et animation de vos réseaux sociaux (CM)",
      "Stratégie de publicité (Facebook/Instagram Ads)",
      "Design graphique et identité visuelle"
    ]
  }
];

const ServiceModal = ({ 
  isOpen, 
  onClose, 
  service,
  onWhatsApp,
  isLoading = false
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  service: typeof servicesData[0] | null;
  onWhatsApp: () => void;
  isLoading?: boolean;
}) => {
  if (!service && !isLoading) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl sm:max-w-3xl bg-white rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col"
          >
            {isLoading ? (
              <div className="p-16 flex flex-col items-center justify-center text-center">
                <Loader size={48} className="mb-6 animate-spin text-brand-pink" />
                <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Chargement...</p>
              </div>
            ) : service ? (
              <>
                {/* Modal Header/Icon Area */}
                <div className={cn("flex-shrink-0 h-24 sm:h-28 flex items-center justify-center relative overflow-hidden", service.color)}>
                  {/* Decorative background circle */}
                  <div className="absolute w-64 h-64 bg-white/10 rounded-full -bottom-20 -right-20 blur-3xl opacity-50" />
                  
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <service.icon size={40} className="sm:size-12 text-white drop-shadow-2xl relative z-10" />
                  </motion.div>
                  
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/5 hover:bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Scrollable Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-grow touch-pan-y scrollbar-hide pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 font-display uppercase tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  <div className="h-1 w-12 bg-insta-gradient mb-4 rounded-full" />
                  
                  <p className="text-slate-600 text-sm sm:text-base font-medium mb-6 leading-relaxed italic border-l-4 border-slate-100 pl-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 text-left">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Inclus :</p>
                    {service.details.map((detail, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        key={idx} 
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-brand-pink/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 size={10} className="text-brand-pink" />
                        </div>
                        <span className="text-slate-700 font-bold text-xs sm:text-sm leading-snug">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 sm:p-8 pt-0 bg-white z-10 border-t border-slate-50">
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="success" 
                      className="w-full py-4 sm:py-5 text-base sm:text-lg shadow-lg"
                      onClick={onWhatsApp}
                    >
                      <Smartphone size={18} />
                      WhatsApp Daba
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ icon: Icon, title, description, color, onClick }: { icon: any, title: string, description: string, color: string, onClick?: () => void, key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ 
      y: -15, 
      boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.08)",
      borderColor: "rgba(0,0,0,0.05)"
    }}
    className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50 transition-all group overflow-hidden relative cursor-pointer active:scale-95"
    onClick={onClick}
  >
    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-colors", color)}>
      <Icon size={32} className="text-white" />
    </div>
    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 font-display uppercase tracking-tighter leading-none">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed mb-6 text-base md:text-lg">{description}</p>
    <div className="flex items-center gap-2 text-insta-gradient font-black text-[10px] uppercase tracking-widest sm:opacity-0 sm:group-hover:opacity-100 transition-all transform sm:translate-x-[-10px] sm:group-hover:translate-x-0">
      C'est parti <ArrowRight size={14} className="text-brand-pink" />
    </div>
  </motion.div>
);

// --- Floating WhatsApp Button ---

const FloatingWhatsApp = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: 50 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://wa.me/212620917600', '_blank')}
        className="group bg-[#25D366] text-white p-4 md:px-8 md:py-4 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <MessageSquare size={24} className="md:w-7 md:h-7 relative z-10" />
        <span className="text-sm font-black uppercase tracking-widest relative z-10 hidden md:inline">WhatsApp</span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 scale-110" />
      </motion.button>
    </motion.div>
  );
};

// --- FAQ Component ---

const FAQItem = ({ question, answer }: { question: string; answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex items-center justify-between gap-4 md:gap-6 text-left hover:text-insta-gradient transition-colors group"
      >
        <span className="text-lg md:text-2xl font-black text-slate-900 leading-tight group-hover:pl-2 transition-all duration-300">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors",
            isOpen ? "bg-insta-gradient text-white" : "bg-slate-100 text-slate-900"
          )}
        >
          <ChevronDown size={20} className="md:w-6 md:h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-10 pt-2 text-slate-600 text-base md:text-xl leading-relaxed font-medium">
              <div className="pl-4 md:pl-6 border-l-4 border-insta-gradient/20">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Vous vous déplacez partout ?",
      answer: "Pour l'instant, nous intervenons exclusivement à Casablanca et ses environs proches (Bouskoura, Dar Bouazza, Mohammedia, Nouaceur). Si vous êtes un peu plus loin, contactez-nous sur WhatsApp pour voir si une intervention exceptionnelle est possible."
    },
    {
      question: "Combien de temps dure une intervention ?",
      answer: "Il faut prévoir minimum 30 minutes pour les diagnostics de base. La majorité des pannes sont réglées en 1h à 2h. Si le problème est complexe, cela peut prendre plus de temps, mais nous vous tenons informé en temps réel."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "La confiance d'abord : vous payez une fois la mission accomplie et testée. Nous acceptons le Cash, le virement bancaire instantané ou CIH Mobile."
    },
    {
      question: "Quels types d'appareils réparez-vous ?",
      answer: "Nous intervenons sur tous les appareils informatiques en général : PC fixes, Laptops (PC & Mac), MacBook (Air/Pro) et iMac. Que ce soit pour une réparation matérielle (changement d'écran, clavier, batterie, upgrade SSD/RAM), un problème système (lenteurs Windows/macOS, virus, écran bleu), ou une installation de logiciels et configuration réseau/Wifi."
    },
    {
      question: "Y a-t-il une garantie sur la réparation ?",
      answer: "Absolument. Nous offrons une garantie de satisfaction. Si le même bug réapparaît dans les 7 jours suivant notre passage, nous revenons gratuitement pour régler le problème définitivement."
    },
    {
      question: "Est-ce que mes fichiers sont en sécurité ?",
      answer: "C'est notre priorité n°1. Nous respectons scrupuleusement votre vie privée. Si un formatage est nécessaire, nous effectuons systématiquement une sauvegarde complète de vos documents, photos et dossiers importants avant toute opération."
    },
    {
      question: "Pourquoi 49 DH pour le diagnostic ?",
      answer: "Ces frais couvrent le déplacement et l'expertise technique initiale. La bonne nouvelle : si vous décidez d'effectuer la réparation avec nous, ces 49 DH sont totalement déduits de la facture finale. C'est donc gratuit si on répare !"
    },
    {
      question: "Dois-je me déplacer avec mon matériel ?",
      answer: "Pas du tout. C'est tout le concept de WEFIXITCASA : nous venons à vous. Que vous soyez à la maison, au bureau ou dans un café à Casa, on apporte l'atelier sur place pour vous éviter le trafic et la perte de temps."
    },
    {
      question: "Réparez-vous les smartphones ou tablettes ?",
      answer: "Non, nous avons choisi de nous concentrer exclusivement sur l'informatique (PC, Mac, Serveurs). Cela nous permet d'être les meilleurs dans notre domaine et d'avoir toujours les pièces et outils spécifiques pour vos ordinateurs."
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Le plus simple est d'utiliser le bouton WhatsApp sur le site. Envoyez-nous une courte description ou une photo du problème, et on vous répond en moins de 15 minutes."
    },
    {
      question: "Intervenez-vous aussi le weekend ?",
      answer: "Oui ! Nous intervenons aussi le samedi et le dimanche pour vos urgences avec un supplément fixe de 89 DH."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <span className="bg-slate-200 text-slate-800 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">CENTRE D'AIDE</span>
          <h2 className="text-6xl md:text-9xl font-black font-display tracking-tighter text-slate-900 mb-10 uppercase italic">FAQ</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-base italic max-w-2xl leading-relaxed">
            Tout ce qu'il faut savoir avant de nous faire confiance. <br className="hidden md:block" /> Simple, transparent, sans baratin.
          </p>
        </div>
        
        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-slate-100">
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <p className="text-slate-400 font-bold uppercase text-sm tracking-[0.5em] mb-8 md:mb-10">Besoin d'autre chose ?</p>
          <motion.button
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/212620917600', '_blank')}
            className="group inline-flex items-center gap-6 text-insta-gradient font-black text-3xl md:text-5xl hover:opacity-80 transition-all leading-tight"
          >
            <span>ON DISCUTE SUR WHATSAPP</span>
            <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform hidden md:block" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Component ---

const TestimonialCard = ({ name, role, review, rating, delay }: { name: string, role: string, review: string, rating: number, delay: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow"
  >
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={cn("fill-current", i < rating ? "text-brand-orange" : "text-slate-200")} 
        />
      ))}
    </div>
    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic mb-10 flex-grow">
      "{review}"
    </p>
    <div className="flex items-center gap-4">
      <div>
        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none mb-1">{name}</h4>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </motion.div>
);



const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Yassine B.",
      role: "Client Domicile / Casa",
      review: "Service au top ! Mon PC était mort, il l'a réparé en moins de 1h. Bghit nshkerhom bzaf, efficacité n°1.",
      rating: 5
    },
    {
      name: "Amine El F.",
      role: "Gérant Agence / Maarif",
      review: "Enfin un technicien sérieux à Casablanca. Il s'occupe de tout le parc informatique de mon agence. Allah i3tikom saha.",
      rating: 5
    },
    {
      name: "Sara M.",
      role: "Graphiste / Bouskoura",
      review: "Diagnostic rapide et honnête. J'ai payé que 49 DH pour savoir que mon chargeur était juste grillé. Merci Nexus !",
      rating: 5
    },
    {
      name: "Mehdi Z.",
      role: "Étudiant / Ain Sbaa",
      review: "Ma3endi mangoul, efficacité o rapidité. MacBook msellek daba o hnayt men l'bugs. Je recommande vivement !",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <span className="bg-insta-gradient text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg">TÉMOIGNAGES</span>
          <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter text-slate-900 mb-10 uppercase italic">
            NOS CLIENTS <span className="text-insta-gradient">HENYIN.</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-base italic max-w-2xl leading-relaxed">
            La meilleure publicité, c'est un PC qui remarche. <br className="hidden md:block" /> Découvrez ce qu'ils disent de wefixitcasa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  const privacyPolicy = `Nous accordons une importance capitale à la protection de vos données personnelles. Chez WEFIXITCASA, nous ne collectons que les informations strictement nécessaires pour vous fournir nos services de dépannage informatique (nom, téléphone, adresse).

Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales. Elles sont utilisées uniquement pour nos interventions techniques et pour assurer le suivi de votre satisfaction.

En utilisant nos services, vous consentez à la collecte et à l'utilisation sélective de vos informations conformément à cette politique. Nous utilisons des protocoles de sécurité avancés pour protéger vos données contre tout accès non autorisé lors de leur stockage temporaire.`;

  const termsOfService = `Les présentes conditions régissent l'utilisation des services de WEFIXITCASA. En faisant appel à nos techniciens, vous acceptez sans réserve les points suivants :

1. Diagnostic : Un frais fixe de 49 DH est applicable pour tout déplacement et diagnostic à Casablanca. Ces frais sont déduits du montant total si vous choisissez de procéder à la réparation avec nous.

2. Garantie : Nous offrons une garantie de satisfaction de 7 jours sur la main d'œuvre de nos interventions logicielles. Pour le matériel, la garantie constructeur s'applique.

3. Responsabilité : Bien que nous prenions toutes les précautions nécessaires, le client reste responsable de la sauvegarde de ses données critiques avant toute intervention informatique. WEFIXITCASA ne pourra être tenu responsable des pertes de données si aucune sauvegarde n'a été effectuée préalablement.

4. Paiement : Le règlement s'effectue dès la fin de l'intervention par cash, virement instantané ou application mobile bancaire.`;

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({
      isOpen: true,
      title: type === 'privacy' ? 'Privacy Policy' : 'Terms of Service',
      content: type === 'privacy' ? privacyPolicy : termsOfService
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/212620917600?text=Bonjour, 3endi mochkil f pc dyali, bghit support technical svp.', '_blank');
  };

  const openService = (service: typeof servicesData[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setIsServiceLoading(true);
    
    // Simulate API fetch delay
    setTimeout(() => {
      setIsServiceLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden selection:bg-brand-pink selection:text-white">
      <Navbar />
      <FloatingWhatsApp />
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService}
        onWhatsApp={handleWhatsApp}
        isLoading={isServiceLoading}
      />
      
      <LegalModal 
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title={legalModal.title}
        content={legalModal.content}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-24 md:pt-48 md:pb-48 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-insta-gradient opacity-[0.06] rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md shadow-2xl shadow-slate-200/50 px-8 py-3.5 rounded-full mb-12 border border-white mx-auto">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-pink"></span>
              </span>
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-800">CASABLANCA & ENVIRONS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.95] md:leading-[0.9] mb-12 font-display uppercase tracking-[-0.04em]">
              MOCHKIL <span className="text-insta-gradient">PC ?</span><br className="hidden sm:block" />
              <span className="text-slate-900">À LA MAISON OU<br className="hidden sm:block" />EN AGENCE.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-500 mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight px-4">
              Diagnostic et dépannage ultra-rapide là où vous êtes. Pas de blabla technique, juste des résultats et un service 100% Hania.
            </p>
            
            <div className="flex justify-center items-center mb-20 md:mb-32">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="group inline-flex items-center gap-4 md:gap-6 text-insta-gradient font-black text-3xl md:text-[5rem] lg:text-[7rem] hover:opacity-80 transition-all leading-tight uppercase italic tracking-tighter"
              >
                <span>WhatsApp Daba</span>
                <ArrowRight className="w-8 h-8 md:w-20 md:h-20 group-hover:translate-x-3 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
          
          <div className="mt-20">
             <FloatingGraphics />
          </div>

          {/* Stats Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 md:mt-32 flex flex-wrap justify-center gap-8 md:gap-24 px-4"
          >
            <div className="group cursor-pointer text-center md:text-left">
              <p className="text-3xl md:text-6xl font-black text-insta-gradient leading-none mb-2">49 DH</p>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Diagnostic & Déplacement</p>
            </div>
            <div className="group cursor-pointer text-center md:text-left">
              <p className="text-3xl md:text-6xl font-black text-insta-gradient leading-none mb-2">2H</p>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Intervention Max</p>
            </div>
            <div className="group cursor-pointer text-center md:text-left">
              <p className="text-3xl md:text-6xl font-black text-insta-gradient leading-none mb-2">100%</p>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Hania / Hania</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* USPs Section */}
      <section id="why" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-insta-gradient block"></span>
              <p className="text-insta-gradient font-black uppercase text-xs tracking-widest leading-none">L'Engagement Qualité</p>
              <span className="w-12 h-[2px] bg-insta-gradient block"></span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] font-display uppercase tracking-tighter">
              POURQUOI <span className="text-insta-gradient italic px-2">NOUS</span> <br />
              CHOISIR ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise Hub",
                desc: "Des techniciens certifiés qui connaissent chaque composant de votre machine.",
                color: "text-brand-purple",
                bg: "bg-brand-purple/5"
              },
              {
                icon: Zap,
                title: "Ultra-Rapide",
                desc: "Diagnostic immédiat et réparation en moins de 2H pour la majorité des pannes.",
                color: "text-brand-pink",
                bg: "bg-brand-pink/5"
              },
              {
                icon: Heart,
                title: "100% Satisfait",
                desc: "Notre mission : votre tranquillité. Vous ne payez que si le problème est résolu.",
                color: "text-brand-orange",
                bg: "bg-brand-orange/5"
              },
              {
                icon: ShieldCheck,
                title: "Garantie Totale",
                desc: "Interventions garanties et pièces certifiées pour une durabilité maximale.",
                color: "text-brand-yellow",
                bg: "bg-brand-yellow/5"
              }
            ].map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-slate-50 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500", usp.bg, usp.color)}>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  >
                    <usp.icon size={32} strokeWidth={2.5} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 italic font-display">{usp.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-purple opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-orange opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="max-w-3xl">
              <h2 className="text-insta-gradient font-black text-xs uppercase tracking-[0.4em] mb-6">// KHEDMAT DYALNA</h2>
              <h3 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-[0.9] text-slate-900 mb-8">
                SUPPORT IT <span className="text-insta-gradient">COMPLET.</span>
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-xl italic border-t border-slate-100 pt-8 mt-4">
              L'informatique bla sdaâ (sans soucis).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id}
                color={service.color}
                icon={service.icon} 
                title={service.title} 
                description={service.description}
                onClick={() => openService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="how" className="py-16 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-insta-gradient font-black text-xs uppercase tracking-[0.4em] mb-6">// NOTRE MÉTHODE</h2>
            <h3 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter text-slate-900 leading-none">
              SIMPLE COMME <span className="text-insta-gradient">BONJOUR.</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                n: '1', 
                title: 'Sifet Message', 
                desc: 'Envoyez un message WhatsApp avec votre problème. Pas de blabla technique, expliquez simplement ce qui ne va pas.',
                icon: MessageSquare
              },
              { 
                n: '2', 
                title: 'On fait le Diagnostic', 
                desc: 'On fait le diagnostic complet pour identifier précisément ce qui ne va pas avec votre matériel.',
                icon: Search
              },
              { 
                n: '3', 
                title: 'Réparation & Hania', 
                desc: 'On répare tout. Vous testez, si c\'est ok, vous payez. Pas de frais cachés, c\'est 100% honnête.',
                icon: Wrench
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-insta-gradient group-hover:text-white transition-all duration-500">
                  <step.icon size={32} className="text-brand-pink group-hover:text-white" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl md:text-8xl font-black text-slate-200 group-hover:text-insta-gradient transition-colors uppercase italic font-display leading-none">{step.n}</span>
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">{step.title}</h4>
                </div>
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-insta-gradient font-black text-xs uppercase tracking-[0.4em] mb-6">// TARIFS</h2>
            <h3 className="text-6xl md:text-8xl font-black font-display uppercase tracking-tighter text-slate-900 leading-none">
              CLAIR & <span className="text-insta-gradient">HONNÊTE.</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col items-center text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">À DOMICILE / SUR SITE</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-8xl font-black font-display tracking-tighter">49</span>
                <span className="text-3xl font-bold uppercase text-slate-400">DH</span>
              </div>
              <p className="text-slate-600 font-bold mb-10 leading-relaxed uppercase text-base tracking-wider italic">
                Les 49 DH couvrent le déplacement partout à Casablanca et le diagnostic complet de votre machine. 
                <br />
                <span className="text-sm opacity-70 block mt-2 text-brand-pink underline tracking-tight italic lowercase">
                  * Si vous réparez avec nous, les 49 DH sont OFFERTS (déduits de la facture finale).
                </span>
              </p>
              <Button variant="outline" className="w-full rounded-3xl py-6 text-xl" onClick={handleWhatsApp}>Réserver</Button>
            </div>

            <div className="p-12 bg-insta-gradient rounded-[4rem] shadow-[0_30px_70px_rgba(253,29,29,0.25)] flex flex-col items-center text-center text-white lg:scale-110 relative z-10 overflow-hidden">
              <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-4">RÉPARATION COMPLÈTE</p>
              <span className="bg-white text-brand-pink px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] mb-4">À PARTIR DE</span>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-8xl md:text-9xl font-black font-display tracking-tighter">299</span>
                <span className="text-3xl font-bold uppercase text-white/50">DH</span>
              </div>
              <div className="mb-10 space-y-2">
                <p className="text-white font-bold leading-none uppercase text-base tracking-wider italic">DIAGNOSTIC INCLUS.</p>
                <p className="text-xs text-white/80 font-medium uppercase tracking-tight">Le prix final dépend de la complexité de la panne.</p>
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">(Main d'œuvre uniquement — Hors matériel)</p>
              </div>
              <Button variant="success" className="w-full bg-white text-slate-900 shadow-xl rounded-3xl py-6 text-xl font-black" onClick={handleWhatsApp}>C'EST PARTI</Button>
            </div>

            <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col items-center text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">SOLUTIONS PRO & DIGITAL</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-black font-display tracking-tighter uppercase leading-none italic">DEVIS</span>
              </div>
              <p className="text-slate-600 font-bold mb-10 leading-relaxed uppercase text-sm tracking-widest">
                Web/App Development, Social Media Branding <br />
                & Maintenance Informatique B2B.
              </p>
              <Button variant="outline" className="w-full rounded-3xl py-6 text-xl" onClick={handleWhatsApp}>DEMANDER UN DEVIS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-16 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative cursor-pointer group" onClick={handleWhatsApp}>
            {/* Background floating glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 blur-[100px] pointer-events-none transition-all duration-1000 group-hover:opacity-40">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-yellow rounded-full" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-orange rounded-full" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-16">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Disponible daba</span>
              </div>

              <h2 className="text-5xl md:text-[10rem] lg:text-[12rem] font-black font-display text-slate-900 leading-[0.8] mb-16 md:mb-20 tracking-tighter uppercase select-none">
                <span className="text-[0.4em] md:text-[0.3em] block mb-6 md:mb-8 text-slate-400 italic tracking-[0.3em] font-sans">SALINA</span>
                <span className="text-insta-gradient drop-shadow-2xl">MÂA LES BUGS.</span>
              </h2>
            </motion.div>

            {/* Stylized Text CTA (Consistent with Hero) */}
            <div className="flex justify-center mt-12 mb-20">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="group inline-flex items-center gap-4 md:gap-6 text-slate-900 font-black text-3xl md:text-[5rem] lg:text-[7rem] hover:opacity-80 transition-all leading-tight uppercase italic tracking-tighter"
              >
                <span>WhatsApp Daba</span>
                <ArrowRight className="w-8 h-8 md:w-20 md:h-20 group-hover:translate-x-3 transition-transform text-insta-gradient" />
              </motion.button>            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section with Loading State */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-insta-gradient font-black text-xs uppercase tracking-[0.4em] mb-6">// CONTACT</h2>
              <h3 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter text-slate-900 leading-none mb-8">
                UN MESSAGE <br /> <span className="text-insta-gradient">RETOUR RAPIDE.</span>
              </h3>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md mb-12">
                Besoin d'un devis précis ou d'une question particulière ? Notre équipe vous répond en moins de 15 minutes.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Téléphone", val: "+212 620 917 600" },
                  { icon: Mail, label: "Email", val: "wefixitcasa@gmail.com" },
                  { icon: MapPin, label: "Localisation", val: "Casablanca, Maroc" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-pink">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 items-center justify-center text-center">
              <div className="space-y-4 w-full">
                <Button 
                  type="button"
                  className="w-full py-8 text-2xl flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] border-none shadow-lg shadow-green-200"
                  onClick={() => window.open('https://wa.me/212620917600', '_blank')}
                >
                  <MessageSquare size={32} />
                  Contact WhatsApp
                </Button>

                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full py-8 text-2xl flex items-center justify-center gap-3 border-2 border-slate-200 hover:bg-slate-50 text-slate-900"
                  onClick={() => {
                    const email = 'wefixitcasa@gmail.com';
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    if (isMobile) {
                      window.location.href = `mailto:${email}`;
                    } else {
                      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
                    }
                  }}
                >
                  <Mail size={32} />
                  Envoyer un Email
                </Button>
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4 italic">
                Réponse garantie en moins de 15 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Darija Final CTA */}
      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer inline-block"
            onClick={handleWhatsApp}
          >
            <h3 className="text-4xl xs:text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-slate-900 leading-[0.85] italic mb-6 transition-transform group-hover:scale-105 duration-500">
              KANTSEN<span className="text-insta-gradient">AWKOM !</span>
            </h3>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <span className="hidden sm:block w-8 md:w-12 h-[2px] bg-insta-gradient"></span>
              <p className="text-slate-400 font-black uppercase text-[10px] xs:text-xs md:text-xl tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
                marhba bikom f ay weqt
              </p>
              <span className="hidden sm:block w-8 md:w-12 h-[2px] bg-insta-gradient"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 md:py-32 bg-white border-t border-slate-100 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-insta-gradient opacity-[0.03] rounded-full blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-insta-gradient p-2.5 rounded-xl shadow-lg">
                  <Settings className="text-white w-6 h-6 animate-pulse" />
                </div>
                <span className="font-black text-2xl tracking-tighter text-slate-900 font-display uppercase italic">
                  WEFIXIT<span className="text-insta-gradient not-italic">CASA</span>
                </span>
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs md:text-sm tracking-widest leading-relaxed max-w-sm mb-12">
                Expert en réparation informatique à Casablanca. wefixitcasa vous offre un support technique ultra-rapide et transparent. Marhba bikom.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Instagram, color: "hover:bg-insta-gradient", href: "https://www.instagram.com/wefixitcasa/", external: true },
                  { icon: Facebook, color: "hover:bg-[#1877F2]", href: "https://www.facebook.com/share/1HV2XcaEp5/?mibextid=wwXIfr", external: true },
                  { icon: MessageSquare, color: "hover:bg-[#25D366]", href: "https://wa.me/212620917600", isWhatsApp: true, external: true },
                  { icon: Globe, color: "hover:bg-insta-gradient", href: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }} 
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    onClick={social.isWhatsApp ? (e) => { e.preventDefault(); window.open(social.href, '_blank'); } : undefined}
                    className={cn(
                      "w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-100 cursor-pointer",
                      social.color
                    )}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-12 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-insta-gradient"></span> Plan du site
              </h4>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  { name: 'Pourquoi', href: '#why' },
                  { name: 'Services', href: '#services' },
                  { name: 'Méthode', href: '#how' },
                  { name: 'Tarifs', href: '#pricing' },
                  { name: 'FAQ', href: '#faq' },
                  { name: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-sm font-black text-slate-500 uppercase tracking-widest hover:text-insta-gradient transition-colors flex items-center gap-3 group"
                    >
                      <span className="w-0 h-px bg-insta-gradient group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-12 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-insta-gradient"></span> Contact Direct
              </h4>
              <div className="space-y-8">
                <a href="mailto:wefixitcasa@gmail.com" className="group block">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-insta-gradient transition-colors">EMAIL SUPPORT</p>
                  <p className="text-sm font-bold text-slate-900 tracking-widest uppercase">wefixitcasa@gmail.com</p>
                </a>
                <a href="tel:+212620917600" className="group block">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-insta-gradient transition-colors">CALL CENTER</p>
                  <p className="text-sm font-bold text-slate-900 tracking-widest uppercase">+212 620 917 600</p>
                </a>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">LOCALISATION</p>
                  <p className="text-sm font-bold text-slate-900 tracking-widest uppercase">Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 md:mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
              © 2025 WEFIXITCASA — MADE WITH <span className="text-insta-gradient">❤</span> IN CASA
            </p>
            <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <button onClick={() => openLegal('privacy')} className="hover:text-slate-900 transition-colors cursor-pointer">Privacy Policy</button>
              <button onClick={() => openLegal('terms')} className="hover:text-slate-900 transition-colors cursor-pointer">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
