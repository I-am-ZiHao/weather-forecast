import SearchIcon from "@/icons/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-7xl w-full sm:px-10 px-5 grow sm:pt-32 pt-24 pb-20">
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
          ></input>
        </div>
      </div>
    </main>
  );
}
