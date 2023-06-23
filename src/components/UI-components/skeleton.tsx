import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  className?: string;
}

const Skeleton = memo(({ className }: SkeletonProps) => (
  <div
    className={twMerge(
      `w-[280px] h-[220px] bg-[#FFFFFF21] rounded-lg animate-pulse ${
        className ?? ""
      }`
    )}
  />
));

Skeleton.displayName = "Skeleton";

export default Skeleton;
