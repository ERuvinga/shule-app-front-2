/*Cotent input Component*/
import { type } from "os";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {useEffect, useState} from "react";

//State
import { loginDataState, registerDataState } from "@/src/States";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
}

const sendLoginData = (datasOfUSer: any) =>{
    console.log("Login ");    
    console.log(datasOfUSer);    
}

const sendRegisterData = (datasOfUSer: any) =>{
    console.log(`Register : `);
    console.log(datasOfUSer);    
}

const datasOfLoginForm = (e:any, idField:number, updatedLoginDatas:any, lastValue:any)=>{
    switch(idField){
        case 0:{
            updatedLoginDatas({
                ...lastValue,
                email:e.target.value,
            })
        break;
        }

        case 1:{
            updatedLoginDatas({
                ...lastValue,
                passWord:e.target.value,
            })
        break;
        }
    }
}

const dataOfRegisterForm = (e:any, idField:number, updatedRegisterDatas:any, lastValue:any) =>{
    switch(idField){
        case 0:{
            updatedRegisterDatas({
                ...lastValue,
                matricule: e.target.value
            })
        break;
        }

        case 1:{
            updatedRegisterDatas({
                ...lastValue,
                passWord:e.target.value,
            })
        break;
        }
    }
}

const InputField = (datas:proprietyInput) =>{

    // Recoil states that saved data typing by user
    const [loginData, setLoginData] = useRecoilState(loginDataState);
    const [registerData, setRegisterData] = useRecoilState(registerDataState);
    const [platformInfos, setPlatformInfos] = useState("");
    useEffect(()=>{
        setPlatformInfos(navigator.userAgent);
    })
    
     return(
    <>
        {
            (datas.type === "text" || datas.type ==="password")? 
            <div className="groupe_form">
                <label htmlFor={datas.labelText}>{datas.labelText}</label>
                <input 
                    className={platformInfos.match(/iPhone/)? "_iPhone_input":"log_reg_input"} 
                    type={datas.type} 
                    placeholder={datas.placeholderText} 
                    id={datas.labelText}
                    onChange={(event)=>{
                        (datas.form_name === "Login") ? datasOfLoginForm(event, datas.identity, setLoginData, loginData): dataOfRegisterForm(event, datas.identity, setRegisterData, registerData);
                    }}
                />
            </div>:
            <button 
            onClick={()=>{
                (datas.form_name === "Login") ? sendLoginData(loginData) : sendRegisterData(registerData);
            }} 
            className="form_send_btn">{datas.placeholderText}</button>
        }    
    </>
    )
};

export default InputField;