function Hero() {
  return (
    <section className="relative h-[128vh] md:h-screen bg-gradient-to-b from-brand to-brand/90 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="px-8 md:px-28 py-24 md:py-0 relative z-10 text-background w-full h-full flex justify-center items-center">
        <h2
          className="text-5xl md:text-7xl w-full md:w-7/12 text-center"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 700,
          }}
        >
          Contact Us
        </h2>
      </div>
    </section>
  )
}

export default Hero
