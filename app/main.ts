import * as net from "net";
import { encodeRESPsimpleString, encodeRESPbulkString } from "./util";
import { decode } from "./parser";

const server: net.Server = net.createServer((connection: net.Socket) => {
  connection.on('ready', () => {
    console.log('New connection Arrived');
    // connection.write(Buffer.from(encodeRESPsimpleString('PONG')));
  });

  connection.on('data', (d) => {
    // Command always encoded as ASCII in RESP
    decode(Array.from(d));
  });

  connection.on('end', () => {
    console.log('Connection End');
  });

  connection.on('error', (err) => {
    console.log('error occurred');
    console.error(err);
  });
});

server.listen(6379, "127.0.0.1", () => {
  console.log('Chedis Server is Running 6379 port')
});
