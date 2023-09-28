// state Contents Datas of Users
const  {atom} = require("recoil");

const AuthUser = atom({
    key:"AuhUser",
    default:null
});

export {
    AuthUser,
}