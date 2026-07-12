import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function DashboardCard({
  title,
  subtitle,
  children,
}: DashboardCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}