import type { LLConfig } from "../src/types";

export const Config: LLConfig = {
    title: "CrossFit Prestige",
    subtitle: "POWER • WELLNESS • COMMUNITY",
    about: "מרחב אימונים מתקדם המשלב קרוספיט, יוגה ופילאטיס.",
    image: "/logo.svg", // This will fallback to logo.png or text avatar if logo is missing in public
    links: [
        {
            name: "דברו איתנו בווטסאפ",
            href: "https://wa.me/972533041310",
            desc: "צ'אט ישיר בווטסאפ",
            link: "whatsapp",
            icon: {
                code: "f232",
                bold: false
            }
        },
        {
            name: "הצטרפות לקבוצת הודעות חשובות",
            href: "https://chat.whatsapp.com/Lg0k4oSQ0jZ6IMF09yqlnM",
            desc: "קבוצת עדכונים שקטה",
            link: "announcements",
            icon: {
                code: "f0a1",
                bold: true
            }
        },
        {
            name: "הצטרפות לקבוצת הקהילה שלנו",
            href: "https://chat.whatsapp.com/KNFQ4l7psgNLRu7jxAJMn2",
            desc: "קבוצת הקהילה של Prestige",
            link: "community",
            icon: {
                code: "f0c0",
                bold: true
            }
        },
        {
            name: "לינק להורדת האפליקציה",
            href: "http://onelink.to/jx7eps",
            desc: "האפליקציה הרשמית",
            link: "app",
            icon: {
                code: "f3cd",
                bold: true
            }
        },
        {
            name: "מה זה HYPR?",
            href: "https://hypr-training.com/",
            desc: "האתר הרשמי",
            link: "about-hypr",
            icon: {
                code: "f059",
                bold: true
            }
        }
    ],
    socials: {
        instagram: "https://www.instagram.com/crossfitprestige",
        facebookPage: "https://www.facebook.com/profile.php?id=61590393875763",
        facebookGroup: "https://www.facebook.com/groups/36960757233511386"
    }
}
