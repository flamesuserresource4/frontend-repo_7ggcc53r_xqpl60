import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex items-end md:items-center justify-center text-center p-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Connect. Share. React.
          </h1>
          <p className="mt-4 text-slate-200/90 max-w-2xl mx-auto text-sm md:text-base">
            A playful social feed where you can post updates, like your friends’ moments, and see the story unfold in real time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
