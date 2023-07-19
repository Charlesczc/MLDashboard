function Evaluate() {
  return (
    <div>
      {/* <h1>Evaluate</h1> */}
      <ul className="rocs">
        <li>
          <img src={process.env.PUBLIC_URL + "/graphs/svm_roc.svg"}></img>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "/graphs/rfc_roc.svg"}></img>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "/graphs/nn_roc.svg"}></img>
        </li>
      </ul>
      <div className="matrix">
        <img src={process.env.PUBLIC_URL + "/graphs/matrix.svg"}></img>
      </div>
    </div>
  );
}

export default Evaluate;
