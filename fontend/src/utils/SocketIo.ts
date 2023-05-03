import { io } from "socket.io-client";
import Cookie from "./cookie";
import { DeCode } from "./encode";

const CommentURL = process.env.NODE_HOST+'comment';

const SocketComment = (slug:string) =>{
    const socket = io(CommentURL);
    const setting = SettingConnect(slug);
    socket.emit('connectRoom',setting);
    socket.on('createRoomResponse', (data) => {
        console.log(data);
      });
    console.log("oke");
    return;
}
const SettingConnect = (slug:string)=>{
    const accessToken = Cookie.GetCookie('accessToken');
    
    return {
        'auth': DeCode(String(accessToken)),
        'slug': slug
    }
}
const SocketIo = {
    SocketComment,
}
export default SocketIo;