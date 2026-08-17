import { Fact } from "./Fact";
import { FactSkeleton } from "./FactSkeleton";
import { ErrorState } from "./ErrorState";
import { EmptyState } from "./EmptyState";

const SKELETON_COUNT = 6;

export function FactList({
  facts,
  setFacts,
  isLoading,
  hasError,
  onRetry,
  onAddFact,
}) {
  if (hasError) {
    return (
      <section className="facts-list-wrap">
        <ErrorState onRetry={onRetry} />
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="facts-list-wrap">
        <ul
          className="facts-list"
          aria-busy="true"
          aria-label="Loading facts"
        >
          {Array.from({ length: SKELETON_COUNT }, (_, i) => (
            <FactSkeleton key={i} />
          ))}
        </ul>
      </section>
    );
  }

  if (facts.length === 0) {
    return (
      <section className="facts-list-wrap">
        <EmptyState onAddFact={onAddFact} />
      </section>
    );
  }

  return (
    <section className="facts-list-wrap">
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
    </section>
  );
}
