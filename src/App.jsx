import Hero from './components/Hero'
import Composer from './components/Composer'
import Feed from './components/Feed'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 -mt-16 md:-mt-24">
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 md:p-6 backdrop-blur shadow-2xl">
          <Composer onCreate={() => {}} />
          <div className="h-6" />
          <Feed />
        </div>

        <footer className="py-12 text-center text-slate-400">
          Built with a playful 3D vibe.
        </footer>
      </main>
    </div>
  )
}

export default App
