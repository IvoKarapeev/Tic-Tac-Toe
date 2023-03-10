import './Score.css';

const Score = ({ score, xPlaying }) => {

    const { xScore,oScore } = score;


    return(
        <div className={`score-board`} data-testid='score'>
            <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && 'inactive'}`}>O - {oScore}</span>
        </div>
    )
};

export default Score;