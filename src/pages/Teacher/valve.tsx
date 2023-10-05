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
import NewsCard from "@/src/Components/NewsCard";
import { DataOfTeachertMenu } from "@/src/States/Teacher";

const StudentNewsPage = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [AllNews, setAllNews] = useState([]);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const DataOfMenu = useRecoilValue(DataOfTeachertMenu);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(2); // if reloading page
        }
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        fetch(`${LinkToApi.localLink}/News`)
        .then((result)=>{
            if(result.ok){
                result.json().then((datas)=>{
                    //console.log(datas);
                    setAllNews(datas.News);
                })
            }
        })
        .catch((error)=> console.log(error))
    },[])
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMenu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="Communiqués" message="Communiqués de l'établissement"/>
                            <div className="ContainerAllCardNews mt-news">
                                {
                                    AllNews.map((value:any, index:any)=><NewsCard title={value.title} text={value.Content} time={value.time} key={index}/> )
                                }
                            </div>
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

export default StudentNewsPage;