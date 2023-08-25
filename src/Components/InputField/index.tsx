/*Cotent input Component*/
import { type } from "os";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {useEffect} from "react";

//State
import { platformData } from "@/src/States";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
}

const InputField = (datas:proprietyInput) =>{
    let DataofPlatform: any;
    let UserAgentDatas :string|any;

    const setUserAgent = useSetRecoilState(platformData);
    UserAgentDatas = useRecoilValue(platformData);
  
    useEffect(()=>{
        DataofPlatform = navigator;
         setUserAgent(DataofPlatform.userAgent);
    },[]);
  
    return(
    <>
        {
            (datas.type === "text" || datas.type ==="password")? 
            <div className="groupe_form">
                <label htmlFor={datas.labelText}>{datas.labelText}</label>
                <input className={UserAgentDatas.match(/iPhone/)? "_iPhone_input":"log_reg_input"} type={datas.type} placeholder={datas.placeholderText} id={datas.labelText}/>
            </div>:
            <button className="form_send_btn">{datas.placeholderText}</button>
        }    
    </>
    )
};

export default InputField;