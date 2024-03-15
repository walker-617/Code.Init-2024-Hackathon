import { useNavigate } from "react-router-dom";
import { split_string } from "../../utils/utils";

function SplitText({ text }) {
  // const splittedText = split_string(text)

  const navigate=useNavigate();

  const divideIntoDigrams = (str) => {
    const digrams = [];
    for (let i = 0; i < str.length; i += 2) {
      const digram = str.slice(i, i + 2);
      digrams.push(digram);
    }
    return digrams;
  };

  let temp1 = "";
  const inserted_chars = new Set();
  let ans = [text[0]];
  let a=0;
  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      ans.push("X");
      inserted_chars.add(i+a);
      a++;
    }
    ans.push(text[i]);
  }
  temp1 = [...ans];
  if (ans.length % 2 !== 0) {
    ans.push("Z");
  }

  const temp2 = divideIntoDigrams(ans.join(""));

  return (
    <div>
    <div
        className="next"
        onClick={() => {
          navigate("../encrypt-with-grid");
        }}
      >
        N
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("../fill-grid");
        }}
      >
        B
      </div>
      <div> - Insert X between every repeated characters</div>
      <div>
        {temp1.map((char, index) => (
          <span
            key={index}
            style={inserted_chars.has(index) ? { color: "red" } : {}}
          >
            {char}
          </span>
        ))}
      </div>

      <div> - If string is odd length, append Z at end of the string</div>
      <div>
        {ans.map((char, index) => (
          <span
            key={index}
            style={(temp1.length%2===1 && index===ans.length-1) ? { color: "red" } : {}}
          >
            {char}
          </span>
        ))}
      </div>
      <div> - Divide the string into di-grams( 2 character words )</div>
      <div>
        {temp2.map((char, index) => (
          <span key={index}>{char}{" "}</span>
        ))}
      </div>
    </div>
  );
}

export default SplitText;
