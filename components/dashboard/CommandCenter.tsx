import {
  AlertCircle,
  Bell,
  Briefcase,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Mail,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

function PanelCard({
  title,
  children,
  accent = "border-slate-200/80 bg-white",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <section className={`rounded-[24px] border p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${accent}`}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">{title}</h3>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
      {children}
    </section>
  );
}

function StatBlock({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}

export default function CommandCenter() {
  const priorities = [
    "Review Hamilton Builders addendum before pricing",
    "Confirm the Tuesday leadership review deck",
    "Finalize TicketGuy dispatch plan",
  ];

  const meetings = ["09:30 Leadership Review", "11:00 Client Strategy Sync", "03:30 Ops Follow-Up"];

  const emails = ["Daniel Moritz — response needed", "Estimator queue — 3 waiting", "Executive summary draft"];

  const bids = ["Craven transport bid", "W&D Portico revision", "TicketGuy renewal"];

  const documents = ["Proposal v3", "Addendum 2", "Equipment plan"];

  const recommendations = [
    "Pace the Hamilton Builders bid before 3:00 PM",
    "Reply to estimator outreach with AI-generated drafts",
  ];

  const health = [
    { name: "W&D Portico", status: "Healthy", revenue: "$84K", tasks: "12 open", trend: "+8.2%" },
    { name: "Craven Crawfish", status: "Watch", revenue: "$31K", tasks: "4 open", trend: "+2.1%" },
    { name: "TicketGuy", status: "Growing", revenue: "$19K", tasks: "6 open", trend: "+11.4%" },
    { name: "Syvl Audit", status: "Stable", revenue: "$46K", tasks: "3 open", trend: "+4.3%" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Good Afternoon, John Jay</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Executive Summary</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <Clock3 className="h-4 w-4" />
              <span>10:34 AM</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <Sparkles className="h-4 w-4 text-violet-600" />
              <span>74°F</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <Bell className="h-4 w-4" />
              <span>3 alerts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <PanelCard title="Today's Priorities">
            <div className="grid gap-3 md:grid-cols-3">
              {priorities.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </PanelCard>

          <div className="grid gap-6 xl:grid-cols-2">
            <PanelCard title="Today's Meetings">
              <div className="space-y-3">
                {meetings.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <CalendarDays className="h-4 w-4 text-violet-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </PanelCard>

            <PanelCard title="Important Emails">
              <div className="space-y-3">
                {emails.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <Mail className="h-4 w-4 text-sky-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </PanelCard>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <PanelCard title="Pending Bids">
              <div className="space-y-3">
                {bids.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <Briefcase className="h-4 w-4 text-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </PanelCard>

            <PanelCard title="Recent Documents">
              <div className="space-y-3">
                {documents.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </PanelCard>
          </div>

          <PanelCard title="AI Recommendations" accent="border-violet-100 bg-violet-50/70">
            <div className="space-y-3">
              {recommendations.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-violet-200 bg-white/80 p-4 text-sm text-slate-700">
                  <Sparkles className="mt-0.5 h-4 w-4 text-violet-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>

        <div className="space-y-6">
          <PanelCard title="Business Health">
            <div className="space-y-3">
              {health.map((item) => (
                <div key={item.name} className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">{item.status}</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-slate-500">Revenue</p>
                      <p className="font-semibold text-slate-900">{item.revenue}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Open Tasks</p>
                      <p className="font-semibold text-slate-900">{item.tasks}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Trend</p>
                      <p className="font-semibold text-slate-900">{item.trend}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PanelCard>

          <PanelCard title="Live Signals">
            <div className="grid gap-3">
              <StatBlock label="AI Focus" value="8 / 10" detail="high priority" />
              <StatBlock label="Risk Watch" value="2" detail="active escalations" />
              <StatBlock label="Ops Load" value="92%" detail="steady throughput" />
            </div>
          </PanelCard>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <PanelCard title="Recent Activity Feed">
          <div className="space-y-3">
            {[
              { label: "W&D Portico bid package updated", time: "12 min ago" },
              { label: "AI drafting follow-up email for Daniel Moritz", time: "29 min ago" },
              { label: "Craven inventory sync completed", time: "41 min ago" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <span className="text-slate-700">{item.label}</span>
                <span className="text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </PanelCard>

        <PanelCard title="Upcoming Deadlines">
          <div className="space-y-3">
            {[
              { title: "Hamilton Builders pricing", time: "Today • 3:00 PM" },
              { title: "Estimator response batch", time: "Today • 4:30 PM" },
              { title: "Executive review deck", time: "Tomorrow • 9:00 AM" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <div className="mt-1 text-sm text-slate-500">{item.time}</div>
              </div>
            ))}
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
