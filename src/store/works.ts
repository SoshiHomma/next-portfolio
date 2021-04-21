
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
    slug: "portfolio",
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "/images/portfolio_1.png",
    imageAlt: null,
    images: [
      "/images/portfolio_1.png",
      "/images/portfolio_2.png",
      "/images/portfolio_3.png",
      "/images/portfolio_4.png",
    ],
    links: {
      github: "https://github.com/SoshiHomma/next-portfolio",
    }
  },
]
