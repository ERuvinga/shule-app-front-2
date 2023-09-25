import { data } from "autoprefixer";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavDatas{
    title:string,
    message:string
}
const NavBarAuthPages = (datas:NavDatas)=>{
    return(
        <div className="NavBarInAuthPages">
            <div className="NavText">
                <span className="titleNav">{datas.title}</span>
                <span className="DescriptionNav">{datas.message}</span>
            </div>
            <div className="NavPicture">
                <Image className="NavPicture" width={100} height={100} src={"/imgs/AuthImgs/avatar.png"} alt="imguser"/>
                <ChevronDownIcon className="icone"/>
            </div>
        </div>
    )
}

export default NavBarAuthPages;