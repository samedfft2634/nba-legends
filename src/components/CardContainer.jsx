import PlayerCard from "./PlayerCard"
import{ data } from '../helper/data'

const CardContainer = () => {
  return (
    <div className="CardContainer">
        {data.map((player,index)=>(
             <PlayerCard {...player} key={index}/>
        ))}
       
    </div>
  )
}

export default CardContainer