import AuthAPI from "../../backend/AuthAPI.js";

const setupRoom1 = (io) => {
  const room = io.of("/comment");
  room.on("connection", (socket) => {
    console.log("Có người kết nối tới bình luận : " + socket.id);

    socket.on("connectRoom", async (data) => {
      const info = await AuthAPI.CheckLogin(data.auth);
      console.log(info);
      // console.log(data);
      const slug = data.slug;
      console.log(socket.id+" vừa tạo phòng: "+slug);
      socket.join(slug); // Join vào phòng của bài viết 
      socket.emit("createRoomResponse", { message: "Đã tạo phòng " + slug });
    });

    socket.on("comment", (data) => {
      room.to(data.slug).emit("newComment", { message: data.message });
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected from room1");
    });
  });
}

export default setupRoom1;


//socket chi gửi về cho người dùng vừa gửi tin nhắn
//room gửi cho tất cả