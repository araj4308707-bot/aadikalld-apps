"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const product = searchParams.get("product") || "Premium Product";
  const price = searchParams.get("price") || "19";

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: Number(price) * 100,
      currency: "INR",
      name: "AadiKallD Apps",
      description: product,
handler: function () {
  window.location.href = "/download";
},
      theme: {
        color: "#06b6d4",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <main className="min-h-screen bg-[#050510] text-white flex items-center justify-center px-6">
        <div className="bg-white/10 border border-cyan-400/20 rounded-3xl p-10 max-w-xl w-full text-center">
          <h1 className="text-5xl font-black text-cyan-400">Payment 💸</h1>

          <p className="text-gray-300 mt-6">Selected Product</p>
          <h2 className="text-3xl font-black mt-2">{product}</h2>

          <p className="text-cyan-400 text-5xl font-black mt-5">₹{price}</p>

          <button
            onClick={handlePayment}
            className="block w-full mt-8 py-4 rounded-2xl bg-green-400 text-black font-black"
          >
            Pay Now ₹{price}
          </button>
        </div>
      </main>
    </>
  );
}