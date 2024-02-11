export const initId = () => {
  return 'a'.codePointAt(0);
}

export function createKeys() {
  let keys = [];
  let boardSize = 21;
  let rowIndex = initId();
  for (let i = 0; i < boardSize; i++) {
    let rowKeys = [];
    let colIndex = initId();
    for (let j = 0; j < boardSize; j++) {
      rowKeys.push(String.fromCodePoint(rowIndex) + String.fromCodePoint(colIndex));
      colIndex++;
    }
    keys.push(rowKeys);
    rowIndex++;
  }
  return keys;
}