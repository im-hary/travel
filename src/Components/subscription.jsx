"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br h-[600px] from-purple-50/50 via-white to-indigo-50/30">
      <div className="relative flex items-center jcustify-center max-w-7xl mx-auto">
        <div className="relative w-full">
          <img
            src="/Group 78.png"
            alt=""
            className="absolute -top-10 right-0 w-full hidden xl:block lg:block"
          />
          <img
            src="/Group 77.png"
            alt=""
            className="absolute -top-20 -right-8 hidden lg:block xl:block"
          />

          <div className="text-center font-sans flex flex-col items-center gap-6">
            <h3 className="text-md mx-auto sm:text-3xl lg:text-2xl w-[100%] lg:w-[50%] xl:w-[50%] font-semibold text-gray-600 bg-clip-text text-center mb-4">
              Subscribe to get information, latest news and other interesting
              offers about Jodoo and other
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mt-10"
            >
              <div className="relative flex-1">
                <FaRegEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 border border-gray-200 rounded-2xl 
      focus:outline-none focus:ring-4 focus:ring-purple-100/50 
      transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
    bg-gradient-to-r from-orange-500 to-orange-600 
    hover:from-orange-600 hover:to-orange-700 
    text-white font-semibold rounded-2xl shadow-lg 
    hover:shadow-xl hover:-translate-y-0.5 
    transform transition-all duration-200 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[350px]">
        <img src="/plus.png" alt="" />
      </div>
    </section>
  );
}
