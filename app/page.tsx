const sections = [
  {
    title: "Study Apps 📚",
    desc: "Powerful study tools and educational apps.",
    link: "/apps",
  },
  {
    title: "Gaming Zone 🎮",
    desc: "Premium Free Fire sensitivity and gaming tools.",
    link: "/gaming",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-6 py-20">
      <section className="text-center">
        <img src="/logo.png" alt="AadiXVerse" className="w-64 mx-auto" />

        <h1 className="text-6xl font-black mt-8 text-cyan-400">
          AadiXVerse
        </h1>

        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Explore powerful apps, tools and premium digital products created by
          Aditya Raj.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-24">
        {sections.map((app, index) => (
          <div
            key={index}
            className="bg-white/10 border border-cyan-400/30 rounded-3xl p-10 hover:scale-105 transition"
          >
            <h2 className="text-4xl font-black text-cyan-400">
              {app.title}
            </h2>

            <p className="text-gray-300 mt-6 text-lg">
              {app.desc}
            </p>

            <a
              href={app.link}
              className="block w-full mt-10 py-4 rounded-2xl bg-cyan-400 text-black font-black text-center"
            >
              Open Now
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}