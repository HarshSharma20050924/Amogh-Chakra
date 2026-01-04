You are a senior frontend architect and UI designer with deep understanding of Indian spiritual aesthetics.

Build a STATIC, highly professional, Indian astrology website named:

“AMOGH CHAKRA”
Owner: Prabhav Sharma

Core intent:
– The site must feel sacred, trustworthy, Indian, and premium
– Modern layout, but rooted in traditional astrology aesthetics
– Static-first architecture with future admin panel compatibility

––––––––––––––––
TECH & ARCHITECTURE
––––––––––––––––
• Use Next.js (static export) or Vite + React
• Tailwind CSS for styling
• Framer Motion for subtle animations only
• Data-driven architecture (no hardcoded content)
• All content must come from data files (seed-based)
• Images and videos loaded from /public folder
• SEO-friendly structure
• Fast, minimal, no heavy JS nonsense

––––––––––––––––
COLOR & VISUAL STYLE
––––––––––––––––
• Primary colors:
  – Cream / off-white background
  – Royal blue for headings
  – Gold accents for dividers, icons, highlights
• Typography:
  – Indian classical feel (serif) + modern readable sans-serif
• Mood:
  – Calm, spiritual, authoritative
  – No flashy neon, no corporate look

––––––––––––––––
LANGUAGE
––––––––––––––––
• Bilingual: Hindi + English
• Display both together (Hindi first, English below)
• Data format must support:
  title_hi, title_en
  desc_hi, desc_en

––––––––––––––––
GLOBAL COMPONENTS
––––––––––––––––
1. Navbar
   – Logo: “Amogh Chakra”
   – Links: Home, Services, Achievements, About Guru Ji, Contact
   – Sticky, clean, minimal

2. Floating Contact Bar (always visible)
   – WhatsApp
   – Call
   – Email
   – “Connect Us” CTA

3. Footer
   – Short spiritual line / mantra
   – Contact details
   – Social media icons
   – Copyright

––––––––––––––––
HOMEPAGE STRUCTURE
––––––––––––––––
Section 1: Hero Slider
• Full-width slider
• Images + short muted videos
• Spiritual overlays (chakra, kundli, symbols)
• Text overlay (Hindi + English)
• Data source: slides.ts

Section 2: Guru Ji Introduction
• Guru Ji photo
• Brand name: Amogh Chakra
• Owner name: Prabhav Sharma
• Short spiritual introduction
• Respectful, authoritative tone

Section 3: Services Preview
• Card-based layout
• 4–6 main services
• Click → detailed services page
• Data source: services.ts

Section 4: Achievements
• Years of experience
• Clients served
• Certifications / recognitions
• Subtle number animations
• Data source: achievements.ts

Section 5: Social Presence
• Instagram preview
• YouTube thumbnails
• Facebook handle
• Data source: socialLinks.ts

––––––––––––––––
SERVICES ARCHITECTURE
––––––––––––––––
• Section-based + sub-sections
• Each service contains:
  – Name (HI + EN)
  – Description (HI + EN)
  – Icon
  – Sub-services list

Example categories:
• Kundli Vishleshan
• Grah Dosh Shanti
• Vivah Salah
• Career & Business Astrology
• Muhurat
• Vastu

––––––––––––––––
CONTACT SYSTEM
––––––––––––––––
• Email
• Mobile
• WhatsApp click
• Contact visible across the site
• No backend form for now
• Future-ready for Supabase/Firebase

––––––––––––––––
ASSETS HANDLING
––––––––––––––––
• All images go into:
  /public/images/
• All videos go into:
  /public/videos/
• Refer assets via direct paths
• No imports required

––––––––––––––––
FUTURE ADMIN PANEL COMPATIBILITY
––––––––––––––––
• Current data from local seed files
• Architecture must allow easy replacement with API
• Zero UI rewrite later
• Backend options: Supabase / Firebase / Strapi

––––––––––––––––
IMPORTANT CONSTRAINTS
––––––––––––––––
• Static website only (for now)
• Extremely clean code structure
• Indian astrologer identity must be obvious
• No stock “corporate” UI patterns
• Respectful animations only
• Professional, premium, spiritual presence

Output:
– Folder structure
– Core components
– Data file examples
– Component-based architecture
– Clean, production-ready frontend setup
