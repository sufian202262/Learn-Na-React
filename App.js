import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (
    <div>
        <h1>hello world</h1>
        <p>this is paragraph here</p>
    </div>
)

//React Component
//1. class based component - old
//2. functional component - new

const Title = () => (
    <h1 id="heading">This is title</h1>
)
const Heading2 = () => (
    <div>
        {Title()}
        <Title/>
        <Title></Title>
        <h2>hello world 2</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2/>);