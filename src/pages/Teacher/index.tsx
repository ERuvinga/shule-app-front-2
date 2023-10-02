import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import { SelectedMenuItems } from "@/src/States/Director";

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import { DataOfTeachertMenu } from "@/src/States/Teacher";

const TeacherPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth, setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const DataOfMenu = useRecoilValue(DataOfTeachertMenu);

    useEffect(()=>{
        if(itemMenuSelected){
            setItemMenuSelected(0);
        }
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMenu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="Comptabilité" message="Detail sur le payement de l'eleve"/>
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

export default TeacherPageIndex;