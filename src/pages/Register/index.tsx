//Natives tools
import { useEffect} from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";

//components
import Notification from "@/src/Components/NotificationLogReg";
import InputField from "@/src/Components/InputFieldLogReg"
import App_Head from'@/src/Components/Head'
import Footer from "@/src/Components/Footer";
import BackHome from "@/src/Components/BackHome";

//state
import { registerDataState, messageOfServer } from "@/src/States/LoginRegisterStates";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
}

const Index = (datas: proprietyInput)=>{
    const logRegDatasOfUser = useRecoilState(registerDataState);
    const [StateNotification,setStateNotification]:any = useRecoilState(messageOfServer);

    useEffect(()=>{
        setStateNotification({
            ...StateNotification,
            stateMsg:false,
        });
    },[])
    return(
        <>
            <App_Head/>
            <section className="body_log_reg">
                {StateNotification.stateMsg && <Notification/>}
                <div className="illustration_log_Reg reg_illust">
                    <img src='/imgs/register.png' alt="login_illustration"/>
                    <div className="div_reg"></div>
                </div>
                <div className="bloc">
                    <section className="register_form">
                        <BackHome/>
                        <h1 className="title">Register</h1>
                        <InputField labelText="matricule" placeholderText="neema******" form_name="Register" type="text" recoilAtom={logRegDatasOfUser} identity={0}/>
                        <InputField labelText="password" placeholderText="******" form_name="Register" type="password" recoilAtom={logRegDatasOfUser} identity={1}/>
                        <InputField labelText="confirm-password" placeholderText="******" form_name="Register" type="password" recoilAtom={logRegDatasOfUser} identity={2}/>
                        <InputField type="button" placeholderText="Register" form_name="Register" recoilAtom={logRegDatasOfUser}/>
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

export default Index;