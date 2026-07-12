import { ArrowUpRight, Bot, CalendarPlus, FilePlus2 } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { label: "Create new bid", icon: FilePlus2 },
    { label: "Launch AI workflow", icon: Bot },
    { label: "Schedule review", icon: CalendarPlus },
  ];

  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Quick Actions</h3>
          <p className="mt-1 text-sm text-slate-500">Streamline your next move</p>
        </div>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:border-slate-300 hover:bg-slate-100"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="rounded-xl bg-white p-2 shadow-sm">
                  <Icon size={16} />
                </span>
                {action.label}
              </span>
              <ArrowUpRight size={16} className="text-slate-400" />
            </button>
          );
        })}
      </div>
    </section>
  );
}