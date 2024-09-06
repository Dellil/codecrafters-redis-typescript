// It returns encoded string as Redis protocol way.
function encodeRESPstring(input: string): string {
  return `+${input}\r\n`;
}

export { encodeRESPstring }