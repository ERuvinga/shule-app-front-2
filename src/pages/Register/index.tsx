import { registerDateState } from "@/src/States";
import { useState } from "react";
import InputField from "@/src/Components/InputField";
import Footer from "@/src/Components/Footer";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
}

const index = (datas: proprietyInput)=>{
    return(
        <>
            <section className="body_log_reg">
                <section className="Register_form">
                    <InputField labelText="Matricule" placeholderText="neema******" form_name="Register" type="text"/>
                    <InputField labelText="password" placeholderText="******" form_name="Register" type="text"/>
                    <InputField type="button" placeholderText="Register" form_name="Register"/>
                </section>               
            </section>
            <Footer/>
        </>

    )
};

export default index;