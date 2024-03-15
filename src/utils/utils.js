import { useEffect } from "react";

function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

function DrawGrid({ grid }) {
  return (
    <div className="key-grid">
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div key={`${i}-${j}`} className="cell">
            {cell ? cell : "-"}
          </div>
        ))
      )}
    </div>
  );
}

function DrawGridColor({ grid, ab, xy, i }) {
  useEffect(() => {
    // console.log(ab[0]+i);
    document.getElementById(ab[0]+i).style.backgroundColor = "red";
    document.getElementById(ab[1]+i).style.backgroundColor = "red";
    document.getElementById(xy[0]+i).style.backgroundColor = "green";
    document.getElementById(xy[1]+i).style.backgroundColor = "green";
  }, [ab,xy,i]);

  return (
    <>
    <div>{ab}</div>
      <div className="key-grid">
        {grid.map((row, index) =>
          row.map((cell, jndex) => (
            <div key={`${index}-${jndex}`} className="cell" id={cell+i}>
              {cell}
            </div>
          ))
        )}
      </div>
      <div>{xy}</div>
    </>
  );
}

function split_string(s) {
  let ans = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      ans += "X";
    }
    ans += s[i];
  }
  if (ans.length % 2 !== 0) {
    ans += "Z";
  }
  return ans;
}

export { removeDuplicates, DrawGrid, split_string, DrawGridColor };
