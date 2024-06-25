"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex  w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
const CARDS = [
  {
    id: 0,
    content: (
      <p>
        Selected from <Highlight>7000 candidates</Highlight> across Delhi University,
        only <Highlight>140 students</Highlight> were chosen, and I'm honored to be one of them and avail the <Highlight>Vice Chancellor Intership Scheme</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p>
        Leading the charge in <Highlight>sustainable business ideas</Highlight>
        at Enactus DDUC, where innovation meets impact.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p>
        Proud member with a key position in the The ACM <Highlight>(Association for Computing Machinery)</Highlight> DDUC Chapter and <Highlight>Data Analytics Club</Highlight>.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p>
        Triumphantly won the <Highlight>web development competition</Highlight>
        held by Sanaganika at DU College.
      </p>
    ),
  },
];

