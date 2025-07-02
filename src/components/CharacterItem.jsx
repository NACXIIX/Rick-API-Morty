function CharacterItem({character}) {
    return (
        <>
            {character.name} {character.gender === 'Female' ? '👩🏻‍🦰' : '👨🏻'}
            <div className="character-image">
                <img src={character.image} alt={character.name} />
            </div>;
        </>
    )
}

export default CharacterItem;