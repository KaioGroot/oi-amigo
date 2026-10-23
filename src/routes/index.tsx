import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Camera,
  Check,
  Download,
  Heart,
  Hash,
  MessageCircle,
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
  { icon: Hash, title: "Alfabeto e números", detail: "Letras, contagem e primeiros desafios", color: "bg-[#E4F3FC] text-[#1479B8]" },
  { icon: Shapes, title: "Formas e cores", detail: "Observar, comparar e reconhecer", color: "bg-[#FFF2C8] text-[#B47A00]" },
  { icon: Brain, title: "Atenção e memória", detail: "Pequenos desafios para pensar", color: "bg-[#E7F5E9] text-[#3D9655]" },
  { icon: Palette, title: "Desenho e pintura", detail: "Espaço para criar e colorir", color: "bg-[#FFE9DF] text-[#E85D32]" },
  { icon: Puzzle, title: "Jogos educativos", detail: "Aprender brincando em cada página", color: "bg-[#F1E9FC] text-[#8653B8]" },
];

const printPreviews = [
  { src: "/images/impressao-mesa-madeira.webp", title: "A mesa vira um cantinho de descobertas", detail: "Capa e folhas avulsas em um exemplo de impressão caseira.", alt: "Cena ilustrativa de folhas de atividades em uma mesa de madeira, com lápis ao lado" },
  { src: "/images/atividade-colorindo.webp", title: "Uma folha, muitas possibilidades", detail: "Uma prévia de atividade de colorir com materiais simples.", alt: "Cena ilustrativa de uma mão colorindo um leão em uma folha impressa sobre mesa branca" },
  { src: "/images/atividades-mesa-xadrez.webp", title: "Tudo separado para a brincadeira", detail: "Um exemplo de como organizar as folhas em uma pasta.", alt: "Cena ilustrativa de atividades impressas e giz de cera sobre uma mesa com toalha xadrez" },
  { src: "/images/material-impressora.webp", title: "Do arquivo para o papel", detail: "Uma visualização do material saindo da impressora de casa.", alt: "Cena ilustrativa de uma pessoa segurando uma capa impressa ao lado de uma impressora doméstica" },
];

const imageNote = "Mockup ilustrativo: as páginas mostradas são exemplos visuais. O conteúdo imprimível final ainda será produzido.";

