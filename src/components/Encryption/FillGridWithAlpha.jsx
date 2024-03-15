import { removeDuplicates, DrawGrid } from "../../utils/utils";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function FillGridWithAlpha({ cipherKey }) {
  const key = removeDuplicates(cipherKey).replace("J", "");

  const navigate=useNavigate();

  const grid = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  let count = 0;
  const alphabet = new Set([
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
  ]);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (count < key.length) {
        grid[i][j] = key[count];
        alphabet.delete(key[count]);
        count++;
      } else {
        const letter = alphabet.values().next().value;
        grid[i][j] = letter;
        alphabet.delete(letter);
      }
    }
  }

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../split-text");
        }}
      >
        N
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../create-grid");
        }}
      >
        B
      </div>
      <div> - Fill the Grid with remaining alphabets</div>
      <DrawGrid grid={grid} />
    </div>
  );
}

export default FillGridWithAlpha;
