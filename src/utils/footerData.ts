// src/data/footerData.ts

export interface QuickLink {
    name: string;
    path: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string; // Will store the Lucide React icon component name as a string
  }
  
  export interface FooterContent {
    companyName: string;
    tagline: string;
    slogan: string;
    contactEmail: string;
    contactPhone: string; // Dummy phone number
    contactAddress: string;
    quickLinks: QuickLink[];
    socialLinks: SocialLink[];
  }
  
  export const footerContent: FooterContent = {
    companyName: "Paul Campbell",
    tagline: "Automotive Copywriter & Former Mechanic",
    slogan: "Where Mechanical Precision Meets Editorial Excellence",
    contactEmail: "p14aulcampbell@gmail.com", // Using Paul's actual email
    contactPhone: "+1 (816) 555-1234", // Dummy phone number
    contactAddress: "8641 N Kansas Ave, Kansas City, MO 64156", // Using Paul's actual address
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],

  };