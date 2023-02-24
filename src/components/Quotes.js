import React, { useState, useEffect } from "react";

const Quotes = () => {
  // const dailyQuote = async () => {
  //   const url = "https://zenquotes.io/api/quotes/";
  //   const options = {
  //           mode: "no-cors"
  //   };
  //   const res = await fetch(url, options);
  //   const quoteData = await res.json();
  //   return quoteData;
  // };
  useEffect(() => {
    fetch('https://zenquotes.io/api/quotes/').then(
       (response) => console.log(response)
    );
 }, []);
 
  const dailyQuote = fetch('https://zenquotes.io/api/quotes/')
   .then(response => response.json())
   .then(data => console.log(data));

  // useEffect(() => {
  //   dailyQuote();
  // }, []);

  return (
    <div className="quoteContainer">
      <h2>Inspiration</h2>
      {/* {dailyQuote.h} */}
    </div>
  );
};
export default Quotes;
