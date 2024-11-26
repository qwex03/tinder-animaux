import Logo from "../composant/Logo"

const Bienvenue = () => {
    return(
        <div>
            <h1><strong>Bienvenue sur</strong></h1>
            <Logo/>
            <h2>Quelques règles pour commencer :</h2>
            <div>
            <h3>Je recherche un animal</h3>
            <ul>
                <li>Fournis des informations exactes et vraies sur ta situation </li>
                <li>Garde ton compte sécurisé et des identifiants de connexion confidentiels</li>
                <li>Sois toujours respectueux et courtois avec les autres utilisateurs.</li>
            </ul>
            </div>
            <p>Tu peux signaler tout comportement abusif, annonce frauduleuse ou violation des règles via les fonctionnalités de signalement</p>
        </div>
    )
}

export default Bienvenue;