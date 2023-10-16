import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// lib
import { monthNumberToString } from "@/src/Lib/Dates";

interface dataDirector{
    name: string,
    promotion?: String,
    contact:string,
    statusCompte:boolean,
    typeCompte:string,
    email:string,
    dateOfStudentaccount?:any|number
}

const CardUser = (datas:dataDirector)=>{
    // function return Type of card User, denpendancies a type of account to display
    const SelectTypeOfCardUser = (TypeCard:String) =>{
        switch(TypeCard){
            case "Director":
                return(
                    <>
                        <td className="wrapperHiden"><Image width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="directors Profil"/></td>
                        <td className="UserName">{datas.name}</td>
                        <td className="emailContente">{datas.email}</td>
                        <td className="Tel">{datas.contact}</td>
                        <td className="wrapperHiden "><span className={datas.statusCompte? "actifAccount":"actifAccountFalse"}>{(datas.statusCompte)?"Oui":"Non"}</span></td>
                        <td className="wrapperHiden "><EllipsisVerticalIcon className="Icone"/></td>  
                    </>                  
                )
            case "Teacher":
                return(
                    <>
                        <td className="wrapperHiden"><Image width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="directors Profil"/></td>
                        <td className="UserName">{datas.name}</td>
                        <td className="ClassPromotion">{datas.promotion}</td>
                        <td className="emailContente">{datas.email}</td>
                        <td className="Tel">{datas.contact}</td>
                        <td className="wrapperHiden "><span className={datas.statusCompte? "actifAccount":"actifAccountFalse"}>{(datas.statusCompte)?"Oui":"Non"}</span></td>
                        <td className="wrapperHiden "><EllipsisVerticalIcon className="Icone"/></td>  
                    </>                  
                )
            case "Student":{
                const InscriptionDate = new Date(datas.dateOfStudentaccount);
                return(
                    <>
                        <td className="wrapperHiden"><Image width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="directors Profil"/></td>
                        <td className="UserName">{datas.name}</td>
                        <td className="ClassPromotion">{datas.promotion}</td>
                        <td className="Tel">{`${InscriptionDate.getDate()} ${monthNumberToString(InscriptionDate.getMonth())} ${InscriptionDate.getFullYear()}`}</td>
                        <td className="wrapperHiden "><span className={datas.statusCompte? "actifAccount":"actifAccountFalse"}>{(datas.statusCompte)?"Oui":"Non"}</span></td>
                        <td className="wrapperHiden "><EllipsisVerticalIcon className="Icone"/></td>  
                    </>                  
                )
            }
        }
    }
    return(
        <tr>
            {SelectTypeOfCardUser(datas.typeCompte)}
        </tr>
    )
};

export default CardUser;