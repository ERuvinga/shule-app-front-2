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
                Link:"/Teacher/Cotes",
                icone:"ClipboardIcon"
            },
            {
                label:"Valve",
                Link:"/Teacher/valve",
                icone:"ChatBubbleBottomCenterTextIcon"
            }
    ]
  });

export {
    DataOfTeachertMenu,
}