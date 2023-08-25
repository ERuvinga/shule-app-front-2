// file content principals states of App

const {atom} = require("recoil");

const loginDataState = atom({
    key:"loginDataState",
    default:{
        email:"",
        passWord: "***"
    }
});

const registerDataState = atom({
    key:"registerDataState",
    default:{
        matricule:"",
        passWord:"***"
    }
});

const Link_toApi = atom({
    key: "Link_toApi",
    default:""
});

export{
    loginDataState,
    registerDataState,
    Link_toApi
}; // export state

