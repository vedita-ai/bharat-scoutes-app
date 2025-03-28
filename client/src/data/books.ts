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
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/mapping.webp",
    category: "Skills",
    tag: "Technical",
    publishedYear: 2020
  },
  {
    id: 3,
    title: "Scout Guide Pragati Path",
    description: "The progression path for Scouts and Guides with detailed activities and achievement guidelines.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/scout_guide_pragati_path.webp",
    category: "Handbooks",
    tag: "Core",
    isNew: true,
    publishedYear: 2022
  },
  {
    id: 4,
    title: "Dwitiya Sopan Book (English)",
    description: "The second stage guidebook for Scout advancement with detailed badge requirements.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/Dwitiya_sopan_book.webp",
    category: "Handbooks",
    tag: "Essential",
    publishedYear: 2018
  },
  {
    id: 5,
    title: "Towards Rashtrapati Guide (Girl Guiding in India)",
    description: "A complete guide for girls working towards the prestigious Rashtrapati Guide award.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/Towards+Rashtrapati+Guide+(Girl+Guiding+in+India)+.webp",
    category: "Guides",
    tag: "Advanced",
    publishedYear: 2021
  },
  {
    id: 6,
    title: "Pravesh Scout (English)",
    description: "The entry-level guidebook for new scouts joining the movement with basic knowledge and activities.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/Pravesh+Scout.webp",
    category: "Handbooks",
    tag: "Core",
    publishedYear: 2021
  },
  {
    id: 7,
    title: "Girl Guiding by Lord Baden Powell",
    description: "The foundational text on Girl Guiding written by the founder himself, with timeless wisdom and principles.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/girl_guiding_by_lord_baden_powell.jpeg",
    category: "Guides",
    tag: "Classic",
    publishedYear: 1938
  },
  {
    id: 8,
    title: "Scouting for Boys (Hindi Edition)",
    description: "The seminal scouting handbook by founder Lord Baden-Powell, translated into Hindi for wider accessibility.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/Scouting+for+Boys.webp",
    category: "Handbooks",
    tag: "Classic",
    publishedYear: 2015
  },
  {
    id: 9,
    title: "First Aid Manual",
    description: "A comprehensive guide to first aid practices, emergency response, and health procedures for scouts and guides.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/First+Aid+Manual.webp",
    category: "Skills",
    tag: "Essential",
    publishedYear: 2020
  },
  {
    id: 10,
    title: "Ceremonies (English)",
    description: "A detailed guide to conducting various scout ceremonies, investitures, and formal gatherings.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/ceremonies.webp",
    category: "Handbooks",
    tag: "Procedural",
    publishedYear: 2019
  },
  {
    id: 11,
    title: "Life Story of BP (English)",
    description: "The biography of Lord Baden-Powell, detailing his life, military career, and founding of the Scout movement.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/life_store_of_bp.jpeg",
    category: "Biography",
    tag: "Historical",
    publishedYear: 2016
  },
  {
    id: 12,
    title: "APRO – 2 (English)",
    description: "Adult leader training manual focused on intermediate scout leadership skills and program organization.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/apro-2.webp",
    category: "Leadership",
    tag: "Training",
    publishedYear: 2018
  },
  {
    id: 13,
    title: "Pravesh Guide (English)",
    description: "The entry guidebook for new girl guides with fundamental skills and activities to begin the guiding journey.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/pravesh_guide.webp",
    category: "Guides",
    tag: "Core",
    publishedYear: 2021
  },
  {
    id: 14,
    title: "A Handbook for Troop Scouters",
    description: "A resource for Scout leaders with practical advice on running successful scout troops and activities.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/Handbook+for+Troop+Scouters.webp",
    category: "Leadership",
    tag: "Essential",
    publishedYear: 2019
  },
  {
    id: 15,
    title: "APRO – 1 (English)",
    description: "Basic adult leader training handbook covering the foundations of the scouting program and leadership.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/apro-1.webp",
    category: "Leadership",
    tag: "Training",
    publishedYear: 2018
  },
  {
    id: 16,
    title: "Bye Laws & Memorandum of National Association",
    description: "The official rules, regulations and organizational structure of the Bharat Scouts and Guides Association.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/by_law_and_memorandum_of_national_association.webp",
    category: "Official",
    tag: "Procedural",
    publishedYear: 2020
  },
  {
    id: 17,
    title: "Pratham Sopan Scout (English)",
    description: "The first advancement stage guidebook for scouts with detailed requirements and activities.",
    coverImage: "https://promptstudio-knowledgebase-data.s3.ap-south-1.amazonaws.com/bharat-scoutes/pratham_sopan_scout.webp",
    category: "Handbooks",
    tag: "Core",
    publishedYear: 2018
  }
];
