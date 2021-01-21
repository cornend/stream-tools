import express, { Request, Response, NextFunction } from "express";
import http from "http";
import logger from "morgan";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

io.on("connection", (client) => {
  console.log(client);
});

server.listen(3000, () => {
  console.log(`Server is listening on port http://localhost:${3000}`);
});
