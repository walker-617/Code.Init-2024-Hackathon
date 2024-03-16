import { DrawGrid, updatedKey, completeGrid } from "../../utils/utils";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function FillGridWithAlpha({ cipherKey }) {
  const navigate=useNavigate();
  if(!cipherKey){
    return;
  }
  const key = updatedKey(cipherKey);
  const grid=completeGrid(key);

  const key_set=new Set(key.split(""));

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../split-text");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../create-grid");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="step-title">
          <span className="step-num">Step 3 : </span>
          Completing the grid
        </div>
        <ul>
          <li>
            Complete the grid with remaining alphabets which are not present in the grid. Remember to ignore 'J'.
            <div className="dup-rem">
              {alphabet.map((c, i) => (
                <span key={i} style={key_set.has(c) ? { color: "lightgray" } : {}}>
                  {c}
                </span>
              ))}
            </div>
            <div style={{margin:"20px"}}>
              <DrawGrid grid={grid} key_set={key_set}/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FillGridWithAlpha;
