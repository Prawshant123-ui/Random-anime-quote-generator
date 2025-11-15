import React, { useState, useEffect } from "react";
import localquotes from "./localquotes.js";

const Quote = () => {
  const [randquote, setRandquote] = useState({});

  // Function to pick a random quote
  const randquotes = () => {
    const randomIndex = Math.floor(Math.random() * localquotes.length);
    setRandquote(localquotes[randomIndex]);
  };

  // Initialize with a random quote on mount
  useEffect(() => {
    randquotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Anime Quotes
      </h1>

      {/* Random Quote Section */}
      {randquote.quote && (
        <div className="max-w-4xl mx-auto mb-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <p className="text-lg text-gray-700 italic mb-3">
            “{randquote.quote}”
          </p>
          <p className="text-right text-sm font-semibold text-indigo-600">
            — {randquote.character} ({randquote.anime})
          </p>
        </div>
      )}

      {/* Generate Random Button */}
      <div className="flex justify-center mb-8">
        <button
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl 
                     hover:bg-indigo-700 active:scale-95 transition-all shadow-md"
          onClick={randquotes}
        >
          Generate Randomly
        </button>
      </div>

      
    </div>
  );
};

export default Quote;
