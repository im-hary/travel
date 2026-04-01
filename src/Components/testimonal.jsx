export default function TestimonialSection() {
  const brands = [
    { src: "/image 27.png", no: 1 },
    { src: "/image 28.png", no: 2 },
    { src: "/image 29.png", no: 3 },
    { src: "/image 30.png", no: 4 },
    { src: "/image 31.png", no: 5 },
  ];

  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Testimonials
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              What People Say
              <br />
              About Us.
            </h2>

            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <span className="h-3 w-3 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
            <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl sm:h-52 sm:w-52 lg:left-28 lg:translate-x-0" />

            <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]">
              <div className="relative z-10 w-full font-sans rounded-[22px] bg-white p-5 shadow-[0_22px_55px_rgba(15,23,42,0.10)] sm:w-[85%] sm:p-8 lg:ml-2 lg:w-[76%]">
                <div className="absolute -top-5 -left-2 h-14 w-14 overflow-hidden rounded-full border-4 border-white sm:-left-5 sm:left-auto sm:h-16 sm:w-16">
                  <img
                    src="user.png"
                    alt="Mike Taylor"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="pt-10 text-sm font-sans leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>

                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xl font-semibold text-slate-700 sm:text-2xl">
                    Mike taylor
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
              <img
                src="/Group 62.png"
                alt="Mike Taylor"
                className="h-[300px] w-full object-cover absolute -bottom-5 -right-10 hidden sm:block lg:-right-0 lg:-bottom-40"
              />
              <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:flex-col lg:-translate-y-1/2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 14 6-6 6 6" />
                  </svg>
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 10 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 md:gap-x-8 lg:mt-20 lg:grid-cols-5">
          {brands.map((brand, inx) => (
            <div
              key={brand.no}
              className="flex h-20 items-center justify-center rounded-xl text-center sm:h-24 bg-white shadow-lg"
            >
              <img
                src={brand.src}
                alt="Brand Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
