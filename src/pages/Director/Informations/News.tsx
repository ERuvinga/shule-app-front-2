import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";

const DirectorInfosPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);

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

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(4); // if reloading page
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
                        <NavBarAuthPages title="Nouvelle Communiqué" message="Nouvelle Communiqué de l'établissement"/>
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

export default DirectorInfosPageIndex;