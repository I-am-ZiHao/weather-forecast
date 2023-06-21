import { memo } from "react";

// TODO: real status
const StatusBar = memo(() => (
  <div className="w-16 h-1 rounded-[40px] bg-[#308FE8]" />
));

StatusBar.displayName = "StatusBar";

export default StatusBar;
