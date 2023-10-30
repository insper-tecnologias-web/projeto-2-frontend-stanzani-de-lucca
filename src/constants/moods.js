import { Zap, Heart, BookHeart, HeartCrack } from "lucide-react";
import PartyPopper from "@/components/party-popper";

export default [
  {
    id: 1,
    name: "Electric Feel",
    color: "text-amber-600",
    description: "If you're feeling energetic.",
    icon: Zap,
    slug: "electric-feel",
  },
  {
    id: 2,
    name: "Instant Crush",
    color: "text-red-600",
    description: "If you're feeling romantic.",
    icon: Heart,
    slug: "instant-crush",
  },
  {
    id: 3,
    name: "Teenage Dream",
    color: "text-[#DC7E94]",
    description: "If you're feeling nostalgic.",
    icon: BookHeart,
    slug: "teenage-dream",
  },
  {
    id: 4,
    name: "My Dear Melancholy",
    color: "text-blue-600",
    description: "If you're feeling down.",
    icon: HeartCrack,
    slug: "my-dear-melancholy",
  },
  {
    id: 5,
    name: "Dance The Night",
    color: "text-pink-600",
    description: "If you're feeling confident.",
    icon: PartyPopper,
    slug: "dance-the-night",
  },
];
