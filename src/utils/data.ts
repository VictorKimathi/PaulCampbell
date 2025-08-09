import { v4 as uuidv4 } from 'uuid';

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  years: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  graduated: string;
}

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
  pdfLink: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

export interface QuickLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  profileImage: string;
  shortBio: string;
  summary: string;
  address: string;
  email: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  callToActionText: string;
  callToActionLink: string;
}

export interface ContactData {
  title: string;
  description: string;
  cardTitle: string;
  email: {
    label: string;
    value: string;
    link: string;
  };
  address: {
    label: string;
    value: string;
  };
  phone?: {
    label: string;
    value: string;
    link: string;
  };
  footerNote: string;
}

export interface FooterContent {
  companyName: string;
  tagline: string;
  slogan: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  quickLinks: QuickLink[];
  socialLinks: SocialLink[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ValuePropItem {
  title: string;
  description: string;
  icon: string;
}

export const profileData: ProfileData = {
  name: "Paul Campbell",
  tagline: "Your Voice for the Automotive World.",
  profileImage: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  shortBio: "I craft compelling content that accelerates brands in the automotive industry. With a unique blend of mechanical insight and sharp storytelling, I bring engines, design, and driving to life for audiences who share our passion.",
  summary: "As an automotive copywriter with over three years of dedicated experience, my mission is to bridge the gap between complex technical details and captivating narratives. My work isn't just about words; it's about understanding the nuances of vehicle innovation, the history of iconic designs, and the thrill of the open road. I translate intricate drivetrain advancements, explore the cultural tapestry of street racing, and dissect emerging safety technologies into features that inform, entertain, and genuinely connect with enthusiasts and new drivers alike. Backed by hands-on mechanical understanding, I offer a unique perspective that ensures authenticity and authority in every piece.",
  address: "8641 N Kansas Ave, Kansas City, MO 64156",
  email: "p14aulcampbell@gmail.com",
  experience: [
    {
      title: "Freelance Writer – Auto Features & Industry Trends",
      company: "Self-Employed",
      location: "Remote",
      years: "2021 – Present",
      responsibilities: [
        "Delivered 2,500–3,000 word articles exploring EV tech, car history, and performance builds for leading auto publications.",
        "Collaborated with editors to pitch fresh story angles, ensuring content aligned with platform voice and audience.",
        "Conducted extensive research across industry forums, press releases, and firsthand sources for unparalleled accuracy.",
        "Crafted technically precise content accessible to both new drivers and seasoned gearheads, maintaining high engagement.",
      ],
    },
    {
      title: "Staff Writer",
      company: "TorqueLine Media",
      location: "Remote",
      years: "2019 – 2021",
      responsibilities: [
        "Covered daily news and wrote long-form features for a mid-size auto blog with a global reach of 500k+ monthly readers.",
        "Specialized in classic models, emerging safety technology, and motorsport race analysis, driving increased traffic by 15%.",
        "Optimized web content for SEO, balancing discoverability with authentic voice and factual accuracy.",
        "Managed weekly content delivery in collaboration with a rotating team of editors under tight deadlines.",
      ],
    },
    {
      title: "Content Assistant",
      company: "Fast Track Performance",
      location: "Kansas City, MO",
      years: "2016 – 2019",
      responsibilities: [
        "Assisted in building the brand’s foundational content library, including detailed spec breakdowns and buyer guides.",
        "Contributed to organizing and writing customer-facing blog posts and monthly newsletters, boosting engagement by 20%.",
        "Translated complex service jargon into digestible, helpful copy for both enthusiasts and casual visitors, improving user understanding.",
        "Worked alongside mechanics and shop owners, gaining practical insights into real-world vehicle systems for enhanced editorial storytelling.",
      ],
    },
  ],
  education: [
    {
      institution: "Metropolitan Community College – Kansas City",
      degree: "Associate of Arts, Liberal Studies",
      graduated: "2015",
    },
  ],
  skills: [
    "Automotive feature writing and long-form storytelling",
    "Deep understanding of car systems and technical terms",
    "SEO-conscious content creation and optimization",
    "Familiarity with CMS platforms and online formatting",
    "Strong command of AP Style and editorial structure",
    "Technical translation for mass appeal",
    "Research and fact-checking expertise",
    "Fast, clean draft production under tight deadlines",
  ],
  callToActionText: "View My Portfolio",
  callToActionLink: "/portfolio",
};

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "I'd love to hear from you. Feel free to reach out directly using the details below.",
  cardTitle: "Contact Details",
  email: {
    label: "Email",
    value: "p14aulcampbell@gmail.com",
    link: "mailto:p14aulcampbell@gmail.com",
  },
  address: {
    label: "Address",
    value: "8641 N Kansas Ave, Kansas City, MO 64156",
  },
  phone: {
    label: "Phone",
    value: "+1 (816) 555-1234",
    link: "tel:+1-816-555-1234",
  },
  footerNote: "I look forward to discussing how my automotive copywriting skills can benefit your next project.",
};

export const footerContent: FooterContent = {
  companyName: "Paul Campbell",
  tagline: "Automotive Copywriter & Former Mechanic",
  slogan: "Where Mechanical Precision Meets Editorial Excellence",
  contactEmail: "p14aulcampbell@gmail.com",
  contactPhone: "+1 (816) 555-1234",
  contactAddress: "8641 N Kansas Ave, Kansas City, MO 64156",
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/paul-campbell", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com/paulcampbell", icon: "Twitter" },
    { name: "Instagram", url: "https://www.instagram.com/paulcampbell", icon: "Instagram" },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: uuidv4(),
    image: "https://www.currencytransfer.com/wp-content/uploads/2022/11/ev-2-edit.min_.jpg",
    title: "Why Tesla Fans Are the Flat-Earthers of the Car World",
    description: "Some Tesla fans don’t act like car buyers. They act like believers. Online, loyalty to Tesla often looks less like appreciation for a product and more like devotion to a mission. Fan posts often read like sermons, packed with praise, prophecy, and warnings for the doubters. In forums and replies, Elon Musk is often celebrated not for what the cars do now, but for what he says they’ll do next. When someone points out a flaw, whether it’s a steering wheel falling off or Full Self-Driving glitching into a bike lane, they don’t get a real conversation. They get attacked. Critics get called liars, Luddites, or worse. The point isn’t debate. It’s defense.",
    pdfLink: "/pdfs/Why_Tesla_Fans_Are_the_Flat-Earthers_of_the_Car_World.pdf",
  },
  {
    id: uuidv4(),
    image: "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cae423e713b_-_american-muscle-facts-06-0312-xln.jpg?crop=1xw:0.991304347826087xh;center,top&resize=980:*",
    title: "Masculinity in Truck Ads: Out of Touch or Just Playing Tough?",
    description: "Truck ads have clung to one idea for decades: that masculinity is something you prove by towing a mountain, staring down danger, and avoiding any sign of weakness. It's not subtle, and it's not meant to be. Whether it’s a dust-covered cowboy or a dad with a thousand-yard stare and a power drill, the formula rarely changes. These ads don’t just sell trucks. They sell toughness as identity.",
    pdfLink: "/pdfs/Masculinity_in_Truck_Ads_Out_of_Touch_or_Just_Playing_Tough.pdf",
  },
  {
    id: uuidv4(),
    image: "https://media.cnn.com/api/v1/images/stellar/prod/180130144240-formula-e-car-gen2-front-facing.jpg?q=x_629,y_394,h_1752,w_3113,c_crop/w_800",
    title: "Car Names That Should’ve Been Laughed Out of the Room",
    description: "Some of the worst car names in automotive history were not accidents. They were pitched in meetings, vetted by legal, pushed by marketing, and approved at the highest levels. Entire teams signed off on names they thought sounded bold or forward-thinking. What left the boardroom as a branding win often landed on the dealership floor as a joke. The car stayed the same. What changed was how people talked about it.",
    pdfLink: "/pdfs/Car_Names_That_Should’ve_Been_Laughed_Out_of_the_Room.pdf",
  },
];

