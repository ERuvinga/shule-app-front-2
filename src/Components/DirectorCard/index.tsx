import Image from "next/image";
import { useState } from "react";

interface dataUser {
    user : any,
}

const Direct_user = (data: dataUser)=>{
    const [user, setUser] = useState(data.user);
    return(
        <div className="card_director">
            <div className="avatar">
                <Image alt="img_card" src={user.picture} width={500} height={500}/>
            </div>
            <h2>{user.name}</h2>
            <span className="function">{user.function}</span>
            <span className="task">{user.ask}</span>
            <a href="#">Contacter</a>
        </div>
    )
};

export default Direct_user;