const demoVideoUrl =
  "https://videos.pexels.com/video-files/7989709/7989709-hd_1920_1080_25fps.mp4";
const devBackgroundVideoUrl =
  "https://videos.pexels.com/video-files/6963744/6963744-hd_1920_1080_25fps.mp4";
const heroTitle = "Aprenda Python do zero e construa projetos reais com IA";
const brandLogoUrl = "https://cdn.simpleicons.org/python/FFFFFF";

const navItems = ["Features", "Enterprise", "Resources", "Pricing"];
const clientLogos = [
  { name: "Google", url: "https://cdn.simpleicons.org/google/FFFFFF" },
  { name: "Spotify", url: "https://cdn.simpleicons.org/spotify/FFFFFF" },
  { name: "Notion", url: "https://cdn.simpleicons.org/notion/FFFFFF" },
  { name: "Netflix", url: "https://cdn.simpleicons.org/netflix/FFFFFF" },
  { name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb/FFFFFF" },
  {
    name: "Slack",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/FFFFFF" },
  { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot/FFFFFF" },
];

function App() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden">
      <video
        className="video-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={devBackgroundVideoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-[#050913]/12" />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pt-7 pb-14 md:px-10 md:pt-9 lg:px-16 lg:pt-10">
        <header className="hero-fade-up mb-16 flex items-center justify-between rounded-b-xl border-b border-white/10 bg-[#15133a]/65 px-4 py-3 md:mb-20 md:px-5">
          <div className="flex items-center gap-10">
            <div className="inline-flex items-center gap-2.5">
              <img
                src={brandLogoUrl}
                alt="Python"
                className="h-7 w-7 shrink-0 object-contain"
              />
              <span className="text-lg font-semibold text-white">PyFlow</span>
            </div>

            <nav className="nav-hover-group hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="nav-hover-link inline-flex items-center gap-1.5 text-base font-medium text-white"
                >
                  {item}
                  {item !== "Pricing" ? (
                    <span className="text-[10px] text-white/80">⌄</span>
                  ) : null}
                </a>
              ))}
            </nav>
          </div>

          <div className="nav-hover-group hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="nav-hover-link text-base font-medium text-white/95"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="nav-hover-link text-base font-medium text-white/95"
            >
              Sign In
            </a>
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0d1220] transition hover:opacity-90 md:text-base">
              Start Free Trial
            </button>
          </div>
        </header>

        <section className="hero-fade-up mb-14 md:mb-16">
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ced7f8]">
            turma nova com vagas abertas
          </p>

          <h1 className="hero-text-reveal max-w-[900px] text-4xl font-semibold leading-[1.08] text-white md:text-6xl xl:text-[78px]">
            <span className="inline-flex items-end text-[#f2f6ff]">
              {heroTitle}
            </span>
          </h1>

          <p className="hero-text-reveal hero-text-reveal-delay mt-6 max-w-[820px] text-lg leading-relaxed text-[#c7d3f6] md:text-[32px] md:leading-tight">
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação.
          </p>

          <ul className="mt-8 grid max-w-[980px] gap-3 text-sm text-[#dce6ff] md:grid-cols-2 md:text-lg">
            {[
              "+40 horas de conteúdo direto ao ponto",
              "Projetos com Python + IA desde o módulo 1",
              "Suporte da comunidade com +20.000 alunos",
              "Certificado reconhecido pelo mercado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6f96ff]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b1328] transition hover:-translate-y-0.5 hover:opacity-90">
              Quero começar agora
            </button>
            <button className="rounded-full border border-white/25 bg-white/8 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15">
              Ver o que vou aprender
            </button>
          </div>
        </section>

        <section className="hero-fade-up">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1226]/80 p-2 shadow-[0_28px_55px_-28px_rgba(0,0,0,0.95)] md:rounded-3xl md:p-3">
            <video
              className="aspect-video w-full rounded-xl object-cover md:rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
            >
              <source src={demoVideoUrl} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </section>

        <section className="hero-fade-up mt-10 overflow-hidden border-y border-white/10 py-5 md:mt-14 md:py-6">
          <div className="logo-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={`logo-group-${groupIndex}`}
                className="logo-marquee-group"
                aria-hidden={groupIndex === 1}
              >
                {clientLogos.map((brand) => (
                  <img
                    key={`${brand.name}-${groupIndex}`}
                    src={brand.url}
                    alt={brand.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                    className="logo-marquee-item h-5 w-[84px] object-contain opacity-90 md:h-6 md:w-[96px]"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
