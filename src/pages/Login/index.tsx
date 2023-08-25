//Natives Lib
import {useSetRecoilState, useRecoilValue} from "recoil";

//Components
import Loading from "@/src/Components/Loading";
import InputField from "@/src/Components/InputField";
import Footer from "@/src/Components/Footer";
import App_Head from '@/src/Components/Head'
import Link from "next/link";
import BackHome from "@/src/Components/BackHome";

//state
import { platformData, loginDataState } from "@/src/States";

const Index = ()=>{
    let ex_platform_datas: object|any;
    ex_platform_datas = useRecoilValue(platformData);
    return(
        <>
            <App_Head/>
            <section className="body_log_reg">
                <div className="bloc">
                    <section className="login_form ">
                        <BackHome/>
                        <h1 className="title">Login</h1>
                        <InputField labelText="email" placeholderText="neema@gmail.com" form_name="Login" type="text"/>
                        <InputField labelText="password" placeholderText="******" form_name="Login" type="password"/>
                        <InputField type="button" placeholderText="Login" form_name="Login"/>
                    </section>  
                    <p className="Register_bloc">
                        <span >vous n’avez pas de compte ? <Link href="/Register">Enregistrez-vous</Link></span>
                        <span ><Link href="#">Mot de pass Oulier ? {ex_platform_datas}</Link></span>
                    </p>
                </div>
                <div className="illustration_log_Reg">
                    <img src='/imgs/login.png' alt="login_illustration"/>
                    <div ></div>
                </div>              
            </section>
            <Footer/>
        </>

    )
};

export default Index;