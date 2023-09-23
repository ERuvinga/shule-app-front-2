/*Cotent input Component*/
import { type } from "os";
import {useEffect, useState} from "react";
import { useRecoilValue, useRecoilState } from "recoil";

//state
import { Link_toApi,errorLogRegisterForm } from "@/src/States";
import { Console } from "console";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
    recoilAtom:any
}

const sendLoginData = (datasOfUSer: any, url:String) =>{    
    console.log(datasOfUSer);    
    // Send datas to Api
    // fetch(`${url}/Authentification/Login`,{
    //     method:"POST",
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-type':'application/json; charset=UTF-8'
    //     },
    //     body: JSON.stringify(datasOfUSer)
    // })
    // .then((result)=>{
    //     result.json().then((datas)=> console.log(datas))
    // })
    // .catch(error =>{console.log(error)});
}

const sendRegisterData = (datasOfUSer: any, url:String) =>{
    console.log(datasOfUSer);    

     //Send datas to api
    //  fetch(`${url}/Authentification/ActiveAccount`, {
    //         method:"POST",
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-type':'application/json; charset=UTF-8'
    //         },
    //         body: JSON.stringify(datasOfUSer)
    //         }
    //     )
    //     .then((result)=>{
    //         if(result.ok){
    //             result.json().then((datas)=> console.log(datas))
    //         }
    //     })
    //     .catch(error =>{console.log(error)});
}

const datasOfLoginForm = (e:any, idField:number, lastValue:any, updatedLoginDatas:any, lastErrorStates:{disabledBtn:boolean, invalidEmail: boolean, pswdAndCofirmPswd:boolean}, UpdatedErrorStates:any)=>{
    switch(idField){
        case 0:{
            updatedLoginDatas({
                ...lastValue,
                email:e.target.value,
            });
            // check format mail
            const mail = e.target.value;
            if(mail.match(/@[a-zA-Z0-9]{5,}(.com$)/)){
                if(lastValue.passWord != ""){
                    UpdatedErrorStates({
                        ... lastErrorStates,
                        disabledBtn: false,
                        invalidEmail: false,
                    });
                }

                else{
                    UpdatedErrorStates({
                        ... lastErrorStates,
                        disabledBtn: true,
                        invalidEmail: false,
                    });
                }
            }
            else{
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn: true,
                        invalidEmail: true
                    });                    
            }
        break;
        }

        case 1:{
            updatedLoginDatas({
                ...lastValue,
                passWord:e.target.value,
            });

            if(!lastErrorStates.invalidEmail && e.target.value !=""){
                UpdatedErrorStates({
                    ...lastErrorStates,
                    disabledBtn: false,
                });  
            }
            else{
                UpdatedErrorStates({
                    ...lastErrorStates,
                    disabledBtn: true,
                });  
            }
        break;
        }
    }
}

const dataOfRegisterForm = (e:any, idField:number, lastValue:any, updatedRegisterDatas:any, lastErrorStates:{disabledBtn:boolean,invalidMatricule:boolean, invalidEmail: boolean, pswdAndCofirmPswd:boolean}, UpdatedErrorStates:any) =>{
    switch(idField){
        case 0:{
            updatedRegisterDatas({
                ...lastValue,
                matricule: e.target.value
            });

            // Error verifications
            if( e.target.value.match(/^neema_/)){
                
                if(!lastErrorStates.pswdAndCofirmPswd && lastValue.passWord !=""){
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn:false,
                        invalidMatricule:false,
                    })
                }
                else{
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn:true,
                        invalidMatricule:false,
                    })
                }
             }

             else{
                UpdatedErrorStates({
                    ...lastErrorStates,
                    disabledBtn:true,
                    invalidMatricule:true,
                })              
             }
        break;
        
        }
        case 1:{
            updatedRegisterDatas({
                ...lastValue,
                passWord:e.target.value,
            });

            if( lastValue.confirmpassWord === e.target.value){
                if(!lastErrorStates.invalidMatricule && lastValue.matricule !="" ){
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn: false,
                        pswdAndCofirmPswd: false,
                    });
                }
                
                else{
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn: true,
                        pswdAndCofirmPswd: false,
                    });
                }
            }

            else{
                UpdatedErrorStates({
                    ...lastErrorStates,
                    disabledBtn: true,
                    pswdAndCofirmPswd: true,
                });
            }

        break;
        }

        case 2:{
            updatedRegisterDatas({
                ...lastValue,
                confirmpassWord:e.target.value,
            });
            // Error verifications
            if(lastValue.passWord !== e.target.value){
                UpdatedErrorStates({
                    ...lastErrorStates,
                    disabledBtn: true,
                    pswdAndCofirmPswd: true,
                });
            }

            else{
                if(!lastErrorStates.invalidMatricule && lastValue.matricule !=""){
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn: false,
                        pswdAndCofirmPswd: false,
                    })
                }

                else{
                    UpdatedErrorStates({
                        ...lastErrorStates,
                        disabledBtn: true,
                        pswdAndCofirmPswd: false,
                    })                    
                }

            }
            break;
        }
    }
}

const InputField = (datas:proprietyInput) =>{


    const [platformInfos, setPlatformInfos] = useState("");
    const [ErrorStates, setErrorStates]:any = useRecoilState(errorLogRegisterForm);
    const [InValidClassname, setInValidClassname] = useState("")
    const LogRegStatesValues = datas.recoilAtom[0]; // values of states
    const setLogRegStatesValues = datas.recoilAtom[1]; // function change States Values
    const url_to_api:any = useRecoilValue(Link_toApi);

    useEffect(()=>{
        setPlatformInfos(navigator.userAgent);
    },[]);

    useEffect(()=>{
                        // checking Value of Error States
        if(ErrorStates.invalidEmail && datas.labelText === 'email/Tél'){
            setInValidClassname("invalidEmail");
            }
        
        else if(ErrorStates.pswdAndCofirmPswd && datas.labelText === 'confirm-password'){
            setInValidClassname("invalidPassword");
            }
        
        else if(ErrorStates.invalidMatricule && datas.labelText === 'matricule'){
            setInValidClassname("invalidMatricule");
            }

        else{
            setInValidClassname("");                     
        }

    },[ErrorStates])
    
     return(
    <>
        {
           (datas.type === "text" || datas.type ==="password")? 
            <div className="groupe_form">
                <label htmlFor={datas.labelText}>{datas.labelText}</label>
                <div className={InValidClassname}>
                    <input 
                        className={platformInfos.match(/iPhone/) ? ( InValidClassname !== ''? "invalidEmailInput" :"_iPhone_input"):(InValidClassname !== '' ?"invalidEmailInput":"log_reg_input")} 
                        type={datas.type} 
                        placeholder={datas.placeholderText} 
                        id={datas.labelText}
                        onChange={(event)=>{
                            (datas.form_name === "Login") ? datasOfLoginForm(event, datas.identity, LogRegStatesValues, setLogRegStatesValues, ErrorStates, setErrorStates): dataOfRegisterForm(event, datas.identity, LogRegStatesValues, setLogRegStatesValues, ErrorStates, setErrorStates);
                        }}
                    />
                </div>
            </div>:
            <button 
            disabled={ErrorStates.disabledBtn}
            onClick={()=>{
                (datas.form_name === "Login") ? sendLoginData(LogRegStatesValues, url_to_api.localLink) : sendRegisterData(LogRegStatesValues, url_to_api.localLink);
            }} 
            className={ErrorStates.disabledBtn ? "disabledBtn" : "form_send_btn"}>{datas.placeholderText}</button>
        }    
    </>
    )
};

export default InputField;