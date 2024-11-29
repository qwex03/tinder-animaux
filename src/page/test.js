import Header from "../composant/header";
import ListAnimals from "./ListAnimal";
import Navbar from "../composant/Navbar";
import "./test.css";

const Test = () => {
    return(
        <div className="container">
        <Header/>
        <ListAnimals/>
        <Navbar/>
        </div>
    )
}

export default Test;