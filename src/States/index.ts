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
        confirmPassWord:""
    }
});

export const Link_toApi = atom({
    key: "Link_toApi",
    default:{
        remoteLink: "https://shule-app.onrender.com",
        localLink: "https://127.0.0.1:4002"
    }
});
 // export states
