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
// ReactDom.render(<GreetingASec />, document.getElementById("root"));
// ReactDom.render(<Greeting />, document.getElementById("root"));
// ReactDom.render(<GreetingTemp />, document.getElementById("root"));
//ReactDom.render(<Greeting></Greeting>, dcocument.getElementById("root")) will also work fine!!

/**
 * Basic JSX Rules
 * returns a single element
 * div/section/article or a Fragment
 * use the camelCase for a html fragment
 * className instead of class
 * close every single element and format the code
 */

function JSXBasics() {
  return (
    <div>
      <h1> This is for testing purposes!</h1>
      <ul>
        <li>This is option 1</li>
        <li>This is option 2</li>
      </ul>
    </div>
  );
}

// ReactDom.render(<JSXBasics />, document.getElementById("root"));

// Now in the above return statement, we cannot have something like
/**
 * function JSXBasics() {
 * return (<div> ..... </div>
 * <div> .... </div>);
 * }
 * This will throw an error as JSX can only return a single element, if you want to
 * make your way around it, the best way would be:
 *
 * function JSXBasics() {
 * return (<div> .....
 * <div> .... </div>
 * <div> .... </div>
 *  </div>
 * );
 * }
 */

/**
 * We can use Fragment as well
 * function JSXBasics() {
 * return (<React.Fragment> .....
 * <div> .... </div>
 * <div> .... </div>
 *  </React.Fragment>
 * );
 * }
 *
 * or <React.Fragment> .... </React.Fragment> can also be represented as <>...</>
 */

/**
 * Nested Components
 */
// this is the main components
function NestedComp() {
  return (
    <div>
      <Nested />
      <h1>Hello There!</h1>
      <Nestedtwo />
    </div>
  );
}
// these are all the sub-components
const Nested = () => {
  return (
    <div>
      <h1> This is the nested component! </h1>
    </div>
  );
};

function Nestedtwo() {
  return (
    <div>
      <h2> This is another nested component!! </h2>
    </div>
  );
}
// the biggest advantage is that we only need to write the render statement once for the main component.
ReactDom.render(<NestedComp />, document.getElementById("root"));
