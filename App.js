import React from "react";
import ReactDOM from "react-dom";


// Using JavaScript
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript";

// const root = document.getElementById("root");
// root.appendChild(heading);


// Using React
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"}, 
//         [React.createElement("h1",{}, "Im an h1 tag!!"), 
//         React.createElement("h2",{}, "Im an h2 tag!!")]
//         )
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// Complex React Code
const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Car Guy"), 
        React.createElement("h2",{},"Porsche 911 GT3 RS")
    ]), 
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm an h1 tag"), 
        React.createElement("h2",{},"I'm an h2 tag")
    ])
]);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);