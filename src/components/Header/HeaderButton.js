import './HeaderButton.css'

function HeaderButton(props){
    return (
    
    <button className="header-button">{props.option}<img src={props.img}></img></button>
    );
}

export default HeaderButton;