import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

//atoms and Selectors
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {TypeAccountState, AllUserStates, FilterTypeAccountsUser, DataOfMenuState, SelectedMenuItems} from "@/src/States/Director"

// lib
import { withAuth } from "@/src/Lib/Auth";
import { ArrowPathIcon, PrinterIcon } from "@heroicons/react/24/outline"

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import TypeAccount from "@/src/Components/Director/typeAccountFilter";
import DirectorCardUser from "@/src/Components/UserCardView";
import HeadTitleDataView from "@/src/Components/DataViewTitle";
import SearchInput from "@/src/Components/SearchUser";
import {PromotionFilter, ClassFilter} from "@/src/Components/PromotionFilter";

const DirectorPageIndex = ()=>{

    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [stateUserData, setstateUserData] = useState(false);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);
    const [TitleTab, setTitleTab] = useState("Liste des Ecolier de l'Ep Neema");
    const [PrintPage, setPrintPage] =useState(false);

    //Atoms and selector
    const typeAccountSearching = useRecoilValue(TypeAccountState);
    const setAllUsers = useSetRecoilState(AllUserStates)
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);
    const DataOfMEnuDirector = useRecoilValue(DataOfMenuState);
    const UserFilters:any = useRecoilValue(FilterTypeAccountsUser);
    const setItemMenuSelected = useSetRecoilState(SelectedMenuItems);

    const UpdateViewForPrint = () =>{
        setPrintPage(true);
        setTimeout(()=>{
            window.print()
        },10);
        
        setTimeout(()=>{
            setPrintPage(false);
        },50);
    };

    const DataListView = ()=>{
        if(UserFilters.length){
            switch(typeAccountSearching){
                case 0:
                    return(
                        UserFilters.map((value:any, index:any)=>
                        <DirectorCardUser 
                            key={index} 
                            name={value.allName}
                            contact={value.tel}
                            statusCompte={value.stateAccount}
                            typeCompte = {value.typeAccount}
                            email ={value.email}
                        />)
                    )

                case 1:
                    return(
                        UserFilters.map((value:any, index:any)=>
                        <DirectorCardUser 
                            key={index} 
                            name={value.allName}
                            contact={value.tel}
                            statusCompte={value.stateAccount}
                            typeCompte = {value.typeAccount}
                            email ={value.email}
                            promotion = {value.PROMOTION ? `${value.PROMOTION }-${value.CLASS }`: ((value.registerDatas.PROMOTION) ? `${value.registerDatas.PROMOTION}-${value.registerDatas.CLASS}`:"")}
                    />)
                )
                case 2:
                    return(
                        UserFilters.map((value:any, index:any)=>
                        <DirectorCardUser 
                            key={index} 
                            name={value.allName}
                            contact={value.tel}
                            statusCompte={value.stateAccount}
                            typeCompte = {value.typeAccount}
                            email ={value.email}
                            dateOfStudentaccount={value.registerDatas.DATE}
                            promotion = {value.PROMOTION ? `${value.PROMOTION }-${value.CLASS }`: ((value.registerDatas.PROMOTION) ? `${value.registerDatas.PROMOTION}-${value.registerDatas.CLASS}`:"")}
                    />)
                )
            }
        }
    }

    const dataOfTypeAccount = [
        {
            label:"Directions",
            item:0
        },
        {
            label:"Enseignants",
            item:1
        },
        {
            label:"Ecoliers",
            item:2
        }

    ];

    useEffect(()=>{
        setItemMenuSelected(0)
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setstateUserData(false);
        fetch(`${LinkToApi.localLink}/SearchUsers`,{
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
                        setAllUsers(datasOfusers.AllUsers);
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
                    <MenuComponent DatasOfMenu={DataOfMEnuDirector}/>
                    <div className="constainerDatasNav">
                        <div className="wrapperHiden">
                            <NavBarAuthPages title="DashBoard" message="Detail sur les informations de l'etablissement"/>
                        </div>
                        <div className="containerDatas">
                            <div className={PrintPage ? "DatasContainerHidden":"DataFilterContainer"}>
                                <div className="wrapperHiden">
                                    <div className="TypeAccontContainer">
                                        {
                                            dataOfTypeAccount.map((value:any, index:any)=> <TypeAccount key={index} title={value.label} item={value.item} />)
                                        }
                                    </div>
                                </div>
                                <div className="Viewdatas">
                                    <div className="wrapperHiden">
                                        <div className="HeadView">
                                            <SearchInput/>
                                            <div className="ReturnPrintReload">
                                                <span className="print" 
                                                            onClick={()=> UpdateViewForPrint()
                                                            } >
                                                    <PrinterIcon className="Icone"/>
                                                    <span>Imprimer</span>
                                                </span> 
                                                <span className="RefreshDatas" 
                                                    onClick={
                                                        ()=> {
                                                                setReloadAllDatas(!ReloadAllDatas);
                                                        }
                                                    }>
                                                    <ArrowPathIcon className="Icone"/>
                                                    <span className="numberOfUser">{`(${(UserFilters.length)? UserFilters.length : "0"})`}</span>
                                                </span>                                            
                                            </div>
                                    </div>
                                    </div>
                                    <div className="Datas">
                                        {
                                            stateUserData ?
                                            <>
                                                {
                                                    (UserFilters.length)?
                                                    <>
                                                        <div className="titlePrintListUsers">{TitleTab}</div>
                                                        <table className="DatasComponents">
                                                            <thead className="titleDatas"><HeadTitleDataView 
                                                                typeCompte={(!typeAccountSearching)? "Dir":((typeAccountSearching == 1)? "Teach": "Stud")}/>
                                                            </thead>
                                                            <tbody className="CardUser">
                                                                    {DataListView()}
                                                            </tbody>
                                                        </table>
                                                    </>
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
                            <div className="wrapperhiddenFilter">
                                <div className="FilterContainer">
                                    {
                                        (!typeAccountSearching)? 
                                        <div className="loadingAccount">
                                            <Loading/>
                                            <span>Auncun filtre pour la Direction</span>
                                        </div>
                                        :
                                        <>
                                            <PromotionFilter/>
                                            <ClassFilter/>
                                        </>
                                    }
                                </div>
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

export default DirectorPageIndex;