const sections = [
  {
    title: "Study Apps 📚",
    desc: "Premium educational apps and study resources.",
    link: "/apps",
    button: "Open Now",
  },

  {
    title: "Gaming Zone 🎮",
    desc: "Premium Free Fire sensitivity collection.",
    link: "/gaming",
    button: "Open Now",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white overflow-hidden">

      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-24 px-6">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-40 h-40 object-contain"
        />

        <h1 className="text-6xl font-black mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          AadixVerse
        </h1>

        <p className="text-gray-300 mt-6 text-xl max-w-2xl">
          Premium Study Apps and Gaming Collection
        </p>

      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-8 pb-24 max-w-5xl mx-auto mt-24">

        {sections.map((app, index) => (

          <div
            key={index}
            className="bg-white/10 border border-cyan-400/20 rounded-3xl p-8 hover:scale-105 transition"
          >

            <h2 className="text-4xl font-black">
              {app.title}
            </h2>

            <p className="text-gray-300 mt-6">
              {app.desc}
            </p>

            <a
              href={app.link}
              className="block w-full mt-8 py-4 rounded-2xl bg-cyan-400 text-black font-black text-center"
            >
              {app.button}
            </a>

          </div>

        ))}

      </section>

    </main>
  );
}