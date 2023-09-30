import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import { AllStudentState, DirectorStudentsFilter, DataOfMenuComptable} from "@/src/States/Director"
import { ContainerUserCard, StudentPayedDatas} from "@/src/States/ForAllComp";

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import SearchInput from "@/src/Components/SearchUser";
import { ArrowPathIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ClassFilter, PromotionFilter } from "@/src/Components/PromotionFilter";
import StudentsCardUser from "@/src/Components/StudentCard";
import HeadTitleStudentDatas from "@/src/Components/Director/HeadTitleStudentDatas";

const DirectorComptPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [stateUserData, setstateUserData] = useState(false);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [AllStudent, setAllStudents]:any = useRecoilState(AllStudentState);
    const UserFilters:any = useRecoilValue(DirectorStudentsFilter);
    const DataOfMEnu = useRecoilValue(DataOfMenuComptable);
    const [WrappePageState, setWrappePageState] = useRecoilState(ContainerUserCard);
    const [DataOfUserPayed, setDataOfUserPayed] = useRecoilState(StudentPayedDatas);

    // send DataOf payed
    const payStudent = () =>{

        setDataOfUserPayed({ // updating Date payed
            ...DataOfUserPayed,
            datePayed: Date.now()
        })
        if(DataOfUserPayed.payed){
            fetch(`${LinkToApi.localLink}/Paye/New`,{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json; charset=UTF-8',
                    "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
                },
                body: JSON.stringify(DataOfUserPayed)
            })
            .then((result)=>{
                if(result.ok){
                    result.json().then((datas)=> console.log(datas))
                }
                else{
                    result.json().then((datas)=> console.log(datas))
                }
            })
            .catch((error)=> console.log(error))
        }
    }

    useEffect(()=>{
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setstateUserData(false);
        fetch(`${LinkToApi.localLink}/SearchUsers/Students`,{
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            }
            })
        .then(response =>{
                if(response.ok){
                    response.json()
                    .then(datasOfusers =>{
                        setAllStudents(datasOfusers.AllUsers);
                        setTimeout(()=>setstateUserData(true),1000); // secondes secondes after reload data Display it 
                    })
                }
            })
        .catch(error =>{
                console.log(error)
            })
    },[ReloadAllDatas]);

    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMEnu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="Comptabilité" message="Detail sur les informations de payement"/>
                        <div className="containerDatas">
                            <div className="DataFilterContainer">
                                <div className="Viewdatas">
                                        <div className="HeadView">
                                            <SearchInput/>
                                            <div className="RefreshDatas" 
                                                onClick={
                                                    ()=> {
                                                            setReloadAllDatas(!ReloadAllDatas);
                                                    }
                                                }>
                                                <ArrowPathIcon className="Icone"/>
                                                <span className="numberOfUser">{`(${(UserFilters.length)? UserFilters.length : "0"})`}</span>
                                            </div>
                                        </div>
                                        <div className="Datas">
                                            {
                                                stateUserData ?
                                                <>
                                                    {
                                                        (UserFilters.length)?
                                                        <div className="ContainerTab">
                                                            <table className="DatasComponents">
                                                                    <thead className="titleDatas">
                                                                        <HeadTitleStudentDatas/>
                                                                    </thead>
                                                                    <tbody className="CardUser ">
                                                                            {
                                                                                UserFilters.map((value:any, index:any)=>
                                                                                <StudentsCardUser 
                                                                                    key={index} 
                                                                                    name={value.allName}
                                                                                    statusCompte={value.stateAccount}
                                                                                    promotion={`${value.registerDatas.PROMOTION}-${value.registerDatas.CLASS}`}
                                                                                    DateUser={125353633737}
                                                                                    balance={""}
                                                                                    idUser={value._id}
                                                                        />)
                                                                            }
                                                                    </tbody>
                                                            </table>
                                                        </div>
                                                            :
                                                            <div className="UserNotFund">
                                                                <span className="Title">Rechercher d`écoliers !</span>
                                                                <span className="Description">Faites la recheche par nom de l`écolier</span>                    
                                                            </div>
                                                        
                                                    }
                                                </>
                                                :
                                                <div className="loadSeacherUSers">
                                                    <Loading/>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="FilterContainer">
                                        <PromotionFilter/>
                                        <ClassFilter/>
                                </div>
                            </div> 
                        </div>
                </section>
                :
                <div className="LoaderPage">
                    <Loading/>
                    <span>Chargement...</span>
                </div>
            }
            {
                WrappePageState && (
                    <section className="WrapperComponent">
                        <div className="formPayement">
                            <div className="identityUser">
                                <span className="nameUser"><UserCircleIcon className="Icone"/> {DataOfUserPayed.name} </span>
                                <XCircleIcon className="closepayForm" onClick={()=>setWrappePageState(false)}/>
                            </div>
                            <select id="SelecteTypeAction">
                                <option value="Adding">Ajouter</option>
                                <option value="munis">Soustraire</option>
                            </select>
                            <div className="inputGroup">
                                <label htmlFor="InPutPayement">Saisissez le montat</label>
                                <input type="number" 
                                    id="InPutPayement" 
                                    placeholder="la somme ($)" 
                                    onChange={(e)=>{
                                        const TypeActionValue:any = document.querySelector("#SelecteTypeAction")
                                        setDataOfUserPayed({
                                            ...DataOfUserPayed,
                                            payed:parseInt(e.target.value),
                                            typeAction:TypeActionValue.value
                                        })
                                    }}/>
                            </div>
                            <button className="btnPayement" onClick={()=> payStudent()}>Envoyer</button>
                        </div>
                    </section>
                )
            }
            
        </>
    )
};

export default DirectorComptPageIndex;