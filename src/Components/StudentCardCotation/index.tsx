import { useRecoilState, useRecoilValue } from "recoil";
import { CotesOfUsers, CourseSelected, PeriodeSelected } from "@/src/States/Teacher";
import { AuthUser } from "@/src/States/UserAoth";
import { useState } from "react";


interface StudentDatas{
    name:String,
    promotion:number,
    CLASS:String
    idTab:number,
    statusCompte:boolean,
    balance:any,
    idUser:String
}

const HeadTitleStudentCotation = () =>{
    return(
        <tr>
            <th className="first">ID</th>
            <th>Nom</th>
            <th>Classe</th>
            <th className="last">Points</th>
        </tr>  
    )
};


interface modelCote {
    cote:string,
    idStudent:string,
    idTeacher:String,
    CLASS:string,
    PROMOTION:number,
    NameCourse:string,
    periode:String,
    
}

const StudentsCardCotation = (datas:StudentDatas) =>{
    const [CoteSaved, setCoteSaved]:any = useRecoilState(CotesOfUsers);
    const  TeacherUser:any = useRecoilValue(AuthUser);
    const  Course:any = useRecoilValue(CourseSelected);
    const  Periode:any = useRecoilValue(PeriodeSelected);
    const  [tableLocation, setTabeLocation] = useState(null)

    
    const UpdatingDatas = (event:any) =>{

        const data ={
            cote:event.target.value,
            idStudent:datas.idUser,
            idTeacher:TeacherUser._id,
            CLASS:datas.CLASS,
            PROMOTION:datas.promotion,
            NameCourse:Course.name,
            periode:Periode,
        }
        if(!CoteSaved.length){
            setCoteSaved([data]);
        }

        else{
            switch(datas.idTab){
                case 0:
                    setCoteSaved([data, CoteSaved[0]]);     
                    break;
                case 1:
                    setCoteSaved([CoteSaved[0], data ]);     
                    break;                    
            }
        }

        //console.log(CoteSaved);
    }

    return(
        <tr className="bt">
            <td className="ClassPromotion">{datas.idTab}</td>
            <td className="UserName">{datas.name}</td>
            <td className="ClassPromotion">{`${datas.promotion}-${datas.CLASS}`}</td>
            <td className="EditableBox">
                <input type="number" className="InputText" onChange={(e)=> UpdatingDatas(e)}/>
            </td>  
        </tr>
    )
};

export{
    StudentsCardCotation,
    HeadTitleStudentCotation
} 