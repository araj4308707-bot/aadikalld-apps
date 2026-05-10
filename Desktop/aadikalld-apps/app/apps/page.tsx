const apps = [
  {
    name: "NT Study App",
    price: "₹19",
    desc: "Powerful study tools and educational apps.",
  },

  {
    name: "PW Learning App",
    price: "₹19",
    desc: "Premium learning apps and study materials.",
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-6 py-20">
      <h1 className="text-5xl font-black text-cyan-400 text-center">
        Study Apps 📚
      </h1>

      <section className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
        {apps.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-cyan-400/20 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-black">{item.name}</h2>

            <p className="text-cyan-400 text-2xl mt-4 font-bold">
              {item.price}
            </p>

            <p className="text-gray-300 mt-4">{item.desc}</p>

            <a
              href={`/payment?product=${encodeURIComponent(
                item.name
              )}&price=${item.price.replace("₹", "")}`}
              className="block w-full mt-8 py-4 rounded-2xl bg-cyan-400 text-black font-black text-center"
            >
              Buy Now
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}