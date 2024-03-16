import { useNavigate } from "react-router-dom";
import { split_string } from "../../utils/utils";
import React, { useEffect } from "react";

function SplitText({ text }) {

  const navigate = useNavigate();
  if(!text){
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

  let textX = "";
  const inserted_chars = new Set();
  let textZ = [text[0]];
  let a=0;
  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      textZ.push("X");
      inserted_chars.add(i+a);
      a++;
    }
    textZ.push(text[i]);
  }
  textX = [...textZ];
  if (textZ.length % 2 !== 0) {
    textZ.push("Z");
  }

  return (
    <div>
      <div
        className="next"
        onClick={() => {
          navigate("../encrypt-rule1");
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
          Processing Plain Text
        </div>
        <ul>
          <li>
            Find the characters that are repeated continuously and insert 'X'
            between them. (Note: This implies inserting 'X' in between 'XX' also.)
            <div className="dup-rem">
              {textX.map((c, i) => (
                <span
                  key={i}
                  style={inserted_chars.has(i) ? { color: "orange"} : {}}
                >
                  {c}
                </span>
              ))}
            </div>
          </li>
          <li>
            Find the length of the updated Plain Text and append 'Z' at the end if the length of the string is odd to make ot even.
            <div className="dup-rem">
              {textZ.map((c, i) => (
                <span
                  key={i}
                  style={(textX.length%2===1 && i===textZ.length-1) ? { color: "orange"} : {}}
                >
                  {c}
                </span>
              ))}
            </div>
          </li>
          <li>
            Now divide the processed Plain Text into di-grams(2 character words). These di-grams are encrypted using Grid in the next steps.
            <div className="dup-rem">
              {divideIntodigraphs(textZ).map((c, i) => (
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
