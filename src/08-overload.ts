function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr("Tomi");
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log("Tomi =>", rtaArray)

const rtaString = parseStr(['T', 'o', 'm', 'i']);
if (typeof rtaString === "string") {
  rtaString.toLowerCase();
}
console.log("['T', 'o', 'm', 'i'] =>", rtaString)
