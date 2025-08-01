import { useState } from "react";
import axios from "axios";
import "./Css/SearchPage.css";

export default function SearchPage({ setResults }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async () => {
    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://ai-book-suggestions.onrender.com/api/search`,
        {
          params: { query: query },
          timeout: 60000,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.results) {
        setResults(response.data.results);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Search failed:", error);
      setError(error.response?.data?.error || "Failed to fetch results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pick your next book"
          className="input"
          required
        />
        <button onClick={search} disabled={loading} className="button">
          {loading ? "Searching..." : "Search"}{" "}
        </button>

        {error && <p className="error">{error}</p>}
      </div>
      <div className="example">
        ex: Books with strong female protagonists, or books like Dune and Enders
        Game
      </div>
    </div>
  );
}
