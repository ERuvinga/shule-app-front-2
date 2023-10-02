// content function check Autentifications user

// fuction cheking if User Aoutoriz to display this page
const withAuth = (api_link:any, Localtoken:any, setStatePage:any, setUaseAuth:any, UserAuth:any, Router: any) =>{
        const ActualiUrl = window.location.href;

        fetch(`${api_link.localLink}/AuthUser`, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${Localtoken}`
            }
        })
            .then((datas) => {
                datas.json()
                    .then((user: any) => {
                        if (!user.userFund) { // if not user find, redirect to login page
                            Router.push("/Login");
                             }
                        else {
                            if(!UserAuth){ // if no user saved
                                console.log(ActualiUrl);
                                console.log(user.userFund.typeAccount);
                                switch(user.userFund.typeAccount){// checking Type Account
                                    case "Director":
                                        switch(user.userFund.task.funct){
                                            case "DIRECTEUR":
                                                if(ActualiUrl.includes("/Director")){
                                                    console.log("Autorisation Accordé Director");
                                                    setStatePage(true);
                                                    setUaseAuth(user.userFund);
                                                }
                                                else{
                                                    console.log(`Acces refusé : ${ActualiUrl}`);
                                                    Router.push("/Login");
                                                } 
                                            break;
                                            
                                            case "COMPTABLE":
                                                if(ActualiUrl.includes("/Comptable")){
                                                    console.log("Autorisation Accordé Comptable");
                                                    setStatePage(true);
                                                    setUaseAuth(user.userFund);
                                                }
                                                else{
                                                    console.log(`Acces refusé : ${ActualiUrl}`);
                                                    Router.push("/Login");
                                                } 
                                            break;                                                
                                        }
                                    break;

                                    case "Student":
                                        if(ActualiUrl.includes("/Student")){
                                            console.log("Autorisation Accordé Student");
                                            setStatePage(true);
                                            setUaseAuth(user.userFund);
                                        }
                                        else{
                                            console.log(`Acces refusé : ${ActualiUrl}`);
                                            Router.push("/Login");
                                        }
                                    break;

                                    case "Teacher":
                                        if(ActualiUrl.includes("/Teacher")){
                                            console.log("Autorisation Accordé Teacher");
                                            setStatePage(true);
                                            setUaseAuth(user.userFund);
                                        }
                                        else{
                                            console.log(`Acces refusé : ${ActualiUrl}`);
                                            Router.push("/Login");
                                        }
                                    break;
                                }
                            }
                        }

                    })
            })
            .catch(error => {
                console.error(error);
                Router.push("/Login");
            })
}

export {
        withAuth
    }
    