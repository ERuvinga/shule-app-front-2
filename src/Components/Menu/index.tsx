import { useRecoilValue, useRecoilState } from "recoil";

//atoms
import { AuthUser} from "@/src/States/UserAoth" 
import {SelectedMenuItems } from "@/src/States/Director";
import Image from "next/image";

//icones
import { Squares2X2Icon, CurrencyDollarIcon, UserGroupIcon,ClipboardIcon,ChatBubbleBottomCenterTextIcon,ArrowRightOnRectangleIcon, Cog8ToothIcon } from "@heroicons/react/24/outline"
import Link from "next/link";


interface DatasMenu {
    DatasOfMenu:any
}

const MenuComponent = (datas : DatasMenu)=>{
    const DatasUser: any = useRecoilValue(AuthUser);
    const [selectedItemInMenu, setSelectedItemInMenu] =  useRecoilState(SelectedMenuItems);
    const typeAccount = (DatasUser.typeAccount == "Teacher" || DatasUser.typeAccount == "Student")

    // fuction searching icone
    const searchIcone = (IconName:String)=>{
            switch(IconName){
                case "Squares2X2Icon":
                    return <Squares2X2Icon className="icone"/>
                    
                case "CurrencyDollarIcon":
                    return <CurrencyDollarIcon className="icone"/>

                case "UserGroupIcon":
                    return <UserGroupIcon className="icone"/>

                case "ClipboardIcon":
                    return <ClipboardIcon className="icone"/>

                case "ChatBubbleBottomCenterTextIcon":
                    return <ChatBubbleBottomCenterTextIcon className="icone"/>
            }
    };    
    return(
        <div className="containerMenu">
            { typeAccount && 
                <div className="ClassPromoUser">
                    <span className="funct">{DatasUser.typeAccount === "Teacher" ? "Enseignant(e)": "Ecolier(ère)"}</span>
                    <span className="promo"><span>{`Classe:`}</span>{DatasUser.typeAccount === "Teacher" ? ` ${DatasUser.PROMOTION}-${DatasUser.CLASS}`:` ${DatasUser.registerDatas.PROMOTION}-${DatasUser.registerDatas.CLASS}`}</span>
                    </div>
            }
            <div className="IdentityUser">
                <Image className="imageProfil" width={200} height={200} src={"/imgs/AuthImgs/avatar.png"} alt="profil img"/>
                <span className="nameUser">{DatasUser.allName}</span>
                <span className="emailUser">{(DatasUser.email) ? DatasUser.email : DatasUser.dataOfTutaire.email}</span>
            </div>
            <div className="menu">
                <span className="titleMenu">MENU</span>
                <div className="ListItems">
                    {
                      datas.DatasOfMenu.map((value:any,i:number)=>
                            <Link href={value.Link} className={(selectedItemInMenu === i)?"SelecteditemsMenu":"itemsMenu"} 
                                key={i} 
                                onClick={()=>{
                                    setSelectedItemInMenu(i);// updating selected items in menu
                            }}>
                                <>{searchIcone(value.icone)}</>
                                <span className="">{value.label}</span>
                            </Link>
                      )
                    }
                </div>
            </div>
            <div className="parameters">
                <span className="ContenairePara">
                    <Cog8ToothIcon className="iconePar"/>
                    <span>Parametres</span>
                </span>

                <span className="ContenairePara">
                    <ArrowRightOnRectangleIcon className="iconePar"/>
                    <span>Deconnexion</span>
                </span>
            </div>
        </div>
    )
};

export default MenuComponent;