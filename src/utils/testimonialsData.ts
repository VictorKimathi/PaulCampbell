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
      author: "Hailey Dennis",
      title: "Chief Editor",
      company: "AutoMoto Journal",
      image: "https://www.arctus.com/wp-content/uploads/2023/03/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png", // Placeholder for Jane Doe
    },
    {
      id: 't2',
      quote: "Working with Paul was a breeze. He's incredibly professional, hits deadlines, and truly grasps complex technical concepts, translating them into compelling narratives that resonate with our audience.",
      author: "Jared Anderson",
      title: "Content Strategist",
      company: "GearHead Hub",
      image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg", // Placeholder for John Smith
    },
    {
      id: 't3',
      quote: "Paul's passion for cars shines through in every piece he writes. He has a unique ability to connect with readers by blending factual reporting with an authentic enthusiast's perspective.",
      author: "Emily White",
      title: "Marketing Manager",
      company: "SpeedForge Customs",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQEwPO-fKSOBFw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517613770803?e=2147483647&v=beta&t=bTwO1_zM29z95REAwIZcYCRSzw8Pof8UdvIkNndjYV8", // Placeholder for Emily White
    },
   
  ];
