
import React, { useState } from 'react';
import { SERVICES, SOCIAL_LINKS } from '../data/seed';
import { Scroll, Sun, HeartHandshake, Briefcase, Clock, Home, Star, X, ArrowRight, ArrowLeft, Move } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../types';
import RitualButton from '../components/RitualButton';

// Icon mapping
const getIcon = (name: string, className = "w-6 h-6") => {
  const icons: any = { Scroll, Sun, HeartHandshake, Briefcase, Clock, Home };
  const IconComponent = icons[name] || Star;
  return <IconComponent className={className} strokeWidth={1.5} />;
};

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);

  const displayedServices = SERVICES.slice(0, 3);

  const openModal = (service: ServiceItem) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  const openAllServices = () => {
    setIsAllServicesOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeAllServices = () => {
    setIsAllServicesOpen(false);
    document.body.style.overflow = 'unset';
  };

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = language === 'hi' 
      ? `नमस्ते गुरु जी, मैं ${serviceTitle} के बारे में अधिक जानकारी चाहता हूँ।`
      : `Namaste Guru Ji, I would like to know more about ${serviceTitle}.`;
    return `https://wa.me/${SOCIAL_LINKS.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <section id="services" className="py-32 bg-cream-100 relative overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        
        {/* Technical Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
             <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-royal-900"></div>
             <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-royal-900"></div>
             <div className="absolute top-12 left-0 right-0 h-[1px] bg-royal-900"></div>
             <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-royal-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header & Mantra Section */}
          <div className="text-center mb-24 relative">
            <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-royal-900/60 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                        {language === 'hi' ? 'गणित और फलित' : 'Calculations & Predictions'}
                </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-royal-900 leading-tight mb-12">
            {language === 'hi' ? 'शास्त्र सम्मत समाधान' : 'The Vedic Manuscript'}
            </h2>
            
            {/* The Complete Mantra Block */}
            <div className="max-w-3xl mx-auto bg-white/80 p-10 rounded-lg border border-gold-500/30 shadow-lg backdrop-blur-md relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-600"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-600"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-600"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-600"></div>

                <p className="font-hindi text-xl md:text-3xl text-gold-600 font-extrabold leading-relaxed mb-8 drop-shadow-sm">
                    यथा शिखा मयूराणां नागानां मणयो यथा।<br/>
                    तद्वेदाङ्गेषु शास्त्राणां गणितं मूर्धनि स्थितम्॥
                </p>
                
                <div className="h-[2px] w-24 bg-gold-500 mx-auto mb-8 opacity-60"></div>

                <div className="space-y-6">
                    <p className="text-royal-900 font-hindi text-lg md:text-xl font-medium">
                        "जिस प्रकार मोर के शरीर में शिखा सर्वोच्च होती है और नागों में मणि श्रेष्ठ होती है,
                        उसी प्रकार समस्त वेदांगों और शास्त्रों में गणित (अंक ज्ञान) सर्वोपरि स्थान रखता है।"
                    </p>
                    <p className="text-royal-800 font-serif text-base md:text-lg italic font-medium leading-relaxed opacity-90">
                        "Just as the crest is the highest ornament of a peacock and the gem is the most precious part of a serpent,
                        in the same way, among all sciences and Vedic disciplines, the science of numbers holds the highest position."
                    </p>
                </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {displayedServices.map((service) => (
              <div key={service.id}>
                  <div
                    onClick={() => openModal(service)}
                    className="group relative cursor-pointer h-full bg-white border border-royal-900/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Content */}
                    <div className="relative p-10 flex flex-col items-center text-center h-full">
                      
                      <div className="relative w-24 h-24 mb-8 flex items-center justify-center text-royal-900">
                           <div className="absolute inset-0 border-2 border-royal-900/10 rounded-full group-hover:border-gold-500 transition-colors duration-500"></div>
                           <div className="absolute inset-1 border border-dashed border-royal-900/20 rounded-full"></div>
                           
                           <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                                {getIcon(service.iconName, "w-10 h-10")}
                           </div>

                           <div className="absolute -top-1 w-1 h-3 bg-white border border-royal-900/20"></div>
                      </div>
                      
                      <h3 className="text-2xl font-serif text-royal-900 mb-4 group-hover:text-gold-600 transition-colors">
                        {t(service.title)}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-6 opacity-30">
                          <div className="w-1 h-1 bg-royal-900 rounded-full"></div>
                          <div className="w-12 h-[1px] bg-royal-900"></div>
                          <div className="w-1 h-1 bg-royal-900 rounded-full"></div>
                      </div>

                      <p className="text-royal-900/60 font-sans text-sm font-medium leading-relaxed mb-8">
                        {t(service.description)}
                      </p>

                      <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                         <span className="text-xs font-bold text-gold-600 uppercase tracking-widest flex items-center gap-2">
                             {language === 'hi' ? 'देखें' : 'Examine'} <ArrowRight size={14} />
                         </span>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>

          {/* View All Button - Enhanced */}
          <div className="text-center">
                 <RitualButton 
                    onClick={openAllServices} 
                    variant="primary" 
                    icon={<Scroll size={20} />}
                    className="!py-5 !px-12 !text-sm !shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:!shadow-[0_0_30px_rgba(217,119,6,0.5)] !border-2 !border-gold-500/20"
                 >
                    {language === 'hi' ? 'संपूर्ण ग्रंथ खोलें' : 'Open Full Manuscript'}
                 </RitualButton>
          </div>
        </div>
      </section>

      {/* Full Services Modal & Single Service Modal retained logic but simplified triggers */}
      <AnimatePresence>
        {isAllServicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cream-50 overflow-y-auto"
          >
             {/* Header */}
            <div className="sticky top-0 bg-cream-50/95 backdrop-blur-md border-b border-royal-900/10 z-10 px-6 py-6 flex items-center justify-between shadow-sm">
              <button 
                onClick={closeAllServices}
                className="flex items-center gap-2 text-royal-900 hover:text-gold-600 transition-colors group"
              >
                <div className="p-2 border border-royal-900/10 rounded-full group-hover:border-gold-500 transition-colors">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-bold uppercase tracking-widest text-xs hidden md:block">{language === 'hi' ? 'वापस' : 'Return'}</span>
              </button>
              
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl md:text-2xl text-royal-900 tracking-wide">
                    {language === 'hi' ? 'ज्योतिष सेवाएं' : 'The Compendium of Fate'}
                </span>
              </div>
              <div className="w-10"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
              <div className="grid grid-cols-1 gap-16">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-royal-900/10"
                  >
                     <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cream-50 border-2 border-gold-500 rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                      <div className="md:col-span-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-royal-900 p-3 bg-gold-100 rounded-lg">
                                {getIcon(service.iconName, "w-6 h-6")}
                            </div>
                            <h3 className="text-2xl font-serif text-royal-900">{t(service.title)}</h3>
                        </div>
                        <p className="text-royal-900/70 font-sans leading-relaxed mb-6">{t(service.description)}</p>
                        
                        <div className="hidden md:block">
                            <RitualButton 
                                href={getWhatsAppLink(t(service.title))} 
                                target="_blank" 
                                variant="outline"
                                className="!border-royal-900/20 !text-royal-900 hover:!border-gold-600"
                            >
                                {language === 'hi' ? 'चर्चा करें' : 'Discuss'}
                            </RitualButton>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.subServices.map((sub, idx) => (
                            <a
                              key={idx}
                              href={getWhatsAppLink(t(service.title) + " - " + t(sub))}
                              target="_blank"
                              className="group flex items-center p-4 bg-white border border-royal-900/5 shadow-sm hover:border-gold-500 hover:shadow-md transition-all duration-300"
                            >
                              <Move size={12} className="mr-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                              <span className="font-medium text-royal-800 font-sans">
                                {t(sub)}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedService && !isAllServicesOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-royal-950/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-cream-50 w-full max-w-lg shadow-2xl relative z-[80] overflow-hidden border-t-4 border-gold-500"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-royal-900/40 hover:text-royal-900 transition-colors z-20">
                <X size={24} />
              </button>

              <div className="p-10 relative">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="mb-6 text-royal-900 p-4 border border-royal-900/10 rounded-full bg-white shadow-sm">
                    {getIcon(selectedService.iconName, "w-10 h-10")}
                  </div>
                  <h3 className="text-3xl font-serif text-royal-900 mb-2">{t(selectedService.title)}</h3>
                  <div className="w-16 h-[2px] bg-gold-500" />
                </div>

                <p className="text-royal-900/70 text-lg leading-relaxed mb-8 text-center">
                    {t(selectedService.description)}
                </p>

                <div className="space-y-3 mb-10 bg-white p-6 rounded-sm border border-royal-900/5">
                    {selectedService.subServices.map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-royal-800">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                        <span className="font-medium">{t(sub)}</span>
                      </div>
                    ))}
                </div>

                <RitualButton 
                    href={getWhatsAppLink(t(selectedService.title))}
                    target="_blank"
                    className="w-full"
                >
                  {language === 'hi' ? 'परामर्श लें' : 'Book Consultation'}
                </RitualButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
