//Natives tools
import { useRecoilValue } from 'recoil';

// Components
import Head from '../Components/Head'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer';
import Loading from "@/src/Components/Loading";

//state
import { NavBarSelectedItem } from '../States/UserAoth';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import NewsCard from '../Components/NewsCard';
import { Link_toApi } from '../States/LoginRegisterStates';

const ValvePage = ()=>{

    const [itemSelectedNavBar, setItemSelectedNavBar]:any = useRecoilState(NavBarSelectedItem);
    const [Seaching, setSeaching] = useState(false);
    const [AllNews, setAllNews] = useState([]);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);
    const LinkToApi:any = useRecoilValue(Link_toApi);

    useEffect(()=>{
        if(itemSelectedNavBar != 1){
            setItemSelectedNavBar(1);
        }       
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
    return (
        <>
            <Head/>
            <Navbar/>
            <div className='valve'>

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
                            {  Seaching ?                                
                                <div className="ContainerAllCardNews mt-news">
                                    {
                                        AllNews.map((value:any, index:any)=><NewsCard title={value.title} text={value.Content} time={value.time} key={index}/> )
                                    }
                                </div>
                            :
                            <div className="LoaderPage">
                                <Loading/>
                                <span>Chargement...</span>
                            </div>
                        }</div>
            </div>
            <Footer/>
        </> 
 )};

 export default ValvePage;
