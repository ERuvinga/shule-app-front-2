/*Cotent input Component*/
import {useEffect, useState} from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil";
import { useRouter } from "next/router";
import Loading from "../Loading";

//state
import { Link_toApi, errorLogRegisterForm , SelectedTypeOfAccount, messageOfServer} from "@/src/States/LoginRegisterStates";
import {AuthUser} from "@/src/States/UserAoth";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
    recoilAtom:any
}

const sendLoginData = (datasOfUSer: any, url:String, ComponentTypeAccount:any, setLoading:any, setMessageServer:any, setDataOfAuthUser:any, Router:any) =>{ 
    const LoginData ={
        ...datasOfUSer,
        typeAccount: ComponentTypeAccount.value
    }   

    // Send datas to Api
    setLoading(true); // activation Animation Component
    fetch(`${url}/Authentification/Login`,{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json; charset=UTF-8'
        },
        body: JSON.stringify(LoginData)
    })
    .then((result)=>{
        if(result.ok){
            result.json().then((datas)=> {

                setDataOfAuthUser({
                    ...datas.DataUser // save a Authentification User
                });

                localStorage.setItem("TokenUser", datas.Token); // save token in localStorageSession
                console.log(datas)
                // Checking type of Account for Redirection AothIndex pages
                switch(datas.typeAccount){
                    case "Director":
                        switch(datas.DataUser.task.funct){
                            case "DIRECTEUR":
                                Router.push("/Director");
                                break;

                            case "DIRECTEUR ADJ":
                                Router.push("/DirectorAdj");
                                break;

                            case "COMPTABLE":
                                Router.push("/Comptable");
                                break;                          
                        }
                    break;

                    case "Teacher":
                        Router.push("/Teacher");
                    break;

                    case "Student":
                        Router.push("/Student");
                    break;
                }
            })
        }

        else{
        setLoading(false);// desactive Animation Component
            result.json().then((datas)=>{
                setMessageServer({
                    content:datas.msg,
                    stateMsg:true
                })
            })
        }
    })
    .catch(error =>{console.log(error)});
}

const sendRegisterData = (datasOfUSer: any, url:String, setLoading:any, setMessageServer:any, Router:any) =>{

     //Send datas to api
     setLoading(true);// Activation Animation Component
     fetch(`${url}/Authentification/ActiveAccount`, {
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8'
            },
            body: JSON.stringify(datasOfUSer)
            }
        )
        .then((result)=>{
            setLoading(false);// after fetching data desactive Loading Component
            if(result.ok){
                result.json().then((datas)=> {
                    if(datas.Updating){
                        Router.push("/Login");
                    }
                })
            }
    
            else{
                result.json().then((datas)=>{
                    setMessageServer({
                        content:datas.msg,
                        stateMsg:true
                    })
                })
            }
        })
        .catch(error =>{console.log(error)});
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
            if(mail.match(/@[a-zA-Z0-9]{5,}(.com$)/) || mail.match(/^[+][0-9]{12}$/)){
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
            if( e.target.value.match(/^neema_[0-9a-z]{23}[0-9a-f]{1}$/)){
                
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
    // states variables
    const [platformInfos, setPlatformInfos] = useState("");
    const [InValidClassname, setInValidClassname] = useState("");
    const [loadingState, setLoadingState] = useState(false);
    const Router = useRouter();

    // Atoms
    const [ErrorStates, setErrorStates]:any = useRecoilState(errorLogRegisterForm);
    const setMessageServer:any = useSetRecoilState(messageOfServer);
    const setAuthUser:any = useSetRecoilState(AuthUser);
    const LogRegStatesValues = datas.recoilAtom[0]; // values of states
    const setLogRegStatesValues = datas.recoilAtom[1]; // function change States Values
    const url_to_api:any = useRecoilValue(Link_toApi);
    const SelectedTypeAccountComponent = useRecoilValue(SelectedTypeOfAccount);

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
            <>
            {
                loadingState? 
                    <Loading/>
                    :
                    <button 
                    disabled={ErrorStates.disabledBtn}
                    onClick={()=>{
                        (datas.form_name === "Login") ? sendLoginData(LogRegStatesValues, url_to_api.localLink, SelectedTypeAccountComponent, setLoadingState, setMessageServer, setAuthUser, Router) : sendRegisterData(LogRegStatesValues, url_to_api.localLink, setLoadingState, setMessageServer, Router);
                    }} 
                    className={ErrorStates.disabledBtn ? "disabledBtn" : "form_send_btn"}>{datas.placeholderText}</button>
            }
            </>

        }    
    </>
    )
};

export default InputField;