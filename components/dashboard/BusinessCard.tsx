type BusinessCardProps = {
  name: string;
  revenue: string;
  status: string;
  metric: string;
};

export default function BusinessCard({
  name,
  revenue,
  status,
  metric,
}: BusinessCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1 text-sm text-slate-500">{metric}</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          {status}
        </span>
      </div>
      <div className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">{revenue}</div>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
      </div>
    </article>
  );
}