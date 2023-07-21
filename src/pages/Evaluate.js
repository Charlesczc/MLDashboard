function Evaluate() {
  return (
    //Evaluation page with the model performance plot (Part 4a)
    <div>
      <text className="roc_title">
        Receiver operating characteristic Curves
      </text>
      <div className="rocs">
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/svm_roc.svg"}></img>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/rfc_roc.svg"}></img>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/nn_roc.svg"}></img>
        </div>
      </div>
      <div className="matrix">
        <div>
          <text>Confustion Matrixs</text>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/graphs/matrix.svg"}></img>
        </div>
      </div>
    </div>
  );
}

export default Evaluate;
