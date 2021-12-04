import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <h5>{props.phonetic.text}</h5>
            <audio controls src={props.phonetic.audio} type="audio/mpeg"></audio>
        </div>
    );
}