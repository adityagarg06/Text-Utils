import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//NOTES
// in export default we can import a module with any name but if it is not default then we have to give the actual name of the module
// props is a js object which is used to transfer data from parent component to child component
// propTypes is used to validate type of the variable
// default prop is used to give default value if nothing is given
// map is used to iterate each element of an array and perform some operation on each element. it takes a callback function in which we can perform any operation on each element
// whenever we are using map method we have to give it a unique key
// Hooks allow function components to have access to state and class features without making a class. Because of this, className components are generally no longer needed.
//The React useState Hook allows us to track state in a function component.
//State generally refers to data or properties that need to be tracking in an application.

function App() {
  const [mode, setMode] = useState("light"); //it tells wthere darkmode is on or not
  const [alert, setAlert] = useState(null);

  const showAlert = function (message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(13 1 43)";
      showAlert("Dark Mode have been enabled", "Success: ");
      setInterval(() => {
        document.title = "TextUtils-Home";
      }, 1000);
      setInterval(() => {
        document.title = "TextUtils-Dark Mode";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode have been enabled", "Success: ");
      setInterval(() => {
        document.title = "TextUtils-Home";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils-Light Mode";
      }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users---> Component 1
            /users/home ---> component 2 */}
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text here"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
