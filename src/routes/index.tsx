import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Check,
  Download,
  Heart,
  Hash,
  Palette,
  Puzzle,
  Printer,
  Shapes,
  Sparkles,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { icon: Hash, title: "Alfabeto e números", color: "bg-[#E4F3FC] text-[#1479B8]" },
  { icon: Shapes, title: "Formas e cores", color: "bg-[#FFF2C8] text-[#B47A00]" },
  { icon: Brain, title: "Atenção e memória", color: "bg-[#E7F5E9] text-[#3D9655]" },
  { icon: Palette, title: "Desenho e pintura", color: "bg-[#FFE9DF] text-[#E85D32]" },
  { icon: Puzzle, title: "Jogos educativos", color: "bg-[#F1E9FC] text-[#8653B8]" },
];

const imageNote = "Mockup ilustrativo: as páginas mostradas são exemplos visuais. O conteúdo imprimível final ainda será produzido.";

function Index() {
  return (
    <main id="topo" className="min-h-screen overflow-hidden bg-[#FFFCF4] text-[#18344B]">
      <div className="bg-[#125B8A] px-4 py-2.5 text-center text-xs font-bold tracking-wide text-white sm:text-sm">
        UM UNIVERSO DE DESCOBERTAS PARA APRENDER BRINCANDO
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Mundo das Descobertas Kids — início">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]"><Sparkles size={22} /></span>
          <span className="text-sm font-black leading-tight tracking-tight sm:text-base">Mundo das<br /><span className="text-[#1479B8]">Descobertas <span className="text-[#F46A3D]">KIDS</span></span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-[#52697A] md:flex">
          <a className="transition hover:text-[#1479B8]" href="#categorias">Atividades</a>
          <a className="transition hover:text-[#1479B8]" href="#kit">O que vem no kit</a>
          <a className="transition hover:text-[#1479B8]" href="#duvidas">Dúvidas</a>
        </nav>
        <a href="#oferta" className="shrink-0 rounded-full bg-[#1479B8] px-4 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#125B8A] sm:px-5 sm:py-3 sm:text-sm">Conhecer o kit <ArrowRight className="ml-1 inline" size={15} /></a>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-7 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5D982] bg-[#FFF5D6] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#8E6500] sm:text-xs"><Star size={14} fill="currentColor" /> Aprender pode ser uma aventura</div>
          <h1 className="max-w-2xl text-[2.6rem] font-black leading-[1.04] tracking-[-.045em] text-[#17344C] sm:text-6xl">Mais diversão na mesa.<br /><span className="text-[#1479B8]">Mais descobertas</span> a cada página.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#52697A] sm:text-lg sm:leading-8">Atividades educativas para imprimir e aproveitar em casa: uma forma leve e colorida de explorar letras, números, desenhos e novos desafios junto com as crianças.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#categorias" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-7 py-4 text-base font-black text-white shadow-[0_9px_22px_rgba(244,106,61,.24)] transition hover:-translate-y-0.5 hover:bg-[#DF542D]">Explorar o kit <ArrowRight size={18} /></a>
            <span className="flex items-center justify-center gap-2 text-sm font-semibold text-[#657B89] sm:justify-start"><Printer size={17} /> PDF para imprimir em casa</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[#52697A]"><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#3D9655]" /> Várias categorias</span><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#3D9655]" /> Aprender brincando</span><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#3D9655]" /> Acesso digital</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute -right-5 -top-4 size-28 rounded-full bg-[#FFD44F]/55 blur-3xl sm:size-44" />
          <div className="absolute -bottom-4 -left-4 size-32 rounded-full bg-[#9BD5F3]/65 blur-3xl sm:size-48" />
          <figure className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-[0_24px_70px_rgba(26,72,101,.17)] sm:rotate-1 sm:rounded-[2.2rem] sm:border-[9px]">
            <img src="/images/mundo-descobertas-kit.webp" alt="Mockup do kit Mundo das Descobertas Kids com livro e páginas de atividades" className="aspect-[3/2] w-full object-cover" fetchPriority="high" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#52697A] shadow sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-xs">Uma prévia visual do kit</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[#E5EDF1] bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:py-7">
          <Feature icon={<Printer size={19} />} title="Imprima quando quiser" text="Tenha as atividades à mão para o momento da brincadeira." />
          <Feature icon={<Sparkles size={19} />} title="Um tema para cada curiosidade" text="Explore diferentes propostas e habilidades." />
          <Feature icon={<Heart size={19} />} title="Diversão para compartilhar" text="Pais e crianças podem descobrir juntos." />
        </div>
      </section>

      <section id="categorias" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[.18em] text-[#1479B8]">Pequenas atividades, grandes descobertas</span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Um pouco de cada coisa que a infância adora explorar.</h2>
          <p className="mt-4 text-base leading-7 text-[#5D7180]">O conceito do kit reúne diferentes tipos de atividades para variar a brincadeira e acompanhar a curiosidade da criança.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {categories.map(({ icon: Icon, title, color }) => <article key={title} className="flex items-center gap-3 rounded-2xl border border-[#E6EDF0] bg-white p-4 shadow-[0_6px_22px_rgba(29,61,79,.04)] sm:flex-col sm:items-start sm:p-5"><span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${color}`}><Icon size={22} /></span><h3 className="text-sm font-extrabold leading-5 text-[#23445B]">{title}</h3></article>)}
        </div>
      </section>

      <section id="kit" className="bg-[#EAF6FC]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[.15em] text-[#1479B8]"><Download size={14} /> Formato digital</span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Abra, escolha uma atividade e prepare a mesa.</h2>
            <p className="mt-4 leading-7 text-[#52697A]">A proposta é ter um material simples de acessar, com páginas que podem ser impressas para colorir, resolver e explorar no ritmo da criança.</p>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-[#38566B]">
              {["Atividades em PDF para imprimir em casa", "Opções para diferentes momentos de aprendizagem", "Uma experiência visual alegre e fácil de entender"].map((item) => <li key={item} className="flex gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#CDE8F7] text-[#1479B8]"><Check size={13} strokeWidth={3} /></span>{item}</li>)}
            </ul>
            <a href="#oferta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1479B8] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#125B8A]">Ver a apresentação do kit <ArrowRight size={16} /></a>
          </div>
          <figure className="overflow-hidden rounded-[1.8rem] border-[7px] border-white bg-white shadow-[0_20px_55px_rgba(28,86,117,.15)] sm:rounded-[2rem] sm:border-[10px]">
            <img src="/images/kit-digital-tablet.webp" alt="Mockup do kit digital em um tablet ao lado do livro e de páginas de atividades" className="aspect-[3/2] w-full object-cover" loading="lazy" />
          </figure>
        </div>
        <p className="mx-auto max-w-3xl px-5 pb-7 text-center text-xs leading-5 text-[#617887] sm:px-8">{imageNote}</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[.18em] text-[#E85D32]">Brincar também é estar junto</span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Mais que preencher uma folha: criar um momento em família.</h2>
          <p className="mt-4 leading-7 text-[#5D7180]">Colorir, contar, observar e conversar podem virar parte gostosa da rotina — sem precisar de uma grande preparação.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <LifestyleCard src="/images/mae-e-crianca.webp" alt="Mãe e filha exploram juntas o livro e uma atividade impressa" title="Descobrir lado a lado" text="Um convite para acompanhar a curiosidade e comemorar cada tentativa." />
          <LifestyleCard src="/images/pai-e-crianca.webp" alt="Pai acompanha o filho enquanto ele colore uma atividade" title="Fazer junto, no ritmo da criança" text="Uma página pode ser o começo de uma conversa, uma ideia ou uma nova brincadeira." />
        </div>
        <p className="mt-4 text-center text-[11px] leading-5 text-[#788994]">Cenas ilustrativas de uso do produto. As páginas finais do material ainda serão definidas.</p>
      </section>

      <section className="bg-[#FFF3CC]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-[.18em] text-[#A06B00]">Uma pausa criativa cabe no seu dia</span><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Troque o “o que vamos fazer?” por uma nova descoberta.</h2><p className="mt-4 max-w-2xl leading-7 text-[#5C6871]">Conheça a proposta do Mundo das Descobertas Kids e imagine novas possibilidades para aprender brincando em casa.</p></div>
          <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-7 py-4 text-sm font-black text-white shadow-[0_9px_22px_rgba(244,106,61,.2)] transition hover:-translate-y-0.5 hover:bg-[#DF542D]">Quero conhecer o kit <ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="oferta" className="bg-[#125B8A] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_.8fr]">
          <div><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em] text-[#FFE28A]"><Sparkles size={13} /> Mundo das Descobertas Kids</span><h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Um kit colorido para abrir espaço para a curiosidade.</h2><p className="mt-4 max-w-xl leading-7 text-white/80">A apresentação visual já está tomando forma. O próximo passo é finalizar as atividades imprimíveis e definir os detalhes da oferta.</p><div className="mt-6 flex flex-wrap gap-2.5">{["Alfabeto", "Números", "Cores", "Pintura", "Jogos"].map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold">{item}</span>)}</div></div>
          <div className="rounded-[1.7rem] bg-white p-6 text-[#18344B] shadow-2xl sm:rounded-[2rem] sm:p-8"><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]"><Printer size={22} /></span><div><p className="text-xs font-black uppercase tracking-wider text-[#1479B8]">Material digital</p><h3 className="mt-0.5 text-xl font-black">Uma ideia para cada descoberta</h3></div></div><ul className="mt-6 space-y-3 text-sm text-[#52697A]">{["Páginas para imprimir", "Categorias variadas", "Atividades para fazer em família"].map((item) => <li key={item} className="flex gap-2.5"><Check size={17} className="mt-0.5 shrink-0 text-[#3D9655]" />{item}</li>)}</ul><a href="#kit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-6 py-4 text-center font-black text-white transition hover:bg-[#DF542D]">Ver como será o kit <ArrowRight size={17} /></a><p className="mt-4 text-center text-[11px] leading-5 text-[#788994]">Mockups ilustrativos. Conteúdo final, quantidade de páginas, preço e link de compra serão adicionados após a conclusão do produto.</p></div>
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-[#1479B8]">Antes de começar</span><h2 className="mt-4 text-3xl font-black tracking-[-.035em]">Dúvidas frequentes</h2></div>
        <div className="mt-8 divide-y divide-[#E5EDF1]">{[
          ["O produto já está pronto para baixar?", "Ainda não. Esta página apresenta o conceito visual e a proposta do kit. Os arquivos imprimíveis serão finalizados antes da oferta ser aberta."],
          ["Como vou receber as atividades?", "A ideia é disponibilizar o material em formato digital para baixar e imprimir. Os detalhes de entrega serão definidos junto com a versão final."],
          ["As imagens mostram as páginas definitivas?", "Não. As cenas e páginas dos mockups são ilustrativas e servem para apresentar a direção visual do produto."],
          ["O material substitui acompanhamento profissional?", "Não. A proposta é de atividades educativas e recreativas para fazer em família."],
        ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#23445B] marker:hidden">{question}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#E4F3FC] text-[#1479B8] transition group-open:rotate-180"><ArrowDown size={15} /></span></summary><p className="max-w-2xl pt-3 pr-10 text-sm leading-6 text-[#5D7180]">{answer}</p></details>)}</div>
      </section>

      <footer className="border-t border-[#E5EDF1] bg-white px-5 py-7 text-center text-xs leading-5 text-[#788994] sm:px-8"><p className="font-black text-[#23445B]">Mundo das Descobertas Kids</p><p className="mt-1">Atividades educativas para imprimir e explorar em família.</p><p className="mt-2">© {new Date().getFullYear()} · Todos os direitos reservados.</p></footer>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="flex items-center gap-3 sm:justify-center"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]">{icon}</span><div><h3 className="text-sm font-black text-[#23445B]">{title}</h3><p className="mt-0.5 text-xs leading-5 text-[#718491]">{text}</p></div></div>;
}

function LifestyleCard({ src, alt, title, text }: { src: string; alt: string; title: string; text: string }) {
  return <article className="overflow-hidden rounded-[1.7rem] border border-[#E5EDF1] bg-white shadow-[0_10px_32px_rgba(29,61,79,.07)]"><img src={src} alt={alt} className="aspect-[3/2] w-full object-cover" loading="lazy" /><div className="p-5 sm:p-6"><h3 className="text-lg font-black text-[#23445B]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5D7180]">{text}</p></div></article>;
}

