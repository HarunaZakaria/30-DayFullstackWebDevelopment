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
const imgUrl = "https://picsum.photos/200/300";

ReactDom.render(
  <>
    <p>Created by {fullName}</p>
    <div className="food">
      <div>
        <img
          src={imgUrl}
          alt="photo"
          className="food-img"
          style={{ width: "100px", height: "140px", margin: "10px" }}
        />
        <img
          src={imgUrl}
          alt="photo"
          className="food-img"
          style={{ width: "100px", height: "130px", margin: "10px " }}
        />
        <img
          src={imgUrl}
          alt="photo"
          className="food-img"
          style={{ width: "100px", height: "120px", margin: "10px" }}
        />
      </div>
    </div>
    <p>Copyright {currentYear}</p>
  </>,
  document.querySelector("#root"),
);
