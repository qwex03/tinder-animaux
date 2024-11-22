import TinderCard from "react-tinder-card";

const AnimalCard = ({ name, age, race, imageUrl, onSwipe }) => {

    return(
        <TinderCard onSwipe={onSwipe}>
            <div className="animal-card">
                <img src={imageUrl} alt={name} />
                <h3>{name}</h3>
                <p>{race}</p>
                <p>{age} ans</p>
            </div>
        </TinderCard>
    )
}

export default AnimalCard;