import React from "react";
import ReactDOM from "react-dom/client";
// React Element
// React.createElement => Object =>HTMLElement(render)
// const header = Babel transpiles it to React.createElement("h1", { id: "heading" }, "Namste React 🚀");
// JSX Heading
// JSX is XML,HTML like syntax
// console.log(header);

const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    Namste React Using JSX 🚀
  </h1>
);
// React Component
// Functional Component -- New

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// Class Based Component -- OLD
