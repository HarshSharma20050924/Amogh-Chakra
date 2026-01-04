import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/seed';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Archive: React.FC = () => {
  const { t, language } = useLanguage();
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

  // Show only first 4 on landing
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  const openGallery = () => {
    setIsFullGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsFullGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="archive" className="py-32 bg-royal-950 relative overflow-hidden">
        {/* Background: Deep Space / Void */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Om Symbol floating */}
            <div className="absolute top-10 right-10 text-white opacity-10 text-9xl font-hindi select-none">ॐ</div>
            
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-royal-800/20 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                {language === 'hi' ? 'आकाशिक रिकॉर्ड' : 'The Akashic Vault'}
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
            {language === 'hi' ? 'स्मृतियां और क्षण' : 'Echoes of Rituals'}
            </h2>
          </div>
          
          <div className="text-right">
            <p className="text-white/40 font-serif italic text-lg max-w-xs ml-auto mb-4">
                {language === 'hi' 
                ? '"समय केवल एक भ्रम है, कर्म शाश्वत है।"' 
                : '"Time is the moving image of eternity."'}
            </p>
            <button 
                onClick={openGallery}
                className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-gold-500 pb-1"
            >
                {language === 'hi' ? 'पूर्ण संग्रह देखें' : 'View Complete Archive'}
            </button>
            </div>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
          {previewItems.map((item, index) => (
            <div key={item.id} className={`h-full ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
                <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* FULL SCREEN GALLERY MODAL */}
      <AnimatePresence>
        {isFullGalleryOpen && (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[80] bg-royal-950 overflow-y-auto"
            >
                {/* Header */}
                <div className="sticky top-0 bg-royal-950/90 backdrop-blur-md z-50 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                     <button onClick={closeGallery} className="text-white hover:text-gold-500 transition-colors flex items-center gap-2">
                         <ArrowLeft size={20} />
                         <span className="text-xs font-bold uppercase tracking-widest">{language === 'hi' ? 'वापस' : 'Back'}</span>
                     </button>
                     <h2 className="text-white font-serif text-lg tracking-widest">{language === 'hi' ? 'पूर्ण संग्रह' : 'The Complete Archive'}</h2>
                     <div className="w-8"></div> {/* Spacer */}
                </div>

                <div className="max-w-7xl mx-auto px-4 py-12">
                     <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                         {GALLERY_ITEMS.map((item) => (
                             <div key={item.id} className="break-inside-avoid">
                                 <div className="h-[400px] w-full"> 
                                    <GalleryCard item={item} />
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryCard = ({ item }: { item: any }) => {
    const { t } = useLanguage();
    
    return (
        <div
            className="group relative h-full w-full overflow-hidden bg-black border border-white/10 rounded-sm"
        >
            {/* Media Layer */}
            {item.type === 'video' ? (
                <div className="relative w-full h-full">
                <video
                    src={item.src}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
                    muted
                    loop
                    playsInline
                    autoPlay
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-gold-500 group-hover:scale-110 transition-all duration-700">
                        <Play fill="white" size={20} className="ml-1 opacity-80" />
                    </div>
                </div>
                </div>
            ) : (
                <div className="w-full h-full relative">
                        <img
                        src={item.src}
                        alt={item.caption.en}
                        className="w-full h-full object-cover opacity-70 transition-transform duration-[1.5s] group-hover:scale-105 group-hover:opacity-100"
                    />
                </div>
            )}
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            {/* Caption Layer */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-3 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-[1px] bg-gold-500" />
                    <span className="text-gold-500 text-[10px] uppercase tracking-widest font-bold">
                            {item.type === 'video' ? 'Motion' : 'Still'}
                    </span>
                </div>
                <p className="text-white font-serif text-2xl tracking-wide leading-relaxed translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {t(item.caption)}
                </p>
            </div>
        </div>
    )
}

export default Archive;