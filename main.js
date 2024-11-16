const form = document.getElementById('form-add-contato');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputDDDContato = document.getElementById('ddd');
    const inputTelefoneContato = document.getElementById('telefone');

    let numero = inputDDDContato.value + inputTelefoneContato.value;
    let numeroFormatado = formataTel(numero);

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi cadastrado.`);
    } else if(numeros.includes(numero)) {
        alert(`O número ${numeroFormatado} já foi cadastrado.`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(numero);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${numeroFormatado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputDDDContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function formataTel(tel) {
    if (tel.length == 11) {
        return `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
    }
    else if (tel.length == 10){
        return `(${tel.slice(0, 2)}) ${tel.slice(2, 6)}-${tel.slice(6)}`;
    }
    else{
        return tel;
    }
}