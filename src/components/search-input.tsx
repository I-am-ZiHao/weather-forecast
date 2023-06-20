"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { SearchIcon } from "../../public/icons";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => (
    <div className="relative">
      <div className="absolute inset-y-0 sm:left-3 left-1 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        id="search"
        className="block w-full p-4 sm:pl-16 pl-10 text-lg border rounded-[40px] bg-gray-50 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-white-100"
        placeholder="Search City"
        required
        ref={ref}
        {...props}
      />
    </div>
  )
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
