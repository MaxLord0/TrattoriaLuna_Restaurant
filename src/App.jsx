import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Phone, Mail, Clock, Star, UtensilsCrossed, 
  Leaf, Wine 
} from 'lucide-react';

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const waLink = 'https://wa.me/393331234567?text=Ciao%2C%20vorrei%20prenotare%20un%20tavolo%20alla%20Trattoria%20Luna';

const featuredDishes = [
  {
    name: 'Tagliatelle al Ragù',
    description: 'Pasta fresca con ragù tradizionale cotto lentamente, secondo la ricetta della nonna.',
    price: '€14',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=80',
    tag: 'Il Classico'
  },
  {
    name: 'Spaghetti alle Vongole',
    description: 'Sapori del mare con vongole veraci fresche, prezzemolo, aglio e un tocco di peperoncino.',
    price: '€16',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80',
    tag: 'Pescato Fresco'
  },
  {
    name: 'Risotto ai Funghi',
    description: 'Risotto Carnaroli mantecato e cremoso con funghi porcini freschi e Parmigiano Reggiano DOP.',
    price: '€15',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
    tag: 'Autunnale'
  },
  {
    name: 'Lasagna della Nonna',
    description: 'Stratificazione perfetta di pasta fresca, ricetta classica con ragù, besciamella e mozzarella filante.',
    price: '€13',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=1200&q=80',
    tag: 'Della Casa'
  },
  {
    name: 'Burrata e Pomodorini',
    description: 'Antipasto fresco con burrata pugliese cremosa, pomodorini confit, basilico fresco e olio EVO biologico.',
    price: '€11',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80',
    tag: 'Vegetariano'
  },
  {
    name: 'Tiramisù Classico',
    description: 'Il re dei dolci italiani: savoiardi imbevuti nel caffè espresso, crema al mascarpone e cacao amaro.',
    price: '€7',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80',
    tag: 'Dolce'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Contatti', href: '#contatti' }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', persone: '', messaggio: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!formData.nome || !formData.email || !formData.persone) {
      alert('Compila i campi obbligatori prima di inviare.');
      return;
    }
    setSubmitted(true);
    setFormData({ nome: '', email: '', persone: '', messaggio: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#fffaf1] text-[#171717] selection:bg-[#6b1d2a] selection:text-white font-inter">
      {/* HEADER */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-[#fffaf1]/80 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="flex flex-col items-start leading-none group">
            <span className={cn(
              "font-playfair text-2xl font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-[#30432f]" : "text-white group-hover:text-[#c8a86d]"
            )}>
              Trattoria Luna
            </span>
            <span className={cn(
              "text-[10px] tracking-[0.25em] font-medium mt-1 transition-colors duration-300",
              scrolled ? "text-[#6b1d2a]" : "text-white/80 group-hover:text-white"
            )}>
              CUCINA ITALIANA
            </span>
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8a86d] after:transition-all hover:after:w-full",
                  scrolled ? "text-[#30432f] hover:text-[#6b1d2a]" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg",
                scrolled 
                  ? "bg-[#6b1d2a] text-white hover:bg-[#561622] hover:shadow-[#6b1d2a]/30" 
                  : "bg-white text-[#171717] hover:bg-[#f7f1e4]"
              )}
            >
              Prenota Ora
            </a>
          </div>

          <button
            className={cn(
              "rounded-full p-2.5 lg:hidden transition-colors",
              scrolled ? "text-[#30432f] hover:bg-[#30432f]/5" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#30432f]/10 bg-[#fffaf1]/95 backdrop-blur-xl px-6 pb-6 shadow-xl lg:hidden overflow-hidden absolute w-full"
            >
              <div className="flex flex-col gap-4 pt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 font-playfair text-xl text-[#30432f] hover:bg-[#f7f1e4] hover:text-[#6b1d2a] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 rounded-full bg-[#6b1d2a] px-6 py-4 text-center font-semibold text-white shadow-lg shadow-[#6b1d2a]/20"
                >
                  Prenota il tuo tavolo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pb-16 pt-32">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80"
              alt="Interno elegante con tavoli apparecchiati"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#30432f]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <div className="relative mx-auto w-full max-w-5xl text-center text-white mt-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-2 text-sm font-medium backdrop-blur-md">
                <Clock size={16} className="text-[#c8a86d]" />
                <span className="tracking-wide">Aperto tutti i giorni · 12:00 - 23:00</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-playfair mb-8 text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl drop-shadow-xl">
                Autentica cucina <br className="hidden md:block" />
                <span className="italic text-[#c8a86d]">italiana</span> nel cuore della città
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="mx-auto mb-12 max-w-2xl text-lg text-white/90 md:text-xl font-light leading-relaxed">
                Pasta fresca tirata a mano, ingredienti selezionati con cura e un'atmosfera familiare per una vera e indimenticabile esperienza italiana.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#c8a86d] px-8 py-4 font-semibold text-[#171717] transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Prenota su WhatsApp</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
                </a>
                <a
                  href="#menu"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Scopri il Menu
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/60">Scorri</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </section>

        {/* STORY SECTION */}
        <section className="relative overflow-hidden bg-[#fffaf1] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-[#c8a86d]" />
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b1d2a]">La nostra storia</p>
                </motion.div>
                
                <motion.h2 variants={fadeInUp} className="font-playfair mb-8 text-4xl font-bold text-[#30432f] md:text-5xl lg:text-6xl leading-tight">
                  Tradizione italiana, <br /> ospitalità <span className="italic text-[#c8a86d]">sincera</span>.
                </motion.h2>
                
                <motion.p variants={fadeInUp} className="mb-10 text-lg leading-relaxed text-[#555]">
                  Alla Trattoria Luna celebriamo la cucina italiana con ricette tramandate da generazioni. Ogni piatto racconta una storia di passione, ingredienti freschi e amore per i dettagli. Nel nostro ristorante, non sei solo un cliente, sei parte della famiglia.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2">
                  {[
                    { icon: UtensilsCrossed, title: 'Pasta fresca', desc: 'Fatta a mano ogni mattina' },
                    { icon: Leaf, title: 'Ingredienti locali', desc: 'A km 0 e di stagione' },
                    { icon: Wine, title: 'Vini pregiati', desc: 'Selezionati con cura' },
                    { icon: Star, title: 'Eccellenza', desc: 'Qualità senza compromessi' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1e4] text-[#6b1d2a]">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#30432f]">{item.title}</h4>
                        <p className="text-sm text-[#777] mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
                    alt="Chef che prepara pasta fresca"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#f7f1e4] -z-10 blur-3xl opacity-50" />
                <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#6b1d2a]/10 -z-10 blur-3xl opacity-50" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="bg-[#f7f1e4] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16 flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-[#c8a86d]" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b1d2a]">Specialità</p>
                <div className="h-[1px] w-8 bg-[#c8a86d]" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-playfair text-4xl font-bold text-[#30432f] md:text-5xl">
                I nostri piatti <span className="italic">forti</span>
              </motion.h2>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredDishes.map((dish, i) => (
                <motion.article
                  key={dish.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#30432f]/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-[#6b1d2a]">
                      {dish.tag}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="font-playfair text-2xl font-bold text-[#30432f] leading-tight">{dish.name}</h3>
                      <span className="shrink-0 text-xl font-bold text-[#c8a86d]">{dish.price}</span>
                    </div>
                    <p className="text-[#666] leading-relaxed flex-1">{dish.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#30432f] px-8 py-4 font-bold text-[#30432f] transition-colors hover:bg-[#30432f] hover:text-white"
              >
                Prenota un Tavolo
              </a>
            </div>
          </div>
        </section>

        {/* GALLERY BENTO GRID */}
        <section id="galleria" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#c8a86d]" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b1d2a]">Galleria</p>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-playfair text-4xl font-bold text-[#30432f] md:text-5xl">
                Momenti <span className="italic">indimenticabili</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
              {/* Large Feature Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl"
              >
                <img src={galleryImages[0]} alt="Gallery 1" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </motion.div>
              
              {/* Top Row Small */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl hidden md:block"
              >
                <img src={galleryImages[1]} alt="Gallery 2" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl hidden md:block"
              >
                <img src={galleryImages[2]} alt="Gallery 3" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </motion.div>
              
              {/* Bottom Row Small */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl hidden md:block"
              >
                <img src={galleryImages[3]} alt="Gallery 4" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* BANNER CTA */}
        <section className="relative overflow-hidden bg-[#30432f] py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-luminosity" />
          <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="font-playfair mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              Una serata speciale <br/> inizia da <span className="italic text-[#c8a86d]">qui</span>.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Vivi l'esperienza Trattoria Luna. Scrivici per riservare il tuo tavolo e preparati a un viaggio nei sapori d'Italia.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#c8a86d] px-10 py-4 text-lg font-bold text-[#171717] transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(200,168,109,0.4)]"
            >
              Prenota ora
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contatti" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#c8a86d]" />
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b1d2a]">Contatti</p>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="font-playfair mb-8 text-4xl font-bold text-[#30432f] md:text-5xl">
                  Siamo pronti ad <span className="italic">accoglierti</span>
                </motion.h2>
                
                <motion.div variants={fadeInUp} className="mt-12 flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-[#f7f1e4] p-3 text-[#6b1d2a]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#30432f]">Indirizzo</h4>
                      <p className="mt-1 text-[#666]">Via Roma 24, Cagliari<br/>Sardegna, Italia 09100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-[#f7f1e4] p-3 text-[#6b1d2a]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#30432f]">Orari d'apertura</h4>
                      <p className="mt-1 text-[#666]">Lunedì - Domenica<br/>12:00 - 15:30 | 19:00 - 23:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-[#f7f1e4] p-3 text-[#6b1d2a]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#30432f]">Prenotazioni</h4>
                      <p className="mt-1 text-[#666]">+39 333 123 4567<br/>info@trattorialuna.it</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl shadow-[#30432f]/10"
              >
                <h3 className="font-playfair mb-8 text-3xl font-bold text-[#30432f]">Invia una richiesta</h3>
                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#555]">Nome completo *</label>
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="rounded-xl border-2 border-transparent bg-[#f7f1e4] px-5 py-4 transition-colors focus:border-[#c8a86d] focus:bg-white focus:outline-none"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#555]">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-2 border-transparent bg-[#f7f1e4] px-5 py-4 transition-colors focus:border-[#c8a86d] focus:bg-white focus:outline-none"
                        placeholder="mario@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#555]">Numero di persone *</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.persone}
                      onChange={(e) => setFormData({ ...formData, persone: e.target.value })}
                      className="rounded-xl border-2 border-transparent bg-[#f7f1e4] px-5 py-4 transition-colors focus:border-[#c8a86d] focus:bg-white focus:outline-none"
                      placeholder="Es. 2"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#555]">Note aggiuntive</label>
                    <textarea
                      rows="3"
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      className="rounded-xl border-2 border-transparent bg-[#f7f1e4] px-5 py-4 transition-colors resize-none focus:border-[#c8a86d] focus:bg-white focus:outline-none"
                      placeholder="Allergie, intolleranze o richieste speciali..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="mt-4 w-full rounded-xl bg-[#30432f] px-6 py-5 text-lg font-bold text-white transition-all hover:bg-[#1f2b1e] hover:shadow-lg active:scale-[0.98]"
                  >
                    Invia Richiesta
                  </button>
                  
                  {submitted && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center font-medium text-emerald-600 bg-emerald-50 py-3 rounded-lg border border-emerald-100"
                    >
                      Richiesta inviata con successo. Ti contatteremo presto!
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#171717] pt-20 pb-10 text-white/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="#home" className="inline-block mb-6">
                <span className="font-playfair text-3xl font-bold text-white">Trattoria Luna</span>
              </a>
              <p className="max-w-md text-lg leading-relaxed text-white/60 mb-8">
                Ristorante italiano familiare con pasta fresca, vini selezionati e un’atmosfera elegante ma accessibile nel cuore della città.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#c8a86d] hover:text-[#171717]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#c8a86d] hover:text-[#171717]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#c8a86d] hover:text-[#171717]">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-6 font-bold text-white tracking-widest uppercase text-sm">Navigazione</h4>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="w-fit hover:text-[#c8a86d] transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="mb-6 font-bold text-white tracking-widest uppercase text-sm">Contatti</h4>
              <div className="flex flex-col gap-4 text-white/60">
                <p>Via Roma 24, Cagliari</p>
                <p>+39 333 123 4567</p>
                <p>info@trattorialuna.it</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Trattoria Luna. Tutti i diritti riservati.</p>
            <p>Design premium per presentazione commerciale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}