import './ResetButton.css';

const ResetButton = ({ resetBoard }) => {
    return (
        <button className='resetBtn' onClick={resetBoard}  data-testid='resetBtn' >Reset Game</button>
    )
};

export default ResetButton;