import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // here this is a default value and text is the variable and setText is function that is used to update the value of the text
  // text = "asd" //wrong way to update
  // setText("asd") //right way to update

  // this is used to handle the event. onchange is when the value of the text area will change then onchange will run
  const handleonChange = (event) => {
    setText(event.target.value); //this will let us change the value in the text area along with the setText. it will let us change the state
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClrClick = () => {
    setText("");
  };
  const handleCpyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div>
        <h2
          className="my-3"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h2>
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(13 1 43)",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleonChange}
          placeholder="Enter a text here"
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCpyClick}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="my-2">Your text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}mins read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in above textbox to preview"}
        </p>
      </div>
    </>
  );
}
