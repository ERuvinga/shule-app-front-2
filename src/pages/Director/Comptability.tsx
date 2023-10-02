import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems, AllStudentState, DirectorStudentsFilter, DataOfMenuState} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import SearchInput from "@/src/Components/SearchUser";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
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
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const [AllStudent, setAllStudents]:any = useRecoilState(AllStudentState);
    const UserFilters:any = useRecoilValue(DirectorStudentsFilter);
    const DataOfMEnu = useRecoilValue(DataOfMenuState);


    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(1); // if reloading page
        }
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
                                                            <table className="DatasComponents">
                                                                <thead className="titleDatas">
                                                                    <HeadTitleStudentDatas/>
                                                                </thead>
                                                                <tbody className="CardUser">
                                                                        {
                                                                            UserFilters.map((value:any, index:any)=>
                                                                            <StudentsCardUser 
                                                                                key={index} 
                                                                                name={value.allName}
                                                                                statusCompte={value.stateAccount}
                                                                                promotion={`${value.registerDatas.PROMOTION}-${value.registerDatas.CLASS}`}
                                                                                balance={`${value.valuePayed}$`}
                                                                                DateUser={value.LastDatePayed}
                                                                    />)
                                                                        }
                                                                </tbody>
                                                            </table>
                                                            :
                                                            <div className="UserNotFund">
                                                                <span className="Title">O oops !</span>
                                                                <span className="Description">Aucun Utilisateur Trouvé</span>                    
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
            
        </>
    )
};

export default DirectorComptPageIndex;