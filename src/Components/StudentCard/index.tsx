import { monthNumberToString } from "@/src/Lib/Dates";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface StudentDatas{
    name:String,
    promotion:String,
    DateUser:number,
    statusCompte:boolean,
    balance:any
}
const StudentsCardUser = (datas:StudentDatas) =>{

    const InscriptionDate = new Date(datas.DateUser);
    return(
        <tr>
            <td><Image width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="directors Profil"/></td>
            <td className="UserName">{datas.name}</td>
            <td className="ClassPromotion">{datas.promotion}</td>
            <td className="Balance$">{datas.balance}</td>
            <td className="Tel">{`${InscriptionDate.getDate()} ${monthNumberToString(InscriptionDate.getMonth())} ${InscriptionDate.getFullYear()}`}</td>
            <td><span className={datas.statusCompte? "actifAccount":"actifAccountFalse"}>{(datas.statusCompte)?"Oui":"Non"}</span></td>
            <td><EllipsisVerticalIcon className="Icone"/></td>  
        </tr>
    )
}

export default StudentsCardUser;