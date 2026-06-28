
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import TaskList from "@/components/TaskList";
import MarketingCenter from "@/components/MarketingCenter";
import BidCenter from "@/components/BidCenter";
import CravenDashboard from "@/components/CravenDashboard";

export default function Home() {
  return (
    <main className="shell">
      <Sidebar />
      <section className="content">
        <div className="topbar">
          <div>
            <div className="eyebrow">Tuesday • 6:03 AM • Desktop Workspace</div>
            <h2>Good Morning, John.</h2>
          </div>
          <div className="actions">
            <button className="button">Review Briefing</button>
            <button className="button primary">Start My Day</button>
          </div>
        </div>

        <div className="hero">
          <h1>While you were sleeping, Portillo AI prepared your day.</h1>
          <p>
            Today’s highest-impact work is approving Craven’s off-season marketing package,
            reviewing W&D bid invitations, and preparing the next proposal package.
          </p>
        </div>

        <div className="grid three">
          <Card title="Time Saved Target">
            <div className="metric">20+ hrs</div>
            <div className="label">Weekly time savings goal from marketing, bid management, and follow-ups.</div>
          </Card>
          <Card title="Craven Marketing">
            <div className="metric">Ready</div>
            <div className="label">Flyer copy, Facebook, Instagram, Zeely, Kling, SMS and push copy prepared.</div>
          </Card>
          <Card title="W&D Bid Pipeline">
            <div className="metric">4 Active</div>
            <div className="label">Bid invitations, submitted proposals, and follow-ups in one place.</div>
          </Card>
        </div>

        <div className="section grid two">
          <Card title="Today's Required Tasks">
            <TaskList />
          </Card>
          <Card title="Executive Assistant">
            <p className="label">
              “John, your highest-impact task today is approving the Craven off-season campaign.
              After that, review the Airport proposal and new BidConnect invitations.”
            </p>
            <div className="section">
              <input defaultValue="Ask Portillo AI what to do next..." />
            </div>
          </Card>
        </div>

        <div className="section">
          <MarketingCenter />
        </div>

        <div className="section grid two">
          <CravenDashboard />
          <BidCenter />
        </div>
      </section>
    </main>
  );
}
