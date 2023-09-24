import { useRecoilState } from "recoil";
import { messageOfServer } from "@/src/States/LoginRegisterStates";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {useEffect} from 'react'

const Notification = ()=>{
    const [Msg, setMsg]: any = useRecoilState(messageOfServer);
    // after 2 seconde hidden MessageError
    useEffect(()=>{
        setTimeout(()=>{setMsg({
            ...Msg,
            stateMsg:false
        })},5000);
    },[]);
    return(
            <div className="NotificationMsg">
                <span className="">
                    <span className="TitleNotif"><InformationCircleIcon className="Icone"/>Notification</span>
                    <div className="msg ">{Msg.content}</div>
                </span>
            </div>
    )
}

export default Notification;