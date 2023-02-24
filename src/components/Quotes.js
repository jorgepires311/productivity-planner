import React, { useState, useEffect } from "react";

const Quotes = () => {
  const url = "https://zenquotes.io/api/quotes/";
  const dailyQuote = async () => {
    const res = await fetch(url, {
      method: "POST", // Sending a POST request
      mode: "cors",
    });
    const quoteData = await res.json();
    return quoteData;
  };
  useEffect(() => {
    dailyQuote();
  }, []);
  return (
    <div className="quoteContainer">
      <h2>Inspiration</h2>
      {dailyQuote.h}
    </div>
  );
};
export default Quotes;
