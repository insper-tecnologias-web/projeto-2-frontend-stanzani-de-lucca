import React from "react";
import { Sparkles, Zap, Heart, BookHeart, HeartCrack } from "lucide-react";
import PartyPopper from "@/components/party-popper";

import Container from "@/components/container";
import { cn } from "@/lib/utils";

const MoodCard = ({ mood }) => {
  return (
    <div className="group flex h-40 cursor-pointer flex-col justify-between rounded-md border border-zinc-800 bg-neutral-900 p-3.5 transition-all hover:bg-neutral-800">
      <div>
        <h2 className="mb-0.5 text-xl font-medium">{mood.name}</h2>
        <p className="text-sm text-neutral-500">{mood.description}</p>
      </div>
      <mood.icon
        size={30}
        className={cn("self-end transition-all", mood.color)}
      />
    </div>
  );
};

const Moods = () => {
  const moods = [
    {
      id: 1,
      name: "Electric Feel",
      color: "group-hover:text-amber-600",
      description: "If you're feeling energetic.",
      icon: Zap,
    },
    {
      id: 2,
      name: "Instant Crush",
      color: "group-hover:text-red-600",
      description: "If you're feeling romantic.",
      icon: Heart,
    },
    {
      id: 3,
      name: "Teenage Dream",
      color: "group-hover:text-[#DC7E94]",
      description: "If you're feeling nostalgic.",
      icon: BookHeart,
    },
    {
      id: 4,
      name: "My Dear Melancholy",
      color: "group-hover:text-blue-600",
      description: "If you're feeling down.",
      icon: HeartCrack,
    },
    {
      id: 5,
      name: "Dance The Night",
      color: "group-hover:text-pink-600",
      description: "If you're feeling confident.",
      icon: PartyPopper,
    },
  ];

  return (
    <Container>
      <div className="mb-7">
        <div className="mb-3 flex flex-row items-center gap-1.5">
          <Sparkles className="text-amber-500" size={36} />
          <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
            How are you <span className="">feeling</span>?
          </h1>
        </div>
        <p className="text-lg text-neutral-400">
          From grim to groovy, enjoy a curation of tunes for your every mood.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {moods.map((mood) => (
          <MoodCard key={mood.id} mood={mood} />
        ))}
      </div>
    </Container>
  );
};

export default Moods;
