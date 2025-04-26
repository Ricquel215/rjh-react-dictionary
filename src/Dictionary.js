import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);

    function search(event) {
      event.preventDefault();
      alert(`Searching for ${keyword} definition`);

      let apiKey = "74bb1a547f9eao9e3t800fc79244b60b";
      let apiUrl =
        "https://api.shecodes.io/dictionary/v1/define?word={word}&key={apiKey}";
      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </div>
    );
  }
}
