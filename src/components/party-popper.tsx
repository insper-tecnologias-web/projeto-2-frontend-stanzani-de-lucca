import { cn } from "@/lib/utils";

const PartyPopper = ({
  size,
  colorOnHover = false,
}: {
  size: number;
  colorOnHover: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.toString() || "30"}
      height={size.toString() || "30"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="self-end"
    >
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-[#f59e0b]" : "text-[#f59e0b]",
        )}
        d="M5.8 11.3 2 22l10.7-3.79"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-purple-600" : "text-purple-600",
        )}
        d="M4 3h.01"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-purple-600" : "text-purple-600",
        )}
        d="M22 8h.01"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-purple-600" : "text-purple-600",
        )}
        d="M15 2h.01"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-purple-600" : "text-purple-600",
        )}
        d="M22 20h.01"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-pink-600" : "text-pink-600",
        )}
        d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-pink-600" : "text-pink-600",
        )}
        d="m22 13-.82-.33c-.86-.34-1.82.20-1.98 1.11v0c-.11.70-.72 1.22-1.43 1.22H17"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-pink-600" : "text-pink-600",
        )}
        d="m11 2 .33.82c.34.86-.20 1.82-1.11 1.98v0C9.52 4.90 9 5.52 9 6.23V7"
      ></path>
      <path
        className={cn(
          "transition-all",
          colorOnHover ? "group-hover:text-[#f59e0b]" : "text-[#f59e0b]",
        )}
        d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
      ></path>
    </svg>
  );
};

export default PartyPopper;
