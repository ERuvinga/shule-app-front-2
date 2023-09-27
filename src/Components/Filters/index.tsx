import { QueueListIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

//Recoil
import { SelectedPromotion,SelectedClass } from "@/src/States/UserAoth";
import { useRecoilState, useSetRecoilState } from "recoil";

const PromotionFilter =()=>{
    const listPromotion = ["Toutes","1 ère", "2 em", "3 em", "4 em", "5 em", "6 em"];
    const [promSelected,setPromSelected] = useRecoilState(SelectedPromotion);

    return(
        <div className="PromFilter">
            <span className="TitleFilter"><QueueListIcon className="Icone"/><span>Promotion</span></span>
            <div className="itemsPromFilter">
                {
                    listPromotion.map((value:any, i:any)=> 
                        <span 
                            className={promSelected == i ? "temPromSelected":"itemProm"} 
                            key={i}
                            onClick={()=>setPromSelected(i)}
                        >
                           <span className={promSelected == i ? "boxChekSelected" : "boxChek"}></span>
                           <span>{value}</span>
                        </span>)
                }
            </div>
        </div>
    )
}

const ClassFilter =()=>{
    const setClassSelected = useSetRecoilState(SelectedClass);

    return(
        <div className="PromFilter">
                <span className="TitleFilter"><Square3Stack3DIcon className="Icone"/><span>Classe</span></span>
                <select className="classSelection" onChange={(event:any)=>setClassSelected(event.target.value)}>
                    <option value="Toutes" className="itemsClass">Toutes</option>
                    <option value="A" className="itemsClass">A</option>
                    <option value="B" className="itemsClass">B</option>
                    <option value="C" className="itemsClass">C</option>
                </select>
        </div>
    )
}

export {
    PromotionFilter,
    ClassFilter
} 