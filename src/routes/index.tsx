import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Navigation,
  Heart,
  ShieldCheck,
  Sparkles,
  Smile,
  Baby,
  Stethoscope,
  Instagram,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

/*
 * DADOS EXTRAÍDOS DO GOOGLE MAPS — Selecta Odonto
 * Nome: Selecta Odonto
 * Endereço: R. Dois, 110 A - Passaré, Fortaleza - CE, 60744-290
 * Telefone/WhatsApp: (85) 98405-8781
 * Horário: Seg–Sex 8h–19h | Sáb e Dom fechado
 * Nota: 4.8 (62 avaliações no Google)
 * Categoria: Dentista
 * Instagram: @selectaodonto
 * Fotos encontradas no perfil: 8 (todas em /images/foto-01.jpg … foto-08.jpg)
 */

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5585984058781&text=Ol%C3%A1%2C+vim+pelo+site+da+Selecta+Odonto+e+quero+agendar&type=phone_number&app_absent=0";
const MAPS_URL = "https://maps.google.com/?cid=14929066581155458468";
const WAZE_URL = "https://waze.com/ul?ll=-3.8017977,-38.5344583&navigate=yes";
const INSTAGRAM_URL = "https://instagram.com/selectaodonto";

const SERVICES = [
  { icon: Sparkles, title: "Limpeza e Profilaxia", desc: "Prevenção e saúde bucal em dia, com cuidado e gentileza." },
  { icon: Smile, title: "Facetas e Estética", desc: "Transforme seu sorriso com tratamentos estéticos modernos." },
  { icon: ShieldCheck, title: "Implantes", desc: "Recupere a função e a confiança com implantes seguros." },
  { icon: Stethoscope, title: "Tratamento de Canal", desc: "Endodontia com técnica e conforto em todas as etapas." },
  { icon: Heart, title: "Ortodontia", desc: "Alinhamento do sorriso com acompanhamento próximo." },
  { icon: Baby, title: "Odontopediatria", desc: "Atendimento carinhoso que faz as crianças perderem o medo." },
];

const REVIEWS = [
  {
    name: "Carlos Silva",
    text: "A clínica Odontológica Selecta fica no Passaré, ao lado do Supermercado Nido Box, o atendimento é excelente, o paciente se sente em casa e bem acolhido com o atendimento humanizado das jovens Dras. MEL, BRENNA e BRUNA e ainda temos uma recepção de primeira linha com o atendimento da Srta. Jéssica, nessa clínica você encontrará a solução para sorrir. Parabéns pelo profissionalismo.",
  },
  {
    name: "Raquel Aragão",
    text: "Sempre tive muito medo de dentista e, por isso, adiei esse tratamento por anos. Graças ao acolhimento, à calma e à segurança que a Dra. Bruna me transmitiu, consegui passar pelo procedimento com muito mais tranquilidade do que imaginava. Recomendo a clínica de coração 💚",
  },
  {
    name: "Viviane Peixoto",
    text: "A Clínica possui um ótimo atendimento, isso vai da recepção aos dentistas. Todos são muito atenciosos e competentes. Estou muito satisfeita com todos os procedimentos que realizo na clínica. Super recomendo.",
  },
  {
    name: "David Mota",
    text: "Meu filho foi atendido pela Dra Melyne e foi perfeito como ela realizou o atendimento com ele! Meu filho que tem medo de dentista me perguntou se ela poderia ser pra sempre a dentista dele rsrs. Muito obrigado!",
  },
  {
    name: "Elizabeth Nascimento",
    text: "Fui muito bem atendida, desde a recepção até o consultório. Fui atendida pela Dra Bruna e super atenciosa e cuidadosa. Irei retornar mais vezes.",
  },
];

const PHOTOS = [
  { src: "/images/foto-01.jpg", caption: "Nossa clínica" },
  { src: "/images/foto-02.jpg", caption: "Recepção acolhedora" },
  { src: "/images/foto-03.jpg", caption: "Estrutura moderna" },
  { src: "/images/foto-04.jpg", caption: "Consultório equipado" },
  { src: "/images/foto-05.jpg", caption: "Cuidado em cada detalhe" },
  { src: "/images/foto-06.jpg", caption: "Selecta Odonto" },
  { src: "/images/foto-07.jpg", caption: "Nossa identidade" },
  { src: "/images/foto-08.jpg", caption: "Sorrisos que transformam" },
];

