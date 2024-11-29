import React from "react";

const InputImage = () => {
    return(
        <>
        <h1>Ajoute quelques photos de ton animal</h1>
        <div className="picture">
            <input type="file"/>
            <input type="file"/>
            <input type="file"/>
            <input type="file"/>
            <input type="file"/>
            <input type="file"/>
        </div>
        <p>Essaie de mettre des photos de qualité de ton animal pour charmer son futur adoptant</p>
        </>
    )
}

export default InputImage;