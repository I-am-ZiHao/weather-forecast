import { UIComponentProps } from "@/types/props";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface CloseButtonProps extends UIComponentProps {
  onClick: () => void;
}

/**
 * @param className - for the cross icon
 */

const CloseButton = memo<CloseButtonProps>(({ onClick, className }) => {
  return (
    <button
      type="button"
      className="text-gray-400 bg-transparent rounded-[50%] p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <svg
        aria-hidden="true"
        className={twMerge(`sm:w-6 sm:h-6 w-5 h-5 ${className ?? ""}`)}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
});

CloseButton.displayName = "CloseButton";

export default CloseButton;
