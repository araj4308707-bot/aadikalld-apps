const socials = [
  {
    name: "Facebook",
    icon: "📘",
link: "https://www.facebook.com/share/1CcuZkV1HP/"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-6 py-16">

      <h1 className="text-5xl font-black text-cyan-400 text-center">
        Contact Aditya Raj
      </h1>

      <p className="text-center text-gray-300 mt-4">
        Connect with AadiXVerse.
      </p>

      <div className="grid grid-cols-1 gap-8 mt-14 max-w-xl mx-auto">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 hover:border-cyan-400 transition"
          >
            <div className="text-5xl">{social.icon}</div>

            <h2 className="text-2xl font-black mt-4">
              {social.name}
            </h2>

          </a>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="/"
          className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black"
        >
          Back to Home
        </a>
      </div>

    </main>
  );
}