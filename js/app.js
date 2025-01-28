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

    if (friendsArray.includes(names)) {
        alert('Este nome já foi adicionado');
        return;
    }

    if (listOfNames.innerHTML !== '') {
        listOfNames.innerHTML += ', '
    }

    listOfNames.innerHTML += `<span>${names}</span>`;
    friendsArray.push(names);
    getElements('nome-amigo').value = '';
}

function removeFriend(event) {
    let clickedName = event.target;

    if (clickedName.tagName === 'SPAN') {
        let nameToRemove = clickedName.textContent;

        friendsArray = friendsArray.filter(name => name !== nameToRemove);

        let listOfNames = getElements('lista-amigos');
        listOfNames.innerHTML = friendsArray.map(name => `<span>${name}</span>`).join(', ');

        if (friendsArray.length === 0) {
            listOfNames.innerHTML = '';
        }
    }
}


function shuffleArray(array) {
    let shuffledArray = [...array];

    // The Durstenfeld Shuffle ES6
    for (let i = shuffledArray.length -1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function generateGiftingList() {
    if (friendsArray.length < 3) {
        alert('Adicionar no minimo 3 pessoas na lista');
        return;
    }

    let raffleList = getElements('lista-sorteio')

    raffleList.innerHTML = '';

    let shuffledArray = shuffleArray(friendsArray);

    for (i = 0; i < shuffledArray.length; i++) {
        if (i + 1 == shuffledArray.length) {
            raffleList.innerHTML += `<li>${shuffledArray[i]} -> ${shuffledArray[0]}</li>`
        } else {
            raffleList.innerHTML += `<li>${shuffledArray[i]} -> ${shuffledArray[i+1]}</li>`
        }        
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
    event.preventDefault();
    getElements('lista-amigos').innerHTML = '';
    getElements('lista-sorteio').innerHTML = '';
    friendsArray = [];
}

getElements('lista-amigos').addEventListener('click', removeFriend);
