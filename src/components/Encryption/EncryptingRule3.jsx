import { useNavigate } from "react-router-dom";

function EncryptingRule3() {
  const navigate = useNavigate();

  const grid = [
    ["M", "O", "N", "A", "R"],
    ["C", "H", "Y", "B", "D"],
    ["E", "F", "G", "I", "K"],
    ["L", "P", "Q", "S", "T"],
    ["U", "V", "W", "X", "Z"],
  ];

  const a = "H",
    b = "X";
  const x = "V",
    y = "B";

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
          navigate("../encrypt-with-grid");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../encrypt-rule2");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="rule-title">
          Encrypting digraphs with Grid
          <span className="step-num">
            {" "}
            <br />
            Rule 3 :{" "}
          </span>
        </div>
        <ul>
          <li>
            If neither of the above rules is true: Form a rectangle with the two
            letters and take the letters on the horizontal opposite corner of
            the rectangle.
            <div className="transformation" style={{ margin: "20px" }}>
              <div className="input-cells">
                Plain digraph{" "}
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
                Encrypted digraph
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EncryptingRule3;
