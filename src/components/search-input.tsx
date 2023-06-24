"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { SearchIcon } from "../../public/icons";
import LoadingSpinner from "./UI-components/loading-spinner";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

/**
 * @param props - input props
 * @param ref - ref for input
 */

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ isLoading, ...props }, ref) => (
    <div className="relative animate-fadeInUp">
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
        // disable the input while fetching data
        disabled={isLoading}
        {...props}
      />

      {/* loading spinner on the right hand side */}
      {isLoading && (
        <div className="absolute inset-y-0 sm:right-3 right-1 flex items-center pointer-events-none text-white">
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
