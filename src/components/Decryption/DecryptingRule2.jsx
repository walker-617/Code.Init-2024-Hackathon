import { useNavigate } from "react-router-dom";

function DecryptingRule2() {
  const navigate = useNavigate();

  const grid = [
    ["M", "O", "N", "A", "R"],
    ["C", "H", "Y", "B", "D"],
    ["E", "F", "G", "I", "K"],
    ["L", "P", "Q", "S", "T"],
    ["U", "V", "W", "X", "Z"],
  ];

  const a = "B",
    b = "C";
  const x = "Y",
    y = "D";

  const styles = {
    [a]: { backgroundColor: "lightcoral" },
    [b]: { backgroundColor: "lightgreen" },
    [x]: { backgroundColor: "red" },
    [y]: { backgroundColor: "green" },
  };

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../decrypt-rule3");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../decrypt-rule1");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="rule-title">
          Decrypting digraphs with Grid
          <span className="step-num">
            {" "}
            <br />
            Rule 2 :{" "}
          </span>
        </div>
        <ul>
          <li>
            If both the letters are in the same row: Take the letter to the left
            of each one (going back to the rightmost if at the leftmost
            position).
            <div className="transformation" style={{ margin: "20px" }}>
              <div className="input-cells">
                Cipher digraph{" "}
                <div className="cell" style={styles[a]}>
                  {a}
                </div>
                <div className="cell" style={styles[b]}>
                  {b}
                </div>
              </div>
              <div className="key-grid">
                {grid.map((row, i) =>
                  row.map((cell, j) => (
                    <div
                      key={`${i}-${j}`}
                      style={styles[cell]}
                      className="cell"
                    >
                      {cell ? cell : " "}
                    </div>
                  ))
                )}
              </div>
              <div className="output-cells">
                <div className="cell" style={styles[x]}>
                  {x}
                </div>
                <div className="cell" style={styles[y]}>
                  {y}
                </div>{" "}
                Decrypted digraph
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DecryptingRule2;
