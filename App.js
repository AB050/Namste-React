/*
<div id='parent'> 
<div id='child1'>
<h1>I'm an h1tag</h1>
<h1>I'm an h2tag</h1>
</div>
<div id='child2'>
<h1>I'm an h1tag</h1>
<h1>I'm an h2tag</h1>
</div>
</div>
*/
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am and h1 tag"),
      React.createElement("h2", {}, "I am and h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am and h1 tag"),
      React.createElement("h2", {}, "I am and h2 tag"),
    ]),
  ]
);

console.log(parent);
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Namste from React!"
);
console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
