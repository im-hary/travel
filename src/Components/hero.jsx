// "use client";
// import { useState } from "react";
// import { IoMdPlayCircle } from "react-icons/io";
// export default function HeroSection() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navLinks = ["Destinations", "Hotels", "Flights", "Bookings"];
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,700;1,700&family=Poppins:wght@400;500;600;700&display=swap');
//         .font-volkhov { font-family: 'Volkhov', serif; }
//         .enjoy-underline {
//           position: relative;
//           display: inline-block;
//         }
//         .enjoy-underline::after {
//           content: '';
//           position: absolute;
//           left: 0; right: 0; bottom: -6px;
//           height: 8px;
//           background: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 7 Q35 2 70 6 Q105 10 138 4' stroke='%23DF6951' stroke-width='3.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center / 100% 100%;
//         }
//       `}</style>
//       <div className="font-['Poppins',sans-serif] bg-white min-h-screen overflow-x-hidden">
//         <nav className="relative z-20 flex items-center w-[100%] justify-between px-6 py-5 md:px-14 lg:px-5">
//           <a
//             href="#"
//             className="flex gap-1 select-none no-underline px-0 lg:px-20 w-[35%]"
//           >
//             <span className="font-volkhov text-2xl font-bold text-[#181E4B]">
//               <img src="/Logo.png" alt="airplane" className="" />
//             </span>
//           </a>
//           <div className="flex w-[65%] !justify-between items-center px-10 ">
//             <ul className="hidden lg:flex items-center w-[70%] justify-around list-none">
//               {navLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-[#212832] text-[15px] font-medium no-underline hover:text-[#DF6951] transition-colors"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="hidden lg:flex items-center gap-5 w-[40%]  justify-around">
//               <button className="bg-transparent border-0 text-[#212832] text-[15px] font-medium cursor-pointer hover:text-[#DF6951] transition-colors">
//                 Login
//               </button>
//               <button className="bg-transparent border-2 border-[#181E4B] text-[#181E4B] text-[15px] font-semibold px-5 py-2 rounded-md cursor-pointer hover:bg-[#181E4B] hover:text-white transition-all">
//                 Sign up
//               </button>
//               <select className="bg-transparent border-0 text-[#212832] text-[15px] font-medium cursor-pointer outline-none">
//                 <option>EN</option>
//                 <option>FR</option>
//                 <option>ES</option>
//               </select>
//             </div>
//           </div>
//           <button
//             className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-6 h-0.5 bg-[#181E4B] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-[#181E4B] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-[#181E4B] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
//             />
//           </button>
//           {menuOpen && (
//             <div className="absolute top-[68px] left-0 right-0 bg-white shadow-xl flex flex-col gap-4 px-6 py-5 z-50 lg:hidden">
//               {[...navLinks, "Login", "Sign up"].map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-[#212832] text-base font-medium no-underline hover:text-[#DF6951] transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           )}
//         </nav>
//         <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-4 p-32 ">
//           <div className="order-2 md:order-1 flex flex-col gap-6 pb-10 md:pb-16  z-10">
//             <div className="p-5">
//               <p className="text-[#DF6951] text-xs font-bold uppercase tracking-[3px]">
//                 Best Destinations Around the World
//               </p>
//               <h1 className="font-volkhov font-bold text-[#181E4B] leading-[1.18] text-4xl sm:text-5xl lg:text-[78px]">
//                 Travel,
//                 <span className="relative inline-block w-[50%]">
//                   <span className="relative z-10 w-full">enjoy</span>
//                   <img
//                     src="/OrangeDecore.png"
//                     className="absolute left-32 -translate-x-1/2 bottom-3 !w-fit"
//                     alt=""
//                   />
//                 </span>
//                 <br />
//                 and live a new
//                 <br />
//                 and full life
//               </h1>
//               <p className="text-[#5E6282] text-[15px] leading-relaxed max-w-[380px]">
//                 Built Wicket longer admire do barton vanity itself do in it.
//                 Preferred to sportsmen it engrossed listening. Park gate sell
//                 they west hard for the.
//               </p>
//               <div className="flex items-center gap-6 mt-2 flex-wrap">
//                 <button className="bg-[#F1A501] text-white text-base font-semibold px-8 py-4 rounded-lg border-0 cursor-pointer shadow-[0_12px_28px_rgba(241,165,1,0.38)] hover:shadow-[0_18px_36px_rgba(241,165,1,0.48)] hover:-translate-y-0.5 transition-all duration-200">
//                   Find out more
//                 </button>
//                 <button className="flex items-center gap-3 bg-transparent border-0 cursor-pointer group">
//                   <IoMdPlayCircle className="text-[#DF6951] text-[50px] drop-shadow-[0_6px_12px_rgba(223,105,81,0.4)] group-hover:drop-shadow-[0_8px_20px_rgba(223,105,81,0.6)] transition-all duration-200" />
//                   <span className="text-[#686D77] text-[15px] font-medium">
//                     Play Demo
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="order-1 md:order-2 relative flex items-end justify-center h-[280px] sm:h-[420px] md:h-[520px]">
//             <img
//               src="/Decore.png"
//               alt="airplane"
//               width={800}
//               height={800}
//               className="absolute -top-[250px] left-0 lg:left-32 z-5"
//             />
//             <img
//               src="/plane.png"
//               alt="airplane"
//               className="plane-a absolute -top-20 left-32 w-16 sm:w-20 md:w-[137px] z-10"
//             />
//             <img
//               src="/plane.png"
//               alt="airplane"
//               className=" absolute -top-10 right-0 w-[130px] z-10 "
//             />
//             <img
//               src="/Traveller 1.png"
//               alt="Happy traveller with backpack and luggage"
//               className="relative z-10  h-[400px] lg:h-[650px]  w-auto object-contain drop-shadow-2xl"
//             />
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
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
        
        {/* NAVBAR */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-5">
          <a href="#" className="flex gap-1 select-none no-underline">
            <img src="/Logo.png" alt="logo" className="w-[120px] sm:w-[140px]" />
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#181E4B] ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

          {/* MOBILE MENU */}
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

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-center md:text-start lg:text-start py-10 md:py-16">
          
          {/* TEXT */}
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

          {/* IMAGE */}
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