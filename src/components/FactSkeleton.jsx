export function FactSkeleton() {
  return (
    <li className="fact-skeleton" aria-hidden="true">
      <div className="fact-skeleton__body">
        <div className="skeleton-line skeleton-line--tag" />
        <div className="skeleton-line skeleton-line--text" />
        <div className="skeleton-line skeleton-line--text-short" />
      </div>
      <div className="skeleton-line skeleton-line--votes" />
    </li>
  );
}
