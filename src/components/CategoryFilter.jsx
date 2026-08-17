import { CATEGORIES } from "../constants";

export function CategoryFilter({ currentCategory, setCurrentCategory }) {
  return (
    <aside className="categories">
      <p className="categories__label">Browse</p>
      <ul>
        <li>
          <button
            className={`category-btn${currentCategory === "all" ? " is-active" : ""}`}
            onClick={() => setCurrentCategory("all")}
            aria-current={currentCategory === "all"}
          >
            <span className="category-btn__dot category-btn__dot--all" />
            All facts
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button
              className={`category-btn${currentCategory === cat.name ? " is-active" : ""}`}
              style={{ "--cat-color": cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
              aria-current={currentCategory === cat.name}
            >
              <span className="category-btn__dot" />
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
