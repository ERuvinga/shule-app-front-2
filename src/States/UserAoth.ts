// state Contents Datas of Users
const  {atom, selector} = require("recoil");

const AuthUser = atom({
    key:"AuhUser",
    default:null
});

const SelectedMenuItems = atom({
    key:"SelectedMenuItems",
    default: 0
});

const AllUserStates = atom({
    key:"AllUserStates",
    default:[]
})

// filters data
const TypeAccountState = atom({
    key:"TypeAccountState",
    default:0
});

const nameUserSeaching = atom({
    key:"nameUserSeaching",
    default:""
})

const FilterTypeAccountsUser = selector({
    key:"FilterCategoriesUser",
    get:({get}:any) =>{
        const FilterTypeAccount = get(TypeAccountState);
        const AllUsers = get(AllUserStates);
        const NameFilter = get(nameUserSeaching);

        let ListUsers:any;

        switch(FilterTypeAccount) {
            case 0:{
                ListUsers = AllUsers.filter((item:any) => item[0].typeAccount === "Director");
                break;
            }
            case 1:{
                ListUsers = AllUsers.filter((item:any) =>item[0].typeAccount === "Teacher");
                break;
            }
            case 2:{
                ListUsers = AllUsers.filter((item:any) =>item[0].typeAccount === "Student");
                break;
            }
        }

        if(NameFilter != ""){
            console.log("filter Name n'est pas vide")
        }
    return ListUsers
    }
})

export {
    AuthUser,
    SelectedMenuItems,
    AllUserStates,
    FilterTypeAccountsUser,
    TypeAccountState,
    nameUserSeaching
}