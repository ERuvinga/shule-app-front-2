
// state Contents Datas of Users
const  {atom,selectorFamily, selector} = require("recoil");

    // data of Menu
    const DataOfTeachertMenu =atom({
        key:"DataOfTeachertMenu",
        default: [
            // {
            //     label:"Classe",
            //     Link:"/Teacher",
            //     icone:"UserGroupIcon"
            // },
            {
                label:"Cotes",
                Link:"/Teacher/",
                icone:"ClipboardIcon"
            },
            {
                label:"Valve",
                Link:"/Teacher/valve",
                icone:"ChatBubbleBottomCenterTextIcon"
            }
    ]
  });

  const DatesOfProclamm = atom({
    key:"DatesOfProclamm",
    default:[]
  })
  const PeriodeSelected = atom({
    key:"PeriodeSelected",
    default:"1P"
  });

  const CourseSelected = atom({
    key:"CourseSelected",
    default:{
      name:"Ecriture_Langues Congolaises",
      Pond:10
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

  const OneCotesOfUsers = atom({
    key:"CotesOfUsers",
    default:null
  });

  const AllCotesOfStudents = atom({
    key:"AllCotesOfStudents",
    default:[]
  });

  const ErrorOverflowCotes = atom({
    key:"ErrorOverflowCotes",
    default:[],
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
  });

  const SavingDataOfCotesTyped = selectorFamily({
    key:"SavingDataOfCotesTyped",
    get:(OldCotes:any)=> ({get}:any) =>{
        const OneCotes = get(OneCotesOfUsers);
        const ListCotes = [...OldCotes];
        let fundOldDataInTab = false;

        if(OldCotes.length){
          OldCotes.map((value:any, index:any)=>{
              if(value.idStudent == OneCotes.idStudent){
                  ListCotes[index] = OneCotes;
                  fundOldDataInTab = true;
              }
            });
        }

        if(!fundOldDataInTab && OneCotes){ // if no User fund in List Cote, Added it
            ListCotes.push(OneCotes);  
        }    

    console.log(OldCotes);
    return ListCotes;
    }
  });



export {
    DataOfTeachertMenu,
    PeriodeSelected,
    CourseSelected,
    AllStudentsInClass,
    AllCourseInClass,
    NameFilterSearch,
    FilterUsersOfClassByName,
    OneCotesOfUsers,
    AllCotesOfStudents,
    SavingDataOfCotesTyped,
    ErrorOverflowCotes,
    DatesOfProclamm
}