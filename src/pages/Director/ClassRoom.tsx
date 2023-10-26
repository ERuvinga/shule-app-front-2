import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems, NewTeacherDatas, NewStudentDatas, DataOfMenuState} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import { InformationCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import InputCreatedNewAccount from "@/src/Components/InputNewUSerCreated";

const DirectorClassPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [typeAccountCreated, setTypeAccountCreated] = useState("Student");
    const [AllDatesPro, setAllDatesPro]= useState([]);
    const [ProclamDateDefine, setProclamDateDefine] = useState({Dates:"", namePeriode:""});
    const [namePeriode, setnamePeriode] = useState("");
    const [ReloadListOfDates, setReloadListOfDates] = useState(false)
   
    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const [DatasOfTeacher, setDatasOfTeacher]:any = useRecoilState(NewTeacherDatas);
    const [DatasOfStudent, setDatasOfStudent]:any = useRecoilState(NewStudentDatas);
    const DataOfMEnu:any = useRecoilValue(DataOfMenuState);

    const resetDataPeriode = () =>{
        const InputField:any = document.querySelector(".DateProclInput");
        setnamePeriode("");
        setProclamDateDefine({Dates:"", namePeriode:""});
        InputField.value="";
    }

    const SendNewTeacherDatas = ()=>{
        const Promo:any = document.querySelector("#PromotionSelectedTeacher");
        const ClassTeaching:any = document.querySelector("#ClassSelectedTecher");

        setDatasOfTeacher({
            ...DatasOfTeacher,
            promition:Promo.value,
            classTeacher:ClassTeaching.value
        });
        
        fetch(`${LinkToApi.localLink}/Authentification/newTeacher`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            body: JSON.stringify(DatasOfTeacher)
        })
        .then((result)=>{
            if(result.ok){
                result.json().then((datas)=> {
                    Router.push("/Director")
                    console.log(datas)
                })
            }
        })
        .catch((error)=> console.log(error))
    };


    const SendNewStudentDatas = ()=>{
        const Promo:any = document.querySelector("#PromotionSelectedStudent");
        const ClassTeaching:any = document.querySelector("#ClassSelectedStudent");

        setDatasOfStudent({
            ...DatasOfStudent,
            promition:Promo.value,
            classStudent:ClassTeaching.value
        });
        
        fetch(`${LinkToApi.localLink}/Authentification/newStudent`,{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json; charset=UTF-8',
                    "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
                },
                body: JSON.stringify(DatasOfStudent)
            })
            .then((result)=>{
                if(result.ok){
    
                    result.json().then((datas)=> {
                        Router.push("/Director")
                        console.log(datas)
                    })
                }
            })
            .catch((error)=> console.log(error))
    };

    const SendDateOfProclam = ()=>{
        fetch(`${LinkToApi.localLink}/Proclammation/update`,{
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            body: JSON.stringify(ProclamDateDefine)
        })

        .then(response =>{
                if(response.ok){
                    response.json()
                    .then(datas =>{
                        console.log(datas);
                        resetDataPeriode(); // reset state of datas
                        setReloadListOfDates(!ReloadListOfDates)
                    })
                }
            })
        .catch(error =>console.log(error));
    };

    useEffect(()=>{
        
        fetch(`${LinkToApi.localLink}/Proclammation`,{
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            })
        .then(response =>{
                if(response.ok){
                    response.json()
                    .then(datas =>{
                        setAllDatesPro(datas.DATES);
                        console.log(datas);
                    })
                }
            })
        .catch(error =>console.log(error));

    },[ReloadListOfDates]);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(2); // if reloading page
        }

        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMEnu}/>
                    <div className="constainerDatasNewAccountDir">
                        <div className="titleForm">
                            <span>{typeAccountCreated === "ProclaDate" ? "Definition des Dates d'affichage des Resultats" : (typeAccountCreated === "Student" ? "Creation de Compte Ecolier":"Creation de Compte Enseignant")}</span>
                            <select onChange={(e)=>setTypeAccountCreated(e.target.value)}>
                                <option value="Student" selected>Compte Ecoliers</option>
                                <option value="Teacher">Compte Enseignant</option>
                                <option value="ProclaDate">Dates de proclammation</option>
                            </select>
                        </div>
                        {

                            (typeAccountCreated === "ProclaDate")?
                            <div className="ContainerDefineDatesProclam">
                                <div className="disponsitionContent">
                                    <table>
                                        <thead className="TitleTableDates">
                                            <tr>
                                                <td>Periode</td>
                                                <td>Date</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody className="bodyTableDates">
                                            {
                                                
                                                (AllDatesPro.length)?
                                                <>
                                                    {
                                                    AllDatesPro.map((value:any, index)=>
                                                        <tr key={index}>
                                                            <td>{value.namePeriode}</td>
                                                            <td>{value.Dates != "" ? value.Dates :"-"}</td>
                                                            <td><PencilSquareIcon className="Icone" onClick={()=>(setnamePeriode(value.namePeriode))}/></td>
                                                        </tr>)
                                                    }
                                                </>
                                                :null
                                                
                                            }
                                        </tbody>
                                    </table>
                                    <div className="ContBtnsAndLabel">
                                        <section className="DateDefine">
                                            <span className={namePeriode != ""? "Periode":"PeriodeError"}>{namePeriode != ""? namePeriode :"Choisissez une periode"}</span>
                                            <div className="groupeInput">
                                                <label>Definissez une date de proclammation</label>
                                                <input type="Date" className="DateProclInput" onChange={(e)=> setProclamDateDefine({namePeriode:namePeriode, Dates:e.target.value})}/>
                                            </div>

                                        </section>                                       
                                        <div className="btnsActions">
                                                <button className="Return" onClick={()=>resetDataPeriode()}> Effacer</button>
                                                <button className={(namePeriode !="" && ProclamDateDefine.namePeriode != "" && ProclamDateDefine.Dates !="")? "send":"sendDisabled"} disabled={(namePeriode !="" && ProclamDateDefine.namePeriode != "" && ProclamDateDefine.Dates !="")? false:true} onClick={()=> SendDateOfProclam()}> Envoit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            (typeAccountCreated === "Student")?
                                    <div className="containerNewsaccount ">
                                            <div className="Formulaire">
                                                <div className="StudentFormulaire">
                                                    <span className="TitleBloc">Informations L`Ecolier</span>
                                                    <InputCreatedNewAccount labelText="nom" placeholderText="kasereka" form_name="Student" type="text"  identity={1}/>
                                                    <InputCreatedNewAccount labelText="post-nom" placeholderText="Ruvinga" form_name="Student" type="text"  identity={2}/>
                                                    <InputCreatedNewAccount labelText="pre-nom" placeholderText="Elie" form_name="Student" type="text"  identity={3}/>
                                                    <InputCreatedNewAccount labelText="Lieu de naissance" placeholderText="Butembo" form_name="Student" type="text"  identity={4}/>
                                                    <InputCreatedNewAccount labelText="Date de naissance" placeholderText="" form_name="Student" type="Date"  identity={5}/>
                                                    
                                                    <div className="groupe_form">
                                                        <label>promotion</label>
                                                        <select className="SelectionTypeCompte" id="PromotionSelectedStudent">
                                                            <option value="1" selected>1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>

                                                    <div className="groupe_form">
                                                        <label>classe</label>
                                                        <select className="SelectionTypeCompte" id="ClassSelectedStudent">
                                                            <option value="A" selected>A</option>
                                                            <option value="B">B</option>
                                                            <option value="C">C</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="StudentFormulaire">
                                                    <span className="TitleBloc">Titeur de L`Ecolier</span>
                                                    <InputCreatedNewAccount labelText="nom" placeholderText="Kahambu" form_name="Student" type="text"  identity={6}/>
                                                    <InputCreatedNewAccount labelText="post-nom" placeholderText="Ruvinga" form_name="Student" type="text"  identity={7}/>
                                                    <InputCreatedNewAccount labelText="email" placeholderText="@email" form_name="Student" type="text"  identity={8}/>
                                                    <InputCreatedNewAccount labelText="Tel" placeholderText="+243" form_name="Student" type="text"  identity={9}/>
                                                    
                                                </div>           
                                            </div>
                                            <div className="DescriptionDatas">
                                                <div className="stapeDescr">
                                                    <span className="stape"><InformationCircleIcon className="Icone"/>Page 1/2</span>
                                                    <span className="descr"> Informations de l`écolier</span>
                                                </div>
                                                <Image width={400} height={400} src="/imgs/AuthImgs/NewStudent.png" className="imgDescription" alt="new student"/>
                                                <div className="containerBtn">
                                                    <button disabled={false} onClick={()=>SendNewStudentDatas()} className={false ? "disabledBtn" : "form_send_btn"}>Envoyer</button>
                                                </div>                                   
                                            </div>
                                        </div>:
                                        <div className="containerNewsaccount ">
                                            <div className="Formulaire">
                                                <InputCreatedNewAccount labelText="nom" placeholderText="kasereka" form_name="Teacher" type="text"  identity={1}/>
                                                <InputCreatedNewAccount labelText="post-nom" placeholderText="Ruvinga" form_name="Teacher" type="text"  identity={2}/>
                                                <InputCreatedNewAccount labelText="pre-nom" placeholderText="Elie" form_name="Teacher" type="text"  identity={3}/>
                                                <InputCreatedNewAccount labelText="email" placeholderText="@adressemail" form_name="Teacher" type="text"  identity={4}/>
                                                <InputCreatedNewAccount labelText="tel" placeholderText="+243" form_name="Teacher" type="text"  identity={5}/>
                                                
                                                <div className="groupe_form">
                                                    <label>promotion</label>
                                                    <select className="SelectionTypeCompte" id="PromotionSelectedTeacher">
                                                        <option value="1" selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                    </select>
                                                </div>

                                                <div className="groupe_form">
                                                    <label>classe</label>
                                                    <select className="SelectionTypeCompte" id="ClassSelectedTecher">
                                                        <option value="A" selected>A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="DescriptionDatas">
                                                <div className="stapeDescr">
                                                    <span className="stape"><InformationCircleIcon className="Icone"/>Page 2/2</span>
                                                    <span className="descr"> Informations de l`Enseignant</span>
                                                </div>
                                                <Image width={400} height={400} src="/imgs/AuthImgs/NewTeacher.png" className="imgDescription" alt="new student"/>
                                                
                                                <div className="containerBtn">
                                                    <button disabled={false} onClick={()=>SendNewTeacherDatas()} className={false ? "disabledBtn" : "form_send_btn"}>Envoyer</button>
                                                </div>

                                            </div>
                                    </div>                        
                                }
                        </div>
                </section>
                :
                <div className="LoaderPage">
                    <Loading/>
                    <span>Patientez...</span>
                </div>
            }
            
        </>
    )
};

export default DirectorClassPageIndex;