export const searchCharacterFunction = (word, array) => {
    let newArray = []
    const new_word = word.trim().toLowerCase()
    let found = false
    
    array.forEach(element => {
        const new_element = element.trim().toLowerCase()
        
        if (new_word === new_element) {
            newArray.push(element)
            found = true
        }
        if (new_element.includes(new_word)) {
            newArray.push(element)
            found = true
        }
    });

    return {
        newCharacters: newArray,
        characterFound: found
    }
}