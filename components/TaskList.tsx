
const tasks = [
  { color: "red", title: "Approve Craven off-season marketing package", detail: "Turkey necks, snow crab, wings, shrimp plates", time: "20 min" },
  { color: "yellow", title: "Review new W&D bid invitations", detail: "BidConnect emails need sorting and plan download", time: "45 min" },
  { color: "blue", title: "Create Wednesday Facebook ad package", detail: "Lotería + off-season menu push", time: "AI ready" },
  { color: "green", title: "Tuesday supply run checklist", detail: "Restaurant Depot + TH Seafood shrimp pickup", time: "Done" },
];

export default function TaskList() {
  return (
    <div>
      {tasks.map((task) => (
        <div className="task" key={task.title}>
          <div className={`dot ${task.color}`} />
          <div>
            <strong>{task.title}</strong>
            <span>{task.detail}</span>
          </div>
          <div className="pill">{task.time}</div>
        </div>
      ))}
    </div>
  );
}
