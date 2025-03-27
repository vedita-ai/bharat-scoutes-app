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
    title: "Bharat Scouts Handbook",
    description: "Official handbook for scout members",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Core",
    isNew: true,
    publishedYear: 2022
  },
  {
    id: 2,
    title: "Advanced Scout Skills Guide",
    description: "Techniques for senior scouts",
    coverImage: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Advanced",
    publishedYear: 2021
  },
  {
    id: 3,
    title: "Scout Promise & Law Guide",
    description: "Understanding scout principles",
    coverImage: "https://images.unsplash.com/photo-1516031190212-da133013de50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Core",
    publishedYear: 2020
  },
  {
    id: 4,
    title: "Pioneering Skills Manual",
    description: "Knots, structures, and camp craft",
    coverImage: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Technical",
    publishedYear: 2021
  },
  {
    id: 5,
    title: "First Aid for Scouts",
    description: "Emergency response guide",
    coverImage: "https://images.unsplash.com/photo-1535813147-bb94a5209db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Essential",
    publishedYear: 2022
  },
  {
    id: 6,
    title: "Leadership Training Manual",
    description: "Developing scout leaders",
    coverImage: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handbooks",
    tag: "Leadership",
    publishedYear: 2021
  }
];
