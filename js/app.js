function getElements(id) {
    return document.getElementById(`${id}`);
};

function generateFriendList() {
    let names = getElements('nome-amigo').value.trim();
    let listOfNames = getElements('lista-amigos');

    if (names === '') {
        alert('Por favor, digite um nome válido');
        return;
    }

    let currentNames = listOfNames.innerHTML.split(', ');
    if (currentNames.includes(names)) {
        alert('Este nome já foi adicionado');
        return;
    }

    if (listOfNames.innerHTML !== '') {
        listOfNames.innerHTML += ', '
    }

    listOfNames.innerHTML += names;
    getElements('nome-amigo').value = '';
}

function generateArray() {
    let listOfNames = getElements('lista-amigos').innerHTML.trim();

    let array = listOfNames.split(', ').filter(name => name !== '');

    return array;
}

function shuffleArray() {
    let array = generateArray();
    
    // The Durstenfeld Shuffle ES6
    for (let i = array.length -1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function generateGiftingList() {
    let shuffledArray = shuffleArray();
    let raffleList = getElements('lista-sorteio')

    if (raffleList.innerHTML == '' ) {
        for (i = 0; i < shuffledArray.length; i++) {
            if (i + 1 == shuffledArray.length) {
                raffleList.innerHTML += `<li>${shuffledArray[i]} -> ${shuffledArray[0]}</li>`
            } else {
                raffleList.innerHTML += `<li>${shuffledArray[i]} -> ${shuffledArray[i+1]}</li>`
            }        
        }
    } else {
        return;
    }
}

function adicionar() {
    generateFriendList();
    getElements('nome-amigo').focus();

}

function sortear() {
    generateGiftingList();
}

function reiniciar() {
    getElements('lista-amigos').innerHTML = '';
    getElements('lista-sorteio').innerHTML = '';
}
