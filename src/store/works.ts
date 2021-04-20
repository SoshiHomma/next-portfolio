
// TODO: This must be in types folder
export type Work = {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologyStack: string[];
  imageUrl: string | null;
  imageAlt: string | null;
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
  },
]
