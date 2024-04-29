function resposta(answer) {
    document.getElementById('resposta').innerText = 'Resposta: ' + answer;
    if (answer === 'Sim') {
        createHearts();
    }
}

function createHearts() {
    const coracoesDiv = document.getElementById('coracoes');
    for (let i = 0; i < 10; i++) {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.style.setProperty('--delay', i);
        coracoesDiv.appendChild(coracao);
    }
}
