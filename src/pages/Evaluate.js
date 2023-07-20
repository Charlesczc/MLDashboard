function Evaluate() {
  return (
    //Evaluation page with the model performance plot (Part 4a)
    <div>
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
        <img src={process.env.PUBLIC_URL + "/graphs/matrix.svg"}></img>
      </div>
    </div>
  );
}

export default Evaluate;
