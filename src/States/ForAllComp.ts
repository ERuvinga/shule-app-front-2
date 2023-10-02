import { atom } from "recoil";

const ContainerUserCard = atom({
    key:"ContainerUserCard",
    default: false
});

const StudentPayedDatas = atom({
    key:"StudentPayedDatas",
    default:{
        name:"",
        idUser:"",
        typeAction:"",
        payed:0,
        datePayed:0
    }
})

export {
    ContainerUserCard,
    StudentPayedDatas
}