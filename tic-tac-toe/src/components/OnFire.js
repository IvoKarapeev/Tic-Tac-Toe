import { useEffect, useState } from 'react';
import './OnFire.css';

const OnFire = ({ onFire }) => {

    const [player,setPlayer] = useState([]);

    useEffect(() => {

        if (onFire.x === true) {
            setPlayer(['x']);
        } else if (onFire.o === true) {
            setPlayer(['o']);
        } else {
            setPlayer([]);
        };
        
    },[onFire])

    return(
        <div>
            { player[0] && 
                <div className={`onfire-score ${player[0]}-fire`}>{player[0]} is on Fire</div>
            }
        </div>
    )
}; 

export default OnFire;