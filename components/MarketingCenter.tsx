
const outputs = [
  ["Flyer Headline", "Craven Off-Season Special: Turkey Necks, Snow Crab, Wings & Shrimp Plates"],
  ["Facebook Post", "Crawfish season may be slowing down, but Craven is not. Pull up for our off-season seafood menu today."],
  ["Instagram Caption", "Off-season flavor is here. Turkey necks, fried snow crab, wings, shrimp pasta, boudin balls and more."],
  ["Zeely Prompt", "Show a busy seafood restaurant counter with Cajun turkey neck plates, fried snow crab, shrimp plates and wings being served."],
  ["Kling Prompt", "Cinematic closeups of Cajun boiled turkey necks, snow crab, shrimp and wings with bold restaurant promo text."],
  ["SMS", "Craven off-season menu is live. Turkey necks, snow crab, wings & shrimp plates available today."],
];

export default function MarketingCenter() {
  return (
    <section className="card">
      <h3>AI Marketing Center</h3>
      <div className="grid two">
        <div>
          <label className="label">Today's Special / Direction</label>
          <textarea defaultValue={"Promote Craven off-season menu with limited crawfish. Focus on turkey necks, snow crab, wings, shrimp plates, boudin balls, and shrimp pasta."} />
          <div className="section actions">
            <button className="button primary">Generate Package</button>
            <button className="button">Save Draft</button>
          </div>
        </div>
        <div className="marketing-output">
          {outputs.map(([title, text]) => (
            <div className="output-card" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
