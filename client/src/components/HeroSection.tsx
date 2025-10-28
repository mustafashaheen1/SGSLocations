export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://imagelocations.com/video/versace-evo-short.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Background Image (shown if video fails to load) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)',
            zIndex: -1
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
    </section>
  );
}
