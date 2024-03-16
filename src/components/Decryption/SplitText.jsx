import { useNavigate } from "react-router-dom";

function SplitText({ cipher }) {
  const navigate = useNavigate();

  if(!cipher)
  {
    return;
  }

  const divideIntodigraphs = (str) => {
    const digraphs = [];
    for (let i = 0; i < str.length; i += 2) {
      const digraph = str.slice(i, i + 2);
      digraphs.push(digraph);
    }
    return digraphs;
  };

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../decrypt-rule1");
        }}
      >
        Next
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../fill-grid");
        }}
      >
        Back
      </div>
      <div className="step">
        <div className="step-title">
          <span className="step-num">Step 4 : </span>
          Processing Cipher Text
        </div>
        <ul>
          <li>
            Unlike encryption, text processing in decryption does not require
            any insertions or padding at the end.
          </li>
          <li>
            This is because the ciphertext contains no continuously repeated
            letters and has an odd-length size.
          </li>
          <li>
            Converting cipher text into digraphs, we get:
            <div className="dup-rem">
              {divideIntodigraphs(cipher).map((c, i) => (
                <span
                  key={i}
                >
                  {c}&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SplitText;
