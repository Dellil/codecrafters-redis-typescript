function decode(d: Array<number>) {
  switch (d[0]) {
    // *: Array type
    case 42:
      parseAsArray(d);
    default:
      throw new Error('Unsupported Data Type');
  }
}

function parseAsArray(d: Array<number>) {
  const length = d[1];
  console.log(`length: ${length}`);
}

export { decode, parseAsArray };