export interface Book {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  tag: string;
  isNew?: boolean;
  publishedYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Geet Bharati",
    description: "A collection of popular scout and guide songs and prayers for meetings and gatherings.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/geet_bharati.webp",
    category: "Cultural",
    tag: "Core",
    publishedYear: 2019
  },
  {
    id: 2,
    title: "Mapping (English Edition)",
    description: "A comprehensive guide to map reading, navigation and orienteering skills for scouts.",
    coverImage: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Skills",
    tag: "Technical",
    publishedYear: 2020
  },
  {
    id: 3,
    title: "Scout Guide Pragati Path",
    description: "The progression path for Scouts and Guides with detailed activities and achievement guidelines.",
    coverImage: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Core",
    isNew: true,
    publishedYear: 2022
  },
  {
    id: 4,
    title: "Dwitiya Sopan Book (English)",
    description: "The second stage guidebook for Scout advancement with detailed badge requirements.",
    coverImage: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Essential",
    publishedYear: 2018
  },
  {
    id: 5,
    title: "Towards Rashtrapati Guide (Girl Guiding in India)",
    description: "A complete guide for girls working towards the prestigious Rashtrapati Guide award.",
    coverImage: "https://images.unsplash.com/photo-1535813147-bb94a5209db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Advanced",
    publishedYear: 2021
  },
  {
    id: 6,
    title: "Pravesh Scout (English)",
    description: "The entry-level guidebook for new scouts joining the movement with basic knowledge and activities.",
    coverImage: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Core",
    publishedYear: 2021
  },
  {
    id: 7,
    title: "Girl Guiding by Lord Baden Powell",
    description: "The foundational text on Girl Guiding written by the founder himself, with timeless wisdom and principles.",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Classic",
    publishedYear: 1938
  },
  {
    id: 8,
    title: "Scouting for Boys (Hindi Edition)",
    description: "The seminal scouting handbook by founder Lord Baden-Powell, translated into Hindi for wider accessibility.",
    coverImage: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Classic",
    publishedYear: 2015
  },
  {
    id: 9,
    title: "First Aid Manual",
    description: "A comprehensive guide to first aid practices, emergency response, and health procedures for scouts and guides.",
    coverImage: "https://images.unsplash.com/photo-1516031190212-da133013de50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Skills",
    tag: "Essential",
    publishedYear: 2020
  },
  {
    id: 10,
    title: "Ceremonies (English)",
    description: "A detailed guide to conducting various scout ceremonies, investitures, and formal gatherings.",
    coverImage: "https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Procedural",
    publishedYear: 2019
  },
  {
    id: 11,
    title: "Life Story of BP (English)",
    description: "The biography of Lord Baden-Powell, detailing his life, military career, and founding of the Scout movement.",
    coverImage: "https://images.unsplash.com/photo-1516117505818-5eacdb5523e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Biography",
    tag: "Historical",
    publishedYear: 2016
  },
  {
    id: 12,
    title: "APRO – 2 (English)",
    description: "Adult leader training manual focused on intermediate scout leadership skills and program organization.",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Training",
    publishedYear: 2018
  },
  {
    id: 13,
    title: "B.P. Photo (Large)",
    description: "An official ceremonial portrait of Lord Baden-Powell for display in scout halls and meeting rooms.",
    coverImage: "https://images.unsplash.com/photo-1516042438821-0abd7a7f2c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Resources",
    tag: "Official",
    publishedYear: 2017
  },
  {
    id: 14,
    title: "Pravesh Guide (English)",
    description: "The entry guidebook for new girl guides with fundamental skills and activities to begin the guiding journey.",
    coverImage: "https://images.unsplash.com/photo-1544239051-47f225f90b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Core",
    publishedYear: 2021
  },
  {
    id: 15,
    title: "A Handbook for Troop Scouters",
    description: "A resource for Scout leaders with practical advice on running successful scout troops and activities.",
    coverImage: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Essential",
    publishedYear: 2019
  },
  {
    id: 16,
    title: "APRO – 1 (English)",
    description: "Basic adult leader training handbook covering the foundations of the scouting program and leadership.",
    coverImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Training",
    publishedYear: 2018
  },
  {
    id: 17,
    title: "Bye Laws & Memorandum of National Association",
    description: "The official rules, regulations and organizational structure of the Bharat Scouts and Guides Association.",
    coverImage: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Official",
    tag: "Procedural",
    publishedYear: 2020
  },
  {
    id: 18,
    title: "Pratham Sopan Scout (English)",
    description: "The first advancement stage guidebook for scouts with detailed requirements and activities.",
    coverImage: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Core",
    publishedYear: 2018
  },
  {
    id: 19,
    title: "Nipun Rover Ranger Handbook",
    description: "Advanced guidebook for senior scouts (Rovers) and senior guides (Rangers) with specialized activities.",
    coverImage: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Advanced",
    tag: "Senior",
    isNew: true,
    publishedYear: 2022
  },
  {
    id: 20,
    title: "Sansthapak Ke Padchinha",
    description: "A reflective work on the footsteps and legacy of the founders of the scouting movement in India.",
    coverImage: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Historical",
    tag: "Cultural",
    publishedYear: 2017
  },
  {
    id: 21,
    title: "Wolf Cub Handbook",
    description: "The official handbook for junior scouts (cubs) with age-appropriate activities and advancement criteria.",
    coverImage: "https://images.unsplash.com/photo-1608447714925-599deeb5a682?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cubs",
    tag: "Core",
    publishedYear: 2019
  },
  {
    id: 22,
    title: "Lady B.P. Photo (Large)",
    description: "Official ceremonial portrait of Lady Baden-Powell, co-founder of the Girl Guides movement.",
    coverImage: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Resources",
    tag: "Official",
    publishedYear: 2017
  },
  {
    id: 23,
    title: "APRO – 3 (English)",
    description: "Advanced adult leader training manual for senior scout leaders covering complex program management.",
    coverImage: "https://images.unsplash.com/photo-1531303435785-3853ba035cda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Advanced",
    publishedYear: 2019
  },
  {
    id: 24,
    title: "Rovering to Success (E)",
    description: "Baden-Powell's guidance book for young adults on navigating life challenges through the scouting principles.",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Life Skills",
    tag: "Classic",
    publishedYear: 2018
  },
  {
    id: 25,
    title: "Camping & Hiking",
    description: "Comprehensive guide to outdoor activities, camp planning, hiking techniques and nature exploration.",
    coverImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Skills",
    tag: "Essential",
    publishedYear: 2020
  },
  {
    id: 26,
    title: "A Handbook of Cubbing",
    description: "Leaders' guide to running Cub Scout programs with age-appropriate activities and educational methods.",
    coverImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cubs",
    tag: "Leadership",
    publishedYear: 2018
  },
  {
    id: 27,
    title: "Pratham Sopan Guide (English)",
    description: "The first advancement stage guidebook for Girl Guides with detailed requirements and activities.",
    coverImage: "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Core",
    publishedYear: 2018
  },
  {
    id: 28,
    title: "Towards Golden Arrow (Bulbul)",
    description: "Achievement guide for junior girl guides (Bulbuls) working toward the Golden Arrow award.",
    coverImage: "https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Achievement",
    publishedYear: 2021
  },
  {
    id: 29,
    title: "Progress Card – Bulbul",
    description: "Activity tracking cards for Bulbul (junior Girl Guide) advancement program.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Resources",
    tag: "Procedural",
    publishedYear: 2021
  },
  {
    id: 30,
    title: "WAGGGS Book",
    description: "Official handbook of the World Association of Girl Guides and Girl Scouts with international guidelines.",
    coverImage: "https://images.unsplash.com/photo-1549675584-91f19b5544db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "International",
    tag: "Official",
    publishedYear: 2019
  },
  {
    id: 31,
    title: "Pravesh Rover (English)",
    description: "Entry-level handbook for older teen scouts (Rovers) transitioning to adult scouting.",
    coverImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Advanced",
    tag: "Core",
    publishedYear: 2020
  },
  {
    id: 32,
    title: "Scout Master Ki Or Sahayata",
    description: "Support and guidance handbook for Scout Masters with practical advice on troop management.",
    coverImage: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Essential",
    publishedYear: 2017
  },
  {
    id: 33,
    title: "Booklet for Beginners Course",
    description: "Introduction guide for new scout and guide leaders with basic program information.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Training",
    publishedYear: 2021
  },
  {
    id: 34,
    title: "Pravesh Ranger (English)",
    description: "Entry guidebook for senior girl guides (Rangers) transitioning to adult guiding and leadership.",
    coverImage: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    tag: "Core",
    publishedYear: 2020
  },
  {
    id: 35,
    title: "Booklet for Beginners Course (English)",
    description: "English version of the introduction guide for new scout and guide leaders.",
    coverImage: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
    tag: "Training",
    isNew: true,
    publishedYear: 2022
  },
  {
    id: 36,
    title: "Towards Golden Arrow (Cub)",
    description: "Achievement guide for Cub Scouts working toward the prestigious Golden Arrow award.",
    coverImage: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cubs",
    tag: "Achievement",
    publishedYear: 2021
  }
];
