export type ComparisonRow = {
  label: string;
  values: string[];
};

type MachineComparisonProps = {
  columns: string[];
  rows: ComparisonRow[];
};

export function MachineComparison({
  columns,
  rows,
}: MachineComparisonProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse text-left">
          <thead className="bg-[#03070a] text-white">
            <tr>
              <th className="px-5 py-4 text-sm font-bold">Comparação</th>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 text-sm font-bold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.label}
                className={index % 2 === 0 ? "bg-white/[.035]" : "bg-white/[.02]"}
              >
                <th className="border-t border-white/10 px-5 py-4 text-sm font-bold text-white">
                  {row.label}
                </th>
                {row.values.map((value, valueIndex) => (
                  <td
                    key={`${row.label}-${valueIndex}`}
                    className="border-t border-white/10 px-5 py-4 text-sm text-slate-400"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
