import React from 'react';
import { SOCIAL_POSTS } from '../data/seed';
import { Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import RitualButton from '../components/RitualButton';

const SocialFeed: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden">
       {/* Background subtle text */}
       <div className="absolute top-10 left-0 w-full text-center overflow-hidden pointer-events-none">
          <span className="text-[12rem] font-serif font-bold text-royal-900 opacity-[0.08] whitespace-nowrap leading-none select-none">
             CONNECT
          </span>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-royal-900/20" />
                <span className="text-royal-900 font-bold uppercase tracking-[0.3em] text-xs">
                    {language === 'hi' ? 'सोशल मीडिया' : 'Echoes'}
                </span>
                <div className="h-[1px] w-12 bg-royal-900/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-royal-900">
                {language === 'hi' ? 'विचार और दर्शन' : 'Insights & Philosophy'}
            </h2>
        </div>

        {/* Curated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {SOCIAL_POSTS.map((post) => (
            <div key={post.id}>
                <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-transform duration-500 hover:-translate-y-2"
                >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-200 shadow-md border border-white">
                    <div className="absolute inset-0 bg-royal-900/10 z-10 group-hover:opacity-0 transition-opacity duration-700" />
                    <img 
                        src={post.thumbnail} 
                        alt={post.caption} 
                        className="w-full h-full object-cover filter grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                    />
                    
                    {/* Minimal Badge */}
                    <div className="absolute top-0 right-0 p-4 z-20">
                         <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white border border-white/40 shadow-sm">
                            {post.type === 'youtube' ? <Youtube size={14} /> : <Instagram size={14} />}
                         </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="pr-4 text-center sm:text-left">
                    <p className="text-xs text-gold-600 uppercase tracking-widest font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                         {post.type}
                    </p>
                    <div className="h-[1px] w-12 bg-gray-300 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left mx-auto sm:mx-0" />
                    <p className="text-royal-900 font-serif text-lg leading-snug group-hover:text-gold-700 transition-colors">
                        {post.caption}
                    </p>
                </div>
                </a>
            </div>
          ))}
        </div>

        {/* Centered Action */}
        <div className="mt-20 flex justify-center">
            <RitualButton variant="ghost" icon={<ArrowUpRight size={16} />}>
                {language === 'hi' ? 'इंस्टाग्राम पर जुड़ें' : 'Join the Community'}
            </RitualButton>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;