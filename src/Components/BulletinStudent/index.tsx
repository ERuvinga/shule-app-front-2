import { DatesOfProclamm } from "@/src/States/Teacher";
import { useRecoilState, useRecoilValue } from "recoil";
import { AuthUser } from "@/src/States/UserAoth";

const HeadTitleBultDatas = () =>{
    return(
        <tr>
            <th className="first">Cours</th>
            <th>Max</th>
            <th>1P</th>
            <th>2P</th>
            <th>Max Ex</th>
            <th>Ex</th>
            <th>Max Trim</th>
            <th>Tot Trim</th>
            <th>3P</th>
            <th>4P</th>
            <th>Max Ex</th>
            <th>Ex</th>
            <th>Max Trim</th>
            <th>Tot Trim</th>
            <th>5P</th>
            <th>6P</th>
            <th>Max Ex</th>
            <th>Ex</th>
            <th>Max Trim</th>
            <th>Tot Trim</th>
            <th>Max Gen</th>
            <th className="last">Tot Gen</th>
        </tr>  
    )
};

interface dataOfCourse {
    coursName:String,
    CourMax:any,
    domaine:String,
    tabPoint:[]|any,
}

const RowCotes = (datas:dataOfCourse) =>{
    const [DatesOfProclammations, setDatesOfProclammations]:any= useRecoilState(DatesOfProclamm);
    const AuthentiqUser :any = useRecoilValue(AuthUser)

    const searchCoteStudent = (periodeCote:String)=>{
        for(let i=0; i< datas.tabPoint.length; i++){
            if((datas.tabPoint[i].NameCourse.split("_")[0] == datas.coursName) && (datas.tabPoint[i].NameCourse.split("_")[1] == datas.domaine) && (datas.tabPoint[i].periode == periodeCote)){  
                return datas.tabPoint[i].cote
            }    
        }
        return "-";
    };
    
    const SearchingDatePeriod = (periodeName:any) =>{
        const DateNow = new Date(Date.now());

        let ValueReturned = false;
        if( AuthentiqUser.typeAccount == "Student"){
            DatesOfProclammations.map((value:any)=>{
                if(value.namePeriode == periodeName){
                    if(value.Dates != ""){
                        const DateDay = value.Dates.split("-");
                        if((DateNow.getFullYear() >= parseInt(DateDay[0])) && (DateNow.getMonth()+1 >= parseInt(DateDay[1]) && (DateNow.getDate() >= parseInt(DateDay[2])))){
                            console.log("Date de proclammation arrivée");
                            ValueReturned = true;
                        }
                        else{
                            console.log("Date de proclammation pas encore arrivée")
                            ValueReturned = false;
                        }
                    }
                }
            })
        }
        else{
            ValueReturned = true;
        }
        return ValueReturned;
    };

    return (
    <tr className="RowTab">
        <td className="NameCours">{datas.coursName}</td>
        <td className="MAxCourses">{datas.CourMax}</td>
        <td className={(searchCoteStudent("1P") != "-" && (searchCoteStudent("1P") < datas.CourMax/2) && SearchingDatePeriod("1 er Periode"))? "failed":""}>{SearchingDatePeriod("1 er Periode")? searchCoteStudent("1P"):"-"}</td>
        <td className={(searchCoteStudent("1P") != "-" && (searchCoteStudent("2P") < datas.CourMax/2) && SearchingDatePeriod("2 em Periode"))? "failed":""}>{SearchingDatePeriod("2 em Periode")? searchCoteStudent("2P"):"-"}</td>
        <td className="MAxCourses">{datas.CourMax*2}</td>
        <td className={searchCoteStudent("Examen1") != "-" && (searchCoteStudent("Examen1") < parseInt(datas.CourMax)) ? "failed":""}>{searchCoteStudent("Examen1")}</td>
        <td className="MAxCourses">{datas.CourMax*4}</td>
        <td className={searchCoteStudent("TRim1") != "-" && (searchCoteStudent("TRim1") < datas.CourMax*2) ?"failed":""}>{searchCoteStudent("Trim1")}</td>
        <td className={searchCoteStudent("3P") != "-" && (searchCoteStudent("3P") < datas.CourMax/2) ?"failed":""}>{searchCoteStudent("3P")}</td>
        <td className={searchCoteStudent("4P") != "-" && (searchCoteStudent("4P") < datas.CourMax/2) ?"failed":""}>{searchCoteStudent("4P")}</td>
        <td className="MAxCourses">{datas.CourMax*2}</td>
        <td className={searchCoteStudent("Examen2") != "-" && (searchCoteStudent("Examen2") < parseInt(datas.CourMax)) ?"failed":""}>{searchCoteStudent("Examen2")}</td>
        <td className="MAxCourses">{datas.CourMax*4}</td>
        <td className={searchCoteStudent("Trim2") != "-" && (searchCoteStudent("Trim2") < datas.CourMax*2) ?"failed":""}>{searchCoteStudent("Trim2")}</td>
        <td className={searchCoteStudent("5P") != "-" && (searchCoteStudent("5P") < datas.CourMax/2) ?"failed":""}>{searchCoteStudent("5P")}</td>
        <td className={searchCoteStudent("6P") != "-" && (searchCoteStudent("6P") < datas.CourMax/2) ?"failed":""}>{searchCoteStudent("6P")}</td>
        <td className="MAxCourses">{datas.CourMax*2}</td>
        <td className={searchCoteStudent("Examen3") != "-" && (searchCoteStudent("Examen3") < parseInt(datas.CourMax)) ?"failed":""}>{searchCoteStudent("Examen3")}</td>
        <td className="MAxCourses">{datas.CourMax*4}</td>                                                                        
        <td className={searchCoteStudent("Trim3") != "-" && (searchCoteStudent("Trim3") < datas.CourMax*2) ?"failed":""}>{searchCoteStudent("Trim3")}</td>
        <td className="MAxCourses">{datas.CourMax*8}</td>                                                                        
        <td className={searchCoteStudent("TotGen") != "-" && (searchCoteStudent("TotGen") < datas.CourMax*2) ?"failed":""}>{searchCoteStudent("TotGen")}</td>
    </tr>  
)
}

export {
    HeadTitleBultDatas,
    RowCotes
}