import { useState } from 'react';

function TextInput() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="card">
            <h3>Text Input</h3>
            <input type="text" value={text} onChange={handleChange} placeHolder="Type..."/>
            <p>You've Typed: {text}</p>
        </div>
    );
    
};

export default TextInput;