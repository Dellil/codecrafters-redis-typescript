/**
 * RESP = Redis Serialization Protocol
 */

/**
 * It returns encoded string as RESP simple string way.
 * 
 * ref: https://redis.io/docs/latest/develop/reference/protocol-spec/#simple-strings
 * 
 * @param input 
 * @returns encoded string
 */
function encodeRESPsimpleString(input: string): string {
  return `+${input}\r\n`;
}

/**
 * It returns encoded string as RESP bulk string way
 * ref: https://redis.io/docs/latest/develop/reference/protocol-spec/#bulk-strings
 */
function encodeRESPbulkString(input: string): string {
  return `$${input.length}\r\n${input}\r\n`;
}

export { encodeRESPsimpleString, encodeRESPbulkString }