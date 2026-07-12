import {
  AlertCircle,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  FileText,
  FolderOpen,
  Mail,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import CommandCenter from "./CommandCenter";
import ExecutiveAssistant from "./ExecutiveAssistant";
import MetricCard from "./MetricCard";
import QuickActions from "./QuickActions";

type WorkspaceViewProps = {
  activeWorkspace: string;
};

function SectionCard({
  title,
  value,
  detail,
  icon: Icon,
}: {
  title: string;
  value: string;
  detail: string;
  icon: typeof Sparkles;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}

function HeaderBlock({ title, heading, description }: { title: string; heading: string; description: string }) {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{title}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{heading}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function DashboardWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <CommandCenter />
    </div>
  );
}

function PorticoWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="W&D Portico"
        description="Operations, bids, delivery performance, and equipment readiness in one executive view."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SectionCard title="Active Projects" value="24" detail="6 in production" icon={Briefcase} />
        <SectionCard title="Bids Due" value="5" detail="2 require review" icon={FileText} />
        <SectionCard title="Equipment Status" value="91%" detail="available on site" icon={Truck} />
        <SectionCard title="Revenue" value="$184K" detail="up 8.2% this month" icon={Wallet} />
      </div>
    </div>
  );
}

function CravenWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Craven Crawfish"
        description="Fresh inventory insights, daily orders, and margin visibility for the operation."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SectionCard title="Today's Sales" value="$13.2K" detail="ahead of target" icon={TrendingUp} />
        <SectionCard title="Inventory" value="82%" detail="stock coverage" icon={ShieldCheck} />
        <SectionCard title="Orders" value="118" detail="14 pending pickup" icon={CheckCircle2} />
        <SectionCard title="Food Cost" value="31.4%" detail="below weekly cap" icon={AlertCircle} />
      </div>
    </div>
  );
}

function TicketGuyWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="TicketGuy"
        description="Fleet utilization, daily transportation loads, and account activity at a glance."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SectionCard title="Active Trucks" value="42" detail="38 on route" icon={Truck} />
        <SectionCard title="Today's Loads" value="18" detail="3 need dispatch" icon={Briefcase} />
        <SectionCard title="Revenue" value="$56K" detail="up 12% this week" icon={Wallet} />
        <SectionCard title="Companies" value="14" detail="6 active contracts" icon={Users} />
      </div>
    </div>
  );
}

function SyvlWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Syvl Audit"
        description="Case progress, city connectivity, and reporting throughput across the audit portfolio."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <SectionCard title="Open Cases" value="9" detail="2 escalated today" icon={FileText} />
        <SectionCard title="Cities Connected" value="27" detail="5 new this week" icon={ShieldCheck} />
        <SectionCard title="New Reports" value="11" detail="3 pending review" icon={Sparkles} />
      </div>
    </div>
  );
}

function GmailWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Gmail"
        description="Inbox triage, AI summaries, and response drafting in a single consolidated view."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <SectionCard title="Inbox" value="64" detail="12 new today" icon={Mail} />
        <SectionCard title="AI Summary" value="7" detail="priority threads" icon={Sparkles} />
        <SectionCard title="Draft Replies" value="4" detail="ready to send" icon={FileText} />
      </div>
    </div>
  );
}

function CalendarWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Calendar"
        description="Executive meetings, deadlines, and time-sensitive commitments by the day."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard title="Today's Meetings" value="6" detail="2 client reviews" icon={CalendarDays} />
        <SectionCard title="Upcoming Deadlines" value="3" detail="1 bid closes today" icon={AlertCircle} />
      </div>
    </div>
  );
}

function DocumentsWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Documents"
        description="Centralized contract, bid, and planning documents for fast review."
      />

      <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
          <Search className="h-4 w-4" />
          <input className="w-full border-none bg-transparent outline-none" placeholder="Search bids, contracts, and plans" aria-label="Search documents" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SectionCard title="Recent Bids" value="12" detail="4 need final signatures" icon={FolderOpen} />
        <SectionCard title="Contracts" value="8" detail="2 expiring soon" icon={FileText} />
        <SectionCard title="Plans" value="15" detail="3 updated this week" icon={Briefcase} />
        <SectionCard title="Search Bar" value="Ready" detail="Find anything instantly" icon={Search} />
      </div>
    </div>
  );
}

function SettingsWorkspace() {
  return (
    <div className="space-y-8 workspace-fade-in">
      <HeaderBlock
        title="Workspace"
        heading="Settings"
        description="Profile preferences, visual preferences, and AI configuration controls."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <SectionCard title="Profile" value="Complete" detail="Executive access enabled" icon={Users} />
        <SectionCard title="Theme" value="Light" detail="Modern dashboard mode" icon={Sparkles} />
        <SectionCard title="AI Preferences" value="Optimized" detail="Priority notifications on" icon={Settings2} />
      </div>
    </div>
  );
}

export default function WorkspaceView({ activeWorkspace }: WorkspaceViewProps) {
  switch (activeWorkspace) {
    case "W&D Portico":
      return <PorticoWorkspace />;
    case "Craven Crawfish":
      return <CravenWorkspace />;
    case "TicketGuy":
      return <TicketGuyWorkspace />;
    case "Syvl Audit":
      return <SyvlWorkspace />;
    case "Gmail":
      return <GmailWorkspace />;
    case "Calendar":
      return <CalendarWorkspace />;
    case "Documents":
      return <DocumentsWorkspace />;
    case "Settings":
      return <SettingsWorkspace />;
    case "Dashboard":
    default:
      return <DashboardWorkspace />;
  }
}
