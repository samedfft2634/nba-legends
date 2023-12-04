import PlayerCard from "./PlayerCard"
import{ data } from '../helper/data'

const CardContainer = () => {
  return (
    <div className="CardContainer">
        {data.map((player)=>(
             <PlayerCard {...player}/>
        ))}
       
    </div>
  )
}

export default CardContainer