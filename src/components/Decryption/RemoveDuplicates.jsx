import { useNavigate } from "react-router-dom";
import { findDuplicates, createGridWithKey, DrawGrid } from "../../utils/utils";
import { useEffect } from "react";

function RemoveDuplicates({ cipherKey }) {
  const { upd_key, dups } = findDuplicates(cipherKey);

  const navigate = useNavigate();

  if(!cipherKey){
    return;
  }
  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../create-grid");
        }}
      >
        Next
      </div>
      <div className="step">
        <div className="step-title">
          <span className="step-num">Step 1 : </span>
          Removing Duplicates
        </div>
        <ul>
          <li>
            Remove duplicates in the Encryption Key.
            <div className="dup-rem">
              {cipherKey.split("").map((c, i) => (
                <span key={i} style={dups.has(i) ? { color: "lightgray" } : {}}>
                  {c}
                </span>
              ))}
            </div>
          </li>
          <li>
            We need to create a 5x5 grid and fill it with the alphabet, which
            will act as the encryption and decryption key.
          </li>
          <li>
            As there are 26 letters in alphabets, So we have to omit a letter
            (usually 'J') to fill the grid correctly.
          </li>
          <li>
            When 'J' occurs in Encryption key it is removed. So the final updated
            Encryption key becomes -
            <div className="dup-rem">
              {upd_key.split("").map((c, i) => (
                <span key={i} style={c === "J" ? { color: "lightgray" } : {}}>
                  {c}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RemoveDuplicates;
