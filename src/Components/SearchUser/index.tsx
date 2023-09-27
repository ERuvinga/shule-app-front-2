//atom and Recoil datas
import { useSetRecoilState } from "recoil";
import { nameUserSeaching } from "@/src/States/UserAoth";

//icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = ()=>{
const  setNameFilterSearching = useSetRecoilState(nameUserSeaching);
    return(
        <div className="InputContent">
            <MagnifyingGlassIcon className="Icone"/>
            <input 
                placeholder="Search" 
                type="text"
                onChange={
                    (event:any)=>{
                        setNameFilterSearching(event.target.value);
                    }
                }/>
    </div>
    )
}

export default SearchInput;