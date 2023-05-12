const post = (req, res) => {
  const io = global.io;
  const message = req.query.message;
  const roomName = req.query.room;
  const slug = req.query.slug;
  const to = req.query.to;
  const room = io.of(roomName);
  const now = new Date();
  const options = { timeZone: "Asia/Ho_Chi_Minh" };
  const vietnamTime = now.toLocaleString("en-US", options);
  room.to(slug).emit(to, {
    message: message,
    time: vietnamTime
  });
  res.json({ type: "Đã gửi: " + message + "id : " + slug });
};

const SocketController = {
  post,
};

export default SocketController;
