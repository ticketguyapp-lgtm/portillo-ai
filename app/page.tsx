import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";

export default function Home() {
  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "40px" }}>
          <h1>Dashboard Coming Soon</h1>
        </div>
      </div>
    </>
  );
}