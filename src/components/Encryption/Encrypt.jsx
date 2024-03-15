import { useState } from "react";
import InputTextKey from "./InputTextKey";
import RemoveDuplicates from "./RemoveDuplicates";
import CreateGridWithKeys from "./CreateGridWithKeys";
import FillGridWithAlpha from "./FillGridWithAlpha";
import SplitText from "./SplitText";
import EncryptWithKeyGrid from "./EncryptWithKeyGrid";
import { Routes, Route, useNavigate } from "react-router-dom";

function Encrypt() {

    const [text,setText]=useState();
    const [cipherKey,setCipherKey]=useState();

  return (
    <div className="encrypt">
        {text && cipherKey?<div>
            {cipherKey}
            <br/>
            {text}
        </div>:""}
      <Routes>
        <Route path="" element={<InputTextKey setText={setText} setCipherKey={setCipherKey}/>} />
        <Route
          path="remove-duplicates"
          element={<RemoveDuplicates cipherKey={cipherKey} />}
        />
        <Route
          path="create-grid"
          element={<CreateGridWithKeys cipherKey={cipherKey} />}
        />
        <Route
          path="fill-grid"
          element={<FillGridWithAlpha cipherKey={cipherKey} />}
        />
        <Route path="split-text" element={<SplitText text={text} />} />
        <Route
          path="encrypt-with-grid"
          element={<EncryptWithKeyGrid text={text} cipherKey={cipherKey} />}
        />
      </Routes>
    </div>
  );
}

export default Encrypt;
