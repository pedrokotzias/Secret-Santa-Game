let friendsArray = [];

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
    friendsArray.push(names);
    getElements('nome-amigo').value = '';
}

function shuffleArray() {
    friendsArray.filter(name => name !== '');

    // The Durstenfeld Shuffle ES6
    for (let i = friendsArray.length -1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [friendsArray[i], friendsArray[j]] = [friendsArray[j], friendsArray[i]];
    }

    return friendsArray;
}

function generateGiftingList() {
    let shuffledArray = shuffleArray();
    let raffleList = getElements('lista-sorteio')

    if (friendsArray.length < 3) {
        alert('Adiciona no minimo 3 pessoas na lista');
        return;
    }

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
    friendsArray = [];
}
