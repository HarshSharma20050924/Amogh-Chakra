export type Language = 'hi' | 'en';

export interface BilingualText {
  hi: string;
  en: string;
}

export interface SocialLinks {
  instagram: string;
  youtube: string;
  facebook: string;
  whatsapp: string;
  email: string;
  phone: string;
}

export interface HeroSlide {
  id: number;
  mediaType: 'image' | 'video';
  src: string;
  title: BilingualText;
  subtitle: BilingualText;
}

export interface ServiceItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  iconName: string;
  subServices: BilingualText[]; // List of bullet points
}

export interface AchievementItem {
  id: string;
  count: string;
  label: BilingualText;
}

export interface GuruProfile {
  name: string;
  brandName: string;
  title: BilingualText;
  bio: BilingualText;
  image: string;
}

export interface SocialPost {
  id: string;
  type: 'instagram' | 'youtube';
  thumbnail: string;
  link: string;
  caption: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  caption: BilingualText;
}
