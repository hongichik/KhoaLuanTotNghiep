import setupComment from "./rooms/comment.js";
import setupRoom2 from "./rooms/room2.js";
import { Server } from "socket.io";

export default function (http) {
  const io = new Server(http, {
    cors: {
      origin: "*",
    },
  });

  setupComment(io);
  setupRoom2(io);

  io.on("connection", function (socket) {
    console.log("a user connected");

    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
  });

  return io;
}
