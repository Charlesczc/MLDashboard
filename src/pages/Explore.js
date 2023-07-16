import React, { Component } from "react";
import corrHeatMap from "./graph/test.html";

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
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
          title="Heat Map"
          srcDoc={corrHeatMap}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }
}

export default Explore;
