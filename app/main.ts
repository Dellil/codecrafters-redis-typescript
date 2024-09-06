import * as net from "net";
import { encodeRESPsimpleString, encodeRESPbulkString } from "./util";

const server: net.Server = net.createServer((connection: net.Socket) => {
  connection.on('data', (d) => {
    connection.write(Buffer.from(encodeRESPsimpleString('PONG')));
  });
});

server.listen(6379, "127.0.0.1");
