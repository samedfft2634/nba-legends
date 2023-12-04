import { useState } from 'react'

const PlayerCard = ({ name, img, statistics }) => {
    const [stat, setStat] = useState(false)
    const handleClick = () => {
        setStat(!stat)
    }
	return (
		<div className="PlayerCard" onClick={handleClick}>
			<div className="sides">
				<div className="front">
					<img src={img} alt="playerPhoto" style={{visibility:`${stat ? "hidden" : "visible" }`}}/>
				</div>
				<div className="back">
					<ul style={{display:`${stat ? "block" : "none"}`}}>
						{statistics.map((stats) => (
							<li>{stats}</li>
						))}
					</ul>
				</div>
			</div>
			<h3>{name}</h3>
		</div>
	);
};

export default PlayerCard;
