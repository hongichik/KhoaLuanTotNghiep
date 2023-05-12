import { io } from "socket.io-client";
import Cookie from "../cookie";
import { DeCode } from "../encode";
import { CommentType } from '../../components/type/CommentType';
import { NotificationType } from "@/components/type/NotificationType";

const CommentURL = process.env.NODE_HOST+'notification';
const socket = io(CommentURL);

const SettingConnect = (slug:number,content:any = undefined)=>{
    const accessToken = Cookie.GetCookie('accessToken');
    
    return {
        'auth': DeCode(String(accessToken)),
        'slug': slug,
        'data': content
    }
}

const SocketIoNotification = {
    connect: (slug:any) => {
        const setting = SettingConnect(slug);
        socket.emit('connectRoom',setting);
    },
    watchNotification: (notification:NotificationType[], setNotification:React.Dispatch<React.SetStateAction<NotificationType[]>>) => {
        socket.on('notification', (data) => {
            console.log([data,...notification]);
            setNotification([data,...notification]);
        });
    },

    disconnect: () => {
        socket.disconnect();
    }
}

export default SocketIoNotification;
