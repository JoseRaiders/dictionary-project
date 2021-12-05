import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <br />
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index)
            {
                return (
                    <div key={index}>
                            <strong>Definition:</strong> {definition.definition}
                            <br />
                            <Example example={definition.example} />
                            <Synonyms synonyms={definition.synonyms} />
                            <br />
                    </div>
                )
            })}
        </div>
    );
}