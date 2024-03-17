import { useState, useEffect } from "react";
import InputTextKey from "./InputTextKey";
import RemoveDuplicates from "./RemoveDuplicates";
import CreateGridWithKeys from "./CreateGridWithKeys";
import FillGridWithAlpha from "./FillGridWithAlpha";
import SplitText from "./SplitText";
import EncryptingRule1 from "./EncryptingRule1";
import EncryptingRule2 from "./EncryptingRule2";
import EncryptingRule3 from "./EncryptingRule3";
import EncryptWithKeyGrid from "./EncryptWithKeyGrid";
import EncryptionResult from "./EncryptionResult";
import { Routes, Route, useNavigate } from "react-router-dom";

function Encrypt() {
  const [text, setText] = useState();
  const [cipherKey, setCipherKey] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cipherKey || !text) {
      navigate("./");
      return;
    }
  }, [cipherKey, text]);

  return (
    <>
      <div className="encrypt">
        <div className="title" align="center" id="title">
          Encryption
        </div>
        {text && cipherKey ? (
          <div className="text-key">
            <div className="text-sec">
              <div className="text-label">Plain Text</div>
              <div className="text">{text}</div>
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
              <InputTextKey setText={setText} setCipherKey={setCipherKey} />
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
          <Route path="split-text" element={<SplitText text={text} />} />
          <Route path="encrypt-rule1" element={<EncryptingRule1 />} />
          <Route path="encrypt-rule2" element={<EncryptingRule2 />} />
          <Route path="encrypt-rule3" element={<EncryptingRule3 />} />
          <Route
            path="encrypt-with-grid"
            element={<EncryptWithKeyGrid text={text} cipherKey={cipherKey} />}
          />
          <Route
            path="encryption-result"
            element={<EncryptionResult text={text} cipherKey={cipherKey} />}
          />
        </Routes>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default Encrypt;
