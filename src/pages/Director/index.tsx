import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

//atoms 
import { Link_toApi } from "@/src/States/LoginRegisterStates";

// lib
import { withAuth } from "@/src/Lib/Auth";


const DirectorPageIndex = ()=>{
    const Router = useRouter();
    const [statePage, setStatePage] = useState(false);
    const LinkToApi:any = useRecoilValue(Link_toApi);

    useEffect(()=>{
        const StateApp = withAuth(LinkToApi, localStorage.getItem("TokenUser"), setStatePage);
        console.log(StateApp);
    },[]);
    return(
        <>Salut</>
    )
};

export default DirectorPageIndex;