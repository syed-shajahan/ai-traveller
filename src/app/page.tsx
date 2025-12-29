
export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden" >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-w-full min-h-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/3571264/" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/50" />

      <section className="relative z-20 py-20 text-center text-white">
        <h1 className="text-6xl font-bold">
          Plan your trip with AI 
        </h1>
        <p className="mt-4 text-zinc-200">
          Smart itineraries. Zero effort. ✈️
        </p>
      </section>
    </div>
  );
}