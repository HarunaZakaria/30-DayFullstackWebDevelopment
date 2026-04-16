//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// Solution

import React from "react";
import ReactDom from "react-dom";

let greet;

const customStyle = { color: "" };

const currentHour = new Date().getHours();
if (currentHour < 12) {
  greet = "Good Morning";
  customStyle.color = "Red";
} else if (currentHour < 18) {
  greet = "Good Afternoon";
  customStyle.color = "Green";
} else {
  greet = "Good Evening";
  customStyle.color = "Blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={ customStyle }>
      {greet}
    </h1>
  </div>,

  document.querySelector("#root"),
);
