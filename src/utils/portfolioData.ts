// src/data/portfolioData.ts

export interface PortfolioItem {
  id: string; // Unique identifier for React keys
  image: string; // URL to the image thumbnail
  title: string;
  description: string;
  pdfLink: string; // URL or path to the PDF article
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    image: 'https://www.currencytransfer.com/wp-content/uploads/2022/11/ev-2-edit.min_.jpg',
    title: 'Why Tesla Fans Are the Flat-Earthers of the Car World',
    description:
      'Some Tesla fans don’t act like car buyers. They act like believers. Online, loyalty to Tesla often looks less like appreciation for a product and more like devotion to a mission. Fan posts often read like sermons, packed with praise, prophecy, and warnings for the doubters. In forums and replies, Elon Musk is often celebrated not for what the cars do now, but for what he says they’ll do next. When someone points out a flaw, whether it’s a steering wheel falling off or Full Self-Driving glitching into a bike lane, they don’t get a real conversation. They get attacked. Critics get called liars, Luddites, or worse. The point isn’t debate. It’s defense.',
    pdfLink: 'Why_Tesla_Fans_Are_the_Flat-Earthers_of_the_Car_World.pdf',
  },
  {
    id: '2',
    image:
      'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cae423e713b_-_american-muscle-facts-06-0312-xln.jpg?crop=1xw:0.991304347826087xh;center,top&resize=980:*',
    title: 'Masculinity in Truck Ads: Out of Touch or Just Playing Tough?',
    description:
      'Truck ads have clung to one idea for decades: that masculinity is something you prove by towing a mountain, staring down danger, and avoiding any sign of weakness. It\'s not subtle, and it\'s not meant to be. Whether it’s a dust-covered cowboy or a dad with a thousand-yard stare and a power drill, the formula rarely changes. These ads don’t just sell trucks. They sell toughness as identity.',
    pdfLink: 'Masculinity _in_Truck_Ads_Out_of_Touch_or_Just_Playing_Tough.pdf',
  },
  {
    id: '3',
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/180130144240-formula-e-car-gen2-front-facing.jpg?q=x_629,y_394,h_1752,w_3113,c_crop/w_800',
    title: 'Car Names That Should’ve Been Laughed Out of the Room',
    description:
      'Some of the worst car names in automotive history were not accidents. They were pitched in meetings, vetted by legal, pushed by marketing, and approved at the highest levels. Entire teams signed off on names they thought sounded bold or forward-thinking. What left the boardroom as a branding win often landed on the dealership floor as a joke. The car stayed the same. What changed was how people talked about it.',
    pdfLink: 'Car_Names_That_Should’ve_Been_Laughed_Out_of_the_Room.pdf',
  },
];
