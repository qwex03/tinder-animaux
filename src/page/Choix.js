import NavButton from "../composant/NavButton"
import Logo from "../composant/Logo"

const Choix = () => {
    return(
        <div>
            <Logo/>
            <NavButton to="/">Je cherche à faire adopter mon animal</NavButton>
            <NavButton to="/animals">Je veux trouver un animal à l'adoption</NavButton>
        </div>
    )
}


export default Choix;