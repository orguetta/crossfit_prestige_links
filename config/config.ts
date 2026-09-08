import type { LLConfig } from "../src/types";

export const Config: LLConfig = {
  title: "CrossFit Prestige",
  subtitle: "POWER • WELLNESS • COMMUNITY",
  about: "",
  image: "/logo.svg", // This will fallback to logo.png or text avatar if logo is missing in public
  links: [
    {
      name: "מדריך למתאמן החדש",
      href: "/new-member-guide",
      desc: "כל מה שצריך לדעת לקראת האימונים הראשונים",
      link: "new-member-guide",
    },
    {
      name: "לו״ז חגים מעודכן (ספטמבר - אוקטובר)",
      href: "/holidays",
      desc: "שעות פעילות וימי חג בבוקס",
      link: "holidays",
      icon: {
        code: "f133",
        bold: true,
      },
    },
    {
      name: "ניווט אלינו ב-Waze",
      href: "https://go.prestigefit.co.il/waze",
      desc: "הוראות הגעה לקרוספיט פרסטיג׳ ב-Waze",
      link: "waze",
      icon: {
        code: "f83f",
        bold: false,
      },
    },
    {
      name: "ניווט אלינו ב-Google Maps",
      href: "https://go.prestigefit.co.il/gmap",
      desc: "פתיחת פרופיל העסק והמיקום ב-Google Maps",
      link: "google-maps",
      icon: {
        code: "f3c5",
        bold: true,
      },
    },
    {
      name: "דרגו אותנו בגוגל",
      href: "https://go.prestigefit.co.il/gmap-review",
      desc: "נשמח שתשתפו את החוויה שלכם",
      link: "google-review",
      icon: {
        code: "f005",
        bold: true,
      },
    },
    {
      name: "דברו איתנו בווטסאפ",
      href: "https://go.prestigefit.co.il/whatsapp",
      desc: "צ'אט ישיר בווטסאפ",
      link: "whatsapp",
      icon: {
        code: "f232",
        bold: false,
      },
    },
    {
      name: "הצטרפות לקבוצת הודעות חשובות",
      href: "https://go.prestigefit.co.il/wa-updates-group",
      desc: "קבוצת עדכונים שקטה",
      link: "announcements",
      icon: {
        code: "f0a1",
        bold: true,
      },
    },
    {
      name: "הצטרפות לקבוצת הקהילה שלנו",
      href: "https://go.prestigefit.co.il/wa-community",
      desc: "קבוצת הקהילה של Prestige",
      link: "community",
      icon: {
        code: "f0c0",
        bold: true,
      },
    },
    {
      name: "לינק להורדת האפליקציה",
      href: "https://go.prestigefit.co.il/app",
      desc: "האפליקציה הרשמית",
      link: "app",
      icon: {
        code: "f3cd",
        bold: true,
      },
    },
    {
      name: "מה זה HYPR?",
      href: "https://go.prestigefit.co.il/hypr-site",
      desc: "האתר הרשמי",
      link: "about-hypr",
      icon: {
        code: "f059",
        bold: true,
      },
    },
    {
      name: "תקנון מצטרפים",
      href: "/terms",
      desc: "תקנון מצטרפים קרוספיט פריסטיג׳",
      link: "terms",
      hide: true,
    },
    {
      name: "תקנון מצטרפים",
      href: "/terms",
      desc: "תקנון מצטרפים קרוספיט פריסטיג׳",
      link: "תקנון",
      hide: true,
    },
  ],
  socials: {
    instagram: "https://go.prestigefit.co.il/instagram",
    facebookPage: "https://go.prestigefit.co.il/facebookpage",
    facebookGroup: "https://go.prestigefit.co.il/facebookgroup",
  },
};
