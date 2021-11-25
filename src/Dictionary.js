import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword}`);
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
        </div>
    );
}