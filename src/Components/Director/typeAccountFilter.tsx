// icones
import {ShieldCheckIcon, AcademicCapIcon, UsersIcon} from "@heroicons/react/24/outline"
import { useRecoilState } from "recoil"

// atom
import { TypeAccountState } from "@/src/States/UserAoth"

interface typeaccount{
    title:String
    item:number
}
const TypeAccount = (datas:typeaccount)=>{
    const [TypeAccountSelected, setTypeAccountSelected]:any = useRecoilState(TypeAccountState);

    const searchIcone = (item:number) =>{
        switch(item){
            case 0:
                return <ShieldCheckIcon className="icone"/>
            case 1:
                return <UsersIcon className="icone"/>
            case 2:
                return <AcademicCapIcon className="icone"/>
        }
    }
    return(
        <div 
            className={(datas.item === TypeAccountSelected)? "CardTypeCompteSelected" :"CardTypeCompte"}
            onClick={
                ()=> setTypeAccountSelected(datas.item)//Updating Type of Account
            }>
            <span className="title">{datas.title}</span>
            <>{searchIcone(datas.item)}</>
        </div>
    )
};

export default TypeAccount;