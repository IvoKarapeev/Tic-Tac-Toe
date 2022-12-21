import './ResetButton.css';

const ResetButton = ({ resetBoard }) => {
    return (
        <button className='resetBtn' onClick={resetBoard}>Reset Game</button>
    )
};

export default ResetButton;