function Index() {
  return (
    <main id="topo" className="min-h-screen overflow-hidden bg-[#FFFCF4] pb-20 text-[#18344B] sm:pb-0">
      <div className="bg-[#125B8A] px-4 py-2.5 text-center text-xs font-bold tracking-wide text-white sm:text-sm">
        UM UNIVERSO DE DESCOBERTAS PARA APRENDER BRINCANDO
      </div>

      <header className="sticky top-0 z-30 border-b border-[#E5EDF1]/80 bg-[#FFFCF4]/95 shadow-[0_3px_14px_rgba(24,52,75,.04)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Mundo das Descobertas Kids — início">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]"><Sparkles size={22} /></span>
          <span className="text-sm font-black leading-tight tracking-tight sm:text-base">Mundo das<br /><span className="text-[#1479B8]">Descobertas <span className="text-[#F46A3D]">KIDS</span></span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-[#52697A] md:flex">
          <a className="transition hover:text-[#1479B8]" href="#categorias">Atividades</a>
          <a className="transition hover:text-[#1479B8]" href="#kit">O que vem no kit</a>
          <a className="transition hover:text-[#1479B8]" href="#na-pratica">Na prática</a>
          <a className="transition hover:text-[#1479B8]" href="#duvidas">Dúvidas</a>
        </nav>
        <a href="#oferta" className="shrink-0 rounded-full bg-[#1479B8] px-4 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#125B8A] sm:px-5 sm:py-3 sm:text-sm">Conhecer o kit <ArrowRight className="ml-1 inline" size={15} /></a>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-7 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5D982] bg-[#FFF5D6] px-3.5 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#8E6500] sm:text-xs"><Star size={14} fill="currentColor" /> Para transformar curiosidade em brincadeira</div>
          <h1 className="max-w-2xl text-[2.55rem] font-black leading-[1.04] tracking-[-.045em] text-[#17344C] sm:text-6xl">Quando bater o<br className="hidden sm:block" /> “o que vamos fazer?”,<br /><span className="text-[#1479B8]">tenha uma ideia pronta.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#52697A] sm:text-lg sm:leading-8">O Mundo das Descobertas Kids está sendo criado para levar atividades de aprender brincando à mesa da sua casa — com propostas de colorir, contar, observar e resolver pequenos desafios.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-7 py-4 text-base font-black text-white shadow-[0_9px_22px_rgba(244,106,61,.24)] transition hover:-translate-y-0.5 hover:bg-[#DF542D]">Ver como será o kit <ArrowRight size={18} /></a>
            <a href="#categorias" className="flex items-center justify-center gap-2 text-sm font-bold text-[#1479B8] transition hover:text-[#125B8A] sm:justify-start">Explorar as atividades <ArrowDown size={15} /></a>
          </div>
          <p className="mt-6 max-w-lg text-xs leading-5 text-[#718491]">Prévia do conceito do produto. Os arquivos e a oferta final estão em desenvolvimento.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute -right-5 -top-4 size-28 rounded-full bg-[#FFD44F]/55 blur-3xl sm:size-44" />
          <div className="absolute -bottom-4 -left-4 size-32 rounded-full bg-[#9BD5F3]/65 blur-3xl sm:size-48" />
          <figure className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-[0_24px_70px_rgba(26,72,101,.17)] sm:rotate-1 sm:rounded-[2.2rem] sm:border-[9px]">
            <img src="/images/mundo-descobertas-kit.webp" alt="Mockup do kit Mundo das Descobertas Kids com livro e páginas de atividades" className="aspect-[3/2] w-full object-cover" fetchPriority="high" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#52697A] shadow sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-xs">Imagem ilustrativa do kit</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[#E5EDF1] bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:py-7">
          <Feature icon={<Printer size={19} />} title="Escolha uma atividade" text="Encontre uma ideia que combine com o momento." />
          <Feature icon={<Download size={19} />} title="Imprima em casa" text="O kit está sendo preparado em formato digital." />
          <Feature icon={<Heart size={19} />} title="Aproveitem juntos" text="Atividades para compartilhar em família." />
        </div>
      </section>

      <section id="categorias" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[.18em] text-[#1479B8]">Uma pausa criativa para cada fase do dia</span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Ideias diferentes para manter a curiosidade em movimento.</h2>
          <p className="mt-4 text-base leading-7 text-[#5D7180]">As categorias previstas para o kit ajudam a escolher uma atividade pelo interesse da criança e pelo tipo de brincadeira que vocês querem fazer.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {categories.map(({ icon: Icon, title, detail, color }) => <article key={title} className="flex items-center gap-3 rounded-2xl border border-[#E6EDF0] bg-white p-4 shadow-[0_6px_22px_rgba(29,61,79,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(29,61,79,.09)] sm:flex-col sm:items-start sm:p-5"><span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${color}`}><Icon size={22} /></span><div><h3 className="text-sm font-extrabold leading-5 text-[#23445B]">{title}</h3><p className="mt-1 text-xs leading-5 text-[#718491]">{detail}</p></div></article>)}
        </div>
        <p className="mt-5 text-center text-[11px] leading-5 text-[#788994]">Categorias previstas para a versão final do produto; as páginas de atividades ainda serão criadas.</p>
      </section>

      <section id="como-funciona" className="scroll-mt-24 bg-[#FFF3CC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-[#A06B00]">Simples de colocar em prática</span><h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Da escolha à brincadeira, sem complicar.</h2><p className="mt-4 leading-7 text-[#5C6871]">Uma rotina fácil de entender para começar quando surgir aquele tempinho livre.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <Step number="01" title="Escolha" text="Encontre uma proposta que combine com a curiosidade da criança." />
            <Step number="02" title="Prepare" text="Separe a folha e os materiais simples indicados na atividade." />
            <Step number="03" title="Descubram" text="Façam juntos e deixem a criança explorar no próprio ritmo." />
          </div>
        </div>
      </section>

      <section id="kit" className="scroll-mt-24 bg-[#EAF6FC]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[.15em] text-[#1479B8]"><Download size={14} /> Formato digital</span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Uma atividade pronta pode mudar o ritmo da tarde.</h2>
            <p className="mt-4 leading-7 text-[#52697A]">A proposta é reunir páginas fáceis de acessar e imprimir, para colorir, resolver e explorar no ritmo da criança — com um adulto por perto para participar também.</p>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-[#38566B]">
              {["Formato digital pensado para imprimir em casa", "Categorias variadas para alternar as propostas", "Atividades para fazer junto ou no ritmo da criança"].map((item) => <li key={item} className="flex gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#CDE8F7] text-[#1479B8]"><Check size={13} strokeWidth={3} /></span>{item}</li>)}
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

      <section id="na-pratica" className="scroll-mt-24 border-y border-[#DDEBE6] bg-[#F0F7F3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D8] bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[.15em] text-[#287250]"><MessageCircle size={14} /> Cenas ilustrativas</span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Imagine o material na mesa da sua casa.</h2>
            <p className="mt-4 leading-7 text-[#52697A]">Quatro prévias em cenários do dia a dia, com folhas impressas, lápis e espaço para brincar. Toque nas fotos para ver os detalhes.</p>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
            {printPreviews.map((preview, i) => <article key={preview.src} className="w-[80vw] max-w-[330px] shrink-0 snap-center overflow-hidden rounded-[1.4rem] border border-[#D7E5DC] bg-[#EDE9E0] shadow-[0_10px_30px_rgba(29,69,49,.08)] sm:w-auto sm:max-w-none">
              <div className="flex items-center gap-2.5 bg-[#176854] px-4 py-3 text-white"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15"><Camera size={17} /></span><div><p className="text-xs font-extrabold">Prévia do material · 0{i + 1}</p><p className="mt-0.5 text-[10px] text-white/80">Imagem ilustrativa gerada por IA</p></div></div>
              <div className="p-2.5"><div className="overflow-hidden rounded-xl rounded-tl-sm bg-white p-1.5 shadow-sm"><a href={preview.src} target="_blank" rel="noreferrer" aria-label={`Ampliar imagem ilustrativa: ${preview.title}`} className="block overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1479B8]"><img src={preview.src} alt={preview.alt} width={900} height={1125} loading="lazy" className="aspect-[4/5] w-full object-contain transition duration-200 hover:brightness-105" /></a><div className="px-2 pb-3 pt-3"><h3 className="text-sm font-extrabold leading-5 text-[#23445B]">{preview.title}</h3><p className="mt-1.5 text-xs leading-5 text-[#647A86]">{preview.detail}</p></div></div></div>
            </article>)}
          </div>
          <p className="mt-4 text-center text-xs leading-6 text-[#637A6C]">Estas imagens são mockups gerados por IA para demonstrar o conceito. Não representam fotos ou depoimentos de clientes. As páginas finais ainda estão em criação.</p>
        </div>
      </section>

      <section className="bg-[#FFF3CC]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-[.18em] text-[#A06B00]">Uma pausa criativa cabe no seu dia</span><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.035em] text-[#17344C] sm:text-4xl">Troque o “o que vamos fazer?” por uma nova descoberta.</h2><p className="mt-4 max-w-2xl leading-7 text-[#5C6871]">Conheça a proposta do Mundo das Descobertas Kids e imagine novas possibilidades para aprender brincando em casa.</p></div>
          <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-7 py-4 text-sm font-black text-white shadow-[0_9px_22px_rgba(244,106,61,.2)] transition hover:-translate-y-0.5 hover:bg-[#DF542D]">Quero conhecer o kit <ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="oferta" className="scroll-mt-24 bg-[#125B8A] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_.8fr]">
          <div><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em] text-[#FFE28A]"><Sparkles size={13} /> Conheça a proposta</span><h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Um kit colorido para abrir espaço para a curiosidade.</h2><p className="mt-4 max-w-xl leading-7 text-white/80">A proposta é oferecer atividades imprimíveis para transformar momentos comuns em oportunidades de explorar, criar e aprender brincando.</p><div className="mt-6 flex flex-wrap gap-2.5">{["Alfabeto", "Números", "Cores", "Pintura", "Jogos"].map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold">{item}</span>)}</div></div>
          <div className="rounded-[1.7rem] bg-white p-6 text-[#18344B] shadow-2xl sm:rounded-[2rem] sm:p-8"><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]"><Printer size={22} /></span><div><p className="text-xs font-black uppercase tracking-wider text-[#1479B8]">O que está previsto</p><h3 className="mt-0.5 text-xl font-black">Um kit de atividades em PDF</h3></div></div><ul className="mt-6 space-y-3 text-sm text-[#52697A]">{["Atividades para imprimir em casa", "Categorias educativas variadas", "Propostas para compartilhar em família"].map((item) => <li key={item} className="flex gap-2.5"><Check size={17} className="mt-0.5 shrink-0 text-[#3D9655]" />{item}</li>)}</ul><a href="#kit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-6 py-4 text-center font-black text-white transition hover:bg-[#DF542D]">Ver detalhes do material <ArrowRight size={17} /></a><p className="mt-4 text-center text-[11px] leading-5 text-[#788994]">Amostras ilustrativas. Conteúdo final, quantidade de páginas, preço e link de compra serão definidos quando o produto estiver pronto.</p></div>
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-[#1479B8]">Antes de começar</span><h2 className="mt-4 text-3xl font-black tracking-[-.035em]">Dúvidas frequentes</h2></div>
        <div className="mt-8 divide-y divide-[#E5EDF1]">{[
          ["O produto já está pronto para baixar?", "Ainda não. Esta página apresenta o conceito visual e a proposta do kit. Os arquivos imprimíveis serão finalizados antes da oferta ser aberta."],
          ["Como vou receber as atividades?", "A ideia é disponibilizar o material em formato digital para baixar e imprimir. Os detalhes de entrega serão definidos junto com a versão final."],
          ["As imagens mostram as páginas definitivas?", "Não. As cenas e páginas dos mockups são ilustrativas e servem para apresentar a direção visual do produto."],
          ["O material substitui acompanhamento profissional?", "Não. A proposta é de atividades educativas e recreativas para fazer em família."],
        ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#23445B] marker:hidden">{question}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#E4F3FC] text-[#1479B8] transition group-open:rotate-180"><ArrowDown size={15} /></span></summary><p className="max-w-2xl pt-3 pr-10 text-sm leading-6 text-[#5D7180]">{answer}</p></details>)}</div>
      </section>

      <footer className="border-t border-[#E5EDF1] bg-white px-5 py-7 text-center text-xs leading-5 text-[#788994] sm:px-8"><p className="font-black text-[#23445B]">Mundo das Descobertas Kids</p><p className="mt-1">Atividades educativas para imprimir e explorar em família.</p><p className="mt-2">© {new Date().getFullYear()} · Todos os direitos reservados.</p></footer>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5EDF1] bg-white/95 p-3 shadow-[0_-6px_24px_rgba(24,52,75,.08)] backdrop-blur sm:hidden"><a href="#oferta" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F46A3D] px-5 py-3.5 text-sm font-black text-white">Conhecer o kit <ArrowRight size={17} /></a></div>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="flex items-center gap-3 sm:justify-center"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E4F3FC] text-[#1479B8]">{icon}</span><div><h3 className="text-sm font-black text-[#23445B]">{title}</h3><p className="mt-0.5 text-xs leading-5 text-[#718491]">{text}</p></div></div>;
}

function LifestyleCard({ src, alt, title, text }: { src: string; alt: string; title: string; text: string }) {
  return <article className="overflow-hidden rounded-[1.7rem] border border-[#E5EDF1] bg-white shadow-[0_10px_32px_rgba(29,61,79,.07)]"><img src={src} alt={alt} className="aspect-[3/2] w-full object-cover" loading="lazy" /><div className="p-5 sm:p-6"><h3 className="text-lg font-black text-[#23445B]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5D7180]">{text}</p></div></article>;
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="rounded-2xl border border-[#F0D98A] bg-white/80 p-5 shadow-[0_6px_20px_rgba(97,75,23,.05)] sm:p-6"><span className="grid size-10 place-items-center rounded-xl bg-[#FFF0B8] text-sm font-black text-[#A06B00]">{number}</span><h3 className="mt-4 text-lg font-black text-[#23445B]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5D7180]">{text}</p></article>;
}

