//Natives tools
import { registerDateState } from "@/src/States";
import { useState } from "react";
import Link from "next/link";
//components
import InputField from "@/src/Components/InputField";
import App_Head from'@/src/Components/Head'
import Footer from "@/src/Components/Footer";
import BackHome from "@/src/Components/BackHome";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
}

const index = (datas: proprietyInput)=>{
    return(
        <>
            <App_Head/>
            <section className="body_log_reg">
                <div className="illustration_log_Reg">
                    <img src='/imgs/register.png' alt="login_illustration"/>
                    <div className="div_reg"></div>
                </div>
                <div className="bloc">
                    <section className="register_form">
                        <BackHome/>
                        <h1 className="title">Register</h1>
                        <InputField labelText="Matricule" placeholderText="neema******" form_name="Register" type="text"/>
                        <InputField labelText="password" placeholderText="******" form_name="Register" type="text"/>
                        <InputField type="button" placeholderText="Register" form_name="Register"/>
                    </section>  
                    <p className="Register_bloc">
                        <span >vous avez déjà un compte ? <Link href="/Login">Connectez-vous</Link></span>
                    </p>
                </div>
            
            </section>
            <Footer/>
        </>
    )
};

export default index;