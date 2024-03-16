import { useNavigate } from "react-router-dom";
import { findDuplicates, DrawGrid,updatedKey, createGridWithKey} from "../../utils/utils";

function CreateGridWithKeys({ cipherKey }) {
  const navigate=useNavigate();
  if(!cipherKey){
    return;
  }
  const upd_key = updatedKey(cipherKey);

  const grid=createGridWithKey(upd_key);

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../fill-grid");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../remove-duplicates");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="step-title">
          <span className="step-num">Step 2 : </span>
          Creating Grid
        </div>
        <ul>
          <li>
            Create a 5X5 grid and fill the updated Encryption key in left to right and top to bottom order.
            <div style={{margin:"20px"}}>
              <DrawGrid grid={grid}/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreateGridWithKeys;
