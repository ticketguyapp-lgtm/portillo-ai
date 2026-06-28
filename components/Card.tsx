
export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="card">
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  );
}
