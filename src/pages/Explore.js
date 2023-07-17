import React, { Component } from "react";
// import corrHeatMap from "./graph/corrHeatmap.html";

function Explore() {
  return (
    <div>
      <h1>Explore</h1>
      <Heatmap />
    </div>
  );
}

class Heatmap extends Component {
  render() {
    return (
      <div>
        <iframe
          className="heatmap"
          title="Heat Map"
          src="./graph/corrHeatmap.html"
        />
      </div>
    );
  }
}

export default Explore;
