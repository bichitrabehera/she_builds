export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  eventDate?: string;
  registrationUrl?: string;
  customButtonLabel?: string;
  pdfUrl?: string;
  author: { name: string; email: string };
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building in Public: Demo Day Vol. 4",
    content:
      "Watch community members ship real products — from AI tools to open-source projects. Live demos, live feedback, and real builds.",
    imageUrl: "/gallery/img2.png",
    eventDate: "2026-07-15",
    registrationUrl: "https://lu.ma/shebuilds-demo-day-4",
    customButtonLabel: "Save Your Seat",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "2",
    title: "Intro to React & Next.js Workshop",
    content:
      "A hands-on workshop for beginners. Build your first web app from scratch using React and Next.js. No prior experience needed.",
    imageUrl: "/gallery/img3.png",
    eventDate: "2026-06-28",
    registrationUrl: "https://lu.ma/shebuilds-react-workshop",
    customButtonLabel: "Register",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "3",
    title: "Design Portfolio Review Session",
    content:
      "Get feedback on your portfolio from senior designers at leading tech companies. Limited to 15 participants.",
    imageUrl: "/gallery/img4.png",
    eventDate: "2026-06-20",
    registrationUrl: "https://lu.ma/shebuilds-portfolio-review",
    customButtonLabel: "Apply for Slot",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "4",
    title: "Women in AI: Panel & Networking",
    content:
      "Hear from women leading AI research and product development. Followed by networking over coffee.",
    imageUrl: "/gallery/img1.png",
    eventDate: "2026-05-10",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "5",
    title: "Micro-Grant Pitch Day",
    content:
      "Ten finalists pitched their projects to a panel of judges. ₹5L+ in grants awarded to women-led tech initiatives.",
    eventDate: "2026-04-02",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "6",
    title: "Open Source Sprint Weekend",
    content:
      "A two-day hackathon where 60+ contributors shipped features, fixed bugs, and improved documentation for Indian OSS projects.",
    eventDate: "2026-03-15",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
  {
    id: "7",
    title: "Mentorship Circle: Career Transitions",
    content:
      "An intimate session with engineers who transitioned from non-tech backgrounds into product, design, and engineering roles.",
    eventDate: "2026-02-20",
    author: { name: "SheBuilds Team", email: "hello@shebuildsbangalore.com" },
  },
];
