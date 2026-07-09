type DashboardCardProps = {
  title: string;
  value: string;
  color?: string;
};

export default function DashboardCard({
  title,
  value,
  color = "2563eb",
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px gba(0,0,0,.08)",
        borderLeft: `6px solid ${color}`,
        minWidth: "220px",
      }}
    >
      <div
        style={{
          color: "7280",
          fontSize: "14px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {value}
      </div>
    </div>
  );
}