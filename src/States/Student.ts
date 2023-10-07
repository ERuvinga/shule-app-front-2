// state Contents Datas of Users
const  {atom, selector} = require("recoil");

    // data of Menu
    const DataOfStudentMenu =atom({
        key:"DataOfStudentMenu",
        default: [
        {
            label:"Comptabilité",
            Link:"/Student",
            icone:"CurrencyDollarIcon"
        },
        {
            label:"Cotes",
            Link:"/Student/Cote",
            icone:"ClipboardIcon"
        },
        {
            label:"Valve",
            Link:"/Student/valve",
            icone:"ChatBubbleBottomCenterTextIcon"
        }
    ]
  });

  const IdentityUserSelected = atom({
    key:"IdentityUserSelected",
    default:{
        idStudent:"",
        CLASS:"",
        PROMO:0,
        nameStudent:""
    }
  })

  const FinalResult = atom({
    key:"FinalResult",
    default:{
    }
  })


export {
    DataOfStudentMenu,
    IdentityUserSelected,
    FinalResult
}