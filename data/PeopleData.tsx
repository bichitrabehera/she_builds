import { Person } from "@/types/Person";
export type TeamKey = "Sponsorship" | "Web" | "Design" | "Media" | "Marketing";

export const COFOUNDERS: Person[] = [
  {
    name: "Nikita Kumari",
    image: "/gallery/nikita.jpeg",
    linkedin: "https://www.linkedin.com/in/nikita-kumari2004/",
    role: "Co Founder",
  },
  {
    name: "Ekta Agarwal",
    image: "/gallery/ekta.jpeg",
    linkedin: "https://www.linkedin.com/in/theektaagrawal/",
    role: "Co Founder",
  },
  {
    name: "Trisha",
    image: "/gallery/trisha.jpeg",
    linkedin: "#",
    role: "Regional Head",
  },
];

export const TEAMS: Record<TeamKey, Person[]> = {
  Sponsorship: [
    {
      name: "Harsh Verma",
      image: "/gallery/harsh.jpeg",
      linkedin: "https://www.linkedin.com/in/harsh-verma-552161334/",
      role: "Sponsorship Team Lead",
    },
    {
      name: "Aastha",
      image: "/gallery/aastha.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Mehran Bashar",
      image: "/gallery/mehran.jpeg",
      linkedin: "https://www.linkedin.com/in/mehran-bashar-351a91368/",
      role: "Member",
    },
  ],
  Web: [
    {
      name: "Bichitra Behera",
      image: "/gallery/bichitra.jpeg",
      linkedin: "https://www.linkedin.com/in/bichitrabehera/",
      role: "Web Team Lead",
    },
    {
      name: "Matharishwa S",
      image: "/gallery/matha.jpeg",
      linkedin: "https://www.linkedin.com/in/matharishwa-s-322518325/",
      role: "Member",
    },
  ],
  Design: [
    {
      name: "Raksha",
      image: "/gallery/raksha.jpeg",
      linkedin: "#",
      role: "Design Team Lead",
    },
    {
      name: "Moulika K",
      image: "/gallery/moulika.jpeg",
      linkedin: "https://www.linkedin.com/in/moulika-k-ba8694335/",
      role: "Member",
    },
    {
      name: "Moulya",
      image: "/gallery/amulya.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Sushanth Sapare",
      image: "/gallery/sushant.jpeg",
      linkedin: "https://www.linkedin.com/in/sushanth-sapare",
      role: "Member",
    },
  ],
  Media: [
    {
      name: "Vivan",
      image: "/gallery/vivan.jpeg",
      linkedin: "#",
      role: "Media Team Lead",
    },
    {
      name: "Gnanesh V",
      image: "/gallery/gnanesh.jpeg",
      linkedin: "https://www.linkedin.com/in/gnanesh-v-5bab35395/",
      role: "Member",
    },
  ],
  Marketing: [
    {
      name: "Bharath S",
      image: "/gallery/bharath.jpeg",
      linkedin: "https://www.linkedin.com/in/bharath248m/",
      role: "Marketing Lead",
    },
    {
      name: "Tathagat",
      image: "/gallery/thatagat.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Naman",
      image: "/gallery/naman.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Lohitha",
      image: "/gallery/lohitha.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Faiza",
      image: "/gallery/faiza.jpeg",
      linkedin: "#",
      role: "Member",
    },
    {
      name: "Khushi Joshi",
      image: "/gallery/khushi.jpeg",
      linkedin: "https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/",
      role: "Member",
    },
  ],
};
