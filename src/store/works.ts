
// TODO: This must be in types folder
export type Work = {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologyStack: string[];
  imageUrl: string | null;
  imageAlt: string | null;
  images?: string[];
  links: {
    github?: string;
  };
}

// temporary added
export function getAllWorks() {
  return workList
}
export function getWorkBySlug(slug: string) {
  return workList.find(work => work.slug === slug);
}

export const workList: Work[] = [
  {
    id: 1,
    slug: "portfolio1",
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
    ],
    imageUrl: "https://picsum.photos/800/600",
    imageAlt: null,
    images: [
      "https://picsum.photos/800/600",
      "https://picsum.photos/700/600",
      "https://picsum.photos/500/500",
      "https://picsum.photos/800/700",
    ],
    links: {
      github: "https://github.com/SoshiHomma/next-portfolio",
    }
  },
  {
    id: 2,
    slug: "portfolio2",
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Java",
      "Springboot"
    ],
    imageUrl: "https://picsum.photos/1000/600",
    imageAlt: null,
    links: {},
  },
  {
    id: 3,
    slug: "portfolio3",
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "https://picsum.photos/600/600",
    imageAlt: null,
    links: {},
  },
  {
    id: 4,
    slug: "portfolio4",
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "https://picsum.photos/800/400",
    imageAlt: null,
    links: {},
  },
]
