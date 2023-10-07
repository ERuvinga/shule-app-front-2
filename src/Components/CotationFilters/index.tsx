import { ClockIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { PeriodeSelected, CourseSelected, AllCourseInClass} from "@/src/States/Teacher";

const PeriodeFilter =()=>{
    const setPeriodSelected = useSetRecoilState(PeriodeSelected);
    return(
        <div className="PromFilter mb">
                <span className="TitleFilter"><ClockIcon className="Icone"/><span>Periode</span></span>
                <select className="classSelection" onChange={(event:any)=>setPeriodSelected(event.target.value)} defaultValue={"1P"}>
                    <option value="1P" className="itemsClass">1 er P</option>
                    <option value="2P" className="itemsClass">2 iem P</option>
                    <option value="Examen1" className="itemsClass">Examen 1 er trimestre</option>
                    <option value="3P" className="itemsClass">3 iem P</option>
                    <option value="4P" className="itemsClass">4 iem P</option>
                    <option value="Examen2" className="itemsClass">Examen 2 iem trimestre</option>
                    <option value="5P" className="itemsClass">5 iem P</option>
                    <option value="6P" className="itemsClass">6 iem P</option>
                    <option value="Examen3" className="itemsClass">Examen 3 iem trimestre</option>
                </select>
        </div>
    )
}

const CoursFilter =()=>{
    const setCourseSelected = useSetRecoilState(CourseSelected);
    const AllsCourse:any = useRecoilValue(AllCourseInClass);
    return(
        <div className="PromFilter">
                <span className="TitleFilter"><Square3Stack3DIcon className="Icone"/><span>Cours</span></span>
                <select className="CourSelected" onChange={(event:any)=>setCourseSelected({name:event.target.value})} defaultValue={"Ecriture_Langues Congolaises"}>
                    {AllsCourse.map((item:any, index:any)=><option key={index} value={`${item.name}_${item.domaine}`} className="itemsClass">{`${item.name} (${item.domaine})`}</option>)}
                </select>
        </div>
    )
}

export {
    PeriodeFilter,
    CoursFilter
} 