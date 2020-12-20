import React from "react";
import ReactDom from "react-dom";

/**
 * By capitalising the function name, React knows that this is special, hence this is a component for React
 * From this component, we will return Html(JSX)
 * This is a stateless functional component
 *
 */
function Greeting() {
  return <h4> Hello Aditya! This is your first react component</h4>;
}

// The above function can be written in another format as well like
const GreetingTemp = () => {
  return React.createElement("h4", {}, "hello world");
};

//but the above setup has its downfalls, for example when we have multiple elements, the first is better as compared
// to the second one, as one can see below
function GreetingSec() {
  return (
    <div>
      Hello world
      <ul>
        <li>Hey there!</li>
      </ul>
    </div>
  );
}

const GreetingASec = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("ul", {}, React.createElement("li", {}, "Hey There!"))
  );
};

// So as the functional requirements increase, the scope of using the 2nd technique decreases, hence its better to use the first technique as proper addons can be made
/**
 * Once the component is created, we need to add it to the index.html within the public folder as index.js is just an entry point
 * and we are adding this functionality to index.html
 * We need to try to inject this fucntionality into the div of index.html, we do that by react dom and then use that to render it
 */
// ReactDom.render(<GreetingSec />, document.getElementById("root"));
ReactDom.render(<GreetingASec />, document.getElementById("root"));
// ReactDom.render(<Greeting />, document.getElementById("root"));
// ReactDom.render(<GreetingTemp />, document.getElementById("root"));
//ReactDom.render(<Greeting></Greeting>, dcocument.getElementById("root")) will also work fine!!
