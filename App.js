// const heading = React.createElement("h1", { id: "heading", attribute: "xyz" }, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Nested Div

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H1 Tag!"),
    React.createElement("h2", {}, "I am a H2 Tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 Tag!"),
    React.createElement("h2", {}, "I am a H2 Tag!"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
