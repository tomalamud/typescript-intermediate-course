const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender')
  }
}

const fail = (msg: string) => {
  throw new Error(msg);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Wow, esos es un string!';
  } else if (Array.isArray(input)) {
    return 'Vaya... eso parece ser un Array :/';
  }
  return fail('not matcaqfh');
}

console.log(example('Holi'));
console.log(example([1,123,4,54,6]));
console.log(example(34124));

