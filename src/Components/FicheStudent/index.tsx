import { useEffect, useState } from "react";
import { HeadTitleBultDatas, RowCotes } from "../BulletinStudent"
import { IdentityUserSelected } from "@/src/States/Student";
import { useRecoilValue } from "recoil";
import {  ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link_toApi } from "@/src/States/LoginRegisterStates";
import Loading from "@/src/Components/Loading"

interface DatasStudent {
    Courses:any,
    returnFunction:any
}

const FicheOfSudent = (datas:DatasStudent)=>{
    //Atoms
    const DatasOfUsersSelected:any = useRecoilValue(IdentityUserSelected);
    const Link_Api:any = useRecoilValue(Link_toApi)

    //States
    const [StatePage, setStatePage]= useState(false);
    const [coteStudent, setCoteStudent] = useState([]);

    useEffect(()=>{
        setStatePage(false);
        fetch(`${Link_Api.localLink}/Class/FicheStudent`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem("TokenUser")}`
            },
            body: JSON.stringify(DatasOfUsersSelected)
        })
            .then((result)=>{
                if(result.ok){
                    result.json().then((datas)=>{
                        console.log(datas);
                        setCoteStudent(datas.Cotes)
                        setTimeout(()=>setStatePage(true),1200) ;
                    })
                }
            })
            .catch((error)=> console.log(error))
    },[]);

    return(
        <>
            {  StatePage ?                           
            <div className="CoteDatas">
                <div className="descriptionStudent">
                    <div className="Return" 
                                onClick={()=>datas.returnFunction(true)}>
                        <ArrowUturnLeftIcon className="Icone"/>
                        <span>Retour</span>
                    </div>
                    <div className="NameStudent">
                        <div>{`Nom : `}<span className="namePromClass">{DatasOfUsersSelected.nameStudent}</span></div>
                        <div>{`Promotion : `}<span className="namePromClass">{DatasOfUsersSelected.PROMO}</span></div>
                        <div>{`Class : `}<span className="namePromClass">{DatasOfUsersSelected.CLASS}</span></div>
                    </div>
                </div>
                <table className="CotesTable">
                        <thead className="titleDatasFiche">
                            <HeadTitleBultDatas/>
                        </thead>
                        <tbody className="BodyTable">
                                        {
                                        datas.Courses.map((value:any, index:any)=><RowCotes tabPoint={coteStudent} 
                                        CourMax={value.pond} 
                                        coursName={value.name} 
                                        domaine = {value.domaine}
                                        key={index}
                                        />) 
                                        }                                                                 
                        </tbody>
                </table>
            </div>:
            <div className="LoaderPage">
                <Loading/>
                <span>Chargement...</span>
            </div>
        }
    </>
    )
};

export default FicheOfSudent;