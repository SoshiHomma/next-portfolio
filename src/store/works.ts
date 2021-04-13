
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
    imageUrl: null,
    imageAlt: null,
  }
]
