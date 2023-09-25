
// content function check Autentifications user
    // fuction cheking if User Aoutoriz to display this page
    const withAuth = (api_link:any, Localtoken:String|null, setStatePage:any) =>{
        let datasReturn ={
            status:false,
            content:""
        };

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
                        console.log(user);
                        if (!user.userId) { // if not user find, redirect to login page
                                datasReturn = {
                                    status:false,
                                    content:user.userId
                                }
                             }
                        else {
                            setStatePage(true);
                        }

                    })

            })
            .catch(error => {
                console.error(error);
                datasReturn = {
                    status:false,
                    content:error
                 }
            })
        return datasReturn;
    }

    export{
        withAuth
    }