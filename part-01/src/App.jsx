import { useEffect, useState } from "react";

function App() {
  const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  const serviceCards = [
    {
      title: ["Search engine", "optimization"],
      illustration: "/assets/Illustration-Card-Section-1.svg",
      arrow: "/assets/Arrow-bottom-Card-Section.svg",
      variant: "light",
    },
    {
      title: ["Pay-per-click", "advertising"],
      illustration: "/assets/Illustration-Card-Section-2.svg",
      arrow: "/assets/Arrow-bottom-Card-Section-2.svg",
      variant: "green",
    },
    {
      title: ["Social Media", "Marketing"],
      illustration: "/assets/Illustration-Card-Section-3.svg",
      arrow: "/assets/Arrow-bottom-Card-Section.svg",
      variant: "dark",
    },
    {
      title: ["Email", "Marketing"],
      illustration: "/assets/Illustration-Card-Section-4.svg",
      arrow: "/assets/Arrow-bottom-Card-Section.svg",
      variant: "light",
    },
    {
      title: ["Content", "Creation"],
      illustration: "/assets/Illustration-Card-Section-5.svg",
      arrow: "/assets/Arrow-bottom-Card-Section-2.svg",
      variant: "green",
    },
    {
      title: ["Analytics and", "Tracking"],
      illustration: "/assets/Illustration-Card-Section-6.svg",
      arrow: "/assets/Arrow-bottom-Card-Section.svg",
      variant: "dark",
    },
  ];

  const cardClasses = {
    light: "bg-[#F3F3F3] border-[#191A23] text-[#191A23]",
    green: "bg-[#B9FF66] border-[#191A23] text-[#191A23]",
    dark: "bg-[#191A23] border-[#191A23] text-white",
  };

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We analyze your market, competitors, and audience data to define the strongest strategic path and campaign priorities for your goals.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Our team executes the approved plan across channels, launching campaigns, publishing content, and configuring tracking for performance.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "We continuously monitor results and optimize budgets, creatives, keywords, and messaging to improve conversions and ROI.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "You receive clear and regular reports with actionable insights, plus direct communication to align next steps with your business priorities.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "Based on learnings and new opportunities, we iterate strategies to sustain growth and keep your brand ahead in a changing digital landscape.",
    },
  ];

  const [openStepIndex, setOpenStepIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialsIsMdUp, setTestimonialsIsMdUp] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  const [contactType, setContactType] = useState("sayHi");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setTestimonialsIsMdUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const testimonials = [
    {
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Growth at Nova Retail",
      quote:
        "Positivus helped us build a high-performing paid media strategy in just a few weeks. Our cost per acquisition dropped while qualified leads increased, and the reporting process is always clear and actionable.",
    },
    {
      name: "Michael Lee",
      role: "Co-Founder at BrightLabs",
      quote:
        "From SEO planning to content execution, the team brought structure and consistency to our marketing efforts. We now rank better for priority keywords and our inbound pipeline is much stronger.",
    },
    {
      name: "Emily Carter",
      role: "CMO at UrbanNest",
      quote:
        "What impressed us most was the speed of optimization. They constantly test, learn, and improve campaigns. In less than a quarter, we saw a major uplift in conversions across channels.",
    },
    {
      name: "David Kim",
      role: "Founder at ScaleForge",
      quote:
        "Positivus feels like an extension of our internal team. Communication is fast, strategy is grounded in data, and creative recommendations are always aligned with our business goals.",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      photo: "/assets/Team-john-smith-photo.svg",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      photo: "/assets/Team-Jane-Doe-photo.svg",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      photo: "/assets/Team-Michael-Brow-photo.svg",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      photo: "/assets/Team-Emile-Johson-photo.svg",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content and community engagement",
      photo: "/assets/Team-Brian-William-photo.svg",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      text: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      photo: "/assets/Team-Sarah-Kim-phtoo.svg",
    },
  ];

  return (
    <div className="bg-white text-[#191A23]">
      <main className="mx-auto w-full max-w-[1240px] px-5 py-6 pb-0 md:px-8 md:py-10 md:pb-0 lg:px-[100px] lg:pb-0">
        <header className="animate-section mb-8 flex items-center justify-between md:mb-[70px]">
          <img
            src="/assets/Logo-header-positivus.svg"
            alt="Positivus"
            className="h-7 w-auto md:h-9"
          />
          <div className="hidden items-center gap-6 md:flex lg:gap-10">
            <nav>
              <ul className="flex items-center gap-4 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group relative whitespace-nowrap text-lg font-normal text-[#191A23] lg:text-xl"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#191A23] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="rounded-[14px] border border-[#191A23] px-6 py-3 text-base font-medium transition hover:bg-[#191A23] hover:text-white lg:px-[35px] lg:py-5 lg:text-xl">
              Request a quote
            </button>
          </div>
        </header>

        <section className="animate-section mb-8 grid items-center gap-8 md:mb-[70px] md:grid-cols-2 md:gap-10">
          <div className="order-2 md:order-1">
            <h1 className="mb-5 max-w-[530px] text-4xl font-medium leading-[1.1] md:mb-[35px] md:text-[60px]">
              Navigating the digital landscape for success
            </h1>
            <p className="mb-7 max-w-[500px] text-lg leading-normal md:mb-[35px] md:text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="rounded-[14px] bg-[#191A23] px-6 py-4 text-base font-medium text-white transition hover:opacity-90 md:px-[35px] md:py-5 md:text-xl">
              Book a consultation
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/assets/Hero-Section-Ilustracao.svg"
              alt="Ilustração de marketing digital"
              className="mx-auto w-full max-w-[600px]"
            />
          </div>
        </section>

        <section className="animate-section mb-14 grid grid-cols-2 items-center gap-6 md:mb-[140px] md:grid-cols-6">
          <img
            src="/assets/Amazon-logo.svg"
            alt="Amazon"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
          <img
            src="/assets/Dribble-logo.svg"
            alt="Dribbble"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
          <img
            src="/assets/HubSpot.svg"
            alt="HubSpot"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
          <img
            src="/assets/Notion-Logo.svg"
            alt="Notion"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
          <img
            src="/assets/Netflix-logo.svg"
            alt="Netflix"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
          <img
            src="/assets/Zoom-logo.svg"
            alt="Zoom"
            className="logo-luminosity mx-auto h-8 w-auto"
          />
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Services
            </h2>
            <p className="max-w-[580px] text-lg leading-[1.45]">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {serviceCards.map((card) => (
              <article
                key={card.title.join("-")}
                className={`group flex min-h-[310px] flex-col justify-between rounded-[45px] border p-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_0_0_#191A23] md:p-[50px] ${cardClasses[card.variant]}`}
              >
                <div>
                  {card.title.map((line) => (
                    <p
                      key={line}
                      className={`w-fit rounded-[7px] px-[7px] py-1 text-2xl font-medium leading-none ${card.variant === "green" ? "bg-[#F3F3F3]" : "bg-[#B9FF66] text-[#191A23]"}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-4 text-xl font-normal"
                    aria-label={`Learn more about ${card.title.join(" ")}`}
                  >
                    <img
                      src={card.arrow}
                      alt=""
                      className="h-[41px] w-[41px] transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                    <span className="hidden md:inline">Learn more</span>
                  </a>
                  <img
                    src={card.illustration}
                    alt=""
                    className="h-[146px] w-auto"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-section mb-10 rounded-[45px] bg-[#F3F3F3] px-8 py-10 md:mb-20 md:px-[60px] md:py-[40px]">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-x-10 md:gap-y-0 lg:gap-x-14">
            <div className="min-w-0">
              <h3 className="mb-6 text-3xl font-medium md:text-[30px]">
                Let&apos;s make things happen
              </h3>
              <p className="mb-6 max-w-[500px] text-lg leading-normal">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="rounded-[14px] bg-[#191A23] px-6 py-4 text-base font-medium text-white transition hover:opacity-90 md:px-[35px] md:py-5 md:text-xl">
                Get your free proposal
              </button>
            </div>
            <div className="hidden shrink-0 md:block md:self-center">
              <img
                src="/assets/CTO-Ilustration.svg"
                alt=""
                width={494}
                height={395}
                className="block h-[335px] w-[418px] max-w-none lg:h-[355px] lg:w-[444px]"
              />
            </div>
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Case Studies
            </h2>
            <p className="max-w-[580px] text-lg leading-[1.45]">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>

          <div className="rounded-[45px] bg-[#191A23] px-8 py-10 text-white md:px-[60px] md:py-[70px]">
            <div className="grid gap-8 md:grid-cols-3 md:gap-0">
              {[
                "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
                "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
                "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
              ].map((text, index) => (
                <article
                  key={text}
                  className={`md:px-8 ${index < 2 ? "md:border-r md:border-white/30" : ""}`}
                >
                  <p className="mb-5 text-lg leading-[1.45]">{text}</p>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 text-xl text-[#B9FF66]"
                  >
                    <span className="transition-transform duration-300 ease-out group-hover:scale-[1.04]">
                      Learn more
                    </span>
                    <img
                      src="/assets/Case-Study-Arrow.svg"
                      alt=""
                      className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Our Working Process
            </h2>
            <p className="max-w-[292px] text-lg leading-[1.45]">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
          <div className="space-y-[30px]">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`rounded-[45px] border border-[#191A23] px-8 py-8 shadow-[0_5px_0_0_#191A23] md:px-[60px] ${openStepIndex === Number(step.number) - 1 ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#191A23] pb-6">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-medium md:text-6xl">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-medium md:text-3xl">
                      {step.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenStepIndex((prev) =>
                        prev === Number(step.number) - 1
                          ? -1
                          : Number(step.number) - 1,
                      )
                    }
                    aria-label={`${openStepIndex === Number(step.number) - 1 ? "Fechar" : "Abrir"} etapa ${step.number}`}
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={
                        openStepIndex === Number(step.number) - 1
                          ? "/assets/Icon-Process-Work-Close.svg"
                          : "/assets/Icon-Process-Work-Open.svg"
                      }
                      alt=""
                      className="h-[58px] w-[58px]"
                    />
                  </button>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${openStepIndex === Number(step.number) - 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-lg leading-[1.45] transition-all duration-300 ${openStepIndex === Number(step.number) - 1 ? "pt-6 opacity-100" : "pt-0 opacity-0"}`}
                    >
                      {step.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Team
            </h2>
            <p className="max-w-[473px] text-lg leading-[1.45]">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-10">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-[45px] border border-[#191A23] bg-white p-8 shadow-[0_5px_0_0_#191A23] md:min-h-[331px] md:p-10"
              >
                {/* Altura fixa do bloco superior (~103px no Figma) para alinhar a linha entre cards da mesma linha */}
                <div className="mb-7 grid h-[103px] grid-cols-[98px_1fr_34px] items-start gap-x-5">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[98px] w-[98px] shrink-0 self-end"
                  />
                  <div className="flex min-h-0 flex-col justify-end overflow-hidden">
                    <h3 className="text-[20px] font-medium leading-[1.2]">
                      {member.name}
                    </h3>
                    <p className="line-clamp-3 text-lg leading-[1.35]">
                      {member.role}
                    </p>
                  </div>
                  <img
                    src="/assets/Team-linkedin-logo.svg"
                    alt=""
                    className="h-[34px] w-[34px] justify-self-end"
                  />
                </div>
                <div className="border-b border-[#191A23]" />
                <p className="mt-7 text-lg leading-[1.4]">{member.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <button className="rounded-[14px] bg-[#191A23] px-[76px] py-5 text-xl font-medium text-white transition hover:opacity-90">
              See all team
            </button>
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Testimonials
            </h2>
            <p className="max-w-[473px] text-lg leading-[1.45]">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </p>
          </div>
          <div className="overflow-hidden rounded-[45px] bg-[#191A23] px-5 py-10 text-white md:px-0 md:py-[84px]">
            <div
              className={`mb-14 flex transition-transform duration-500 ease-out md:mb-[124px] ${
                testimonialsIsMdUp ? "gap-[50px]" : "gap-0"
              }`}
              style={
                testimonialsIsMdUp
                  ? {
                      transform: `translateX(calc(${-testimonialIndex * 656}px + 317px))`,
                    }
                  : {
                      width: `${testimonials.length * 100}%`,
                      transform: `translateX(-${(100 / testimonials.length) * testimonialIndex}%)`,
                    }
              }
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className={
                    testimonialsIsMdUp
                      ? "w-[606px] shrink-0"
                      : "shrink-0 grow-0"
                  }
                  style={
                    testimonialsIsMdUp
                      ? undefined
                      : { width: `${100 / testimonials.length}%` }
                  }
                >
                  <div
                    className={`relative mb-5 ${
                      testimonialsIsMdUp
                        ? "h-[266px] w-[606px]"
                        : "aspect-[606/266] w-full max-w-full"
                    }`}
                  >
                    <img
                      src="/assets/Testimonial-Bubble.svg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    <p
                      className={`absolute text-white ${
                        testimonialsIsMdUp
                          ? "left-[52px] top-12 w-[502px] text-lg leading-[1.4]"
                          : "left-[10%] right-[10%] top-[15%] text-sm leading-snug sm:text-base"
                      }`}
                    >
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div
                    className={
                      testimonialsIsMdUp ? "pl-20" : "pl-4 sm:pl-10 md:pl-20"
                    }
                  >
                    <p className="mb-1 text-base font-medium leading-normal text-[#B9FF66] sm:text-[18px] md:text-[20px]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm leading-normal sm:text-base md:text-lg">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mx-auto flex w-full max-w-[564px] items-center justify-between gap-2">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((prev) => Math.max(0, prev - 1))
                }
                aria-label="Depoimento anterior"
                disabled={testimonialIndex === 0}
                className={`transition duration-300 hover:-translate-x-1 disabled:pointer-events-none ${
                  testimonialIndex === 0 ? "opacity-30" : "opacity-100"
                }`}
              >
                <img
                  src="/assets/Testimonial-arrow.svg"
                  alt=""
                  className="h-5 w-5 rotate-180"
                />
              </button>
              <div className="flex items-center gap-3 sm:gap-5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  >
                    <img
                      src={
                        testimonialIndex === index
                          ? "/assets/Testimonial-Star-dot-open.svg"
                          : "/assets/Testimonial-Star-dot-next.svg"
                      }
                      alt=""
                      className="h-[14px] w-[14px]"
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    Math.min(testimonials.length - 1, prev + 1),
                  )
                }
                aria-label="Próximo depoimento"
                disabled={testimonialIndex === testimonials.length - 1}
                className={`transition duration-300 hover:translate-x-1 disabled:pointer-events-none ${
                  testimonialIndex === testimonials.length - 1
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                <img
                  src="/assets/Testimonial-arrow.svg"
                  alt=""
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          {/* Heading — Figma 341:568: gap 40px entre título e subtítulo */}
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-start md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none md:text-[40px]">
              Contact Us
            </h2>
            <p className="max-w-[323px] text-lg leading-normal text-[#191A23]">
              Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
            </p>
          </div>
          {/* Figma 341:623 — card único 1240×773, ilustração no canto com overflow do próprio card */}
          <div className="relative w-full max-w-[1240px] overflow-hidden rounded-[45px] bg-[#F3F3F3] px-8 py-10 md:min-h-[773px] md:px-[100px] md:pb-[80px] md:pt-[60px] lg:mx-auto">
            <div className="relative z-10 flex w-full max-w-[556px] flex-col gap-10">
              {/* Figma: anel preto fino; selecionado = disco verde central com folga; não selecionado = vazio */}
              <div className="flex gap-[35px]">
                <label className="flex cursor-pointer items-center gap-x-[14px] text-lg font-semibold leading-normal text-black">
                  <input
                    type="radio"
                    name="contactType"
                    checked={contactType === "sayHi"}
                    onChange={() => setContactType("sayHi")}
                    className="sr-only appearance-none [-webkit-appearance:none]"
                  />
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border border-solid border-black bg-white"
                    aria-hidden
                  >
                    {contactType === "sayHi" ? (
                      <span className="size-4 shrink-0 rounded-full bg-[#B9FF66]" />
                    ) : null}
                  </span>
                  <span>Say Hi</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-[14px] text-lg font-semibold leading-normal text-black">
                  <input
                    type="radio"
                    name="contactType"
                    checked={contactType === "quote"}
                    onChange={() => setContactType("quote")}
                    className="sr-only appearance-none [-webkit-appearance:none]"
                  />
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border border-solid border-black bg-white"
                    aria-hidden
                  >
                    {contactType === "quote" ? (
                      <span className="size-4 shrink-0 rounded-full bg-[#B9FF66]" />
                    ) : null}
                  </span>
                  <span>Get a Quote</span>
                </label>
              </div>
              <form className="flex w-full flex-col gap-[25px]">
                <label className="block">
                  <span className="mb-[5px] block text-base leading-7 text-[#191A23]">
                    Name
                  </span>
                  <input
                    className="h-[59px] w-full rounded-[14px] border border-solid border-[#191A23] bg-white px-[30px] text-lg placeholder:text-[#898989]"
                    type="text"
                    placeholder="Name"
                  />
                </label>
                <label className="block">
                  <span className="mb-[5px] block text-base leading-7 text-[#191A23]">
                    Email*
                  </span>
                  <input
                    className="h-[59px] w-full rounded-[14px] border border-solid border-[#191A23] bg-white px-[30px] text-lg placeholder:text-[#898989]"
                    type="email"
                    placeholder="Email"
                  />
                </label>
                <label className="block">
                  <span className="mb-[5px] block text-base leading-7 text-[#191A23]">
                    Message*
                  </span>
                  <textarea
                    className="h-[190px] w-full resize-y rounded-[14px] border border-solid border-[#191A23] bg-white px-[30px] py-[18px] text-lg placeholder:text-[#898989]"
                    placeholder="Message"
                  />
                </label>
                <button
                  type="submit"
                  className="h-[68px] w-full rounded-[14px] bg-[#191A23] px-[35px] py-5 text-center text-xl font-normal leading-7 text-white transition hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
            <img
              src="/assets/Contact-Us-Illustration.svg"
              alt=""
              width={692}
              height={649}
              className="pointer-events-none absolute top-1/2 right-0 z-0 hidden h-[648px] w-[691px] max-w-none -translate-y-1/2 translate-x-1/2 object-contain md:block"
            />
          </div>
        </section>

        <footer className="animate-section w-full rounded-t-[45px] bg-[#191A23] px-5 pt-10 pb-10 text-white md:px-10 md:pt-[55px] md:pb-[55px] lg:px-[60px]">
        <div className="mb-10 flex flex-row flex-wrap items-center justify-between gap-x-3 gap-y-3 md:mb-16 md:gap-y-4">
          <img
            src="/assets/Footer-Logo.svg"
            alt="Positivus"
            className="h-4 w-auto shrink-0 md:h-5 lg:h-[29px] lg:w-[180px]"
          />
          <nav className="min-w-0">
            <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs underline md:gap-x-5 md:text-sm lg:gap-x-6 lg:text-base">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex shrink-0 gap-1.5 md:gap-2 lg:gap-5">
            <img
              src="/assets/Footer-Logo-Linkedin.svg"
              alt="LinkedIn"
              className="h-4 w-4 md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
            />
            <img
              src="/assets/Footer-logo-Facebook.svg"
              alt="Facebook"
              className="h-4 w-4 md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
            />
            <img
              src="/assets/Footer-logo-Twitter.svg"
              alt="Twitter"
              className="h-4 w-4 md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
            />
          </div>
        </div>
        <div className="mb-[50px] grid grid-cols-2 items-start gap-3 border-b border-white pb-[50px] sm:gap-4 lg:grid-cols-[332px_minmax(0,1fr)] lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-[74px]">
          <div className="min-w-0 pr-1 lg:w-[332px] lg:max-w-[332px] lg:shrink-0 lg:pr-0">
            <p className="mb-3 inline-block rounded-[7px] bg-[#B9FF66] px-[5px] py-0.5 text-sm text-[#191A23] lg:mb-[53px] lg:px-[7px] lg:py-1 lg:text-xl">
              Contact us:
            </p>
            <p className="mb-2 text-xs leading-snug lg:mb-[23px] lg:text-lg lg:leading-normal">
              Email: info@positivus.com
            </p>
            <p className="mb-2 text-xs leading-snug lg:mb-[23px] lg:text-lg lg:leading-normal">
              Phone: 555-567-8901
            </p>
            <p className="text-xs leading-snug lg:text-lg lg:leading-normal">
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="min-w-0 pl-1 lg:pl-0">
            <div className="min-w-0 max-w-full rounded-[14px] bg-[#292A32] px-3 py-6 sm:px-5 sm:py-8 lg:px-10 lg:py-[58px]">
              <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 lg:gap-5">
                <input
                  className="box-border h-[48px] min-h-[48px] min-w-0 w-full max-w-full rounded-[14px] border border-white bg-transparent px-2 text-sm text-white placeholder:text-white/70 sm:h-[52px] sm:min-h-[52px] sm:px-3 sm:text-base lg:h-[67px] lg:min-h-[67px] lg:max-w-[285px] lg:px-[35px] lg:text-lg"
                  placeholder="Email"
                />
                <button
                  type="button"
                  className="box-border h-[48px] min-h-[48px] rounded-[14px] bg-[#B9FF66] px-1.5 text-center text-[10px] font-medium leading-tight whitespace-nowrap text-[#191A23] sm:h-[52px] sm:min-h-[52px] sm:px-2 sm:text-xs md:px-3 md:text-sm lg:h-[68px] lg:min-h-[68px] lg:w-[249px] lg:px-[35px] lg:text-xl lg:leading-normal"
                >
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg md:flex-row md:items-center md:gap-10">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </footer>
      </main>
    </div>
  );
}

export default App;
