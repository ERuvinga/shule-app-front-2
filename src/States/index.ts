// file content principals states of App

const {atom} = require("recoil");

const loginDataState = atom({
    key:"loginDataState",
    default:{
        email:"",
        passWord: ""
    }
});

const registerDateState = atom({
    key:"registerDateState",
    default:{
        matricule:"",
        passWord:""
    }
})

export{
    loginDataState,
    registerDateState
}; // export state

