"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { SearchIcon } from "../../public/icons";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ isLoading, ...props }, ref) => (
    <div className="relative">
      {/* search icon on the left hand side */}
      <div className="absolute inset-y-0 sm:left-3 left-1 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>

      {/* text input */}
      <input
        type="text"
        id="search"
        className="block w-full p-4 sm:px-16 px-10 text-lg border rounded-[40px] bg-gray-50 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-white-100"
        placeholder="Search City"
        required
        ref={ref}
        {...props}
      />

      {/* loading spinner on the right hand side */}
      {isLoading && (
        <div className="absolute inset-y-0 sm:right-3 right-1 flex items-center pointer-events-none text-white">
          <svg className="animate-spin h-6 w-6 mr-3 ..." viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
