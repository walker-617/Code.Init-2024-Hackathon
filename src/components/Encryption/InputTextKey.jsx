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
  getFullCipher
} from "../../utils/utils";

function InputTextKey({ setText, setCipherKey }) {
  const textRef = useRef();
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
    setError("");
    const text = textRef.current.value;
    const cipherKey = cipherKeyRef.current.value;
    if (text === "" || cipherKey === "") {
      setError("Please fill details");
      return;
    }
    if (hasNonAlphabeticChars(text) || hasNonAlphabeticChars(cipherKey)) {
      setError("Please give upper or lower case alpahabets");
      return;
    }

    setText(convert(text));
    setCipherKey(convert(cipherKey));
    document.getElementById("title").style.fontSize = "30px";
    navigate("./remove-duplicates");
  }

  function handleResult(){
    setError("");
    const text = textRef.current.value;
    const cipherKey = cipherKeyRef.current.value;
    if (text === "" || cipherKey === "") {
      setError("Please fill details");
      return;
    }
    if (hasNonAlphabeticChars(text) || hasNonAlphabeticChars(cipherKey)) {
      setError("Please give upper or lower case alpahabets");
      return;
    }
    setResult(convert(getFullCipher(convert(text),convert(cipherKey))));
  }

  return (
    <>
      <div className="text-key-inputs">
        <div className="inputs">
          <div>
            <div className="text-label">Plain Text</div>
            <input ref={textRef} placeholder="Enter the Plain Text" />
          </div>
          <div>
            <div className="key-label">Encryption Key</div>
            <input ref={cipherKeyRef} placeholder="Enter the Encryption Key" />
          </div>
        </div>
        <div className="instant-result">
          <div onClick={handleResult}>
            Encrypt
          </div>
          <div style={!result?{color:"lightgrey",borderBottom:"5px solid lightgrey"}:{}}>{result?result:"CIPHER goes here..."}</div>
        </div>
        <div className="start-encryption" onClick={handleStart}>
          Show Encryption Process
        </div>
        <div className="error">{error}</div>
      </div>
    </>
  );
}

export default InputTextKey;
