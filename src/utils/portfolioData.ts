// src/data/portfolioData.ts

export interface PortfolioItem {
    id: string; // Unique identifier for React keys
    image: string; // URL to the image thumbnail
    title: string;
    description: string;
    pdfLink: string; // URL to the PDF article
  }
  
  export const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      image: 'https://via.placeholder.com/400x250/FF5733/FFFFFF?text=EV+Tech+Article', // Placeholder image
      title: 'The Future of Electric Vehicles',
      description: 'An in-depth look at the latest advancements in EV battery technology and infrastructure.',
      pdfLink: '/pdfs/ev_tech_article.pdf', // Example: Path to your PDF in the public folder
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/400x250/33FF57/FFFFFF?text=Classic+Cars',
      title: 'Reviving Classic Muscle Cars',
      description: 'Exploring the passion and intricate process behind restoring iconic American muscle cars.',
      pdfLink: '/pdfs/classic_muscle_cars.pdf',
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/400x250/3357FF/FFFFFF?text=Motorsport',
      title: 'Behind the Scenes of Formula E',
      description: 'A dive into the technological innovations and competitive spirit of electric motorsport.',
      pdfLink: '/pdfs/formula_e_motorsport.pdf',
    }
  ];