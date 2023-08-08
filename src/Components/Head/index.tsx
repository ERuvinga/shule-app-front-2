// cocntent head of any pages
import Head from "next/head";

function index(){
    return(
        <>
            <Head>
                <title>Shule_App</title>
                <meta name="description" content="developpement d'une application pour la gestion d'une ecole primaire" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
        </>
    )
}

export default index;