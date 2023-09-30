import { CreditCardIcon, CurrencyEuroIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

// Atoms
import { ContainerUserCard, StudentPayedDatas } from "@/src/States/ForAllComp";
import { useRecoilState, useSetRecoilState } from "recoil";

const StudentsActions = (props:any) =>{

    const setWrapperState = useSetRecoilState(ContainerUserCard);
    const [DataOfUserPayed, setDataOfUserPayed] = useRecoilState(StudentPayedDatas);

    const UpdatingDatas = ()=>{

        setWrapperState(true);
        setDataOfUserPayed({
            ...DataOfUserPayed,
            name: props.name,
            idUser:props.UserId,
            payed:0
        });

        props.resetDisplay(false);
    }
    return(
        <div className="ContainerActions">
            <ul>
                <li className="itemsActions" onClick={()=> UpdatingDatas()}>
                    <CreditCardIcon className="icone"/>
                    <span>N.Payement</span>
                </li>
                <li className="itemsActions">
                    <CurrencyEuroIcon className="icone"/>
                    <span>Conversion</span>
                </li>
            </ul>
        </div>
    )
}

export default StudentsActions;