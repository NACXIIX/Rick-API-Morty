const searchCharacterFunction = (word, array) => {
    let new_array = []
    const new_word = word.trim().toLowerCase()

    array.forEach(element => {
        const new_element = element.trim().toLowerCase()
        if (new_word === new_element) {
            new_array.push(element)
        }
        if (new_element.includes(new_word)) {
            new_array.push(element)
        }
    });

    return new_array
}

module.exports = searchCharacterFunction