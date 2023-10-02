// state Contents Datas of Users
const  {atom} = require("recoil");

const AuthUser = atom({
    key:"AuhUser",
    default:null
});

const NavBarSelectedItem = atom({
    key:"NavBarSelectedItem",
    default:0
});

const DataTabOfNavBAr = atom({
    key:"DataTabOfNavBAr",
    default:[
        {
            label:"accueil",
            link:"/#home"
        },
        {
            label:"valve",
            link:"/valve"
        },
        {
            label:"a propos",
            link:"/#about"
        }
    ]
})

export {
    AuthUser,
    NavBarSelectedItem,
    DataTabOfNavBAr
}