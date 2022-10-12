
import ButtonMaker from "./ButtonMaker"
const Header = ({ showTasks, statusShow }) => {
    return (
        <div className="header">
            <p>Program Task</p>
            <ButtonMaker text={statusShow ? "Hide" : "Show"} color={statusShow ? "red" : "green"} onClickEvent={showTasks} />
        </div>
    )
}

export default Header
