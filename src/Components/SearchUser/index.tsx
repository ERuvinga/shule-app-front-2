//atom and Recoil datas
import { useSetRecoilState } from "recoil";
import { nameUserSeaching } from "@/src/States/Director";
import { NameFilterSearch } from "@/src/States/Teacher";
//icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = ()=>{
    const  setNameFilterSearching = useSetRecoilState(nameUserSeaching);
    const  setNameFilterTeacherCote = useSetRecoilState(NameFilterSearch);
    return(
        <div className="InputContent">
            <MagnifyingGlassIcon className="Icone"/>
            <input 
                placeholder="Search" 
                type="text"
                onChange={
                    (event:any)=>{
                        setNameFilterSearching(event.target.value);
                        setNameFilterTeacherCote(event.target.value);
                    }
                }/>
    </div>
    )
}

export default SearchInput;