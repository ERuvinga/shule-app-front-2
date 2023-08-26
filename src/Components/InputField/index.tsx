/*Cotent input Component*/
import { type } from "os";
import {useEffect, useState} from "react";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
    recoilAtom:any
}

const sendLoginData = (datasOfUSer: any) =>{
    console.log("Login ");    
    console.log(datasOfUSer);    
}

const sendRegisterData = (datasOfUSer: any) =>{
    console.log(`Register : `);
    console.log(datasOfUSer);    
}

const datasOfLoginForm = (e:any, idField:number, lastValue:any, updatedLoginDatas:any)=>{
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

const dataOfRegisterForm = (e:any, idField:number, lastValue:any, updatedRegisterDatas:any) =>{
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

        case 2:{
            updatedRegisterDatas({
                ...lastValue,
                confirmPassWord:e.target.value,
            })
        break;
        }
    }
}

const InputField = (datas:proprietyInput) =>{


    const [platformInfos, setPlatformInfos] = useState("");
    const LogRegStatesValues = datas.recoilAtom[0]; // values of states
    const setLogRegStatesValues = datas.recoilAtom[1]; // function change States Values

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
                        (datas.form_name === "Login") ? datasOfLoginForm(event, datas.identity, LogRegStatesValues, setLogRegStatesValues): dataOfRegisterForm(event, datas.identity, LogRegStatesValues, setLogRegStatesValues);
                    }}
                />
            </div>:
            <button 
            onClick={()=>{
                (datas.form_name === "Login") ? sendLoginData(LogRegStatesValues) : sendRegisterData(LogRegStatesValues);
            }} 
            className="form_send_btn">{datas.placeholderText}</button>
        }    
    </>
    )
};

export default InputField;