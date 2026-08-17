export function ErrorState({ onRetry }) {
  return (
    <div className="state-message" role="alert">
      <p className="state-message__title">Couldn't load facts</p>
      <p className="state-message__body">
        Something went wrong on our end. Check your connection and try
        again.
      </p>
      <button className="btn" onClick={onRetry}>
        Reload
      </button>
    </div>
  );
}
