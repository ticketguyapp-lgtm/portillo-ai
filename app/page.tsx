import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardCard from "../components/dashboard/DashboardCard";

export default function Home() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#f3f4f6",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <h1
            style={{
              marginBottom: "30px",
              fontSize: "36px",
            }}
          >
            Executive Dashboard
          </h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <DashboardCard
              title="Revenue Today"
              value="$18,450"
              color="#10b981"
            />

            <DashboardCard
              title="Open Projects"
              value="14"
              color="#3b82f6"
            />

            <DashboardCard
              title="Unread Emails"
              value="8"
              color="f59e0b"
            />

            <DashboardCard
              title="AI Tasks"
              value="21"
              color="8b5cf6"
            />
          </div>
        </div>
      </div>
    </>
  );
}