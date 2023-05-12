import User from "../../model/User.js";

const setupRoomNotification = (io) => {
  const room = io.of("/notification");
  room.on("connection", (socket) => {
    socket.on("connectRoom", async (data) => {
      const user = await User.auth(data.auth);
      if (user) {
        console.log("Người dùng " + user.name + " đã kết nối");
        const slug = String(data.slug);
        socket.join(slug);

        // room.to(slug).emit("notification", {
        //   message: `Da cos the nhan thong bao ${slug}`
        // });
      }
      if (!data.slug) {
        return;
      }
    });
  });
};

export default setupRoomNotification;

