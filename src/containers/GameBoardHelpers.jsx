export const initId = () => {
  return 'a'.codePointAt(0);
}

export function boardRowOpen() {
  return (`<div className='boardRow'>`);
}

export function boardRowClose() {
  return (`</div>`);
}

export function createKeys() {
  let keys = [];
  let boardSize = 21;
  let rowIndex = 'a'.codePointAt(0);
  for (let i = 0; i < boardSize; i++) {
    let rowKeys = [];
    let colIndex = 'a'.codePointAt(0);
    for (let j = 0; j < boardSize; j++) {
      rowKeys.push(String.fromCodePoint(rowIndex) + String.fromCodePoint(colIndex));
      colIndex++;
    }
    keys.push(rowKeys);
    rowIndex++;
  }
  return keys;
}