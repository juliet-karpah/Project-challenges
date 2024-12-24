export default function TestimonialCard() {
  return (
    <div className="drop-shadow-md w-[340px] mt-[200px] box-border bg-white text-black flex items-center rounded-md">
      <div className="flex flex-col mx-4 gap-2">
        <div className="flex h-1/4 gap-4">
          <img
            src="/profile-thumbnail.png"
            alt="avatar"
            className="w-12 rounded-full object-cover"
          />
          <div className="flex flex-col justify-between">
            <div className="font-semibold text-xl"> Sarah Dole </div>
            <div className="text-start text-neutral-400"> @sarahdole </div>
          </div>
        </div>

        <p className="text-start text-neutral-400">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
}
