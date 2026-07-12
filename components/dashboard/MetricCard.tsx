type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  detail: string;
  accent: string;
};

export default function MetricCard({
  title,
  value,
  change,
  detail,
  accent,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)]">
      <div className={`mb-4 h-2 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="font-medium text-slate-700">{change}</span>
        <span className="text-slate-400">{detail}</span>
      </div>
    </div>
  );
}