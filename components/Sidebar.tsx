
const nav = [
  ["Command Center", "active"],
  ["AI Marketing Center", ""],
  ["Craven Crawfish", ""],
  ["W&D Bid Center", ""],
  ["Apps Dashboard", ""],
  ["Document Vault", ""],
  ["CRM", ""],
  ["Finance", ""],
];

const aiTeam = [
  "Executive Assistant",
  "Marketing Director",
  "Construction Manager",
  "Restaurant Manager",
  "CFO",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">PA</div>
        <div>
          <h1>Portillo AI</h1>
          <p>Desktop Command Center</p>
        </div>
      </div>

      <div className="nav-title">Workspace</div>
      {nav.map(([name, state]) => (
        <div key={name} className={`nav-item ${state}`}>{name}</div>
      ))}

      <div className="nav-title">AI Employees</div>
      {aiTeam.map((name) => (
        <div key={name} className="nav-item">{name}</div>
      ))}
    </aside>
  );
}
