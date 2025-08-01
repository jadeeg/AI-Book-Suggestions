import "./Css/Home.css";
import SearchPage from "./SearchPage.jsx";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="text-info">
        <div>
          <h2>
            <strong>AI Reads Your Mind:
              <p> Your Personalized Reading List </p> </strong>
          </h2>
          <div className="description-results">
            {results.length === 0 ? (
              <>
                For an craft unique, personalized reading lists by analyzing
                individual preferences, past reading habits, and trends, making
                book selection easier than ever before
              </>
            ) : (
              results.map((item, idx) => <div key={idx}>{item}</div>)
            )}
          </div>
        </div>
        <SearchPage setResults={setResults} />
      </div>

      <div className="images">
        <img
          src="https://i.postimg.cc/5NrMBV4h/qijin-xu-k-Li-UO2-I8-Ajc-unsplash.jpg"
          width="310px"
          style={{ borderRadius: "4px" }}
          alt="Book image 1"
        />
        <img
          src="https://i.postimg.cc/gkjWLJWy/kyle-wagner-RLs-Se-G9-Kz-L0-unsplash.jpg"
          width="310px"
          style={{ borderRadius: "4px" }}
          alt="Book image 2"
        />
        <img
          src="https://i.postimg.cc/vTHdz86s/milada-vigerova-g-LFu-YO-4c-NE-unsplash.jpg"
          width="310px"
          style={{ borderRadius: "4px" }}
          alt="Book image 3"
        />
        <img
          src="https://i.postimg.cc/PxHHCQXN/sash-margrie-hunt-CGCKu3-Fyc-U8-unsplash.jpg"
          width="310px"
          style={{ borderRadius: "4px" }}
          alt="Book image 4"
        />
      </div>

      <footer>
        This AI project was coded by
        <a
          href="https://github.com/jadeeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jade Gonçalves
        </a>{" "}
        and is
        <a
          href="https://github.com/jadeeg/AI-Book-Suggestions"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
