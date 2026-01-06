
import { HeroSlide, ServiceItem, AchievementItem, SocialLinks, GuruProfile, SocialPost, GalleryItem } from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  facebook: "https://facebook.com",
  whatsapp: "https://wa.me/919876543210",
  email: "contact@amoghchakra.com",
  phone: "+919876543210" 
};

export const GURU_PROFILE: GuruProfile = {
  name: {
    hi: "प्रभव शर्मा",
    en: "Prabhav Sharma"
  },
  brandName: "Amogh Chakra",
  title: {
    hi: "वैदिक ज्योतिषी और आध्यात्मिक मार्गदर्शक",
    en: "Vedic Astrologer & Spiritual Guide"
  },
  bio: {
    hi: "अमोघ चक्र के माध्यम से, मैं प्राचीन वैदिक ज्ञान को आधुनिक जीवन की समस्याओं के समाधान के लिए प्रस्तुत करता हूँ। ज्योतिष केवल भविष्यवाणी नहीं, बल्कि कर्म और भाग्य का विज्ञान है।",
    en: "Through Amogh Chakra, I bridge ancient Vedic wisdom with modern life solutions. Astrology is not just prediction; it is the science of Karma and Destiny."
  },
  image: "/images/Guruji.jpg",
  expertise: {
    hi: [
        "पारद शिवलिंग निर्माण एवं प्रतिष्ठा",
        "अंक शास्त्र",
        "वास्तु शास्त्र",
        "तत्व दर्शन",
        "ऊर्जा उपचार",
        "वनस्पति उपचार",
        "यंत्र निर्माण एवं उपचार",
        "पेंडुलम हीलिंग",
        "राइस मैजिक"
    ],
    en: [
        "Parad Shivling Construction & Pran-Pratishtha",
        "Numerology",
        "Vastu Shastra",
        "Tattva Philosophy",
        "Energy Healing",
        "Herbal & Botanical Healing",
        "Yantra Construction & Remedies",
        "Pendulum Healing",
        "Rice Magic"
    ]
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    mediaType: 'image',
    src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1920&auto=format&fit=crop",
    title: {
      hi: "अमोघ चक्र: आपके जीवन का आध्यात्मिक साथी",
      en: "Amogh Chakra: Your Spiritual Companion"
    },
    subtitle: {
      hi: "प्राचीन वैदिक ज्ञान के साथ अपने भविष्य को संवारें।",
      en: "Shape your future with ancient Vedic wisdom."
    }
  },
  {
    id: 2,
    mediaType: 'image',
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop",
    title: {
      hi: "ग्रहों की चाल, आपके जीवन का हाल",
      en: "The Movement of Planets, The State of Your Life"
    },
    subtitle: {
      hi: "सटीक गणना और अचूक समाधान।",
      en: "Precise calculations and effective remedies."
    }
  },
  {
    id: 3,
    mediaType: 'video',
    src: "https://cdn.coverr.co/videos/coverr-hands-of-a-woman-praying-with-prayer-beads-6855/1080p.mp4", 
    title: {
      hi: "शांति और समृद्धि का मार्ग",
      en: "Path to Peace and Prosperity"
    },
    subtitle: {
      hi: "आध्यात्मिक उपायों से जीवन को संतुलित करें।",
      en: "Balance your life with spiritual remedies."
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "kundli",
    title: { hi: "कुंडली विश्लेषण", en: "Kundli Analysis" },
    description: {
      hi: "अपने जन्म चार्ट के माध्यम से अपने व्यक्तित्व और भविष्य की विस्तृत जानकारी प्राप्त करें।",
      en: "Get detailed insights into your personality and future through your birth chart."
    },
    iconName: "Scroll",
    subServices: [
      { hi: "विस्तृत जीवन भविष्यवाणी", en: "Detailed Life Prediction" },
      { hi: "वार्षिक राशिफल", en: "Yearly Horoscope" },
      { hi: "रत्न परामर्श", en: "Gemstone Consultation" },
      { hi: "संतान योग", en: "Child Birth Yoga" }
    ]
  },
  {
    id: "vivah",
    title: { hi: "विवाह सलाह", en: "Marriage Consultation" },
    description: {
      hi: "गुण मिलान और सुखी वैवाहिक जीवन के लिए ज्योतिषीय मार्गदर्शन।",
      en: "Gun Milan and astrological guidance for a happy married life."
    },
    iconName: "HeartHandshake",
    subServices: [
      { hi: "कुंडली मिलान (गुण मिलान)", en: "Kundli Matching" },
      { hi: "प्रेम विवाह समस्याएं", en: "Love Marriage Problems" },
      { hi: "वैवाहिक कलह निवारण", en: "Marital Discord Solutions" },
      { hi: "तलाक निवारण", en: "Divorce Prevention" }
    ]
  },
  {
    id: "career",
    title: { hi: "करियर और व्यवसाय", en: "Career & Business" },
    description: {
      hi: "व्यवसाय में सफलता और सही करियर चुनने के लिए मार्गदर्शन।",
      en: "Guidance for success in business and choosing the right career path."
    },
    iconName: "Briefcase",
    subServices: [
      { hi: "नौकरी में पदोन्नति", en: "Job Promotion" },
      { hi: "नया व्यवसाय शुरू करना", en: "New Business Startup" },
      { hi: "वित्तीय स्थिरता", en: "Financial Stability" },
      { hi: "विदेशी नौकरी के योग", en: "Foreign Job Opportunities" }
    ]
  },
  {
    id: "dosha",
    title: { hi: "ग्रह दोष शांति", en: "Grah Dosh Shanti" },
    description: {
      hi: "मंगल दोष, कालसर्प दोष और अन्य ग्रहों के नकारात्मक प्रभावों का निवारण।",
      en: "Remedies for Mangal Dosh, Kaal Sarp Dosh, and other negative planetary influences."
    },
    iconName: "Sun",
    subServices: [
      { hi: "कालसर्प दोष पूजा", en: "Kaal Sarp Dosh Puja" },
      { hi: "मंगल दोष निवारण", en: "Mangal Dosh Remedies" },
      { hi: "पितृ दोष शांति", en: "Pitra Dosh Shanti" },
      { hi: "शनि साढ़े साती उपाय", en: "Shani Sade Sati Remedies" }
    ]
  },
  {
    id: "muhurat",
    title: { hi: "शुभ मुहूर्त", en: "Shubh Muhurat" },
    description: {
      hi: "गृह प्रवेश, विवाह और नए कार्यों के लिए शुभ समय का चयन।",
      en: "Selection of auspicious timings for house warming, marriage, and new ventures."
    },
    iconName: "Clock",
    subServices: [
      { hi: "विवाह मुहूर्त", en: "Marriage Dates" },
      { hi: "गृह प्रवेश", en: "House Warming" },
      { hi: "वाहन खरीद", en: "Vehicle Purchase" },
      { hi: "नामकरण संस्कार", en: "Naming Ceremony" }
    ]
  },
  {
    id: "vastu",
    title: { hi: "वास्तु शास्त्र", en: "Vastu Shastra" },
    description: {
      hi: "अपने घर और कार्यस्थल में सकारात्मक ऊर्जा का संचार करें।",
      en: "Enhance positive energy in your home and workplace."
    },
    iconName: "Home",
    subServices: [
      { hi: "आवासीय वास्तु", en: "Residential Vastu" },
      { hi: "व्यावसायिक वास्तु", en: "Commercial Vastu" },
      { hi: "नक्शा विश्लेषण", en: "Map Analysis" },
      { hi: "ऊर्जा संतुलन", en: "Energy Balancing" }
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "exp",
    count: "27",
    suffix: "",
    label: { hi: "वर्ष", en: "Years" },
    description: { hi: "सूर्य आवर्तन अनुभव", en: "Solar Returns Experience" }
  },
  {
    id: "clients",
    count: "25K",
    suffix: "+",
    label: { hi: "कुंडली विश्लेषण", en: "Horoscopes Decoded" },
    description: { hi: "सटीक भविष्यवाणियां", en: "Accurate Predictions" }
  },
  {
    id: "countries",
    count: "500",
    suffix: "+",
    label: { hi: "अंतरराष्ट्रीय उपस्थितियां", en: "Intl. Appearances" },
    description: { hi: "वैश्विक मार्गदर्शन", en: "Global Guidance" }
  },
  {
    id: "rituals",
    count: "15K",
    suffix: "+",
    label: { hi: "वैदिक अनुष्ठान", en: "Vedic Rituals" },
    description: { hi: "पूर्ण विधि-विधान", en: "Performed with Vidhi" }
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "1",
    type: "youtube",
    thumbnail: "https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?q=80&w=600&auto=format&fit=crop",
    link: "https://youtube.com",
    caption: "Weekly Horoscope Analysis - April 2024"
  },
  {
    id: "2",
    type: "instagram",
    thumbnail: "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=600&auto=format&fit=crop",
    link: "https://instagram.com",
    caption: "Navratri Special Puja Updates"
  },
  {
    id: "3",
    type: "instagram",
    thumbnail: "https://images.unsplash.com/photo-1545558014-a9756f1ff825?q=80&w=600&auto=format&fit=crop",
    link: "https://instagram.com",
    caption: "Vastu Tips for Home Entrance"
  },
  {
    id: "4",
    type: "youtube",
    thumbnail: "https://images.unsplash.com/photo-1602416182390-58476839e99a?q=80&w=600&auto=format&fit=crop",
    link: "https://youtube.com",
    caption: "Understand your Planet positions"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "https://images.unsplash.com/photo-1606294726589-3543883a9f93?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "हवन अनुष्ठान", en: "Havan Ceremony" }
  },
  {
    id: "g2",
    type: "image",
    src: "https://images.unsplash.com/photo-1583084776856-425b42d79047?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "रत्न चयन", en: "Gemstone Selection" }
  },
  {
    id: "g3",
    type: "image",
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "कुंडली अध्ययन", en: "Kundli Reading" }
  },
  {
    id: "g4",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-burning-candles-in-a-church-5377/1080p.mp4",
    caption: { hi: "मंदिर दर्शन", en: "Temple Visit" }
  },
  {
    id: "g5",
    type: "image",
    src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "ग्रह शांति", en: "Grah Shanti" }
  },
  {
    id: "g6",
    type: "image",
    src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "ध्यान सत्र", en: "Meditation Session" }
  },
  {
    id: "g7",
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-close-up-of-incense-sticks-5374/1080p.mp4",
    caption: { hi: "पवित्र अग्नि", en: "Sacred Fire" }
  },
  {
    id: "g8",
    type: "image",
    src: "https://images.unsplash.com/photo-1526743680668-25007a914f66?q=80&w=800&auto=format&fit=crop",
    caption: { hi: "यंत्र पूजा", en: "Yantra Puja" }
  }
];
