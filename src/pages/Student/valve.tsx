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
import { DataOfStudentMenu } from "@/src/States/Student";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const StudentNewsPage = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [Seaching, setSeaching] = useState(false);
    const [AllNews, setAllNews] = useState([]);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const DataOfMenu = useRecoilValue(DataOfStudentMenu);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(2); // if reloading page
        }
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setSeaching(false);
        fetch(`${LinkToApi.localLink}/News`)
        .then((result)=>{
            if(result.ok){
                result.json().then((datas)=>{
                    setAllNews(datas.News);
                    setTimeout(()=>setSeaching(true),1500);
                })
            }
        })
        .catch((error)=> console.log(error))
    },[ReloadAllDatas])
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMenu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="Communiqués" message="Communiqués de l'établissement"/>
                        {   Seaching ?
                            <div className="DatasValve">
                                        <div className="HeadView">
                                                <div className="RefreshDatas" 
                                                    onClick={
                                                        ()=> {
                                                                setReloadAllDatas(!ReloadAllDatas);
                                                        }
                                                    }>
                                                    <ArrowPathIcon className="Icone"/>
                                                    <span className="numberOfUser">{`(${(AllNews.length)? AllNews.length : "0"})`}</span>
                                                </div>
                                        </div>
                                <div className="ContainerAllCardNews mt-news">
                                    {
                                        AllNews.map((value:any, index:any)=><NewsCard title={value.title} text={value.Content} time={value.time} key={index}/> )
                                    }
                                </div>
                            </div>:
                            <div className="LoaderPage">
                                <Loading/>
                                <span>Chargement...</span>
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

export default StudentNewsPage;