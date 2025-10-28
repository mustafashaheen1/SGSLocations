export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://imagelocations.com/video/versace-evo-short.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
