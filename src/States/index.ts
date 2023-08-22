// file content principals states of App

const {atom} = require("recoil");


const nameState = atom({
    key:"nameState",
    default: "Elie Ruvinga"
});

export{nameState}; // export state

