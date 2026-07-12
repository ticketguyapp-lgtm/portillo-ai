import {
  BarChart3,
  Briefcase,
  CalendarDays,
  FileText,
  LayoutGrid,
  Mail,
  MessageSquareText,
  Receipt,
  Settings,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

type SidebarProps = {
  activeWorkspace: string;
  onNavigate: (workspace: string) => void;
};

export default function Sidebar({ activeWorkspace, onNavigate }: SidebarProps) {
  const menuItems = [
    { label: "Dashboard", icon: LayoutGrid },
    { label: "W&D Portico", icon: BarChart3 },
    { label: "Craven Crawfish", icon: ShieldCheck },
    { label: "TicketGuy", icon: MessageSquareText },
    { label: "Syvl Audit", icon: FileText },
    { label: "M&M Environmental", icon: Briefcase },
    { label: "Gmail", icon: Mail },
    { label: "Calendar", icon: CalendarDays },
    { label: "Documents", icon: FileText },
    { label: "Finance", icon: Wallet },
    { label: "Settings", icon: Settings },
  ];

  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-800 bg-slate-950 px-5 py-6 text-slate-100 lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20">
          <Sparkles size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-slate-400">PORTILLO</p>
          <h2 className="text-lg font-semibold">AI Executive OS</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeWorkspace === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.label)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Ops status
        </p>
        <p className="mt-2 text-sm text-slate-200">All systems running smoothly.</p>
      </div>
    </aside>
  );
}