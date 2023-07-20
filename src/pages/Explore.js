import React from "react";

function Explore() {
  return (
    // Explore page with the plots (Part 1d)
    <div>
      <div>
        <iframe
          className="heatmap"
          title="Heat Map"
          src={process.env.PUBLIC_URL + "/graphs/corrHeatmap.html"}
        />
      </div>
      <div className="level2">
        <div>
          <iframe
            className="dist"
            title="Distribution"
            src={process.env.PUBLIC_URL + "/graphs/distribution.html"}
          />
        </div>
        <div>
          <iframe
            className="box"
            title="Boxplot"
            src={process.env.PUBLIC_URL + "/graphs/boxplot.html"}
          />
        </div>
      </div>
      <div className="splot">
        <iframe
          className="scatter"
          title="Scatter"
          src={process.env.PUBLIC_URL + "/graphs/scatter.html"}
        />
      </div>
    </div>
  );
}

export default Explore;
