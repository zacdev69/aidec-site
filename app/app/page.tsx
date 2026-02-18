export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 24px" }}>
      <h1 style={{ fontSize: 48, marginBottom: 24 }}>AIDEC™</h1>

      <p style={{ fontSize: 20, maxWidth: 720, opacity: 0.8 }}>
        AI Decision Architecture & Execution Core.  
        A decision-grade system designed to structure,
        validate, and lock critical decisions before execution.
      </p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24, marginTop: 96 }}>
        <div>
          <h3>Decision Authority</h3>
          <p>Every decision passes through a defined authority line.</p>
        </div>
        <div>
          <h3>System-First Thinking</h3>
          <p>No execution without structure and consequence mapping.</p>
        </div>
        <div>
          <h3>Proof-of-Work</h3>
          <p>Every action is documented as evidence, not intention.</p>
        </div>
      </section>

      <section style={{ marginTop: 120, textAlign: "center" }}>
        <h2>This is not a tool. It is a decision system.</h2>
        <p style={{ opacity: 0.7 }}>
          Used before proposals, before scaling,
          and before costly failures happen.
        </p>
      </section>
    </main>
  );
}
