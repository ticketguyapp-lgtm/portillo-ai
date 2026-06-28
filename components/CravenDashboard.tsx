
const items = [
  "Craven Boiled Turkey Neck Plate",
  "Fried Snow Crab Cluster with Ramen",
  "6pc Whole Wings with Rice or Fries",
  "Buffalo Chicken Fries",
  "Shrimp Pasta",
  "Boudin Balls",
];

export default function CravenDashboard() {
  return (
    <section className="card">
      <h3>Craven Off-Season Dashboard</h3>
      <div className="grid two">
        <div>
          <div className="label">Current Mode</div>
          <div className="metric">Off-Season</div>
          <p className="label">Limited crawfish. Push turkey necks, shrimp, wings, snow crab, po'boys, boudin and fried plates.</p>
        </div>
        <div>
          <div className="label">Featured Menu Items</div>
          {items.map((item) => <div className="task" key={item}><div className="dot green" /><div><strong>{item}</strong><span>Ready for daily promotions</span></div></div>)}
        </div>
      </div>
    </section>
  );
}
