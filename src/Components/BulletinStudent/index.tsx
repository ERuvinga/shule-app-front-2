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

    const searchCoteStudent = (periodeCote:String)=>{
        for(let i=0; i< datas.tabPoint.length; i++){
            if((datas.tabPoint[i].NameCourse.split("_")[0] == datas.coursName) && (datas.tabPoint[i].NameCourse.split("_")[1] == datas.domaine) && (datas.tabPoint[i].periode == periodeCote)){  
                return datas.tabPoint[i].cote
            }    
        }
        return "-"
    };
    return (
    <tr className="RowTab">
        <td className="NameCours">{datas.coursName}</td>
        <td className="MAxCourses">{datas.CourMax}</td>
        <td className={searchCoteStudent("1P") != "-" && (searchCoteStudent("1P") < datas.CourMax/2) ? "failed":""}>{searchCoteStudent("1P")}</td>
        <td className={searchCoteStudent("1P") != "-" && (searchCoteStudent("2P") < datas.CourMax/2) ?"failed":""}>{searchCoteStudent("2P")}</td>
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