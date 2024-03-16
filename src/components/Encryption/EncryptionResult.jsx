import { useNavigate } from "react-router-dom";
import {
  findDuplicates,
  getCipher,
  DrawGrid,
  DrawGridColor,
  completeGrid,
  updatedKey,
  getdigraphs,
  getCharPos,
} from "../../utils/utils";
import { useEffect, useState } from "react";

function EncryptionResult({ text, cipherKey }) {
  const navigate = useNavigate();
  if(!text || !cipherKey)
  {
    return;
  }
  document.getElementById("title").style.fontSize = "60px";

  const key = updatedKey(cipherKey);
  const grid = completeGrid(key);
  let char_pos = getCharPos(grid);

  const digraphs = getdigraphs(text);
  return (
    <div>
      <div
        className="back"
        onClick={() => {
          document.getElementById("title").style.fontSize = "30px";
          navigate("../encrypt-with-grid");
        }}
      >
        Back
      </div>
      <div className="result">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            gap: "10px",
          }}
        >
          <div>Grid</div>
          <DrawGrid grid={grid} />
        </div>

        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            // gap: "10px",
          }}>
          <div>Encrypted Text</div>
          <div className="output">
            {digraphs.map((c, i) => (
              <span className="output-char" key={i}>
                {getCipher(grid, c, char_pos).xy}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EncryptionResult;
