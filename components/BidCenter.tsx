
const bids = [
  ["Airport Drainage & Safety", "$7.5M", "Due Tomorrow", "hot"],
  ["Kingfield Trails Apartments", "$2.9M", "Needs Review", ""],
  ["Ashley Furniture Conroe", "$2.45M", "Submitted", "done"],
  ["Sandhill North Detention", "TBD", "Need Haul-Off Quote", ""],
];

export default function BidCenter() {
  return (
    <section className="card">
      <h3>W&D Bid Center</h3>
      <table className="table">
        <thead>
          <tr><th>Project</th><th>Value</th><th>Status</th></tr>
        </thead>
        <tbody>
          {bids.map(([name, value, status, cls]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              <td><span className={`status ${cls}`}>{status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
