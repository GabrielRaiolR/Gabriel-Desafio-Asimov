import { useState } from 'react'

function App() {
  const navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

  const serviceCards = [
    {
      title: ['Search engine', 'optimization'],
      illustration: '/assets/Illustration-Card-Section-1.svg',
      arrow: '/assets/Arrow-bottom-Card-Section.svg',
      variant: 'light',
    },
    {
      title: ['Pay-per-click', 'advertising'],
      illustration: '/assets/Illustration-Card-Section-2.svg',
      arrow: '/assets/Arrow-bottom-Card-Section-2.svg',
      variant: 'green',
    },
    {
      title: ['Social Media', 'Marketing'],
      illustration: '/assets/Illustration-Card-Section-3.svg',
      arrow: '/assets/Arrow-bottom-Card-Section.svg',
      variant: 'dark',
    },
    {
      title: ['Email', 'Marketing'],
      illustration: '/assets/Illustration-Card-Section-4.svg',
      arrow: '/assets/Arrow-bottom-Card-Section.svg',
      variant: 'light',
    },
    {
      title: ['Content', 'Creation'],
      illustration: '/assets/Illustration-Card-Section-5.svg',
      arrow: '/assets/Arrow-bottom-Card-Section-2.svg',
      variant: 'green',
    },
    {
      title: ['Analytics and', 'Tracking'],
      illustration: '/assets/Illustration-Card-Section-6.svg',
      arrow: '/assets/Arrow-bottom-Card-Section.svg',
      variant: 'dark',
    },
  ]

  const cardClasses = {
    light: 'bg-[#F3F3F3] border-[#191A23] text-[#191A23]',
    green: 'bg-[#B9FF66] border-[#191A23] text-[#191A23]',
    dark: 'bg-[#191A23] border-[#191A23] text-white',
  }

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      content:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      content:
        'We analyze your market, competitors, and audience data to define the strongest strategic path and campaign priorities for your goals.',
    },
    {
      number: '03',
      title: 'Implementation',
      content:
        'Our team executes the approved plan across channels, launching campaigns, publishing content, and configuring tracking for performance.',
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      content:
        'We continuously monitor results and optimize budgets, creatives, keywords, and messaging to improve conversions and ROI.',
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      content:
        'You receive clear and regular reports with actionable insights, plus direct communication to align next steps with your business priorities.',
    },
    {
      number: '06',
      title: 'Continual Improvement',
      content:
        'Based on learnings and new opportunities, we iterate strategies to sustain growth and keep your brand ahead in a changing digital landscape.',
    },
  ]

  const [openStepIndex, setOpenStepIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Marketing Director at XYZ Corp',
      quote:
        'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Growth at Nova Retail',
      quote:
        'Positivus helped us build a high-performing paid media strategy in just a few weeks. Our cost per acquisition dropped while qualified leads increased, and the reporting process is always clear and actionable.',
    },
    {
      name: 'Michael Lee',
      role: 'Co-Founder at BrightLabs',
      quote:
        'From SEO planning to content execution, the team brought structure and consistency to our marketing efforts. We now rank better for priority keywords and our inbound pipeline is much stronger.',
    },
    {
      name: 'Emily Carter',
      role: 'CMO at UrbanNest',
      quote:
        'What impressed us most was the speed of optimization. They constantly test, learn, and improve campaigns. In less than a quarter, we saw a major uplift in conversions across channels.',
    },
    {
      name: 'David Kim',
      role: 'Founder at ScaleForge',
      quote:
        'Positivus feels like an extension of our internal team. Communication is fast, strategy is grounded in data, and creative recommendations are always aligned with our business goals.',
    },
  ]

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO and Founder',
      text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      photo: '/assets/Team-john-smith-photo.svg',
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      photo: '/assets/Team-Jane-Doe-photo.svg',
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      photo: '/assets/Team-Michael-Brow-photo.svg',
    },
    {
      name: 'Emily Johnson',
      role: 'PPC Manager',
      text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      photo: '/assets/Team-Emile-Johson-photo.svg',
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content and community engagement',
      photo: '/assets/Team-Brian-William-photo.svg',
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      text: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      photo: '/assets/Team-Sarah-Kim-phtoo.svg',
    },
  ]

  return (
    <div className="bg-white text-[#191A23]">
      <main className="mx-auto w-full max-w-[1240px] px-5 py-6 md:px-8 md:py-10 lg:px-[100px]">
        <header className="animate-section mb-8 flex items-center justify-between md:mb-[70px]">
          <img
            src="/assets/Logo-header-positivus.svg"
            alt="Positivus"
            className="h-7 w-auto md:h-9"
          />
          <div className="hidden items-center gap-10 md:flex">
            <nav>
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group relative text-xl font-normal text-[#191A23]"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#B9FF66] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="rounded-[14px] border border-[#191A23] px-[35px] py-5 text-xl font-medium transition hover:bg-[#191A23] hover:text-white">
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
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media
              marketing, and content creation.
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
          <img src="/assets/Amazon-logo.svg" alt="Amazon" className="logo-luminosity mx-auto h-8 w-auto" />
          <img src="/assets/Dribble-logo.svg" alt="Dribbble" className="logo-luminosity mx-auto h-8 w-auto" />
          <img src="/assets/HubSpot.svg" alt="HubSpot" className="logo-luminosity mx-auto h-8 w-auto" />
          <img src="/assets/Notion-Logo.svg" alt="Notion" className="logo-luminosity mx-auto h-8 w-auto" />
          <img src="/assets/Netflix-logo.svg" alt="Netflix" className="logo-luminosity mx-auto h-8 w-auto" />
          <img src="/assets/Zoom-logo.svg" alt="Zoom" className="logo-luminosity mx-auto h-8 w-auto" />
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-center md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Services
            </h2>
            <p className="max-w-[580px] text-lg leading-[1.45]">
              At our digital marketing agency, we offer a range of services to help
              businesses grow and succeed online. These services include:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {serviceCards.map((card) => (
              <article
                key={card.title.join('-')}
                className={`flex min-h-[310px] flex-col justify-between rounded-[45px] border p-8 shadow-[0_5px_0_0_#191A23] md:p-[50px] ${cardClasses[card.variant]}`}
              >
                <div>
                  {card.title.map((line) => (
                    <p
                      key={line}
                      className={`w-fit rounded-[7px] px-[7px] py-1 text-2xl font-medium leading-none ${card.variant === 'green' ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66] text-[#191A23]'}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-4 text-xl font-normal"
                    aria-label={`Learn more about ${card.title.join(' ')}`}
                  >
                    <img src={card.arrow} alt="" className="h-[41px] w-[41px]" />
                    <span className="hidden md:inline">Learn more</span>
                  </a>
                  <img src={card.illustration} alt="" className="h-[146px] w-auto" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-section mb-10 rounded-[45px] bg-[#F3F3F3] px-8 py-10 md:mb-20 md:px-[60px] md:py-[40px]">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
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
            <img
              src="/assets/CTO-Ilustration.svg"
              alt=""
              className="mx-auto hidden w-[360px] md:block"
            />
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
                'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
                'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
                'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
              ].map((text, index) => (
                <article
                  key={text}
                  className={`md:px-8 ${index < 2 ? 'md:border-r md:border-white/30' : ''}`}
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
                className={`rounded-[45px] border border-[#191A23] px-8 py-8 shadow-[0_5px_0_0_#191A23] md:px-[60px] ${openStepIndex === Number(step.number) - 1 ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#191A23] pb-6">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-medium md:text-6xl">{step.number}</span>
                    <h3 className="text-xl font-medium md:text-3xl">{step.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenStepIndex((prev) =>
                        prev === Number(step.number) - 1 ? -1 : Number(step.number) - 1,
                      )
                    }
                    aria-label={`${openStepIndex === Number(step.number) - 1 ? 'Fechar' : 'Abrir'} etapa ${step.number}`}
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={
                        openStepIndex === Number(step.number) - 1
                          ? '/assets/Icon-Process-Work-Close.svg'
                          : '/assets/Icon-Process-Work-Open.svg'
                      }
                      alt=""
                      className="h-[58px] w-[58px]"
                    />
                  </button>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${openStepIndex === Number(step.number) - 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-lg leading-[1.45] transition-all duration-300 ${openStepIndex === Number(step.number) - 1 ? 'pt-6 opacity-100' : 'pt-0 opacity-0'}`}
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
              Meet the skilled and experienced team behind our successful digital
              marketing strategies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-10">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-[45px] border border-[#191A23] bg-white p-8 shadow-[0_5px_0_0_#191A23] md:min-h-[331px] md:p-10"
              >
                <div className="mb-7 border-b border-[#191A23] pb-7">
                  <div className="grid grid-cols-[98px_1fr_34px] items-start gap-5">
                    <img src={member.photo} alt={member.name} className="h-[98px] w-[98px] shrink-0" />
                    <div>
                      <h3 className="text-[20px] font-medium leading-[1.2]">{member.name}</h3>
                      <p className="text-lg leading-[1.35]">{member.role}</p>
                    </div>
                    <img
                      src="/assets/Team-linkedin-logo.svg"
                      alt=""
                      className="mt-1 h-[34px] w-[34px] justify-self-end"
                    />
                  </div>
                </div>
                <p className="text-lg leading-[1.4]">{member.text}</p>
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
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
              about Our Digital Marketing Services
            </p>
          </div>
          <div className="overflow-hidden rounded-[45px] bg-[#191A23] px-5 py-10 text-white md:px-0 md:py-[84px]">
            <div
              className="mb-14 flex gap-[50px] transition-transform duration-500 ease-out md:mb-[124px]"
              style={{ transform: `translateX(calc(${-testimonialIndex * 656}px + 317px))` }}
            >
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="w-[606px] shrink-0">
                  <div className="relative mb-5 h-[266px] w-[606px]">
                    <img
                      src="/assets/Testimonial-Bubble.svg"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                    <p className="absolute left-[52px] top-12 w-[502px] text-lg leading-[1.4]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="pl-20">
                    <p className="mb-1 text-[20px] font-medium leading-normal text-[#B9FF66]">
                      {testimonial.name}
                    </p>
                    <p className="text-lg leading-normal">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mx-auto flex w-full max-w-[564px] items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
                aria-label="Depoimento anterior"
                className="transition-transform duration-300 hover:-translate-x-1"
              >
                <img src="/assets/Testimonial-arrow.svg" alt="" className="h-5 w-5 rotate-180" />
              </button>
              <div className="flex items-center gap-5">
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
                          ? '/assets/Testimonial-Star-dot-next.svg'
                          : '/assets/Testimonial-Star-dot-open.svg'
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
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
                aria-label="Próximo depoimento"
                className="transition-transform duration-300 hover:translate-x-1"
              >
                <img src="/assets/Testimonial-arrow.svg" alt="" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="animate-section mb-10 md:mb-20">
          <div className="mb-8 flex flex-col gap-5 md:mb-20 md:flex-row md:items-start md:gap-10">
            <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-4xl font-medium leading-none">
              Contact Us
            </h2>
            <p className="max-w-[323px] text-lg leading-[1.45]">
              Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[45px] bg-[#F3F3F3] px-8 py-10 md:px-[100px] md:py-[60px]">
            <div className="relative z-10 max-w-[556px]">
              <div className="mb-10 flex gap-[35px]">
                <label className="flex items-center gap-3 text-lg">
                  <input
                    type="radio"
                    name="contactType"
                    defaultChecked
                    className="h-7 w-7 accent-[#B9FF66]"
                  />
                  Say Hi
                </label>
                <label className="flex items-center gap-3 text-lg">
                  <input type="radio" name="contactType" className="h-7 w-7 accent-[#B9FF66]" />
                  Get a Quote
                </label>
              </div>
              <form className="space-y-[25px]">
                <label className="block">
                  <span className="mb-1 block text-base leading-7">Name</span>
                  <input
                    className="h-[59px] w-full rounded-[14px] border border-[#191A23] bg-white px-[30px] text-lg placeholder:text-[#898989]"
                    type="text"
                    placeholder="Name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-base leading-7">Email*</span>
                  <input
                    className="h-[59px] w-full rounded-[14px] border border-[#191A23] bg-white px-[30px] text-lg placeholder:text-[#898989]"
                    type="email"
                    placeholder="Email"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-base leading-7">Message*</span>
                  <textarea
                    className="h-[190px] w-full rounded-[14px] border border-[#191A23] bg-white px-[30px] py-[18px] text-lg placeholder:text-[#898989]"
                    placeholder="Message"
                  />
                </label>
                <button className="h-[68px] w-full rounded-[14px] bg-[#191A23] px-8 text-xl font-normal text-white transition hover:opacity-90">
                  Send Message
                </button>
              </form>
            </div>
            <img
              src="/assets/Contact-Us-Illustration.svg"
              alt=""
              className="absolute right-[-220px] top-1/2 hidden w-[692px] -translate-y-1/2 md:block"
            />
          </div>
        </section>

        <footer className="animate-section rounded-t-[45px] bg-[#191A23] px-8 py-10 text-white md:px-[60px] md:py-[55px]">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <img src="/assets/Footer-Logo.svg" alt="Positivus" className="h-[29px] w-[180px]" />
            <nav>
              <ul className="flex flex-wrap items-center gap-[40px] text-lg underline">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-5">
              <img src="/assets/Footer-Logo-Linkedin.svg" alt="LinkedIn" className="h-[30px] w-[30px]" />
              <img src="/assets/Footer-logo-Facebook.svg" alt="Facebook" className="h-[30px] w-[30px]" />
              <img src="/assets/Footer-logo-Twitter.svg" alt="Twitter" className="h-[30px] w-[30px]" />
            </div>
          </div>
          <div className="mb-[50px] grid gap-8 border-b border-white pb-[50px] md:grid-cols-[332px_1fr] md:items-start md:gap-[154px]">
            <div>
              <p className="mb-[53px] inline-block rounded-[7px] bg-[#B9FF66] px-[7px] py-1 text-xl text-[#191A23]">
                Contact us:
              </p>
              <p className="mb-[23px] text-lg">Email: info@positivus.com</p>
              <p className="mb-[23px] text-lg">Phone: 555-567-8901</p>
              <p className="text-lg">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
            </div>
            <div className="rounded-[14px] bg-[#292A32] px-10 py-[58px]">
              <div className="grid gap-5 md:grid-cols-[285px_249px]">
                <input
                  className="h-[67px] rounded-[14px] border border-white bg-transparent px-[35px] text-lg text-white placeholder:text-white/70"
                  placeholder="Email"
                />
                <button className="h-[68px] rounded-[14px] bg-[#B9FF66] px-[35px] text-xl font-medium text-[#191A23]">
                  Subscribe to news
                </button>
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
  )
}

export default App
