import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CotesOfUsers, CourseSelected, PeriodeSelected } from "@/src/States/Teacher";
import { AuthUser } from "@/src/States/UserAoth";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { IdentityUserSelected } from "@/src/States/Student";

interface StudentDatas{
    name:String,
    promotion:number,
    CLASS:String
    idTab:number,
    statusCompte:boolean,
    balance:any,
    idUser:String
    setTooglePageState:any,
}

const HeadTitleStudentCotation = () =>{
    return(
        <tr>
            <th className="first">ID</th>
            <th>Nom</th>
            <th>Classe</th>
            <th>Points</th>
            <th className="last">Action</th>
        </tr>  
    )
};

const StudentsCardCotation = (datas:StudentDatas) =>{
    const [CoteSaved, setCoteSaved]:any = useRecoilState(CotesOfUsers);
    const  TeacherUser:any = useRecoilValue(AuthUser);
    const  Course:any = useRecoilValue(CourseSelected);
    const  Periode:any = useRecoilValue(PeriodeSelected);
    const  [tableLocation, setTabeLocation] = useState(null);
    const studentSelected = useSetRecoilState(IdentityUserSelected);

    const updateDataOfStudentSelected = () =>{
        studentSelected ({
            idStudent:datas.idUser,
            CLASS:datas.CLASS,
            PROMO:datas.promotion,
            nameStudent: datas.name
        });
        datas.setTooglePageState(false);
    };

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

            setCoteSaved([data]);

    }

    return(
        <tr className="bt">
            <td className="ClassPromotion">{datas.idTab}</td>
            <td className="UserName">{datas.name}</td>
            <td className="ClassPromotion">{`${datas.promotion}-${datas.CLASS}`}</td>
            <td className="EditableBox">
                <input type="number" className="InputText" onChange={(e)=> UpdatingDatas(e)}/>
            </td>  
            <td className=""><EyeIcon className="EyesIcone" onClick={()=>updateDataOfStudentSelected()}/></td>
        </tr>
    )
};

export{
    StudentsCardCotation,
    HeadTitleStudentCotation
} 