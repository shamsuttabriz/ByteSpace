const HeroSearch = () => {
  return (
    <form action="/courses" className="mx-auto mt-12 flex w-full max-w-[530px] items-center gap-3">
      <label className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-[#8d929c] shadow-sm">
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth="2">
          <circle cx="8.8" cy="8.8" r="5.8" />
          <path d="m13.2 13.2 4 4" />
        </svg>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          aria-label="Search courses, topics, and creators"
          className="min-w-0 flex-1 bg-transparent text-[14px] text-[#242528] outline-none placeholder:text-[#969ba4]"
        />
      </label>
      <button
        type="submit"
        className="h-11 shrink-0 rounded-full bg-primary px-6 text-[14px] font-medium text-[#242528] transition-colors hover:bg-[#e0ff48] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
