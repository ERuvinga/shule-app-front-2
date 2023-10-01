// state Contents Datas of Users
const  {atom, selector} = require("recoil");

const SelectedMenuItems = atom({
    key:"SelectedMenuItems",
    default: 0
});

const DataOfMenuState = atom({
    key:"DataOfMenuState",
    default:[
        {
            label:"DashBoard",
            Link:"/Director",
            icone:"Squares2X2Icon"
        },
        {
            label:"Comptabilité",
            Link:"/Director/Comptability",
            icone:"CurrencyDollarIcon"
        },
        {
            label:"Classe",
            Link:"/Director/ClassRoom",
            icone:"UserGroupIcon"
        },
        {
            label:"Valve",
            Link:"/Director/Informations",
            icone:"ChatBubbleBottomCenterTextIcon"
        }
    ]
});

const DataOfMenuComptable = atom({
    key:"DataOfMenuComptable",
    default:[

        {
            label:"Comptabilité",
            Link:"/Comptable",
            icone:"CurrencyDollarIcon"
        },
        {
            label:"Valve",
            Link:"/Comptable/Informations",
            icone:"ChatBubbleBottomCenterTextIcon"
        }
    ]
});

const AllUserStates = atom({
    key:"AllUserStates",
    default:[]
});

const AllStudentState = atom({
    key:"AllStudents",
    default:[]
})

const SelectedPromotion = atom({
    key:"SelectedPromotion",
    default:0
})

const SelectedClass = atom({
    key:"SelectedClass",
    default:"Toutes"
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
        const PromoFilter = get(SelectedPromotion);
        const ClassFilter = get(SelectedClass);

        let CopyListUser: any = [];
        let ListUsers:any = [];

        if(AllUsers.length){
            switch(FilterTypeAccount) {
                case 0:{
                    ListUsers = AllUsers.filter((item:any) => item.typeAccount === "Director");
                    break;
                }
                case 1:{
                    ListUsers = AllUsers.filter((item:any) =>item.typeAccount === "Teacher");
                    break;
                }
                case 2:{
                    ListUsers = AllUsers.filter((item:any) =>item.typeAccount === "Student");
                    break;
                }
            }
        }

        if(FilterTypeAccount){
            (FilterTypeAccount == 1)? 
                ListUsers = ListUsers.filter((item:any)=> ((!PromoFilter)? true : item.PROMOTION == PromoFilter) && ((ClassFilter ==="Toutes")? true : item.CLASS == ClassFilter))
                :
                ListUsers = ListUsers.filter((item:any)=> ((!PromoFilter)? true : item.registerDatas.PROMOTION === PromoFilter) && ((ClassFilter ==="Toutes")? true : item.registerDatas.CLASS == ClassFilter));
        }

        // Searching user by input         
        if(NameFilter.length && ListUsers.length){
            ListUsers.map((value:any)=>{
                if(FilterTypeAccount != 2){ // check type compte if Type Compte View != Student
                    // filter Datas by name,email and TelUser
                    if(value.allName.toLowerCase().includes(NameFilter.toLowerCase()) || value.email.toLowerCase().includes(NameFilter.toLowerCase())|| value.tel.toLowerCase().includes(NameFilter.toLowerCase())){
                        CopyListUser.push(value);
                    }
                }

                else{ // else, filter by name
                    if(value.allName.toLowerCase().includes(NameFilter.toLowerCase())){
                        CopyListUser.push(value);
                    }
                }

            });
            //Quick in function
            return CopyListUser;
        }

    return ListUsers
    }
});

const DirectorStudentsFilter = selector({
    key:"DirectorStudentsFilter",
    get:({get}:any)=>{
        let DatasFilteredByFilter:any =[];
        let DatasFilteredBySearching:any =[];
        const NameFilter = get(nameUserSeaching);
        const AllStudent = get(AllStudentState);
        const PromoFilter = get(SelectedPromotion);
        const ClassFilter = get(SelectedClass);

        //filter by promotion and Class
        DatasFilteredByFilter = AllStudent.filter((item:any)=> ((!PromoFilter)? true : item.registerDatas.PROMOTION === PromoFilter) && ((ClassFilter ==="Toutes")? true : item.registerDatas.CLASS == ClassFilter));
        
        // Searching user by input         
        if(NameFilter.length && AllStudent.length){
                AllStudent.map((value:any)=>{
                    if(value.allName.toLowerCase().includes(NameFilter.toLowerCase())){
                            DatasFilteredBySearching.push(value);                            
                    }
                });
                    //Quick in function
                return DatasFilteredBySearching;
        }

        return DatasFilteredByFilter;
    }
});

// Form New Users Datas
const NewTeacherDatas = atom({
    key:"NewTeacherDatas",
    default:{
        firstName:"",
        SecondName:"",
        LastName:"",
        email:"",
        tel:"",
        promition:"",
        classTeacher:"",
    }
});

const NewStudentDatas = atom({
    key:"NewStudentDatas",
    default:{
        firstName:"",
        SecondName:"",
        LastName:"",
        BornDay:"",
        BordLocation:"",
        promition:"",
        classStudent:"",

        RespFirstName:"",
        RespSecondName:"",
        RespTel:"",
        RespEmail:"",
    }
});

const NewsPublication = atom({
    key:"NewsPublication",
    default:{
        time:0,
        content:"",
        Title:"",
    }
});

export {
    SelectedMenuItems,
    AllUserStates,
    AllStudentState,
    FilterTypeAccountsUser,
    DirectorStudentsFilter,
    TypeAccountState,
    nameUserSeaching,
    SelectedPromotion,
    SelectedClass,
    DataOfMenuState,
    DataOfMenuComptable,
    NewTeacherDatas,
    NewStudentDatas,
    NewsPublication
}