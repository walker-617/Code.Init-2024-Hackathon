import { useNavigate } from "react-router-dom";
import {
  findDuplicates,
  getCipher,
  DrawGrid,
  DrawGridColor,
  getText,
  completeGrid,
  updatedKey,
  getdigraphs,
  getCharPos,
} from "../../utils/utils";
import { useEffect, useState } from "react";

function DecryptWithKeyGrid({ cipher, cipherKey }) {
  const navigate = useNavigate();

  const key = updatedKey(cipherKey);
  const grid = completeGrid(key);

  let char_pos = getCharPos(grid);

  const digraphs = getdigraphs(cipher);

  const [count, setCount] = useState(0);
  const [styles, setStyles] = useState();
  const [points, setPoints] = useState();
  const [rule, setrule] = useState("");

  useEffect(() => {
    if (!cipher || !cipherKey) {
      return;
    }
    const ab = digraphs[count];
    const { xy, rule_ } = getText(grid, ab, char_pos);

    setrule(rule_);

    const a = ab[0],
      b = ab[1];
    const x = xy[0],
      y = xy[1];

    const points = { a: a, b: b, x: x, y: y };

    setPoints(points);

    const styles = {
      [a]: { backgroundColor: "lightcoral" },
      [b]: { backgroundColor: "lightgreen" },
      [x]: { backgroundColor: "red" },
      [y]: { backgroundColor: "green" },
    };
    setStyles(styles);

    document.getElementById("digraph-block" + count).style.color = "black";
  }, [count]);

  function changedigraph(i) {
    if (i == count) {
      return;
    }
    const ab = digraphs[count];
    const { xy, rule } = getText(grid, ab, char_pos);

    const a = ab[0],
      b = ab[1];
    const x = xy[0],
      y = xy[1];

    document.getElementById(a + count).style.backgroundColor = "white";
    document.getElementById(b + count).style.backgroundColor = "white";
    document.getElementById(x + count).style.backgroundColor = "white";
    document.getElementById(y + count).style.backgroundColor = "white";

    document.getElementById("digraph-block" + count).style.color = "lightgrey";

    setCount(i);
  }

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../decryption-result");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../decrypt-rule3");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="step-title">
          <span className="step-num">Step 5 : </span>
          Encrypting the digraphs
        </div>
        <ul>
          <li>
            Now apply these rules to digraphs obtained.
            <div className="dup-rem" style={{ justifyContent: "center" }}>
              {digraphs &&
                digraphs.map((c, i) => (
                  <span
                    key={i}
                    onClick={() => changedigraph(i)}
                    className="digraph-block"
                    id={"digraph-block" + i}
                  >
                    {c}&nbsp;&nbsp;
                  </span>
                ))}
            </div>
            <div className="transformation" style={{ margin: "20px" }}>
              <div className="input-cells">
                Cipher digraph{" "}
                <div className="cell" style={styles && styles[points.a]}>
                  {points && points.a}
                </div>
                <div className="cell" style={styles && styles[points.b]}>
                  {points && points.b}
                </div>
              </div>
              {grid ? (
                <DrawGridColor
                  grid={grid}
                  ab={digraphs[count]}
                  xy={getText(grid, digraphs[count], char_pos).xy}
                  i={count}
                />
              ) : (
                ""
              )}

              <div className="output-cells">
                <div className="cell" style={styles && styles[points.x]}>
                  {points && points.x}
                </div>
                <div className="cell" style={styles && styles[points.y]}>
                  {points && points.y}
                </div>{" "}
                Decrypted digraph
              </div>
            </div>
          </li>
        </ul>
        <div
          className="rule-block"
          onClick={() => {
            navigate("../decrypt-" + rule.replace(" ", ""));
          }}
        >
          <div className="rule">{"< This decryption follows " + rule}</div>
        </div>
      </div>
    </div>
  );
}

export default DecryptWithKeyGrid;
