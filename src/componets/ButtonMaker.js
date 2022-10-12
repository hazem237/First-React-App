

const ButtonMaker = ({ text, color, onClickEvent }) => {
    return (
        <button className="btn" style={{ backgroundColor: color }} onClick={onClickEvent}>
            {text}
        </button>
    )
}

export default ButtonMaker
