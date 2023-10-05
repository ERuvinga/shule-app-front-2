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
import { DataOfTeachertMenu, AllCourseInClass, AllStudentsInClass, FilterUsersOfClassByName } from "@/src/States/Teacher";
import { CoursFilter, PeriodeFilter } from "@/src/Components/CotationFilters";
import SearchInput from "@/src/Components/SearchUser";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { HeadTitleStudentCotation, StudentsCardCotation } from "@/src/Components/StudentCardCotation";
import { CourseSelected, PeriodeSelected, CotesOfUsers } from "@/src/States/Teacher";
import { IdentityUserSelected } from "@/src/States/Student";
import FicheOfSudent from "@/src/Components/FicheStudent";

const StudentNewsPage = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const [stateUserData, setstateUserData] = useState(false);
    const [reloadDate, SetReloadDatas] = useState(true);
    const [UserOfClass, setUserOfClass]:any = useRecoilState(AllStudentsInClass);
    const [togglePage, setTooglePage] = useState(true);

    //Atoms
    const LinkToApi:any = useRecoilValue(Link_toApi);
    const [UserAuth, setUaseAuth]:any = useRecoilState(AuthUser);
    const [AllsCourse, setAllCourse] = useRecoilState(AllCourseInClass);
    const [itemMenuSelected, setItemMenuSelected] = useRecoilState(SelectedMenuItems);
    const DataOfMenu = useRecoilValue(DataOfTeachertMenu);
    const UserFiltered:any = useRecoilValue(FilterUsersOfClassByName);
    const StudentSelected:any = useRecoilValue(IdentityUserSelected);

    // period and Course Selected
    const CoursSelect:any = useRecoilValue(CourseSelected);
    const PeriodSelect:any = useRecoilValue(PeriodeSelected);
    const AllCotesOfStudent:any = useRecoilValue(CotesOfUsers); 

    const SendCote = ()=>{
        console.log(AllCotesOfStudent);
        setstateUserData(false)
        fetch(`${LinkToApi.localLink}/Class/newsCotes`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            body: JSON.stringify(AllCotesOfStudent)
        })
            .then((result)=>{
                if(result.ok){
                    result.json().then((datas)=>{
                        console.log(datas)
                        setTimeout(()=>setstateUserData(true),1200) ;
                    })
                }
            })
            .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        if(!itemMenuSelected){
            setItemMenuSelected(1); // if reloading page
        }

        withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage, setUaseAuth, UserAuth, Router); // check if token of user is valid
    },[]);

    useEffect(()=>{
        setstateUserData(false)
        fetch(`${LinkToApi.localLink}/Class`,{
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
                        setAllCourse(datas.Cours);
                        setUserOfClass(datas.users);
                        setTimeout(()=>setstateUserData(true),1200) ;
                    })
                }
            })
            .catch((error)=> console.log(error))
    },[reloadDate])
    return(
        <>
            <HeadPages/>
            {
                (statePage || UserAuth) ?
                <section className="ContainerFormatPages">
                    <MenuComponent DatasOfMenu= {DataOfMenu}/>
                    <div className="constainerDatasNav">
                        { togglePage ?
                            <div className="containerDatas">
                                <div className="DataFilterContainer">
                                    <div className="Viewdatas">
                                        <div>
                                            <div className="descriptionsCourses">
                                                <div className="ContDesc">
                                                    <span className="CourseSelected">{CoursSelect !== ""? CoursSelect.name.split("_")[0]:"Choisissez le cours"}</span>
                                                    <span className="DomainCourse">{`(${CoursSelect !==""? CoursSelect.name.split("_")[1]:""})`}</span>                                                    
                                                </div>
                                                <div className="periodeSelect">{PeriodSelect}</div>

                                            </div>
                                            <div className="HeadView">
                                                <SearchInput/>
                                                <div className="RefreshDatas" 
                                                    onClick={
                                                        ()=> {
                                                            SetReloadDatas(!reloadDate);
                                                        }
                                                    }>
                                                    <ArrowPathIcon className="Icone"/>
                                                    <span className="numberOfUser">{`(${(UserOfClass.length)? UserOfClass.length : "0"})`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div className="Datas">
                                            {
                                                stateUserData ?
                                                <>
                                                    {
                                                        (UserFiltered.length)?
                                                            <table className="DatasComponents">
                                                                <thead className="titleDatas">
                                                                    <HeadTitleStudentCotation/>
                                                                </thead>
                                                                <tbody className="CardUser">
                                                                        {
                                                                            UserFiltered.map((value:any, index:any)=>
                                                                            <StudentsCardCotation 
                                                                                key={index} 
                                                                                name={value.allName}
                                                                                statusCompte={value.stateAccount}
                                                                                promotion={value.registerDatas.PROMOTION}
                                                                                balance={`${value.valuePayed}$`}
                                                                                idTab={index}
                                                                                CLASS={value.registerDatas.CLASS}
                                                                                idUser={value._id}
                                                                                setTooglePageState = {setTooglePage}
                                                                    />)
                                                                        }
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
                                    <div className="containerBtnCote">
                                        <button className="btnSendCotes" onClick={()=> SendCote()}>Envoit</button>
                                    </div>
                                </div>
                                <div className="FilterContainer">
                                        <PeriodeFilter/>
                                        <CoursFilter/>
                                </div>                      
                            </div>:
                            <FicheOfSudent Courses={AllsCourse} returnFunction={setTooglePage}/>
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