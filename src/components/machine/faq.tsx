export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-5 sm:px-7">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="cursor-pointer list-none pr-8 font-bold text-zinc-950">
            {item.question}
            <span className="float-right text-xl font-normal text-emerald-700 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