const FAQ = [
  {
    q: "O tratamento dói?",
    a: "Nosso maior cuidado é com o seu conforto. Usamos anestesia adequada e técnicas suaves, e explicamos cada etapa antes de começar. Pacientes com medo de dentista se sentem acolhidos aqui — é o que mais elogiam nas avaliações.",
  },
  {
    q: "Vocês aceitam plano odontológico?",
    a: "Trabalhamos com atendimento particular e facilitamos o pagamento. Entre em contato pelo WhatsApp para confirmar as condições atuais e verificar se atendemos o seu plano.",
  },
  {
    q: "É possível parcelar o tratamento?",
    a: "Sim! Oferecemos opções de parcelamento para que o tratamento caiba no seu bolso. Fale com a nossa recepção pelo WhatsApp e montamos um plano para você.",
  },
  {
    q: "Atendem urgência?",
    a: "Sim, atendemos urgências dentro do horário de funcionamento (segunda a sexta, 8h às 19h). Chame no WhatsApp e faremos o possível para te encaixar no mesmo dia.",
  },
];

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "Dúvidas" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Selecta Odonto | Dentista no Passaré, Fortaleza" },
      {
        name: "description",
        content:
          "Selecta Odonto — Odontologia humanizada no Passaré, Fortaleza. R. Dois, 110 A. Nota 4.8 no Google. Agende pelo WhatsApp (85) 98405-8781.",
      },
      { property: "og:title", content: "Selecta Odonto | Dentista no Passaré, Fortaleza" },
      {
        property: "og:description",
        content:
          "Odontologia especializada com atendimento humanizado no Passaré, Fortaleza. Nota 4.8 (62 avaliações no Google). Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");

  const mapsKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as
    | string
    | undefined;
  const mapEmbedUrl = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=place_id:ChIJ4fuvqaRPxwcRpC3tPfWyLs8`
    : null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, sou ${nome || "paciente"} (${whats}), vim pelo site da Selecta Odonto e quero agendar`
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=5585984058781&text=${text}&type=phone_number&app_absent=0`,
      "_blank"
    );
  }

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Smile className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-primary">Selecta Odonto</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              className="rounded-md p-2 text-primary md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t bg-card px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/foto-02.jpg"
            alt="Selecta Odonto — clínica odontológica no Passaré, Fortaleza"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card/15 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              4.8 (62 avaliações no Google)
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
              Odontologia especializada com excelência no Passaré
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Atendimento humanizado que faz você se sentir em casa. Da recepção ao consultório,
              cuidamos do seu sorriso com carinho e profissionalismo.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/75">
              <MapPin className="h-4 w-4 shrink-0" />
              R. Dois, 110 A - Passaré, Fortaleza - CE
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar no WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Navigation className="h-5 w-5" />
                Como Chegar no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA CONFIANÇA */}
      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold">Seg a Sex, 8h às 19h</p>
              <p className="text-xs text-muted-foreground">Sábado e domingo fechado</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold">Fácil acesso no Passaré</p>
              <p className="text-xs text-muted-foreground">Ao lado do Supermercado Nido Box</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold">Atendimento humanizado</p>
              <p className="text-xs text-muted-foreground">Você se sente em casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Nossos serviços
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Cuidado completo para toda a família, em um só lugar.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Quem vai cuidar do seu sorriso
            </h2>
            <p className="mt-4 text-muted-foreground">
              A Selecta Odonto é uma clínica odontológica no coração do Passaré, em Fortaleza,
              reconhecida pelo atendimento humanizado. Nossa equipe — Dra. Melyne, Dra. Brenna e
              Dra. Bruna, com a recepção acolhedora da Jéssica — faz cada paciente se sentir em
              casa.
            </p>
            <p className="mt-3 text-muted-foreground">
              Aqui, a competência técnica anda junto com o cuidado: ouvimos seus medos, explicamos
              cada etapa e respeitamos o seu tempo. É por isso que pacientes que tinham medo de
              dentista hoje recomendam a Selecta de coração.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-secondary p-4">
              <Star className="h-8 w-8 shrink-0 fill-amber-400 text-amber-400" />
              <p className="text-sm font-medium text-secondary-foreground">
                Nota 4.8 de 5 no Google, com 62 avaliações de pacientes reais.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/foto-06.jpg"
              alt="Equipe Selecta Odonto — dentista no Passaré, Fortaleza"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Nossa estrutura
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Fotos reais do nosso perfil no Google Maps.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="group overflow-hidden rounded-2xl border bg-card shadow-sm">
              <img
                src={p.src}
                alt={`Selecta Odonto — ${p.caption}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="px-3 py-2 text-center text-xs font-medium text-muted-foreground">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Avaliações reais do nosso perfil no Google.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="flex flex-col rounded-2xl border bg-background p-6 shadow-sm">
                <Stars />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-primary">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Onde estamos
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            {mapEmbedUrl ? (
              <iframe
                title="Mapa da Selecta Odonto no Google Maps"
                src={mapEmbedUrl}
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[320px] items-center justify-center bg-secondary text-primary font-semibold"
              >
                Abrir mapa no Google Maps
              </a>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm">
                  <strong>R. Dois, 110 A - Passaré</strong>
                  <br />
                  Fortaleza - CE, 60744-290
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm">
                  Segunda a sexta: 8h às 19h
                  <br />
                  Sábado e domingo: fechado
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm">(85) 98405-8781</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </a>
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" />
                Abrir no Waze
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-10 space-y-3">
            {FAQ.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-xl border bg-background">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-primary"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section id="contato" className="bg-primary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Pronto para sorrir sem medo?
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Agende sua avaliação agora mesmo. Nossa equipe responde rapidinho no WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Agendar pelo WhatsApp
            </a>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-xl md:p-8">
            <h3 className="font-display text-xl font-semibold text-primary">
              Deixe seus dados que a gente chama você
            </h3>
            <label className="mt-5 block text-sm font-medium">
              Nome
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              WhatsApp
              <input
                type="tel"
                required
                value={whats}
                onChange={(e) => setWhats(e.target.value)}
                placeholder="(85) 99999-9999"
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Quero agendar
            </button>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-petrol-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                  <Smile className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="font-display text-lg font-bold">Selecta Odonto</span>
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70">
                Odontologia humanizada no Passaré, Fortaleza.
              </p>
            </div>
            <div className="text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Contato</p>
              <p className="mt-2">R. Dois, 110 A - Passaré, Fortaleza - CE</p>
              <p>(85) 98405-8781</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
                @selectaodonto
              </a>
            </div>
            <div className="text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Informações</p>
              <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
              <p>CRO: 00000</p>
              <p className="mt-2 text-xs text-primary-foreground/60">
                Fotos extraídas do perfil oficial no Google Maps.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Selecta Odonto. Todos os direitos reservados. Este site
              respeita a LGPD — seus dados são usados apenas para contato.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl animate-pulse-soft transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
