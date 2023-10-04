import { useRecoilState } from "recoil";
import { FinalResult } from "@/src/States/Student";

interface dataToDisplay{
    minPond:number,
    tabMaxima:any,
    nameRow:String
}

const DiplayResultFinal = (datas:dataToDisplay)=>{
    
    const [AllResults, setAllResults]:any = useRecoilState(FinalResult)

    console.log(AllResults);

    switch(datas.nameRow){
        case "maxi":    
            return (
                <tr className="ToTalRow">   
                    <td className="NameCours">MAX</td>
                    <td className="ponderation">{datas.minPond}</td>
                    <td className={AllResults.period_1.max < datas.minPond/2 ? "failed":""}>{AllResults.period_1.max}</td>
                    <td className={AllResults.period_2.max < datas.minPond/2 ? "failed":""}>{AllResults.period_2.max}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_1.max < datas.minPond ? "failed":""}>{AllResults.examen_1.max}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim1.max < datas.minPond*2 ? "failed":""}>{AllResults.Trim1.max}</td>
                    <td className={AllResults.period_3.max < datas.minPond/2 ? "failed":""}>{AllResults.period_3.max}</td>
                    <td className={AllResults.period_4.max < datas.minPond/2 ? "failed":""}>{AllResults.period_4.max}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_2.max < datas.minPond ? "failed":""}>{AllResults.examen_2.max}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim2.max < datas.minPond*2 ? "failed":""}>{AllResults.Trim2.max}</td>
                    <td className={AllResults.period_5.max < datas.minPond/2 ? "failed":""}>{AllResults.period_5.max}</td>
                    <td className={AllResults.period_6.max < datas.minPond/2 ? "failed":""}>{AllResults.period_6.max}</td>
                    <td className="ponderation">{datas.minPond*2}</td>
                    <td className={AllResults.examen_3.max < datas.minPond ? "failed":""}>{AllResults.examen_3.max}</td>
                    <td className="ponderation">{datas.minPond*4}</td>
                    <td className={AllResults.Trim3.max < datas.minPond*2 ? "failed":""}>{AllResults.Trim3.max}</td>
                    <td className="ponderation">{datas.minPond*12}</td>
                    <td className={AllResults.TotGen.max < datas.minPond*6 ? "failed":""}>{AllResults.TotGen.max}</td>
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
                    <td>{(datas.tabMaxima.period_1.max/datas.minPond)*100}</td>
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
    }
}

export default DiplayResultFinal;