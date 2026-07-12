"use client";

import { useState } from "react";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import WorkspaceView from "../components/dashboard/WorkspaceView";

export default function Home() {
  const [activeWorkspace, setActiveWorkspace] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <div className="flex min-h-screen bg-slate-100">
        <Sidebar activeWorkspace={activeWorkspace} onNavigate={setActiveWorkspace} />

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

          <WorkspaceView activeWorkspace={activeWorkspace} />
        </main>
      </div>
    </div>
  );
}