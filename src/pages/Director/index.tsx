import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

//atoms and Selectors
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser, TypeAccountState, AllUserStates, FilterTypeAccountsUser } from "@/src/States/UserAoth";

// lib
import { withAuth } from "@/src/Lib/Auth";
import { ArrowPathIcon } from "@heroicons/react/24/outline"

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import TypeAccount from "@/src/Components/Director/typeAccountFilter";
import DirectorCardUser from "@/src/Components/UserCardView";
import HeadTitleDataView from "@/src/Components/DataViewTitle";
import SearchInput from "@/src/Components/SearchUser";
import {PromotionFilter, ClassFilter} from "@/src/Components/Filters";

const DirectorPageIndex = ()=>{

    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [stateUserData, setstateUserData] = useState(false);
    const [ReloadAllDatas, setReloadAllDatas] = useState(false);
    let UserFilters:any|[];

    //Atoms
    const typeAccountSearching = useRecoilValue(TypeAccountState);
    const setAllUsers = useSetRecoilState(AllUserStates)
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth,setUaseAuth]:any = useRecoilState(AuthUser);

    // selector
    UserFilters = useRecoilValue(FilterTypeAccountsUser);

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
    ];

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
            label:"Eleves",
            item:2
        }

    ];

    useEffect(()=>{
        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setstateUserData(false);
        fetch(`${LinkToApi.localLink}/SeachUsers`,{
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
    },[ReloadAllDatas])

    return(
        <>
            <HeadPages/>
            {
                statePage ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMEnu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="DashBoard" message="Detail sur les informations de l'etablissement"/>
                        <div className="containerDatas">
                            <div className="DataFilterContainer">
                                <div className="TypeAccontContainer">
                                    {
                                        dataOfTypeAccount.map((value:any, index:any)=> <TypeAccount key={index} title={value.label} item={value.item} />)
                                    }
                                </div>
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
                                                            <thead className="titleDatas"><HeadTitleDataView 
                                                                typeCompte={(!typeAccountSearching)? "Dir":((typeAccountSearching == 1)? "Teach": "Stud")}/>
                                                            </thead>
                                                            <tbody className="CardUser">
                                                                    {DataListView()}
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

export default DirectorPageIndex;