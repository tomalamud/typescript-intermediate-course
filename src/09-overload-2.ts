export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === "string") {
    return input.split('');
  } else if (typeof input === "number") {
    return true;
  }
}

const rtaArray = parseStr("Tomi");
rtaArray.reverse();
rtaArray.map((x) => console.log(x));
console.log("Tomi =>", rtaArray)

const rtaString = parseStr(['T', 'o', 'm', 'i']);
rtaString.toLowerCase();
rtaString.charAt(2);
console.log("['T', 'o', 'm', 'i'] =>", rtaString)
