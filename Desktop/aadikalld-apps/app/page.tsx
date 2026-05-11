const sections = [
  {
    title: "📚 Study Apps",
    desc: "Powerful study tools and educational apps.",
    button: "Open Study Apps",
    link: "/apps"
  },

  {
    title: "🎮 Gaming Zone",
    desc: "Premium Free Fire sensitivity and gaming tools.",
    button: "Open Gaming Zone",
    link: "/gaming"
  }
];
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#00eaff33,transparent_35%),radial-gradient(circle_at_bottom_right,#8b5cf633,transparent_35%)]"></div>

      <nav className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div>
          <h1 className="text-3xl font-black text-cyan-400 tracking-wider">
            AadiXVerse
          </h1>
          <p className="text-xs text-gray-400">by Aditya Raj</p>
        </div>
<a
  href="/contact"
  className="px-6 py-3 rounded-full bg-cyan-400 text-black font-bold shadow-[0_0_25px_#22d3ee] hover:scale-110 transition"
>
  Contact
</a>
      </nav>

      <section className="relative z-10 text-center px-6 py-24">
        <div className="flex justify-center mb-10">
  <img
    src="/logo.png"
    alt="AadiXVerse"
    className="w-[320px] drop-shadow-[0_0_40px_#22d3ee]"
  />
</div>
        <p className="text-cyan-400 font-bold tracking-[0.3em] mb-5">
          PREMIUM APP STORE
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Download Free & Paid <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Android Apps
          </span>
        </h2>

        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Explore powerful apps, tools and premium digital products created by
          Aditya Raj.
        </p>

      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-8 pb-24 max-w-5xl mx-auto">
        {sections.map((app, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:scale-105 hover:border-cyan-400 transition duration-300 shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <span className="px-4 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-bold text-sm">
                {app.title}
              </span>
              <span className="text-2xl">⚡</span>
            </div>

            <h3 className="text-3xl font-black mt-6 group-hover:text-cyan-400 transition">
              {app.title}
            </h3>

            <p className="text-gray-300 mt-4 leading-7">{app.desc}</p>

            <p className="text-4xl font-black text-cyan-400 mt-7">
              {app.price}
            </p>

 <a
  href={app.link}
  className="block w-full mt-7 py-4 rounded-2xl bg-white text-black font-black hover:bg-cyan-400 hover:scale-105 active:scale-95 transition shadow-[0_0_20px_#ffffff55] text-center"
>
  Open Now
</a>
          </div>
        ))}
      </section>
<section className="relative z-10 px-6 pb-24 flex justify-center">
  <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_60px_#22d3ee55]">

    <img
      src="/aditya.png"
      alt="Aditya Raj"
      className="w-full h-[850px] object-cover"
    />

    <div className="p-10 text-center">
      <h2 className="text-6xl font-black text-cyan-400">
        Aditya Raj
      </h2>

      <p className="text-gray-300 mt-5 text-2xl leading-10">
        Hi, I am Aditya Raj. I am currently studying in Class 10 at St. Stephen's School, Patna. My dream is to become a Software Engineer and build powerful apps for the future.
      </p>
    </div>

  </div>
</section>
      <footer className="relative z-10 text-center py-8 border-t border-white/10 text-gray-400">
        © 2026 AadiXVerse • Made by Aditya Raj
      </footer>
    </main>
  );
}