export default function BlogCard() {
  return (
    <div className="w-[340px] overflow-hidden mt-4 drop-shadow-md bg-white rounded-md border-box border-transparent">
      <img className="object-cover" src="/blogCard.jpg" alt="blog card image" />
      <div className="flex flex-col items-start p-4 gap-4 text-start">
      <span className="rounded-full text-sm bg-green-50 border-green-200 border-2 text-green-700 p-2 my-2">
        Interior
      </span>
        <h2 className="text-xl"> Top 5 Living Room Inspirations </h2>
        <p className="text-neutral-600">
          {" "}
          Curated vibrants colors for your living, make it pop & calm in the
          same line
        </p>
        <a className="flex gap-2 text-indigo-700 cursor items-center">
          {" "}
          Read more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
