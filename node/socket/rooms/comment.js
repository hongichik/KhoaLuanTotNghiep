import User from "../../model/User.js";

const setupRoom1 = (io) => {
  const room = io.of("/comment");
  room.on("connection", (socket) => {
    socket.on("connectRoom", async (data) => {
      const user = await User.auth(data.auth);
      if (user) {
        console.log("Người dùng " + user.name + " đã xem sản phẩm");
      }
      if (!data.slug) {
        return;
      }
      const slug = String(data.slug);
      socket.join(slug);
      const socketIds = await room.in(slug).allSockets();
      const socketsInRoom = socketIds.size;

      room.to(slug).emit("RoomResponse", {
        message: `Bạn đã vào phòng ${slug}`,
        count: socketsInRoom
      });
      socket.currentRoom = slug;
    });

    socket.on("comment", async (data) => {
      const user = await User.auth(data.auth);
      if (user) {
        room.to(String(data.slug)).emit("newComment", { message: data.data });
      }
      
    });

    socket.on("disconnect", async () => {
      try {
        console.log("có người thoát phòng "+socket.currentRoom);
        const socketIds = await room.in(socket.currentRoom).allSockets();
        const socketsInRoom = socketIds.size;
        room.to(socket.currentRoom).emit("RoomResponse", {
          message: "Đã có người thoát phòng",
          count: socketsInRoom
        });

      } catch (error) {
        console.error(error);
      }
    });
  });
};

export default setupRoom1;

//socket chi gửi về cho người dùng vừa gửi tin nhắn
//room gửi cho tất cả
