import React from "react";
import MultiStepDisplay from "../composant/MultiStep";
import Liste from "../composant/Select";
import InputImage from "../composant/InputImage";
import ChoixButton from "../composant/ChoixButton";
import TextArea from "../composant/TextArea";

const Ajout = () => {
    return(
        <>
        <h1>Ajout d'un animal</h1>
        <MultiStepDisplay components={[<Liste/>, <ChoixButton/>, <InputImage/>,<TextArea/>]}/>
        </>
    ) 
}

export default Ajout;