
// TODO: This must be in types folder
export type Work = {
  title: string;
  description: string;
  technologyStack: string[];
  imageUrl: string | null;
  imageAlt: string | null;
}

export const workList: Work[] = [
  {
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "https://picsum.photos/800/600",
    imageAlt: null,
  },
  {
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "https://picsum.photos/1000/600",
    imageAlt: null,
  },
  {
    title: "ポートフォリオ",
    description: "現在閲覧しているサイトです。",
    technologyStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Chakra UI",
      "Vercel",
    ],
    imageUrl: "https://picsum.photos/600/600",
    imageAlt: null,
  },
  {
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
