import { io } from "socket.io-client";
import Cookie from "../cookie";
import { DeCode } from "../encode";
import { CommentType } from '../../components/type/CommentType';

const CommentURL = process.env.NODE_HOST+'comment';
const socket = io(CommentURL);

const SettingConnect = (slug:number,content:any = undefined)=>{
    const accessToken = Cookie.GetCookie('accessToken');
    
    return {
        'auth': DeCode(String(accessToken)),
        'slug': slug,
        'data': content
    }
}

const SocketIoProduct = {
    connect: (slug:number, setEye:React.Dispatch<React.SetStateAction<number>>) => {
        const setting = SettingConnect(slug);
        socket.emit('connectRoom',setting);
        socket.on('RoomResponse', (data) => {
            setEye(data.count);
        });
    },

    createComment: (slug:number, content:any) => {
        socket.emit('comment',SettingConnect(slug,content));
    },

    watchComment: (comment:CommentType[],setComment:React.Dispatch<React.SetStateAction<CommentType[]|undefined>>) => {
        socket.on('newComment', (data)=>{
            setComment([data.message,...comment]);
        });
    },

    disconnect: () => {
        socket.disconnect();
    }
}

export default SocketIoProduct;
