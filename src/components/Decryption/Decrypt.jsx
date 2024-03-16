import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputcipherKey from "./InputCipherKey";
import RemoveDuplicates from "./RemoveDuplicates";
import CreateGridWithKeys from "./CreateGridWithKeys";
import FillGridWithAlpha from "./FillGridWithAlpha";
import SplitText from "./SplitText";
import DecryptingRule1 from "./DecryptingRule1";
import DecryptingRule2 from "./DecryptingRule2";
import DecryptingRule3 from "./DecryptingRule3";
import DecryptWithKeyGrid from "./DecryptWithKeyGrid";
import DecryptionResult from "./DecryptionResult";

function Decrypt() {
  const [cipher, setCipher] = useState();
  const [cipherKey, setCipherKey] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cipherKey || !cipher) {
      navigate("./");
      return;
    }
  }, []);

  return (
    <>
      <div className="encrypt">
        <div className="title" align="center" id="title">
          Decryption
        </div>
        {cipher && cipherKey ? (
          <div className="text-key">
            <div className="text-sec">
              <div className="text-label">Cipher Text</div>
              <div className="text">{cipher}</div>
            </div>
            <div className="key-sec">
              <div className="key-label">Encryption Key</div>
              <div className="key">{cipherKey}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Routes>
          <Route
            path=""
            element={
              <InputcipherKey setCipher={setCipher} setCipherKey={setCipherKey} />
            }
          />
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
          <Route path="split-text" element={<SplitText cipher={cipher} />} />
          <Route path="decrypt-rule1" element={<DecryptingRule1 />} />
          <Route path="decrypt-rule2" element={<DecryptingRule2 />} />
          <Route path="decrypt-rule3" element={<DecryptingRule3 />} />
          <Route
            path="decrypt-with-grid"
            element={<DecryptWithKeyGrid cipher={cipher} cipherKey={cipherKey} />}
          />
          <Route
            path="decryption-result"
            element={<DecryptionResult cipher={cipher} cipherKey={cipherKey} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Decrypt;
