
// content function check Autentifications user
    // fuction cheking if User Aoutoriz to display this page
    const withAuth = (api_link:any, Localtoken:any, setStatePage:any, setUaseAuth:any, UserAuth:any, Router: any) =>{

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
                                setUaseAuth(user.userFund);
                            }
                            setStatePage(true);
                        }

                    })

            })
            .catch(error => {
                console.error(error);
                Router.push("/Login");
            })
}

    export{
        withAuth
    }
    