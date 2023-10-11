import {  useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { OneCotesOfUsers, CourseSelected, PeriodeSelected, ErrorOverflowCotes } from "@/src/States/Teacher";
import { AuthUser } from "@/src/States/UserAoth";
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
    const  Course:any = useRecoilValue(CourseSelected);
    const  Periode:any = useRecoilValue(PeriodeSelected);

    return(
        <tr>
            <th className="first">ID</th>
            <th>Nom</th>
            <th>Classe</th>
            <th className="PonderationValue">{(Periode.includes("Examen"))? `/${Course.Pond*2}`:`/${Course.Pond}`}</th>
            <th className="last">Action</th>
        </tr>  
    )
};

const StudentsCardCotation = (datas:StudentDatas) =>{
    const setCoteSaved:any = useSetRecoilState(OneCotesOfUsers);
    const  TeacherUser:any = useRecoilValue(AuthUser);
    const  Course:any = useRecoilValue(CourseSelected);
    const  Periode:any = useRecoilValue(PeriodeSelected);
    const studentSelected = useSetRecoilState(IdentityUserSelected);
    const [ErrorAllCotes, setErrorAllCotes]:any= useRecoilState(ErrorOverflowCotes);
    const CopyOfCotesErrorTab = [...ErrorAllCotes];

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
        };

        if(Periode.includes("Examen")){
            if(event.target.value > Course.Pond*2){
                CopyOfCotesErrorTab[datas.idTab]={
                    stateInput:true
                };
                setErrorAllCotes([...CopyOfCotesErrorTab]);
            }

            else{
                CopyOfCotesErrorTab[datas.idTab]={
                    stateInput:false
                };
                setErrorAllCotes([...CopyOfCotesErrorTab]);
                setCoteSaved(data);
            }
        }

        else{
            if(event.target.value > Course.Pond){
                CopyOfCotesErrorTab[datas.idTab]={
                    stateInput:true
                };
                setErrorAllCotes([...CopyOfCotesErrorTab]);
            }

            else{
                CopyOfCotesErrorTab[datas.idTab]={
                    stateInput:false
                };
                setErrorAllCotes([...CopyOfCotesErrorTab]);
                setCoteSaved(data);
            }
        }

    }
    return(
        <tr className="bt">
            <td className="ClassPromotion">{datas.idTab}</td>
            <td className="UserName">{datas.name}</td>
            <td className="ClassPromotion">{`${datas.promotion}-${datas.CLASS}`}</td>
            <td className="EditableBox">
                <input type="number" className={(ErrorAllCotes[datas.idTab])?(ErrorAllCotes[datas.idTab].stateInput ? "InputTextError":"InputText"):"InputText"} onChange={(e)=> UpdatingDatas(e)}/>
            </td>  
            <td><EyeIcon className="EyesIcone" onClick={()=>updateDataOfStudentSelected()}/></td>
        </tr>
    )
};

export{
    StudentsCardCotation,
    HeadTitleStudentCotation
} 