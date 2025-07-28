// src/data/servicesData.ts

export interface Service {
    id: string;
    title: string;
    description: string;
    icon?: string; // Optional: A placeholder for an icon (e.g., a path to an SVG or a FontAwesome class)
    features?: string[]; // Optional: A list of key features or deliverables for the service
  }
  
  export const servicesData: Service[] = [
    {
      id: 's1',
      title: 'Automotive Feature Writing',
      description: 'Crafting compelling long-form articles, features, and in-depth analyses on various automotive topics, from cutting-edge technology to historical deep dives.',
      icon: '🚗', // Emoji as a simple icon placeholder
      features: [
        'In-depth research and reporting',
        'Engaging storytelling for enthusiasts',
        'SEO-optimized content for web presence',
        'Timely delivery of high-quality drafts',
      ],
    },
    {
      id: 's2',
      title: 'Technical Content Development',
      description: 'Translating complex automotive engineering and mechanical concepts into clear, concise, and accessible content for diverse audiences, including technical guides and explainers.',
      icon: '⚙️', // Emoji as a simple icon placeholder
      features: [
        'Buyer guides and product reviews',
        'Technical breakdown articles',
        'Workshop manuals & explainer content',
        'Accuracy verified with industry experts',
      ],
    },
    {
      id: 's3',
      title: 'Blog & Article Management',
      description: 'Providing ongoing content creation and management for automotive blogs and news sections, ensuring a consistent flow of fresh and relevant material.',
      icon: '✍️', // Emoji as a simple icon placeholder
      features: [
        'Content calendar planning',
        'Weekly/monthly article delivery',
        'Audience engagement strategies',
        'Performance tracking & optimization',
      ],
    },
    {
      id: 's4',
      title: 'Copywriting for Marketing & Web',
      description: 'Developing persuasive and brand-aligned copy for automotive websites, marketing campaigns, product descriptions, and promotional materials.',
      icon: '🚀', // Emoji as a simple icon placeholder
      features: [
        'Website content (About Us, Services, Product pages)',
        'Email marketing campaigns',
        'Social media content',
        'Ad copy and taglines',
      ],
    },
    {
      id: 's5',
      title: 'Classic Car & Motorsport Content',
      description: 'Specialized writing focusing on the heritage, restoration, and cultural significance of classic vehicles, as well as race reports and analysis from various motorsports.',
      icon: '🏁', // Emoji as a simple icon placeholder
      features: [
        'Historical vehicle profiles',
        'Restoration project chronicles',
        'Motorsport event coverage',
        'Driver and team interviews',
      ],
    },
  ];