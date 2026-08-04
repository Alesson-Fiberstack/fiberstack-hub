export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-white/10 bg-white/[.035] px-5 sm:px-7">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="cursor-pointer list-none pr-8 font-bold text-white">
            {item.question}
            <span className="float-right text-xl font-normal text-emerald-300 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
