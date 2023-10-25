import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-24 max-w-3xl px-6 md:mx-auto">
        <h1 className="animate-slide-up-fade mb-3 text-[60px] font-semibold leading-none tracking-tight sm:mb-6 sm:text-[72px] lg:text-[96px]">
          Your AI-powered <span className="text-gradient">personal DJ</span>.
        </h1>
        <div className="animate-fade">
          <p className="mb-6 max-w-md text-lg text-neutral-400 sm:text-xl lg:max-w-lg">
            Meet <span className="font-semibold">Moody</span>: an opinionated AI
            companion for you to discover fresh and exciting tunes.
          </p>
          <Button className="bg-neutral-200 text-neutral-900 hover:bg-neutral-200/90">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
