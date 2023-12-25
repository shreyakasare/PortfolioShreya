import React from "react";
import "./First.css";

const First = () => {
  return (
    <div className="bdy">
      <h1 className="h1">First</h1>
      <p className="p">Paragraph</p>

      <ul>
        <li>Item one</li>
        <li class="special">Item two</li>
        <li>
          Item <em>three</em>
        </li>
      </ul>
    </div>
  );
};

export default First;
