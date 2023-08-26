// file content principals states of App

const {atom} = require("recoil");

export const loginDataState = atom({
    key:"loginDataState",
    default:{
        email:"",
        passWord: "***"
    }
});

export const registerDataState = atom({
    key:"registerDataState",
    default:{
        matricule:"",
        passWord:"***",
        confirmPassword:""
    }
});

export const Link_toApi = atom({
    key: "Link_toApi",
    default:""
});
 // export states
