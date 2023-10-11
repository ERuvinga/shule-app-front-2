import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import { AuthUser } from "@/src/States/UserAoth";
import {SelectedMenuItems} from "@/src/States/Director"
import { MaxResultsPeriodes, MinPonderationMin } from "@/src/States/cotesStudents";

// lib
import { withAuth } from "@/src/Lib/Auth";

//components
import HeadPages from "@/src/Components/Head";
import Loading from "@/src/Components/Loading";
import MenuComponent from "@/src/Components/Menu";
import NavBarAuthPages from "@/src/Components/NavBarAuthPages";
import { DataOfStudentMenu, FinalResult } from "@/src/States/Student";
import { HeadTitleBultDatas, RowCotes } from "@/src/Components/BulletinStudent";
import DiplayResultFinal from "@/src/Components/BulletinStudent/TotPercentAndPlaceListe" 
import { DatesOfProclamm } from "@/src/States/Teacher";

const StudentCotesPage = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [DatasCotesAvailable, setDatasCotesAvailable] = useState(false);
    const [DatasCoursessAvailable, setDatasCoursessAvailable] = useState(false);
    const [CotesStudent, setCotesStudent] = useState([]);
    const [AllCourse, setAllCourses] = useState([]);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const DataOfMenu = useRecoilValue(DataOfStudentMenu);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const [UserAuth, setUaseAuth]:any = useRecoilState(AuthUser);
    const [minPonderationCourses, setMinPonderationCourses]:any = useRecoilState(MinPonderationMin);
    const [SummOfCotes, setSummOfCotes]:any = useRecoilState(MaxResultsPeriodes);
    const setDatesOfProclammations= useSetRecoilState(DatesOfProclamm);
    const setResultsOfStudent = useSetRecoilState(FinalResult);

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(1); // if reloading page
        }

        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setDatasCotesAvailable(false);
        setDatasCoursessAvailable(false);

        // searching Cotes of Student
        fetch(`${LinkToApi.localLink}/Class/Cotes`,{
            method:"GET",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            }
            })
            .then((result)=>{
                if(result.ok){
                    result.json().then((datas)=>{
                        console.log(datas);
                        setCotesStudent(datas.Cotes);
                        setSummOfCotes(datas.Resultat);
                        setResultsOfStudent(datas.Resultat);
                        setDatesOfProclammations(datas.datesProclam);
                        setTimeout(()=>setDatasCotesAvailable(true),1000); // secondes secondes after reload data Display it 
                    })
                }
            })
            .catch((error)=> console.log(error))

            //Searching Courses of Student and Ponderations
            fetch(`${LinkToApi.localLink}/Class/Student`,{
                method:"GET",
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json; charset=UTF-8',
                    "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
                }
                })
                .then((result)=>{
                    if(result.ok){
                        result.json().then((datas)=>{
                            setAllCourses(datas.Cours);
                            setMinPonderationCourses(datas.PonderationTot)
                            setTimeout(()=>setDatasCoursessAvailable(true),1500); // secondes secondes after reload data Display it 
                        })
                    }
                })
                .catch((error)=> console.log(error))
    },[]);
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMenu}/>
                    <div className="constainerDatasNav">
                        <NavBarAuthPages title="" message=""/>
                                <div className="ContainerBultin">
                                        {
                                            (AllCourse.length && DatasCotesAvailable && DatasCoursessAvailable)?
                                                <table className="CotesTable">
                                                    <thead className="titleDatasFiche">
                                                        <HeadTitleBultDatas/>
                                                            </thead>
                                                                <tbody className="BodyTable">
                                                                    {
                                                                       AllCourse.map((value:any, index)=><RowCotes tabPoint={CotesStudent} 
                                                                       CourMax={value.pond} 
                                                                       coursName={value.name} 
                                                                       domaine = {value.domaine}
                                                                       key={index}
                                                                       />) 
                                                                    }
                                                                    <DiplayResultFinal minPond={minPonderationCourses} nameRow="maxi" tabMaxima={SummOfCotes}/>
                                                                    <DiplayResultFinal minPond={minPonderationCourses} nameRow="percent" tabMaxima={SummOfCotes}/>
                                                                    <DiplayResultFinal minPond={minPonderationCourses} nameRow="place" tabMaxima={SummOfCotes}/>                                                                    
                                                                </tbody>
                                                    </table>
                                                    :
                                                    <div className="LoaderCotes">
                                                        <Loading/>
                                                        <span>Chargement...</span>
                                                    </div>
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

export default StudentCotesPage;