/*Cotent input Component*/
import {useEffect, useState} from "react";
import { useRecoilState} from "recoil";

//state
import { NewTeacherDatas, NewStudentDatas} from "@/src/States/Director";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
    identity? : number|any,
}

const InputCreatedNewAccount = (datas:proprietyInput) =>{
    // states variables
    const [platformInfos, setPlatformInfos] = useState("");
    const [TeacherDatas, setTeacherDatas]:any = useRecoilState(NewTeacherDatas);
    const [StudentDatas, setStudentDatas]:any = useRecoilState(NewStudentDatas);

    const dataOfNewStudentForm = (e:any, idField:number) =>{
        switch(idField){
            case 1:{ 
                setStudentDatas({
                    ...StudentDatas,
                    firstName:e.target.value
                });
            break;
            }
    
            case 2:{
                setStudentDatas({
                    ...StudentDatas,
                    SecondName:e.target.value
                });
            break;
            }
            case 3:{
                setStudentDatas({
                    ...StudentDatas,
                    LastName:e.target.value
                });
            break;
            }

            case 4:{
                setStudentDatas({
                    ...StudentDatas,
                    BordLocation:e.target.value
                });
            break;
            }
            case 5:{
                setStudentDatas({
                    ...StudentDatas,
                    BornDay:e.target.value
                });
            break;
            }
            case 6:{
                setStudentDatas({
                    ...StudentDatas,
                    RespFirstName:e.target.value
                });
            break;
            }
            case 7:{
                setStudentDatas({
                    ...StudentDatas,
                    RespSecondName:e.target.value
                });
            break;
            }
            case 8:{
                setStudentDatas({
                    ...StudentDatas,
                    RespEmail:e.target.value
                });
            break;
            }
            case 9:{
                setStudentDatas({
                    ...StudentDatas,
                    RespTel:e.target.value
                });
            break;
            }
        }
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
                    LastName:e.target.value
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
                <div>
                    <input 
                        className={platformInfos.match(/iPhone/) ? "_iPhone_input":"log_reg_input"} 
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