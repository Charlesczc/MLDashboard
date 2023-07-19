import React, { Component } from "react";

function Explore() {
  return (
    <div>
      {/* <h1>Explore</h1> */}
      <iframe
        className="heatmap"
        title="Heat Map"
        src={process.env.PUBLIC_URL + "/graphs/corrHeatmap.html"}
        scrolling="no"
      />
      <div className="level2">
        <iframe
          className="dist"
          title="Distribution"
          src={process.env.PUBLIC_URL + "/graphs/distribution.html"}
        />
        <iframe
          className="box"
          title="Boxplot"
          src={process.env.PUBLIC_URL + "/graphs/boxplot.html"}
        />
      </div>
      <iframe
        className="scatter"
        title="Scatter"
        src={process.env.PUBLIC_URL + "/graphs/scatter.html"}
      />
    </div>
  );
}

// class Heatmap extends Component {
//   render() {
//     return (
//       <div>
//         <iframe className="heatmap" title="Heat Map" src="t.html" />
//       </div>
//     );
//   }
// }

export default Explore;
