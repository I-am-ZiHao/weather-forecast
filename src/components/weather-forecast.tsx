"use client";

import { KeyboardEvent, useRef } from "react";
import SearchInput from "./search-input";
import ErrorMessage from "./error-message";

const WeatherForecast = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onEnterSearchTerm = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") console.log(inputRef.current?.value);
  };

  return (
    // container with max-width
    <div className="max-w-7xl w-full sm:px-10 px-5 grow sm:pt-32 pt-24 pb-20">
      <SearchInput ref={inputRef} onKeyDown={onEnterSearchTerm} />

      {/* info section */}
      <div className="w-full py-16 flex flex-col items-center gap-2">
        <ErrorMessage message="Something Wrong." />
      </div>
    </div>
  );
};

export default WeatherForecast;
