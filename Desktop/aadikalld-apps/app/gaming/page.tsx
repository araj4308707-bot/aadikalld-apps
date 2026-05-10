const sensi = [
  { title: "1-2 GB Device", price: "₹19", desc: "Low-end phone ke liye smooth sensi." },
  { title: "4 GB Device", price: "₹29", desc: "Stable gameplay aur drag control." },
  { title: "6 GB Device", price: "₹49", desc: "Fast drag aur headshot control." },
  { title: "8 GB Device", price: "₹99", desc: "Pro level gaming setup." },
  { title: "12 GB Device", price: "₹119", desc: "Extreme performance sensi." },
  { title: "ALL IN ONE SENSI", price: "₹149", desc: "Sabhi device ka complete pack." },
];

export default function GamingPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-6 py-20">
      <h1 className="text-5xl font-black text-cyan-400 text-center">
        Gaming Zone 🎮
      </h1>

      <section className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {sensi.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-cyan-400/20 rounded-3xl p-8 hover:scale-105 transition"
          >
            <h2 className="text-3xl font-black">{item.title}</h2>

            <p className="text-cyan-400 text-2xl mt-4 font-bold">
              {item.price}
            </p>

            <p className="text-gray-300 mt-4">{item.desc}</p>

            <a
              href={`/payment?product=${encodeURIComponent(
                item.title
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