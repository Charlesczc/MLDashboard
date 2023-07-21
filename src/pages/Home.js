import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

function Home() {
  return (
    //Home page with model scores
    <div>
      <h1>Random Forest Classification</h1>
      <text className="model">Random Forest Classifier</text>
      <PerCircle percent={84} name="Accuracy" />
      <div className="other">
        <PerCircle percent={65} name="Precision" />
        <PerCircle percent={72} name="Recall" />
        <PerCircle percent={67} name="F1-Score" />
      </div>
    </div>
  );
}

export default Home;

//Creating scores percentage circle
function PerCircle({ percent, name }) {
  return (
    <div className="circle_plate">
      <div>
        <CircularProgressbar
          className={name}
          value={percent}
          text={`${percent}%`}
        />
      </div>
      <div>
        <text>{name}</text>
      </div>
    </div>
  );
}
