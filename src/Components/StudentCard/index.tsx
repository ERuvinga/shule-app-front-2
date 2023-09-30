import { useState } from "react";

import { monthNumberToString } from "@/src/Lib/Dates";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Atoms
import StudentsActions from "../ActionOfStudent";

interface StudentDatas{
    name:String,
    promotion:String,
    DateUser:number,
    statusCompte:boolean,
    balance:any,
    idUser?:String
}
const StudentsCardUser = (datas:StudentDatas) =>{
    
    const [StateAction, setStateAction]:any = useState(false)
    const InscriptionDate = new Date(datas.DateUser);

    return(
        <tr className="rowCardStudentUSer">
            <td><Image width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="directors Profil"/></td>
            <td className="UserName">{datas.name}</td>
            <td className="ClassPromotion">{datas.promotion}</td>
            <td className="Balance$">{datas.balance}</td>
            <td className="Tel">{`${InscriptionDate.getDate()} ${monthNumberToString(InscriptionDate.getMonth())} ${InscriptionDate.getFullYear()}`}</td>
            <td><span className={datas.statusCompte? "actifAccount":"actifAccountFalse"}>{(datas.statusCompte)?"Oui":"Non"}</span></td>
            <td id="ActionBloc">
                {StateAction && <StudentsActions UserId={datas.idUser} name={datas.name} resetDisplay={setStateAction} />}
                <EllipsisVerticalIcon 
                    className="Icone" 
                    onClick={()=>setStateAction(!StateAction)}
                />
            </td>  
        </tr>
    )
}

export default StudentsCardUser;