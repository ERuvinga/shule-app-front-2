/*Cotent input Component*/
import {useEffect, useState} from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil";
import { useRouter } from "next/router";
import Loading from "../Loading";

//state
import { NewTeacherDatas} from "@/src/States/Director";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
}


// const sendRegisterData = (datasOfUSer: any, url:String, setLoading:any, setMessageServer:any, Router:any) =>{

//      //Send datas to api
//      setLoading(true);// Activation Animation Component
//      fetch(`${url}/Authentification/ActiveAccount`, {
//             method:"POST",
//             headers:{
//                 'Accept':'application/json',
//                 'Content-type':'application/json; charset=UTF-8'
//             },
//             body: JSON.stringify(datasOfUSer)
//             }
//         )
//         .then((result)=>{
//             setLoading(false);// after fetching data desactive Loading Component
//             if(result.ok){
//                 result.json().then((datas)=> {
//                     if(datas.Updating){
//                         Router.push("/Login");
//                     }
//                 })
//             }
    
//             else{
//                 result.json().then((datas)=>{
//                     setMessageServer({
//                         content:datas.msg,
//                         stateMsg:true
//                     })
//                 })
//             }
//         })
//         .catch(error =>{console.log(error)});
// }



const InputCreatedNewAccount = (datas:proprietyInput) =>{
    // states variables
    const [platformInfos, setPlatformInfos] = useState("");
    const [InValidClassname, setInValidClassname] = useState("");
    const [TeacherDatas, setTeacherDatas]:any = useRecoilState(NewTeacherDatas)

    const dataOfNewStudentForm = (e:any, idField:number) =>{
        console.log(e.target.value)

    }    
    const datasOfNewTeacherForm = (e:any, idField:number)=>{
        switch(idField){
            case 1:{ 
                setTeacherDatas({
                    ...TeacherDatas,
                    firstName:e.target.value
                });
            break;
            }
    
            case 2:{
                setTeacherDatas({
                    ...TeacherDatas,
                    SecondName:e.target.value
                });
            break;
            }
            case 3:{
                setTeacherDatas({
                    ...TeacherDatas,
                    email:e.target.value
                });
            break;
            }

            case 4:{
                setTeacherDatas({
                    ...TeacherDatas,
                    email:e.target.value
                });
            break;
            }
            case 5:{
                setTeacherDatas({
                    ...TeacherDatas,
                    tel:e.target.value
                });
            break;
            }
        }
    }

    useEffect(()=>{
        setPlatformInfos(navigator.userAgent);
    },[]);
    
     return(
    
            <div className="groupe_form">
                <label htmlFor={datas.labelText}>{datas.labelText}</label>
                <div className={InValidClassname}>
                    <input 
                        className={platformInfos.match(/iPhone/) ? ( InValidClassname !== ''? "invalidEmailInput" :"_iPhone_input"):(InValidClassname !== '' ?"invalidEmailInput":"log_reg_input")} 
                        type={datas.type} 
                        placeholder={datas.placeholderText} 
                        id={datas.labelText}
                        onChange={(event)=>{
                            (datas.form_name === "Teacher") ? datasOfNewTeacherForm(event, datas.identity): dataOfNewStudentForm(event, datas.identity)
                        }}
                    />
                </div>
            </div>
    )
};

export default InputCreatedNewAccount;