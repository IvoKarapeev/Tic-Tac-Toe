import './Box.css';

const Box = ({ value, onClick }) => {
    
    const style = (value) => {
        if (value === 'X') {
            return 'box x'
        }else{
            return 'box o'
        }
    }

    return(
        <button className={style(value)} onClick={onClick}>{value}</button>
    )
};

export default Box;