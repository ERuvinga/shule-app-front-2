import { loginDataState } from "@/src/States"
import {useSetRecoilState, useRecoilValue} from "recoil";
import {useState} from 'react';
import Loading from "@/src/Components/Loading";
import InputField from "@/src/Components/InputField";
import Footer from "@/src/Components/Footer";

const index = ()=>{
    return(
        <>
            <div>
                <section className="login_form">
                    <InputField labelText="email" placeholderText="neema@gmail.com" form_name="Login" type="text"/>
                    <InputField labelText="password" placeholderText="******" form_name="Login" type="text"/>
                    <InputField type="button" placeholderText="Login" form_name="Login"/>
                </section>                
            </div>
            <Footer/>
        </>

    )
};

export default index;