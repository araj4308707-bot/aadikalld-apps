export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white flex items-center justify-center px-6">
      <div className="bg-white/10 border border-cyan-400/20 rounded-3xl p-10 max-w-xl w-full text-center">
        <h1 className="text-5xl font-black text-cyan-400">
          Download Ready ✅
        </h1>

        <p className="text-gray-300 mt-6">
          Payment successful. Download your product below.
        </p>

        <a
          href="/apk/AS_MultiVerse_Infinity.apk"
          download
          className="block mt-8 py-4 rounded-2xl bg-cyan-400 text-black font-black"
        >
          Download APK
        </a>
      </div>
    </main>
  );
}