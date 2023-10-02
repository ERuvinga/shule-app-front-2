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
            label:"Classe",
            Link:"/Student/ClassRoom",
            icone:"UserGroupIcon"
        },
        {
            label:"Cotes",
            Link:"/Student/Cotes",
            icone:"ClipboardIcon"
        },
        {
            label:"Valve",
            Link:"/Student/valve",
            icone:"ChatBubbleBottomCenterTextIcon"
        }
    ]
  });

export {
    DataOfStudentMenu,
}