import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems, NewsPublication} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import Link from "next/link";

const DirectorInfosPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const [NewPub, setNewPub]:any = useRecoilState(NewsPublication);

    const SendNew = () =>{
        fetch(`${LinkToApi.localLink}/News/Adding`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            body: JSON.stringify(NewPub)
        })
        .then((result)=>{
            if(result.ok){
                result.json().then((datas)=>{
                    console.log(datas);
                    Router.push("/Director/Informations");
                })
            }
            else{
                result.json().then((datas)=>{
                    console.log(datas);
                })
            }
        })
        .catch((error)=> console.log(error))
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
            setItemMenuSelected(3); // if reloading page
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
                        <div className="ContainerNewsInfo">
                            <div className="groupe_form TiltePub">
                                <label>Titre De la publication</label>
                                <input type="text" 
                                        placeholder="Frais Scolaire" 
                                        className="log_reg_input"
                                        onChange={(e:any)=>{setNewPub({
                                            ... NewPub,
                                            Title:e.target.value
                                        })}
                                    }
                                />
                            </div>
                            <textarea placeholder="tapez Votre texte ici" className="TextEditable" 
                                onChange={(e:any)=>setNewPub({
                                        ... NewPub,
                                        content: e.target.value,
                                        time:Date.now()
                                    })
                                }>
                            </textarea>
                            <div className="BtnsLink">
                                <Link href="/Director/Informations" className="returnBtn">Retour</Link>
                                <button onClick={()=> SendNew()} className="SendBtn">Envoit</button>
                            </div>
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

export default DirectorInfosPageIndex;