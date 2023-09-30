import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems, AllStudentState, DirectorStudentsFilter, DataOfMenuComptable} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";

const DirectorComptPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [stateUserData, setstateUserData] = useState(false);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const DataOfMEnu = useRecoilValue(DataOfMenuComptable);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(1); // if reloading page
        }
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setstateUserData(false);
        fetch(`${LinkToApi.localLink}/SearchUsers/News`,{
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
                    <NavBarAuthPages title="Communications" message="Communications Publiées"/>
                        <div className="containerDatas">

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