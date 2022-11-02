import './Header.scss'
import './HeaderButton'
import EYLogo from '../../assets/ey.png'
import UserIcon from '../../assets/usersIcon.png'
import OnboardIcon from '../../assets/onboardIcon.png'
import DocumentationIcon from '../../assets/documentationIcon.png'
import ProjectIcon from '../../assets/projectIcon.png'
import HeaderButton from './HeaderButton';
import SearchIcon from '../../assets/searchIcon.png'


function Header(props){
    return (
    <div className="header">
        <div className="header-logo">
            <img className="header-logo-icon" src={EYLogo}></img>
            <h2 className="header-logo-text">{props.title}</h2>
        </div>
        <div className="header-search">
        <input  placeholder="SEARCH" className="header-search-text" type="text"></input>
        <img src={SearchIcon}></img>
        </div>

        <div className="header-options">
        <div className="header-hamburguer-menu">
            <span></span>
        </div>
        <HeaderButton img={ProjectIcon} option="PROJECTS"></HeaderButton>
        <HeaderButton img={DocumentationIcon} option="DOCUMENTS"></HeaderButton>
        <HeaderButton img={OnboardIcon} option="ONBOARDING"></HeaderButton>
        <HeaderButton img={UserIcon} option="MEMBERS"></HeaderButton>
        </div>
    </div>
    );
}

export default Header;