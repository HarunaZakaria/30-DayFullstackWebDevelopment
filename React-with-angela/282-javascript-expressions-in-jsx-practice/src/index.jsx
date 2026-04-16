//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// Solution
import React from "react";
import ReactDom from "react-dom";

const fullName = "Zakaria Haruna";
const currentYear = new Date().getFullYear();
console.log(currentYear);

ReactDom.render(
  <>
    <p>Created by {fullName}</p>
    <p>Copyright {currentYear}</p>
  </>,
  document.querySelector("#root"),
);
