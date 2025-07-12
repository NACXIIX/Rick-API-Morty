export const searchCharacterFunction = (word, array) => {
    let newArray = []
    const new_word = word.trim().toLowerCase()
    let found = false

    array.forEach(element => {
        const name = element.name?.trim().toLowerCase() || ""

        if (name === new_word || name.includes(new_word)) {
            newArray.push(element)
            found = true
        }
    })

    return {
        newCharacters: newArray,
        characterFound: found
    }
}