import { useCallback, useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";

import { Header } from "./components/Header";
import { NewFactForm } from "./components/NewFactForm";
import { CategoryFilter } from "./components/CategoryFilter";
import { FactList } from "./components/FactList";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  const fetchFacts = useCallback(async function fetchFacts() {
    setIsLoading(true);
    setHasError(false);
    let query = supabase.from("facts").select("*");
    if (currentCategory !== "all") {
      query = query.eq("category", currentCategory);
    }
    const { data, error } = await query.order("votesInteresting", {
      ascending: false,
    });
    if (error) setHasError(true);
    else setFacts(data);
    setIsLoading(false);
  }, [currentCategory]);

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <CategoryFilter
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <FactList
          facts={facts}
          setFacts={setFacts}
          isLoading={isLoading}
          hasError={hasError}
          onRetry={fetchFacts}
          onAddFact={() => setShowForm(true)}
        />
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default App;
