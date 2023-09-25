// state Contents Datas of Users
const  {atom} = require("recoil");

const AuthUser = atom({
    key:"AuhUser",
    default:null
});

const SelectedMenuItems = atom({
    key:"SelectedMenuItems",
    default: 0
})

export {
    AuthUser,
    SelectedMenuItems
}