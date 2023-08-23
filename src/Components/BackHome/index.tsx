// back home component

import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const BackHome = ()=>{
    return(
        <Link className='backHome' href='/'><ArrowUturnLeftIcon className="icone"/></Link>
    )
}

export default BackHome;