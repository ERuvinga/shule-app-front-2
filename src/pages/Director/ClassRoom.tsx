import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems, NewTeacherDatas} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import InputCreatedNewAccount from "@/src/Components/InputNewUSerCreated";

const DirectorClassPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [typeAccountCreated, setTypeAccountCreated] = useState("Student");
   
    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const [DatasOfTeacher, setDatasOfTeacher] = useRecoilState(NewTeacherDatas);

    const SendNewTeacherDatas = ()=>{
        console.log(DatasOfTeacher);
    }
    // data of Menu
    const DataOfMEnu = [
        {
            label:"DashBoard",
            Link:"/Director",
            icone:"Squares2X2Icon"
        },
        {
            label:"Comptabilité",
            Link:"/Director/Comptability",
            icone:"CurrencyDollarIcon"
        },
        {
            label:"Classe",
            Link:"/Director/ClassRoom",
            icone:"UserGroupIcon"
        },
        {
            label:"Valve",
            Link:"/Director/Informations",
            icone:"ChatBubbleBottomCenterTextIcon"
        }
    ]


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
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="Classe" message="Creation des Comptes Utilisateurs"/>
                        <div className="titleForm">
                            <span>{typeAccountCreated === "Student" ? "Creation de Compte Ecolier":"Creation de Compte Enseignant"}</span>
                            <select onChange={(e)=>setTypeAccountCreated(e.target.value)}>
                                <option value="Student" selected>Compte Ecoliers</option>
                                <option value="Teacher">Compte Enseignant</option>
                            </select>
                        </div>
                        {
                            (typeAccountCreated === "Student")?
                                <div className="containerNewsaccount">
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
                                                    <option value="1">1</option>
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
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="StudentFormulaire">
                                            <span className="TitleBloc">Titeur de L`Ecolier</span>
                                            <InputCreatedNewAccount labelText="nom" placeholderText="Kahambu" form_name="Student" type="text"  identity={6}/>
                                            <InputCreatedNewAccount labelText="post-nom" placeholderText="Ruvinga" form_name="Student" type="text"  identity={7}/>
                                            <InputCreatedNewAccount labelText="email" placeholderText="email" form_name="Student" type="text"  identity={8}/>
                                            <InputCreatedNewAccount labelText="Tel" placeholderText="" form_name="Student" type="text"  identity={10}/>
                                            
                                        </div>           
                                    </div>
                                    <div className="DescriptionDatas">
                                        <div className="stapeDescr">
                                            <span className="stape"><InformationCircleIcon className="Icone"/>Page 1/2</span>
                                            <span className="descr"> Informations de l`écolier</span>
                                        </div>
                                        <Image width={400} height={400} src="/imgs/AuthImgs/NewStudent.png" className="imgDescription" alt="new student"/>
                                    </div>
                                </div>:
                                <div className="containerNewsaccount">
                                    <div className="Formulaire">
                                        <InputCreatedNewAccount labelText="nom" placeholderText="kasereka" form_name="Teacher" type="text"  identity={1}/>
                                        <InputCreatedNewAccount labelText="post-nom" placeholderText="Ruvinga" form_name="Teacher" type="text"  identity={2}/>
                                        <InputCreatedNewAccount labelText="pre-nom" placeholderText="Elie" form_name="Teacher" type="text"  identity={3}/>
                                        <InputCreatedNewAccount labelText="email" placeholderText="@adressemail" form_name="Teacher" type="text"  identity={4}/>
                                        <InputCreatedNewAccount labelText="tel" placeholderText="+243" form_name="Teacher" type="text"  identity={5}/>
                                        
                                        <div className="groupe_form">
                                            <label>promotion</label>
                                            <select className="SelectionTypeCompte" id="PromotionSelectedTeacher">
                                                <option value="1">1</option>
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
                                                <option value="A">A</option>
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