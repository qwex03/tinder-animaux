import Logo from "./Logo";
import settings from './img/settings.png';

const Header = () => {
    return(
        <div className="header">
            <Logo/>
            <img src={settings} alt="paramètres"></img>
        </div>
    )
}

export default Header;