import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Good morning, John Jay</p>
          <h3 className="text-lg font-semibold text-slate-900">Operations Center</h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 shadow-sm sm:min-w-[320px]">
            <Search size={16} />
            <input
              className="w-full border-none bg-transparent outline-none placeholder:text-slate-400"
              placeholder="Search entities, projects, or AI tasks"
              aria-label="Global search"
            />
          </label>

          <div className="flex items-center gap-3">
            <button className="relative rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-rose-500" />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-600 text-sm font-semibold text-white">
                JJ
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-800">John Jay</p>
                <p className="text-xs text-slate-500">Executive</p>
              </div>
              <ChevronDown size={16} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}