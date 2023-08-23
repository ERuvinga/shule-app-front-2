/*Cotent input Component*/
import { type } from "os";

interface proprietyInput {
    placeholderText : String|any,
    form_name: String|any,
    type: String|any,
    labelText?: String|any,
}

const InputField = (datas:proprietyInput) =>{
    return(
    <>
        {
            (datas.type === "text")? 
            <div className="groupe_form">
                <label htmlFor={datas.labelText}>{datas.labelText}</label>
                <input className="log_reg_input" type={datas.type} placeholder={datas.placeholderText} id={datas.labelText}/>
            </div>:
            <button className="form_send_btn">{datas.placeholderText}</button>
        }    
    </>
    )
};

export default InputField;