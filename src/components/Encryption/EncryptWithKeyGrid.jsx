import { useNavigate } from "react-router-dom";
import { removeDuplicates, DrawGrid, DrawGridColor } from "../../utils/utils";

function EncryptWithKeyGrid({ text, cipherKey }) {

    const navigate=useNavigate();

  const divideIntoDigrams = (str) => {
    const digrams = [];
    for (let i = 0; i < str.length; i += 2) {
      const digram = str.slice(i, i + 2);
      digrams.push(digram);
    }
    return digrams;
  };

  let temp = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      temp += "X";
    }
    temp += text[i];
  }
  if (temp.length % 2 !== 0) {
    temp += "Z";
  }

  const ans = divideIntoDigrams(temp);

  const key = removeDuplicates(cipherKey).replace("J", "");

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

  let char_pos = {};

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (count < key.length) {
        char_pos[key[count]] = { x: i, y: j };
        grid[i][j] = key[count];
        alphabet.delete(key[count]);
        count++;
      } else {
        const letter = alphabet.values().next().value;
        char_pos[letter] = { x: i, y: j };
        grid[i][j] = letter;
        alphabet.delete(letter);
      }
    }
  }

  function getCipher(s) {
    let c1 = char_pos[s[0]];
    let c2 = char_pos[s[1]];
    let c3 = { x: 0, y: 0 };
    let c4 = { x: 0, y: 0 };

    if (c1.x === c2.x) {
      c3.x = c1.x;
      c3.y = (c1.y + 1) % 5;
      c4.x = c2.x;
      c4.y = (c2.y + 1) % 5;
    } else if (c1.y === c2.y) {
      c3.x = (c1.x + 1) % 5;
      c3.y = c1.y;
      c4.x = (c2.x + 1) % 5;
      c4.y = c2.y;
    } else {
      c3.x = c1.x;
      c3.y = c2.y;
      c4.x = c2.x;
      c4.y = c1.y;
    }
    let ans = "";
    ans += grid[c3.x][c3.y] + grid[c4.x][c4.y];
    return ans;
  }

  return (
    <div>
      {/* <div
        className="next"
        onClick={() => {
          navigate("./split-text");
        }}
      >
        N
      </div> */}
      <div
        className="back"
        onClick={() => {
          navigate("../split-text");
        }}
      >
        B
      </div>
      <div>grid</div>
      <DrawGrid grid={grid} />
      <div>text</div>
      <div>
        {ans.map((ab, i) => (
            <DrawGridColor
              key={i}
              grid={grid}
              ab={ab}
              xy={getCipher(ab)}
              i={i}
            />
        ))}
      </div>
    </div>
  );
}

export default EncryptWithKeyGrid;
