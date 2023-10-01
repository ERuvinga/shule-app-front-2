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

    const NewsTab = [
        {
            Date:1233345666777777,
            Title:"Examen Premier Semestre",
            Content:"Exercice 3 Ecrire un programme qui permet de calculer le solde de 5 enseignants, le programme doit stocker le nom de l'enseignant, les cours dispensés, le solde. Chaque enseignant beneficie d'une collation de 50$ pour la fete de fin d'année , le programme doit calculer le montant global à decaisser de ses 5 enseignants dont chaque ensignant est payait 120$"
        },
        {
            Date:1233345627617777,
            Title:"Frais Scolaires",
            Content:"creer un programme qui permet de calculer les pourcentage des etudiants et doit recuperer le nom, la promotion, le departement, le matricule et l'annee academique des etudiants, cet meme programme devra stocker les points, les maximums selon les departements et calculer les pourcentages de chaque etudiant le programme limitera de 50 etudiants pour commencer a enregistrer le departement"
        },
        {
            Date:1233345666777777,
            Title:"Proclammation resultat odjidjd",
            Content:"Ecrire un programme qui calcul la somme de deux nombres et afficher la valeur de retour le programme doit calculer la valeur de ces deux nombres."
        },
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
                        <NavBarAuthPages title="Communiqués" message="Communiqués de l'établissement"/>
                        <div>
                            <div className="LinkToNewS">
                                <a href="/Director/Informations/News" className="newPub">+ New Pub</a>
                            </div>
                            <div className="ContainerAllCardNews">
                                {
                                    NewsTab.map((value:any, index:any)=><NewsCard title={value.Title} text={value.Content} time={value.Date} key={index}/> )
                                }
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