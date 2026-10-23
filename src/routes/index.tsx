import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Download,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const activities = [
  { icon: "🔎", title: "Caça às cores", detail: "Olhos atentos pela casa ou pelo quintal." },
  { icon: "🧱", title: "Torre maluca", detail: "Construir, testar e tentar de outro jeito." },
  { icon: "🌿", title: "Pequeno explorador", detail: "Investigar texturas, sons e formas." },
];

const included = [
  "21 cartões de brincadeiras com instruções simples",
  "Ideias para adaptar por idade e espaço disponível",
  "Materiais do dia a dia: papel, lápis, almofadas e objetos da casa",
  "Um calendário leve para escolher a próxima aventura",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf7] text-[#25352d]">
      <div className="bg-[#274b3d] px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        UM CONVITE PARA BRINCAR MAIS — NO RITMO DA SUA FAMÍLIA
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Trilhas de Quintal — início">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#e8f1df] text-[#315c45]"><Leaf size={21} /></span>
          <span className="text-lg font-extrabold leading-tight tracking-tight">trilhas<span className="text-[#6d956b]"> de quintal</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#53645a] md:flex">
          <a className="transition hover:text-[#315c45]" href="#como-funciona">Como funciona</a>
          <a className="transition hover:text-[#315c45]" href="#o-que-vem">O que vem no kit</a>
          <a className="transition hover:text-[#315c45]" href="#duvidas">Dúvidas</a>
        </nav>
        <a href="#oferta" className="rounded-full bg-[#315c45] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#244637]">Ver o kit <ArrowRight className="ml-1 inline" size={15} /></a>
      </header>

      <section id="topo" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce9d4] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[.12em] text-[#56764f]"><Sparkles size={14} /> Para crianças de 4 a 8 anos</div>
          <h1 className="max-w-2xl text-[2.65rem] font-black leading-[1.03] tracking-[-.045em] text-[#263b30] sm:text-6xl">Menos tela.<br /><span className="text-[#71916c]">Mais descobertas</span> juntinhos.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c6c61]">Um kit digital com brincadeiras curtas e gostosas para transformar um tempinho em casa em momentos de curiosidade, conversa e conexão.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b85430] px-7 py-4 text-base font-extrabold text-white shadow-[0_8px_20px_rgba(123,61,37,.2)] transition hover:-translate-y-0.5 hover:bg-[#a94d2c]">Quero ver o kit <ArrowRight size={18} /></a>
            <span className="flex items-center gap-2 text-sm font-medium text-[#6b786d]"><Clock3 size={16} /> Atividades de 10 a 20 min</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#637265]"><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#62805d]" /> Sem telas</span><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#62805d]" /> Materiais de casa</span><span className="inline-flex items-center gap-1.5"><Check size={15} className="text-[#62805d]" /> No ritmo da criança</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[510px]">
          <div className="absolute -right-4 top-3 size-24 rounded-full bg-[#f6d98e]/55 blur-2xl sm:size-36" />
          <div className="absolute -bottom-5 -left-2 size-28 rounded-full bg-[#b8d6ae]/60 blur-2xl sm:size-40" />
          <div className="relative rounded-[2rem] border border-[#e8e7d7] bg-[#f3f1e6] p-4 shadow-[0_24px_60px_rgba(48,66,51,.14)] sm:rotate-1 sm:p-6">
            <div className="rounded-[1.5rem] bg-[#fffdf7] p-5 sm:p-7">
              <div className="flex items-start justify-between">
                <div><span className="rounded-full bg-[#eef3e7] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#64805b]">Cartão de aventura · 01</span><h2 className="mt-4 text-2xl font-black tracking-tight text-[#304a39] sm:text-3xl">Caça às cores</h2></div>
                <span className="grid size-12 place-items-center rounded-2xl bg-[#f7e6ad] text-2xl">🌈</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#657268]">Vamos encontrar em casa algo amarelo, algo macio e algo que faça um som?</p>
              <div className="my-5 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#dcebd2] via-[#f8edc9] to-[#f5d9c7] text-7xl">🧺</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#f4f5ed] p-3"><span className="text-[10px] font-extrabold uppercase tracking-wider text-[#829078]">Você precisa</span><p className="mt-1 text-xs font-bold">Só curiosidade!</p></div>
                <div className="rounded-xl bg-[#f4f5ed] p-3"><span className="text-[10px] font-extrabold uppercase tracking-wider text-[#829078]">Tempo sugerido</span><p className="mt-1 text-xs font-bold">10 minutinhos</p></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#62805d]"><Heart size={14} fill="currentColor" /> Dica para o adulto incluída</div>
            </div>
            <div className="absolute -bottom-5 -right-3 rotate-3 rounded-2xl bg-[#e78c59] px-4 py-3 text-white shadow-lg sm:-right-5"><p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Dentro do kit</p><p className="text-lg font-black">21 ideias de brincar</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9eadf] bg-white/75">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8">
          <Feature icon={<Clock3 size={18} />} title="Curtinhas" text="Para encaixar entre a rotina e o banho." />
          <Feature icon={<Leaf size={18} />} title="Sem complicação" text="Use o que já tem em casa — sem compras especiais." />
          <Feature icon={<Heart size={18} />} title="Feitas para fazer junto" text="Um adulto acompanha; a criança explora." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#78916e]">A ideia é simples</span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Não precisa inventar uma brincadeira do zero.</h2>
          <p className="mt-4 text-base leading-7 text-[#657268]">Quando bate a dúvida do “o que a gente faz agora?”, escolha um cartão e comece. As propostas são abertas: cada criança pode explorar do próprio jeito.</p>
        </div>
        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {activities.map((activity, i) => <article key={activity.title} className="rounded-3xl border border-[#e9e8dd] bg-white p-6 shadow-[0_8px_26px_rgba(45,62,48,.04)] transition hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(45,62,48,.09)]"><div className={`mb-5 grid size-14 place-items-center rounded-2xl text-3xl ${i === 0 ? "bg-[#f8edc9]" : i === 1 ? "bg-[#e8efe0]" : "bg-[#f7e4d7]"}`}>{activity.icon}</div><span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#819078]">Exemplo de atividade</span><h3 className="mt-2 text-xl font-extrabold">{activity.title}</h3><p className="mt-2 text-sm leading-6 text-[#68756b]">{activity.detail}</p></article>)}
        </div>
      </section>

      <section id="previa" className="bg-[#f5f0e3]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#70856b]"><Sparkles size={13} /> Prévia do conceito</span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Um pedacinho da brincadeira, antes mesmo de imprimir.</h2>
            <p className="mt-4 leading-7 text-[#657268]">Imagine escolher um cartão, colocar na mesa e descobrir junto. O kit vai reunir propostas visuais e simples para começar sem uma preparação complicada.</p>
            <div className="mt-6 rounded-2xl border border-[#e4dcc9] bg-[#fffdf7] p-4 text-sm leading-6 text-[#667365]"><strong className="text-[#304a39]">Mockup ilustrativo:</strong> esta é uma apresentação visual do formato e da identidade. O conteúdo final do produto ainda será desenvolvido.</div>
            <a href="#oferta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b85430] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#a94d2c]">Conhecer a proposta <ArrowRight size={16} /></a>
          </div>
          <div className="relative mx-auto w-full max-w-[620px] rounded-[2rem] bg-[#dfd2b8] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.65)] sm:p-8">
            <div className="absolute left-8 top-8 h-2 w-24 rotate-[-8deg] rounded-full bg-[#d9a56d] opacity-75" />
            <div className="absolute right-7 top-12 h-2 w-28 rotate-[7deg] rounded-full bg-[#91a986] opacity-80" />
            <div className="relative mx-auto min-h-[420px] max-w-[510px]">
              <div className="absolute right-0 top-14 hidden w-[42%] rotate-[7deg] rounded-xl border border-[#e6e0cf] bg-[#fffdf7] p-4 shadow-[0_12px_30px_rgba(63,57,42,.15)] sm:block">
                <span className="text-[9px] font-extrabold uppercase tracking-[.15em] text-[#829078]">Trilha 02 · movimento</span><div className="mt-3 grid grid-cols-2 gap-2"><span className="grid aspect-square place-items-center rounded-xl bg-[#f7e4d7] text-3xl">🦋</span><span className="grid aspect-square place-items-center rounded-xl bg-[#e8efe0] text-3xl">🐌</span><span className="grid aspect-square place-items-center rounded-xl bg-[#f8edc9] text-3xl">🐞</span><span className="grid aspect-square place-items-center rounded-xl bg-[#e4edf0] text-3xl">🐛</span></div>
              </div>
              <div className="absolute bottom-0 left-0 hidden w-[38%] rotate-[-8deg] rounded-xl border border-[#e6e0cf] bg-[#fffdf7] p-4 shadow-[0_12px_30px_rgba(63,57,42,.13)] sm:block">
                <span className="text-[9px] font-extrabold uppercase tracking-[.15em] text-[#829078]">Meu mapa de descobertas</span><div className="mt-4 space-y-3"><div className="h-2 rounded-full bg-[#e7eadf]" /><div className="h-2 w-4/5 rounded-full bg-[#e7eadf]" /><div className="h-16 rounded-lg border-2 border-dashed border-[#d7dfcf] bg-[#f7f8f1]" /></div><span className="mt-3 block text-center text-2xl">✏️</span>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 w-[88%] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-2xl border border-[#e8e1d1] bg-[#fffdf7] p-5 shadow-[0_20px_45px_rgba(63,57,42,.22)] sm:w-[62%] sm:p-6">
                <div className="flex items-center justify-between"><span className="rounded-full bg-[#eaf0e4] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#66815d]">Cartão de aventura</span><span className="text-xl">🌿</span></div>
                <h3 className="mt-4 text-2xl font-black leading-tight text-[#304a39]">Caça às texturas</h3><p className="mt-2 text-xs leading-5 text-[#69766b]">Encontre algo macio, algo liso e algo que faça um barulhinho.</p>
                <div className="my-4 grid grid-cols-3 gap-2"><div className="rounded-xl bg-[#f5e4d5] p-2 text-center"><span className="block text-2xl">🧸</span><span className="mt-1 block text-[8px] font-extrabold uppercase tracking-wider text-[#786c5c]">macio</span></div><div className="rounded-xl bg-[#e8efe0] p-2 text-center"><span className="block text-2xl">🪨</span><span className="mt-1 block text-[8px] font-extrabold uppercase tracking-wider text-[#687562]">liso</span></div><div className="rounded-xl bg-[#f8edc9] p-2 text-center"><span className="block text-2xl">🍂</span><span className="mt-1 block text-[8px] font-extrabold uppercase tracking-wider text-[#796c4d]">áspero</span></div></div>
                <div className="flex items-center justify-between border-t border-dashed border-[#e0e2d8] pt-3 text-[9px] font-bold text-[#7a8679]"><span>10 min · materiais de casa</span><span>01 / 21</span></div>
              </div>
              <div className="absolute bottom-5 right-2 z-20 rotate-[9deg] rounded-full border-4 border-[#f5f0e3] bg-[#bd7550] px-3 py-2 text-[9px] font-black uppercase tracking-wider text-white shadow-md sm:bottom-10 sm:right-9">prévia visual</div>
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold text-[#7b7669]">Demonstração de layout · o material final pode mudar</p>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-[#eef3e8]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div><span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#6c8964]">Do download à brincadeira</span><h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Um jeito leve de começar — sem precisar preparar tudo.</h2><p className="mt-5 max-w-lg leading-7 text-[#5f7062]">Escolha uma atividade, leia a dica para o adulto e convide a criança. Se ela quiser mudar as regras ou seguir outra ideia, tudo bem: a brincadeira é o caminho, não uma tarefa para cumprir.</p><a className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#315c45] hover:gap-3" href="#o-que-vem">Veja o que vem no kit <ArrowRight size={16} /></a></div>
          <div className="space-y-4">
            <Step number="01" title="Escolha uma trilha" text="Curiosidade, movimento ou faz de conta: pegue um cartão que combine com o momento." />
            <Step number="02" title="Separe o que já tem" text="As instruções sugerem materiais comuns e alternativas simples." />
            <Step number="03" title="Brinquem juntos" text="Acompanhe, faça perguntas e deixe a criança conduzir também." />
          </div>
        </div>
      </section>

      <section id="o-que-vem" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="order-2 rounded-[2rem] bg-[#fff1d4] p-6 sm:p-9 lg:order-1">
          <div className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl shadow-[#9c774222] sm:rotate-[-2deg]">
            <div className="flex items-center justify-between border-b border-dashed border-[#d9ddcf] pb-4"><span className="text-xs font-extrabold uppercase tracking-widest text-[#73906b]">Meu mapa de descobertas</span><Sparkles className="text-[#e9a759]" size={19} /></div>
            <p className="mt-5 text-2xl font-black leading-tight">Hoje eu descobri…</p>
            <div className="mt-5 space-y-3">{["uma coisa que faz barulho", "uma coisa bem pequenininha", "uma coisa que eu inventei"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#f7f8f1] px-3 py-3 text-sm font-semibold text-[#667365]"><span className="grid size-5 place-items-center rounded-md border-2 border-[#a8bd9e]" />{item}</div>)}</div>
            <p className="mt-5 text-xs text-[#879181]">Desenhe ou conte para alguém da família.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#78916e]">Um kit, várias possibilidades</span><h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">O que vem no <span className="text-[#71916c]">Trilhas de Quintal</span></h2><p className="mt-4 leading-7 text-[#657268]">Um material digital pensado para abrir, escolher uma ideia e colocar a brincadeira em movimento.</p><ul className="mt-7 space-y-4">{included.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#536458]"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#dcebd2] text-[#315c45]"><Check size={13} strokeWidth={3} /></span>{item}</li>)}</ul><div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#e6e9dd] bg-white p-4 text-sm leading-6 text-[#667365]"><Download className="mt-0.5 shrink-0 text-[#71916c]" size={18} /><p><strong className="text-[#304a39]">Formato digital:</strong> PDF para imprimir em casa ou consultar na tela. Impressora não é obrigatória — você também pode ler as propostas no celular.</p></div></div>
      </section>

      <section id="oferta" className="bg-[#2d4d3d] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c8dfb8]">Comece quando quiser</span><h2 className="mt-4 text-3xl font-black tracking-[-.035em] sm:text-4xl">Uma ideia nova para o próximo tempinho juntos.</h2><p className="mt-4 leading-7 text-white/75">Receba o kit digital e escolha a primeira trilha com a sua criança.</p></div>
          <div className="mx-auto mt-10 max-w-md rounded-[2rem] bg-[#fffdf7] p-6 text-[#263b30] shadow-2xl sm:p-8">
            <div className="flex items-center justify-between"><span className="rounded-full bg-[#eef3e7] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#66815d]">Kit digital completo</span><span className="text-xs font-semibold text-[#788276]">Pagamento único</span></div>
            <h3 className="mt-5 text-2xl font-black">Trilhas de Quintal</h3>
            <p className="mt-1 text-sm text-[#718071]">21 brincadeiras para crianças de 4 a 8 anos</p>
            <div className="my-5 border-t border-dashed border-[#dfe3d7]" />
            <ul className="space-y-3">{included.slice(0, 3).map((item) => <li key={item} className="flex gap-2.5 text-sm text-[#58675a]"><Check size={16} className="mt-0.5 shrink-0 text-[#71916c]" />{item}</li>)}</ul>
            <div className="mt-6 rounded-2xl bg-[#f5f5ed] px-4 py-4 text-center"><span className="text-xs font-semibold text-[#788276]">Preço sugerido para lançamento</span><p className="mt-1 text-4xl font-black tracking-tight">R$ 19,90</p><p className="mt-1 text-xs text-[#7c877b]">valor único pelo material digital</p></div>
            <a href="#como-funciona" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#b85430] px-6 py-4 text-center font-extrabold text-white transition hover:bg-[#a94d2c]">Quero conhecer o kit <ArrowRight size={17} /></a>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] leading-5 text-[#818b7f]"><ShieldCheck size={14} /> Material educativo para brincar em família</p>
          </div>
          <p className="mx-auto mt-5 max-w-lg text-center text-xs leading-5 text-white/60">O valor acima é uma sugestão de posicionamento. A compra ainda depende da configuração de um checkout e da confirmação do preço final.</p>
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="text-center"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#78916e]">Perguntas que podem surgir</span><h2 className="mt-4 text-3xl font-black tracking-[-.035em]">Dúvidas frequentes</h2></div>
        <div className="mt-9 divide-y divide-[#e6e8de]">{[
          ["Para qual idade é o material?", "As propostas foram pensadas para crianças de 4 a 8 anos. Um adulto pode simplificar ou adaptar cada ideia conforme a criança."],
          ["Preciso de quintal ou impressora?", "Não. As brincadeiras podem acontecer dentro de casa, e o PDF pode ser consultado no celular. O nome é um convite à exploração, não uma exigência de espaço externo."],
          ["Quanto tempo dura cada atividade?", "A maioria pode começar com 10 a 20 minutos. A criança pode querer continuar ou parar antes — siga o ritmo dela."],
          ["Isso substitui acompanhamento profissional?", "Não. É um material de brincadeiras educativas para fazer em família; não é terapia, avaliação ou orientação clínica."],
        ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#354b3a] marker:hidden">{question}<span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#eef3e8] text-[#56764f] transition group-open:rotate-180"><ArrowDown size={15} /></span></summary><p className="max-w-2xl pt-3 pr-10 text-sm leading-6 text-[#68756b]">{answer}</p></details>)}</div>
      </section>

      <footer className="border-t border-[#e8e9df] bg-white px-5 py-7 text-center text-xs leading-5 text-[#7b867a] sm:px-8"><p className="font-bold text-[#536458]">Trilhas de Quintal</p><p className="mt-1">Brincadeiras educativas para momentos em família. Supervisão de um adulto é recomendada.</p><p className="mt-2">© {new Date().getFullYear()} · Todos os direitos reservados.</p></footer>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="flex items-center gap-3 sm:justify-center"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#edf3e8] text-[#62805d]">{icon}</span><div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-0.5 text-xs leading-5 text-[#778277]">{text}</p></div></div>;
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return <div className="flex gap-4 rounded-2xl border border-[#dce6d5] bg-white/75 p-5"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#dcebd2] text-sm font-black text-[#456440]">{number}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#68756b]">{text}</p></div></div>;
}

