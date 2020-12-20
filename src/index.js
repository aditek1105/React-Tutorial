import React from "react";
import ReactDom from "react-dom";

/**
 * By capitalising the function name, React knows that this is special, hence this is a component for React
 * From this component, we will return Html(JSX)
 */
function Greeting() {
  return <h4> Hello Aditya! This is your first react component</h4>;
}

/**
 * Once the component is created, we need to add it to the index.html within the public folder as index.js is just an entry point
 * and we are adding this functionality to index.html
 * We need to try to inject this fucntionality into the div of index.html, we do that by react dom and then use that to render it
 */

ReactDom.render(<Greeting />, document.getElementById("root"));
//ReactDom.render(<Greeting></Greeting>, dcocument.getElementById("root")) will also work fine!!
