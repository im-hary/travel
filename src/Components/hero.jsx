"use client";
import { useState } from "react";
import { IoMdPlayCircle } from "react-icons/io";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Destinations", "Hotels", "Flights", "Bookings"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,700;1,700&family=Poppins:wght@400;500;600;700&display=swap');
        .font-volkhov { font-family: 'Volkhov', serif; }
      `}</style>

      <div className="font-['Poppins',sans-serif] bg-white min-h-screen overflow-x-hidden">
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-5">
          <a href="#" className="flex gap-1 select-none no-underline">
            <img
              src="/Logo.png"
              alt="logo"
              className="w-[120px] sm:w-[140px]"
            />
          </a>

          <div className="hidden lg:flex items-center justify-between w-full max-w-[800px] ml-auto">
            <ul className="flex items-center justify-around w-[60%] list-none">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#212832] text-[15px] font-medium hover:text-[#DF6951]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button className="text-[#212832] text-[15px] font-medium hover:text-[#DF6951]">
                Login
              </button>
              <button className="border-2 border-[#181E4B] text-[#181E4B] px-4 py-2 rounded-md hover:bg-[#181E4B] hover:text-white">
                Sign up
              </button>
              <select className="bg-transparent text-[#212832] text-[15px] outline-none">
                <option>EN</option>
                <option>FR</option>
                <option>ES</option>
              </select>
            </div>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute top-[68px] left-0 right-0 bg-white shadow-xl flex flex-col gap-4 px-6 py-5 lg:hidden">
              {[...navLinks, "Login", "Sign up"].map((item) => (
                <a key={item} href="#" className="text-[#212832]">
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-center md:text-start lg:text-start py-10 md:py-16">
          <div className="order-2 md:order-1 flex flex-col gap-6 px-2 lg:px-10 xl:px-32 ">
            <p className="text-[#DF6951] text-xs font-bold uppercase tracking-[3px]">
              Best Destinations Around the World
            </p>

            <div className="font-volkhov font-bold text-[#181E4B] leading-tight text-xl sm:text-4xl md:text-5xl lg:text-[70px]">
              Travel,
              <span className="relative inline-block ml-2">
                enjoy
                <img
                  src="/OrangeDecore.png"
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80px] sm:w-[120px] md:w-[150px]"
                  alt=""
                />
              </span>
              <br />
              and live a new
              <br />
              and full life
            </div>

            <p className="text-[#5E6282] text-sm sm:text-base max-w-[400px]">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening.
            </p>

            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg shadow-lg">
                Find out more
              </button>

              <button className="flex items-center gap-3">
                <IoMdPlayCircle className="text-[#DF6951] text-[40px]" />
                <span className="text-[#686D77]">Play Demo</span>
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center items-center">
            <img
              src="/Decore.png"
              className="absolute top-[-120px] sm:top-[-150px] md:top-[-200px] w-[800px] sm:w-[350px] md:w-[1000px]  !left-[30px] hidden lg:block   z-5"
              alt=""
            />

            <img
              src="/plane.png"
              className="absolute top-0 left-10 w-12 sm:w-16 md:w-[100px] z-10 hidden lg:block"
              alt=""
            />

            <img
              src="/plane.png"
              className="absolute top-10 right-0 w-16 sm:w-20 md:w-[120px] z-10 hidden lg:block"
              alt=""
            />

            <img
              src="/Traveller 1.png"
              className="relative z-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}