export const servicesData: Service[] = [
  {
    id: "s1",
    title: "Automotive Feature Writing",
    description: "Crafting compelling long-form articles, features, and in-depth analyses on various automotive topics, from cutting-edge technology to historical deep dives.",
    icon: "Car",
    features: [
      "In-depth research and reporting",
      "Engaging storytelling for enthusiasts",
      "SEO-optimized content for web presence",
      "Timely delivery of high-quality drafts",
    ],
  },
  {
    id: "s2",
    title: "Technical Content Development",
    description: "Translating complex automotive engineering and mechanical concepts into clear, concise, and accessible content for diverse audiences, including technical guides and explainers.",
    icon: "Settings",
    features: [
      "Buyer guides and product reviews",
      "Technical breakdown articles",
      "Workshop manuals & explainer content",
      "Accuracy verified with industry experts",
    ],
  },
  {
    id: "s3",
    title: "Blog & Article Management",
    description: "Providing ongoing content creation and management for automotive blogs and news sections, ensuring a consistent flow of fresh and relevant material.",
    icon: "PenTool",
    features: [
      "Content calendar planning",
      "Weekly/monthly article delivery",
      "Audience engagement strategies",
      "Performance tracking & optimization",
    ],
  },
  {
    id: "s4",
    title: "Copywriting for Marketing & Web",
    description: "Developing persuasive and brand-aligned copy for automotive websites, marketing campaigns, product descriptions, and promotional materials.",
    icon: "Rocket",
    features: [
      "Website content (About Us, Services, Product pages)",
      "Email marketing campaigns",
      "Social media content",
      "Ad copy and taglines",
    ],
  },
  {
    id: "s5",
    title: "Classic Car & Motorsport Content",
    description: "Specialized writing focusing on the heritage, restoration, and cultural significance of classic vehicles, as well as race reports and analysis from various motorsports.",
    icon: "Flag",
    features: [
      "Historical vehicle profiles",
      "Restoration project chronicles",
      "Motorsport event coverage",
      "Driver and team interviews",
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "Paul consistently delivers high-quality, insightful automotive content. His deep understanding of the industry, combined with a clear and engaging writing style, makes him an invaluable asset to any editorial team.",
    author: "Hailey Dennis",
    title: "Chief Editor",
    company: "AutoMoto Journal",
    image: "https://www.arctus.com/wp-content/uploads/2023/03/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png",
  },
  {
    id: "t2",
    quote: "Working with Paul was a breeze. He's incredibly professional, hits deadlines, and truly grasps complex technical concepts, translating them into compelling narratives that resonate with our audience.",
    author: "Jared Anderson",
    title: "Content Strategist",
    company: "GearHead Hub",
    image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg",
  },
  {
    id: "t3",
    quote: "Paul's passion for cars shines through in every piece he writes. He has a unique ability to connect with readers by blending factual reporting with an authentic enthusiast's perspective.",
    author: "Emily White",
    title: "Marketing Manager",
    company: "SpeedForge Customs",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEwPO-fKSOBFw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517613770803?e=2147483647&v=beta&t=bTwO1_zM29z95REAwIZcYCRSzw8Pof8UdvIkNndjYV8",
  },
];

export const statsData: StatItem[] = [
  {
    value: "12+",
    label: "Years Experience",
    description: "Both as a mechanic and automotive writer",
    icon: "Calendar",
  },
  {
    value: "250+",
    label: "Articles Published",
    description: "Across major automotive publications",
    icon: "Newspaper",
  },
  {
    value: "35+",
    label: "Brands Worked With",
    description: "From startups to industry leaders",
    icon: "PenTool",
  },
  {
    value: "8",
    label: "Industry Awards",
    description: "Recognizing excellence in automotive content",
    icon: "Award",
  },
];

export const valuePropsData: ValuePropItem[] = [
  {
    title: "Technical Expertise",
    description: "With years of hands-on mechanical experience, I bring authentic technical knowledge to every piece I write.",
    icon: "Wrench",
  },
  {
    title: "Compelling Storytelling",
    description: "I transform complex automotive concepts into engaging narratives that resonate with enthusiasts and newcomers alike.",
    icon: "Pen",
  },
  {
    title: "Industry Insight",
    description: "My connections and experience provide a unique perspective on where the automotive world has been and where it's heading.",
    icon: "Gauge",
  },
];