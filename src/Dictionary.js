import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h1>what are you looking for?</h1>
            <form className="input-field" onSubmit={search}>
                <input type="search" placeholder="search for a word" className="search form-label" onChange={handleKeywordChange} />
                <button className="btn-search" type="button"><i className="fas fa-search"></i></button>
            </form>
            <Results results={results} />
        </div>
    );
}