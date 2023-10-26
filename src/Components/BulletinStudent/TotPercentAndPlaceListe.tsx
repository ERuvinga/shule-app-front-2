import { useRecoilState, useRecoilValue } from "recoil";
import { FinalResult } from "@/src/States/Student";
import { DatesOfProclamm } from "@/src/States/Teacher";
import { AuthUser } from "@/src/States/UserAoth";

interface dataToDisplay{
    minPond:number,
    tabMaxima:any,
    nameRow:String
}

const DiplayResultFinal = (datas:dataToDisplay)=>{
    
    const AllResults:any = useRecoilValue(FinalResult);
    const AuthentiqUser :any = useRecoilValue(AuthUser)
    const [DatesOfProclammations, setDatesOfProclammations]:any= useRecoilState(DatesOfProclamm);

    const SearchingDatePeriod = (periodeName:any) =>{
        const DateNow = new Date(Date.now());
        let ValueReturned = false;

        if( AuthentiqUser.typeAccount == "Student"){
            DatesOfProclammations.map((value:any)=>{
                if(value.namePeriode == periodeName){
                    if(value.Dates != ""){
                        const DateDay = value.Dates.split("-");
                        if((DateNow.getFullYear() >= parseInt(DateDay[0])) && (DateNow.getMonth()+1 >= parseInt(DateDay[1]) && (DateNow.getDate() >= parseInt(DateDay[2])))){
                            console.log("Date de proclammation arrivée");
                            ValueReturned = true;
                        }
                        else{
                            console.log("Date de proclammation pas encore arrivée")
                            ValueReturned = false;
                        }
                    }
                }
            })
        }
        else{
            ValueReturned = true;
        }

        return ValueReturned;
    };

    switch(datas.nameRow){
        case "maxi":    
            return (
                <tr className="ToTalRow">   
                    <td className="NameCours">MAX</td>
                    <td className="ponderation">{datas.minPond}</td>
                    <td className={(AllResults.period_1.max < datas.minPond/2 && SearchingDatePeriod("1 er Periode")) ? "failed":""}>{SearchingDatePeriod("1 er Periode")? AllResults.period_1.max:"-"}</td>
                    <td className={(AllResults.period_2.max < datas.minPond/2 && SearchingDatePeriod("2 em Periode"))? "failed":""}>{SearchingDatePeriod("2 em Periode")? AllResults.period_2.max:"-"}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_1.max < datas.minPond ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.examen_1.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim1.max < datas.minPond*2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.Trim1.max :"-"}</td>
                    <td className={AllResults.period_3.max < datas.minPond/2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.period_3.max :"-"}</td>
                    <td className={AllResults.period_4.max < datas.minPond/2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.period_4.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_2.max < datas.minPond ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.examen_2.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim2.max < datas.minPond*2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.Trim2.max :"-"}</td>
                    <td className={AllResults.period_5.max < datas.minPond/2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.period_5.max :"-"}</td>
                    <td className={AllResults.period_6.max < datas.minPond/2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.period_6.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_3.max < datas.minPond ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.examen_3.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim3.max < datas.minPond*2 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.Trim3.max :"-"}</td>
                    <td className="ponderation">{datas.minPond*12}</td>
                    <td className={AllResults.TotGen.max < datas.minPond*6 ? "failed":""}>{SearchingDatePeriod("3 em Periode")? AllResults.TotGen.max :"-"}</td>
                </tr>
            );

        case "place":
            return(
                <tr className="ToTalRow">   
                    <td className="NameCours">PLACE</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td className="noneDatas">-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                    <td className="noneDatas"></td>
                    <td>-</td>
                </tr>
            );
        
        case "percent":
            return(
                <tr className="PercentRow">   
                    <td className="NameCours">%</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("1 er Periode")? Math.round((AllResults.period_1.max/datas.minPond)*1000)/10:"-"}</td>
                    <td>{SearchingDatePeriod("2 em Periode")? Math.round((AllResults.period_2.max/datas.minPond)*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.examen_1.max/datas.minPond*2)*1000)/10 :"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.Trim1.max/(datas.minPond*4))*1000)/10:"-"}</td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.period_3.max/datas.minPond)*1000)/10:"-"}</td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.period_4.max/datas.minPond)*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.examen_2.max/(datas.minPond*2))*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.Trim2.max/datas.minPond*4)*1000)/10:"-"}</td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.period_5.max/datas.minPond)*1000)/10:"-"}</td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.period_6.max/datas.minPond)*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.examen_3.max/(datas.minPond*2))*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.Trim3.max/(datas.minPond*4))*1000)/10:"-"}</td>
                    <td className="noneDatas"></td>
                    <td>{SearchingDatePeriod("3 em Periode")? Math.round((AllResults.TotGen.max/(datas.minPond*12))*1000)/10:"-"}</td>
                </tr>
            );
    }
}

export default DiplayResultFinal;