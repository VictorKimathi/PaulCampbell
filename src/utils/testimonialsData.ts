// src/data/testimonialsData.ts

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    title: string; // e.g., "Editor at TorqueLine Media"
    company: string;
    image?: string; // Optional: URL to the author's image/avatar
  }
  
  export const testimonialsData: Testimonial[] = [
    {
      id: 't1',
      quote: "Paul consistently delivers high-quality, insightful automotive content. His deep understanding of the industry, combined with a clear and engaging writing style, makes him an invaluable asset to any editorial team.",
      author: "Jane Doe",
      title: "Chief Editor",
      company: "AutoMoto Journal",
      image: "https://via.placeholder.com/100/FF5733/FFFFFF?text=JD", // Placeholder for Jane Doe
    },
    {
      id: 't2',
      quote: "Working with Paul was a breeze. He's incredibly professional, hits deadlines, and truly grasps complex technical concepts, translating them into compelling narratives that resonate with our audience.",
      author: "John Smith",
      title: "Content Strategist",
      company: "GearHead Hub",
      image: "https://via.placeholder.com/100/33FF57/FFFFFF?text=JS", // Placeholder for John Smith
    },
    {
      id: 't3',
      quote: "Paul's passion for cars shines through in every piece he writes. He has a unique ability to connect with readers by blending factual reporting with an authentic enthusiast's perspective.",
      author: "Emily White",
      title: "Marketing Manager",
      company: "SpeedForge Customs",
      image: "https://via.placeholder.com/100/3357FF/FFFFFF?text=EW", // Placeholder for Emily White
    },
   
  ];