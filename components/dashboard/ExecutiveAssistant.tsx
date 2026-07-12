import { Send, Sparkles, Mail, AlertCircle, Truck } from "lucide-react";

const priorities = [
  { icon: Sparkles, title: "Hamilton Builders bid due tomorrow" },
  { icon: Mail, title: "3 important estimator emails" },
  { icon: Truck, title: "TicketGuy reports 42 active trucks" },
  { icon: AlertCircle, title: "Craven inventory running low" },
];

export default function ExecutiveAssistant() {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
            <Sparkles className="h-4 w-4 text-violet-600" />
            Executive AI Assistant
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Executive AI Assistant</h2>
            <p className="mt-2 text-sm font-medium text-slate-700">Good Afternoon, John Jay.</p>
            <p className="mt-1 text-sm text-slate-500">Here is what needs your attention today.</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {priorities.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-slate-700">{title}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
          <div className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 text-violet-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Recommendations</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Review Hamilton Builders Addendum 3 before submitting pricing.</li>
                <li>• Reply to Daniel Moritz before 2 PM.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">Ask Portillo AI anything</span>
            <input
              type="text"
              placeholder="Ask Portillo AI anything..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
            />
          </label>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </div>
    </section>
  );
}