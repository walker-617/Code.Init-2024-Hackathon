import { useNavigate } from "react-router-dom";
import { removeDuplicates, DrawGrid } from "../../utils/utils";

function CreateGridWithKeys({ cipherKey }) {
  const key = removeDuplicates(cipherKey).replace("J", "");

  const navigate=useNavigate();

  const grid = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  let count = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (count < key.length) {
        grid[i][j] = key[count];
        count++;
      }
    }
  }

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../fill-grid");
        }}
      >
        N
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../remove-duplicates");
        }}
      >
        B
      </div>
      <div> - Fill the Grid with all the key elements</div>
      <DrawGrid grid={grid} />
    </div>
  );
}

export default CreateGridWithKeys;
