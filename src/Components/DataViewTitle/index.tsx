
interface dataTitle{
    typeCompte:string,
}

const HeadTitleDataView = (datas:dataTitle) =>{

    const CheckTypeDatas = (account:String)=>{
        switch(account){
            case "Dir":
                return (
                    <tr>
                        <th className="first">Pic</th>
                        <th>Nom</th>
                        <th>@-email</th>
                        <th>Contact</th>
                        <th>Actif</th>
                        <th className="last">Action</th>
                    </tr>
                );
            case "Teach":
                return (
                    <tr>
                        <th className="first">Pic</th>
                        <th>Nom</th>
                        <th>Promo-Classe</th>
                        <th>@-email</th>
                        <th>Contact</th>
                        <th>Actif</th>
                        <th className="last">Action</th>
                    </tr>
                );
            case "Stud":
                return (
                    <tr>
                        <th className="first">Pic</th>
                        <th>Nom</th>
                        <th>Classe</th>
                        <th>Inscr-Date</th>
                        <th>Actif</th>
                        <th className="last">Action</th>
                    </tr>
                )
        }
    };

    return(
        <>
            {
                CheckTypeDatas(datas.typeCompte)
            }
        </>
    )
}

export default HeadTitleDataView;