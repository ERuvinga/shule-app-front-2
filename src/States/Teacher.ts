// state Contents Datas of Users
const  {atom, selector} = require("recoil");

    // data of Menu
    const DataOfTeachertMenu =atom({
        key:"DataOfTeachertMenu",
        default: [
            {
                label:"Classe",
                Link:"/Teacher",
                icone:"UserGroupIcon"
            },
            {
                label:"Cotes",
                Link:"/Teacher/cotes",
                icone:"ClipboardIcon"
            },
            {
                label:"Valve",
                Link:"/Teacher/valve",
                icone:"ChatBubbleBottomCenterTextIcon"
            }
    ]
  });

  const PeriodeSelected = atom({
    key:"PeriodeSelected",
    default:"1P"
  });

  const CourseSelected = atom({
    key:"CourseSelected",
    default:{
      name:"lecture_Langues Congolaises"
    }
  });

  const AllStudentsInClass = atom({
    key:"AllStudentsInClass",
    default:[],
  });

  const AllCourseInClass =atom({
    key:"AllCourseInClass",
    default:[]
  });

  const NameFilterSearch = atom({
    key:"NameFilterSearch",
    default:"",
  });

  const CotesOfUsers = atom({
    key:"CotesOfUsers",
    default:[]
  });

  const FilterUsersOfClassByName = selector({
        key:"FilterUsersOfClassByName",
        get:({get}:any) =>{
            const NameFilter = get(NameFilterSearch);
            const AllUserOfClass = get(AllStudentsInClass);
            const ListUser:any =[]

                    // Searching user by input         
        if(NameFilter.length && AllUserOfClass.length){
            AllUserOfClass.map((value:any)=>{
                    if(value.allName.toLowerCase().includes(NameFilter.toLowerCase())){
                        ListUser.push(value);
                    }
            });
            //Quick in function
            return ListUser;
        }

    return AllUserOfClass;
    }
  })


export {
    DataOfTeachertMenu,
    PeriodeSelected,
    CourseSelected,
    AllStudentsInClass,
    AllCourseInClass,
    NameFilterSearch,
    FilterUsersOfClassByName,
    CotesOfUsers,
}