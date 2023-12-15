import React, { useEffect, useState } from "react";
import "./quote.css";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    handleRandomQuote();
  }, []);
  const handleRandomQuote = () => {
    axios
    .get("https://api.quotable.io/quotes/random")
    .then((response) => {
      const randomQuote = response.data;
      setQuotes(randomQuote);
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });
  }
  return (
    <div className="quote-container">
        <h3 style={{textAlign: "center" , fontSize: "30px"}}>Motivation Quotes</h3>
      {quotes.map((quote, index) => (
        <div className="quote" key={index}>
          <div className="quote-text">{quote.content}</div>
          <div className="quote-author">- {quote.author}</div>
          <button onClick={handleRandomQuote} className="new-quote-button">Next Quote</button>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
