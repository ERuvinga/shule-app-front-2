import { PayDateFunction } from "@/src/Lib/Dates"

interface datasOfNew {
    text:String,
    time:number,
    title:String
}

const NewsCard = (datas:datasOfNew)=>{
    return(
        <div className="CardNews">
            <div className="decor"></div>
            <div className="ContainerDatas">
                <div className="TitleCard">
                    <span className="title">{datas.title}</span>
                    <span className="date">{PayDateFunction(datas.time)}</span>
                </div>
                <div className="contanierMsg">
                    {datas.text}
                </div>
                <div className="ContainerLink">
                    <a href="#" className="Link">Voir Plus</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;