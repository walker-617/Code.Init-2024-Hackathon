import { useRef, useState } from "react";
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
  getFullText
} from "../../utils/utils";

function InputcipherKey({ setCipher, setCipherKey }) {
  const cipherRef = useRef();
  const cipherKeyRef = useRef();
  const [error, setError] = useState();

  const [result,setResult]=useState();

  const navigate = useNavigate();

  function convert(str) {
    const stringWithoutWhitespace = str.replace(/\s+/g, "");

    const uppercaseString = stringWithoutWhitespace.toUpperCase();

    return uppercaseString;
  }

  function hasNonAlphabeticChars(str) {
    const regex = /[^a-zA-Z\s]/;
    return regex.test(str);
  }

  function handleStart() {
    const cipher = cipherRef.current.value;
    const cipherKey = cipherKeyRef.current.value;
    if (cipher === "" && cipherKey === "") {
      setError("Please fill details");
      return;
    }
    if(hasNonAlphabeticChars(cipher) || hasNonAlphabeticChars(cipherKey)){
        setError("Please give upper or lower case alpahabets");
        return;
    }

    if(cipher%2===1){
      setError("Cipher must be even length.");
      return;
    }
    
    setCipher(convert(cipher));
    setCipherKey(convert(cipherKey));
    document.getElementById("title").style.fontSize="30px";
    navigate("./remove-duplicates");
  }

  function handleResult(){
    setError("");
    const cipher = cipherRef.current.value;
    const cipherKey = cipherKeyRef.current.value;
    if (cipher === "" || cipherKey === "") {
      setError("Please fill details");
      return;
    }
    if (hasNonAlphabeticChars(cipher) || hasNonAlphabeticChars(cipherKey)) {
      setError("Please give upper or lower case alpahabets");
      return;
    }
    setResult(convert(getFullText(convert(cipher),convert(cipherKey))));
  }

  return (<>
    <div className="text-key-inputs">
      <div className="inputs">
        <div>
          <div className="text-label">Cipher Text</div>
          <input ref={cipherRef} placeholder="Enter the  Cipher Text" />
        </div>
        <div>
          <div className="key-label">Decryption Key</div>
          <input ref={cipherKeyRef} placeholder="Enter the Decryption Key" />
        </div>
      </div>
      <div className="instant-result">
          <div onClick={handleResult}>
            Decrypt
          </div>
          <div style={!result?{color:"lightgrey",borderBottom:"5px solid lightgrey"}:{}}>{result?result:"TEXT goes here..."}</div>
        </div>
      <div className="start-encryption" onClick={handleStart}>
        Show Decryption Process
      </div>
      <div className="error">{error}</div>
    </div>
    </>
  );
}

export default InputcipherKey;