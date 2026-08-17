export function EmptyState({ onAddFact }) {
  return (
    <div className="state-message">
      <p className="state-message__title">No facts yet</p>
      <p className="state-message__body">
        Nothing filed under this category. Be the first to share one.
      </p>
      <button className="btn" onClick={onAddFact}>
        Share a fact
      </button>
    </div>
  );
}
