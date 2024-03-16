import { useEffect } from "react";

function findDuplicates(key) {
  if(!key){
    return {upd_key:null, dups:null}
  }
  const seen = new Set();
  const dups = new Set();
  let upd_key = "";
  for (let i = 0; i < key.length; i++) {
    if (seen.has(key[i])) {
      dups.add(i);
    } else {
      seen.add(key[i]);
      upd_key += key[i];
    }
  }
  return { upd_key, dups };
}

function getCharPos(grid) {
  if(!grid){
    return null;
  }
  let char_pos = {};
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      char_pos[grid[i][j]] = { x: i, y: j };
    }
  }
  return char_pos;
}

function updatedKey(key) {
  if(!key)
  {
    return null;
  }
  const { upd_key, dups } = findDuplicates(key);
  return upd_key.replace("J", "");
}

function createGridWithKey(key) {
  if(!key)
  {
    return null;
  }
  const grid = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  let count = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (count < key.length) {
        grid[i][j] = key[count];
        count++;
      }
    }
  }
  return grid;
}

function getdigraphs(text) {
  if(!text){
    return null;
  }
  const inserted_chars = new Set();
  let textZ = [text[0]];
  let a = 0;
  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      textZ.push("X");
      inserted_chars.add(i + a);
      a++;
    }
    textZ.push(text[i]);
  }
  if (textZ.length % 2 !== 0) {
    textZ.push("Z");
  }
  const digraphs = [];
  for (let i = 0; i < textZ.length; i += 2) {
    const digraph = textZ.slice(i, i + 2);
    digraphs.push(digraph);
  }
  return digraphs;
}

function DrawGrid({ grid, key_set }) {
  return (
    <div className="key-grid">
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            style={
              key_set && key_set.has(cell)
                ? { backgroundColor: "lightgrey" }
                : {}
            }
            className="cell"
          >
            {cell ? cell : " "}
          </div>
        ))
      )}
    </div>
  );
}

function getFullCipher(text,cipherKey){
  const key = updatedKey(cipherKey);
  const grid = completeGrid(key);
  let char_pos = getCharPos(grid);
  const digraphs = getdigraphs(text);
  let ans="";
  for(let i=0;i<digraphs.length;i++)
  {
    ans+=getCipher(grid, digraphs[i], char_pos).xy;
  }
  return ans;
}

function getFullText(cipher,cipherKey){
  const key = updatedKey(cipherKey);
  const grid = completeGrid(key);
  let char_pos = getCharPos(grid);
  const digraphs = getdigraphs(cipher);
  let ans="";
  for(let i=0;i<digraphs.length;i++)
  {
    ans+=getText(grid, digraphs[i], char_pos).xy;
  }
  return ans;
}

function getCipher(grid, s, char_pos) {
  if(!grid || !s || !char_pos)
  {
    return { xy:null, rule_:null };
  }
  let c1 = char_pos[s[0]=="J"?"I":s[0]];
  let c2 = char_pos[s[1]=="J"?"I":s[1]];
  let c3 = { x: 0, y: 0 };
  let c4 = { x: 0, y: 0 };

  let rule_ = "";

  if (c1.x === c2.x) {
    c3.x = c1.x;
    c3.y = (c1.y + 1) % 5;
    c4.x = c2.x;
    c4.y = (c2.y + 1) % 5;
    rule_ = "rule 2";
  } else if (c1.y === c2.y) {
    c3.x = (c1.x + 1) % 5;
    c3.y = c1.y;
    c4.x = (c2.x + 1) % 5;
    c4.y = c2.y;
    rule_ = "rule 1";
  } else {
    c3.x = c1.x;
    c3.y = c2.y;
    c4.x = c2.x;
    c4.y = c1.y;
    rule_ = "rule 3";
  }
  let xy = "";
  xy += grid[c3.x][c3.y] + grid[c4.x][c4.y];
  return { xy, rule_ };
}

function getText(grid, s, char_pos) {
  let c1 = char_pos[s[0]];
  let c2 = char_pos[s[1]];
  let c3 = { x: 0, y: 0 };
  let c4 = { x: 0, y: 0 };

  let rule_ = "";

  if (c1.x === c2.x) {
    c3.x = c1.x;
    c3.y = (c1.y + 4) % 5;
    c4.x = c2.x;
    c4.y = (c2.y + 4) % 5;
    rule_ = "rule 2";
  } else if (c1.y === c2.y) {
    c3.x = (c1.x + 4) % 5;
    c3.y = c1.y;
    c4.x = (c2.x + 4) % 5;
    c4.y = c2.y;
    rule_ = "rule 1";
  } else {
    c3.x = c1.x;
    c3.y = c2.y;
    c4.x = c2.x;
    c4.y = c1.y;
    rule_ = "rule 3";
  }
  let xy = "";
  xy += grid[c3.x][c3.y] + grid[c4.x][c4.y];
  return { xy, rule_ };
}

function completeGrid(key) {
  if(!key){
    return null;
  }
  const grid = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  let count = 0;
  const alphabet = new Set([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (count < key.length) {
        grid[i][j] = key[count];
        alphabet.delete(key[count]);
        count++;
      } else {
        const letter = alphabet.values().next().value;
        grid[i][j] = letter;
        alphabet.delete(letter);
      }
    }
  }
  return grid;
}

function DrawGridColor({ grid, ab, xy, i }) {
  useEffect(() => {
    document.getElementById(ab[0] + i).style.backgroundColor = "lightcoral";
    document.getElementById(ab[1] + i).style.backgroundColor = "lightgreen";
    document.getElementById(xy[0] + i).style.backgroundColor = "red";
    document.getElementById(xy[1] + i).style.backgroundColor = "green";
  }, [ab, xy, i]);

  return (
    <div className="key-grid">
      {grid.map((row, index) =>
        row.map((cell, jndex) => (
          <div key={`${index}-${jndex}`} className="cell" id={cell + i}>
            {cell}
          </div>
        ))
      )}
    </div>
  );
}

function split_tkeying(s) {
  let upd_key = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      upd_key += "X";
    }
    upd_key += s[i];
  }
  if (upd_key.length % 2 !== 0) {
    upd_key += "Z";
  }
  return upd_key;
}

export {
  findDuplicates,
  getdigraphs,
  getCipher,
  getText,
  getCharPos,
  updatedKey,
  createGridWithKey,
  completeGrid,
  DrawGrid,
  split_tkeying,
  DrawGridColor,
  getFullCipher,
  getFullText
};
