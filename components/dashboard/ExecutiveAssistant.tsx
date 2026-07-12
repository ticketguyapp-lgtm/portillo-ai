import { ArrowRight, CalendarDays, Mail, Sparkles } from "lucide-react";

export default function ExecutiveAssistant() {
  const sections = [
    { title: "Today's Priorities", items: ["Finalize Q3 forecast", "Review proposal pipeline"] },
    { title: "Important Emails", items: ["Client follow-up needed", "Vendor contract update"] },
    { title: "Calendar", items: ["Leadership sync at 9:30", "Board prep at 2:00"] },
    { title: "AI Recommendations", items: ["Automate recurring reports", "Flag bid risks"] },
  ];

  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <Sparkles size={16} />
            AI Executive Assistant
          </div>
          <h2 className="text-2xl font-semibold">Good Morning John Jay.</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Your portfolio is on track. Here is a concise view of what deserves your attention today.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
          Review insights
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              {section.title === "Important Emails" ? <Mail size={16} /> : section.title === "Calendar" ? <CalendarDays size={16} /> : <Sparkles size={16} />}
              <span>{section.title}</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {section.items.map((item) => (
                <li key={item} className="rounded-lg bg-slate-950/20 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}