import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import MetricCard from "../components/dashboard/MetricCard";
import ExecutiveAssistant from "../components/dashboard/ExecutiveAssistant";
import BusinessCard from "../components/dashboard/BusinessCard";
import QuickActions from "../components/dashboard/QuickActions";
import DashboardCard from "../components/dashboard/DashboardCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Executive operating system
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Portillo AI dashboard
              </h1>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Updated 2 minutes ago
            </div>
          </div>

          <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard title="Revenue Today" value="$18,450" change="+$2,140" detail="vs yesterday" accent="from-emerald-500 to-teal-500" />
            <MetricCard title="Active Projects" value="14" change="3 at risk" detail="across portfolio" accent="from-sky-500 to-blue-600" />
            <MetricCard title="Pending Bids" value="7" change="2 due today" detail="in review" accent="from-amber-500 to-orange-500" />
            <MetricCard title="Open AI Tasks" value="21" change="5 urgent" detail="automation queue" accent="from-violet-500 to-fuchsia-500" />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.6fr_0.95fr]">
            <ExecutiveAssistant />
            <QuickActions />
          </section>

          <section className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Business Overview</h2>
              <a href="#" className="text-sm font-medium text-slate-500 transition hover:text-slate-800">
                View all entities
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <BusinessCard name="W&D Portico" revenue="$84K" status="Healthy" metric="12 active deals" />
              <BusinessCard name="Craven Crawfish" revenue="$31K" status="Watch" metric="3 invoices pending" />
              <BusinessCard name="TicketGuy" revenue="$19K" status="Growing" metric="8 renewals this week" />
              <BusinessCard name="Syvl Audit" revenue="$46K" status="Stable" metric="5 onboardings" />
              <BusinessCard name="M&M Environmental" revenue="$67K" status="Healthy" metric="11 compliance tasks" />
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <DashboardCard title="Recent Activity" subtitle="Latest updates across your portfolio">
              <div className="space-y-4">
                {[
                  { label: "New bid submitted for W&D Portico", time: "12 min ago" },
                  { label: "AI assistant drafted follow-up email", time: "32 min ago" },
                  { label: "Calendar sync completed for TicketGuy", time: "1 hr ago" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-700">{item.label}</span>
                    <span className="text-xs font-medium text-slate-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Upcoming Calendar" subtitle="Priority events for the day">
              <div className="space-y-4">
                {[
                  { title: "Leadership review", time: "09:30 AM" },
                  { title: "Client strategy sync", time: "11:00 AM" },
                  { title: "Ops follow-up", time: "03:30 PM" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.time}</div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </section>
        </main>
      </div>
    </div>
  );
}