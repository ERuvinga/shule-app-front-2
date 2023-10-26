// atoms and selector of Cotations of student
import {atom} from "recoil"

const MinPonderationMin = atom({
    key:"PonderationMin",
    default:0
  });

  const MaxResultsPeriodes = atom({
    key:"MaxResultsPeriodes",
    default:{}
  });


export {
    MinPonderationMin,
    MaxResultsPeriodes
}