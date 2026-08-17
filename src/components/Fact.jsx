import { useState } from "react";
import supabase from "../supabase";
import { CATEGORY_COLORS } from "../constants";

const VOTE_TYPES = [
  { column: "votesInteresting", icon: "👍", label: "Mark as interesting" },
  { column: "votesMindblowing", icon: "🤯", label: "Mark as mindblowing" },
  { column: "votesFalse", icon: "⛔️", label: "Mark as false" },
];

export function Fact({ fact, setFacts }) {
  const [votingColumn, setVotingColumn] = useState(null);
  const isVoting = votingColumn !== null;
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(columnName) {
    setVotingColumn(columnName);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setVotingColumn(null);
    if (!error)
      setFacts((notUpdatedFacts) =>
        notUpdatedFacts.map((f) =>
          f.id === updatedFact[0].id ? updatedFact[0] : f,
        ),
      );
  }

  return (
    <li
      className="fact"
      style={{ "--cat-color": CATEGORY_COLORS.get(fact.category) }}
    >
      <div className="fact__body">
        <div className="fact__meta">
          <span className="fact__category">
            <span className="fact__dot" />
            {fact.category}
          </span>
          {isDisputed ? (
            <span className="fact__disputed">Disputed</span>
          ) : null}
        </div>
        <p className="fact__text">
          {fact.text}{" "}
          <a
            className="source"
            href={fact.source}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </p>
      </div>
      <div className="vote-buttons">
        {VOTE_TYPES.map(({ column, icon, label }) => (
          <button
            key={column}
            className="vote-btn"
            onClick={() => handleVote(column)}
            disabled={isVoting}
            aria-label={label}
            aria-busy={votingColumn === column}
          >
            <span className="vote-btn__icon">
              {votingColumn === column ? (
                <span className="vote-btn__spinner" />
              ) : (
                icon
              )}
            </span>
            {fact[column]}
          </button>
        ))}
      </div>
    </li>
  );
}
