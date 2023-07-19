function Evaluate() {
  return (
    <div>
      {/* <h1>Evaluate</h1> */}
      <div className="rocs">
        <img
          src={process.env.PUBLIC_URL + "/graphs/svm_roc.svg"}
          width="500px"
          height="500px"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/graphs/rfc_roc.svg"}
          width="500px"
          height="500px"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/graphs/nn_roc.svg"}
          width="500px"
          height="500px"
        ></img>
      </div>
      <div className="matrix">
        <img src={process.env.PUBLIC_URL + "/graphs/matrix.svg"}></img>
      </div>
    </div>
  );
}

export default Evaluate;
