import { useNavigate } from "react-router-dom";
import { removeDuplicates } from "../../utils/utils";

function RemoveDuplicates({ cipherKey }) {
  const key = removeDuplicates(cipherKey);

  const navigate = useNavigate();

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../create-grid");
        }}
      >
        N
      </div>
      {/* <div className="back">B</div> */}
      <div> - Remove duplicates if any from key</div>
      <div> - Updated key = {key}</div>
      <div> - Create a 5x5 grid</div>
      <div>
        - One letter must be ommited cause alpahabets contains 26 letters
      </div>
      <div> - Usually J is ommited</div>
      <div> - If J comes it is treated as I</div>
    </div>
  );
}

export default RemoveDuplicates;
