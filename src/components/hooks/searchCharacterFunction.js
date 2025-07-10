export const searchCharacterFunction = (word, array) => {
    let new_array = []
    const new_word = word.trim().toLowerCase()
    let found = false
    
    array.forEach(element => {
        const new_element = element.trim().toLowerCase()
        
        if (new_word === new_element) {
            new_array.push(element)
            found = true
        }
        if (new_element.includes(new_word)) {
            new_array.push(element)
            found = true
        }
    });

    return {
        new_array: new_array,
        found: found
    }
}