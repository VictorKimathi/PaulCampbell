// src/data/aboutData.ts

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
  
  export interface ProfileData {
    name: string;
    tagline: string; // A short, punchy tagline
    profileImage: string; // URL to the profile image
    shortBio: string; // A concise intro for the hero section
    summary: string; // The longer, detailed summary for the main profile section
    address: string;
    email: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    skills: string[];
    callToActionText: string;
    callToActionLink: string;
  }
  
  export const paulCampbellProfile: ProfileData = {
    name: "Paul Campbell",
    tagline: "Your Voice for the Automotive World.",
    profileImage: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg", // Placeholder profile image
    shortBio: "I craft compelling content that accelerates brands in the automotive industry. With a unique blend of mechanical insight and sharp storytelling, I bring engines, design, and driving to life for audiences who share our passion.",
    summary: "As an automotive copywriter with over three years of dedicated experience, my mission is to bridge the gap between complex technical details and captivating narratives. My work isn't just about words; it's about understanding the nuances of vehicle innovation, the history of iconic designs, and the thrill of the open road. I translate intricate drivetrain advancements, explore the cultural tapestry of street racing, and dissect emerging safety technologies into features that inform, entertain, and genuinely connect with enthusiasts and new drivers alike. Backed by hands-on mechanical understanding, I offer a unique perspective that ensures authenticity and authority in every piece.",
    address: "8641 N Kansas Ave, Kansas City, MO 64156",
    email: "p14aulcampbell@gmail.com",
    experience: [
      {
        title: "Freelance Writer – Auto Features & Industry Trends",
        company: "Remote",
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
        title: "Staff Writer – TorqueLine Media",
        company: "Remote",
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
        title: "Content Assistant – Fast Track Performance",
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
      "Automotive feature writing and longform storytelling",
      "Deep understanding of car systems and technical terms",
      "SEO-conscious content creation and optimization",
      "Familiarity with CMS platforms and online formatting",
      "Strong command of AP Style and editorial structure",
      "Technical translation for mass appeal",
      "Research and fact-checking expertise",
      "Fast, clean draft production under tight deadlines",
    ],
    callToActionText: "View My Portfolio",
    callToActionLink: "/portfolio", // Link to your portfolio page
  };