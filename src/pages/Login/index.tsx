//Natives Lib
import {useRecoilState} from "recoil";
import Link from "next/link";
import {useEffect, useState} from 'react';

//Components
import Loading from "@/src/Components/Loading";
import InputField from "@/src/Components/InputFieldLogReg";
import Footer from "@/src/Components/Footer";
import App_Head from '@/src/Components/Head'
import BackHome from "@/src/Components/BackHome";

//state
import { loginDataState} from "@/src/States";

const Index = ()=>{
    const logRegDatasOfUser = useRecoilState(loginDataState);
    return(
        <>
            <App_Head/>
            <section className="body_log_reg">
                <div className="bloc">
                    <section className="login_form">
                        <BackHome/>
                        <h1 className="title">Login</h1>
                        <InputField labelText="email/Tél" placeholderText="neema@gmail.com/+243" form_name="Login" type="text" recoilAtom={logRegDatasOfUser} identity={0} />
                        <InputField labelText="password" placeholderText="******" form_name="Login" type="password" recoilAtom={logRegDatasOfUser} identity={1}/>
                        <InputField type="button" placeholderText="Login" form_name="Login" recoilAtom={logRegDatasOfUser}/>
                    </section>  
                    <p className="Register_bloc">
                        <span >vous n’avez pas de compte ? <Link href="/Register">Enregistrez-vous</Link></span>
                        <span ><Link href="#">Mot de pass Oulier ?</Link></span>
                    </p>
                </div>
                <div className="illustration_log_Reg">
                    <img src='/imgs/login.png' alt="login_illustration"/>
                    <div></div>
                </div>              
            </section>
            <Footer/>
        </>

    )
};

export default Index;