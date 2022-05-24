// any downgrades the power of typescript to javascript.
// without any, there has to be some errors
let anyVar: any;

anyVar = true;
anyVar = undefined;
anyVar.doSomething();
let isNew: boolean = anyVar;



// unknown lets you guess which type the variable is.
let unknownVar: unknown;

// WRONG
// unknownVar.doSomething();
// unknownVar.toUpperCase();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
