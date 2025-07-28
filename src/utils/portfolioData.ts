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
      image: 'https://www.currencytransfer.com/wp-content/uploads/2022/11/ev-2-edit.min_.jpg', // Placeholder image
      title: 'The Future of Electric Vehicles',
      description: 'An in-depth look at the latest advancements in EV battery technology and infrastructure.',
      pdfLink: '/pdfs/ev_tech_article.pdf', // Example: Path to your PDF in the public folder
    },
    {
      id: '2',
      image: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cae423e713b_-_american-muscle-facts-06-0312-xln.jpg?crop=1xw:0.991304347826087xh;center,top&resize=980:*',
      title: 'Reviving Classic Muscle Cars',
      description: 'Exploring the passion and intricate process behind restoring iconic American muscle cars.',
      pdfLink: '/pdfs/classic_muscle_cars.pdf',
    },
    {
      id: '3',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/180130144240-formula-e-car-gen2-front-facing.jpg?q=x_629,y_394,h_1752,w_3113,c_crop/w_800',
      title: 'Behind the Scenes of Formula E',
      description: 'A dive into the technological innovations and competitive spirit of electric motorsport.',
      pdfLink: '/pdfs/formula_e_motorsport.pdf',
    }
  ];