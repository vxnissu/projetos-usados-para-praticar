let amigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    //Validando se o nome do amigo foi digitado antes de adicionar
    if (nomeAmigo.value == '') {
        alert("Informe o nome do amigo que você deseja incluir no sorteio.");
        return;
    }
    //Verificando se os nomes na lista estão se repetindo
    if (amigos.includes(nomeAmigo.value)){
        alert("Este amigo já está incluído na lista, adicione outro amigo.");
        return;
    }
    //
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    //Adicionando amigos a lista
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    //Limpando o campo input "Nome do amigo" após adicionar um amigo
    nomeAmigo.value = '';
}
function sortear() {
    //Impossibilitando de haver sorteio com menos de 4 amigos
    if(amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos no sorteio.");
        return;
    }
    //Sorteando
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    //Voltando para sortear o amigo no inicio da lista quando percorrer até o final
    for(let i = 0; i < amigos.length; i++){
        if (i == amigos.length -1) {
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}
function embaralha(lista) {
    for(let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    amigos = [];
}