export default function TravelStepsSection() {
  const steps = [
    {
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bg: "bg-amber-400",
      icon: "/Group 7.png",
    },
    {
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bg: "bg-orange-500",
      icon:"/Group 12.png",
    },
    {
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bg: "bg-cyan-700",
      icon: "/Group 11.png"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 flex  md:px-10 lg:px-16 ">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] ">
        <div className="max-w-xl ">
          <p className=" text-sm font-semibold text-slate-500 text-center ">
            Easy and Fast
          </p>

          <h2 className=" font-serif text-2xl  font-bold leading-tight text-slate-900 sm:text-5xl text-center lg:text-start ">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>

          <div className="mt-10 space-y-8 ">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 md:items-center md:justify-center">
                
                  <img src={step.icon} alt={`${step.title} icon`} className="h-14 w-14" />
                

                <div>
                  <h3 className="text-base font-semibold text-slate-700">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl" />

          <div className="relative rounded-[28px]  p-5 ">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/Image.png"
                alt="Trip to Greece"
                className="xl:h-[720px] w-full object-contain xl:object-cover lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
