export function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="brand">
        <img
          className="brand__logo"
          src="/logo.png"
          height="44"
          width="44"
          alt=""
        />
        <div>
          <h1>Today I Learned</h1>
          <p className="brand__tagline">
            A crowdsourced feed of facts worth checking.
          </p>
        </div>
      </div>

      <button
        className="btn"
        onClick={() => setShowForm((show) => !show)}
        aria-expanded={showForm}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
