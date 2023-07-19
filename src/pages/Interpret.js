function Interpret() {
  return (
    <div>
      {/* <h1>Interpret</h1> */}
      <img src={process.env.PUBLIC_URL + "/graphs/fi.svg"}></img>
      <div className="learningc">
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/learnc1.svg"}></img>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/learnc2.svg"}></img>
        </div>
      </div>
      <div className="shap">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap0.svg"}
            width="600px"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap1.svg"}
            width="600px"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap2.svg"}
            width="600px"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap3.svg"}
            width="600px"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap4.svg"}
            width="600px"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/graphs/shap5.svg"}
            width="600px"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Interpret;
