import { memo } from "react";

const Skeleton = memo(() => (
  <div className="w-[250px] h-[220px] bg-[#FFFFFF21] rounded-lg animate-pulse" />
));

Skeleton.displayName = "Skeleton";

export default Skeleton;
