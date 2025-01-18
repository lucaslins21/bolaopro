const form = document.querySelector('#bolao-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputResultados = e.target.querySelector('#resultados');
    const inputPalpites = e.target.querySelector('#palpites');
    const resultados = inputResultados.value;
    const palpites = inputPalpites.value;

    if (!verificarResultados(resultados)) {
        setResultado('Formato inválido para os resultados. Use algo como "1-1/2-1/2-0".');
        return;
    }

    //calcula o número de resultados (jogos)
    const numResultados = resultados.trim().replace(/\s+/g, '').split('/').length;

    if (!verificarPalpitesComQuantidade(palpites, numResultados)) {
        setResultado('Formato inválido para os palpites ou número de palpites de alguma pessoa não corresponde ao número de resultados.');
        return;
    }

    //calcula o ranking
    const ranking = calcularRanking(resultados, palpites);
    const rankingHTML = ranking.map(item => `${item.nome} (${item.acertos})`).join('<br>');
    setResultado(`<p>${rankingHTML}</p>`);
});

function setResultado(msg) {
    const resultado = document.querySelector('#ranking');
    resultado.innerHTML = msg;
}

function verificarPalpitesComQuantidade(palpites, numResultados) {
    //remove espaços extras e normaliza múltiplas quebras de linha
    const palpitesNormalizados = palpites.trim().replace(/\s*\n\s*/g, '\n');

    //divide a entrada em linhas
    const linhas = palpitesNormalizados.split('\n').filter(linha => linha.trim() !== ''); // Remove linhas vazias

    for (let i = 0; i < linhas.length; i += 2) {
        //verifica se a linha do nome da pessoa existe
        if (!linhas[i] || linhas[i].trim() === '') {
            return false;
        }

        //verifica se a linha de palpites existe e está no formato correto
        if (!linhas[i + 1] || !verificarResultados(linhas[i + 1].trim())) {
            return false;
        }

        //verifica se o número de palpites corresponde ao número de resultados
        const palpitesPessoa = linhas[i + 1].trim().split('/');
        if (palpitesPessoa.length !== numResultados) {
            return false;
        }
    }

    return true;
}

function verificarResultados(resultados) {
    const resultadosSemEspacos = resultados.replace(/\s+/g, '');
    const regex = /^(\d+[-xX]\d+)(\/\d+[-xX]\d+)*$/;
    return regex.test(resultadosSemEspacos);
}

function calcularRanking(resultados, palpites) {
    const resultadosArray = resultados.split('/');
    const palpitesArray = palpites.trim().split('\n').filter(linha => linha.trim() !== ''); // Remove linhas vazias
    const acertos = {};

    for (let i = 0; i < palpitesArray.length; i += 2) {
        const nome = palpitesArray[i].trim();
        const palpite = palpitesArray[i + 1].trim().split('/');

        let acertosCount = 0;

        for (let j = 0; j < resultadosArray.length; j++) {
            if (resultadosArray[j] === palpite[j]) {
                acertosCount++;
            }
        }

        acertos[nome] = acertosCount;
    }

    //cria um array com os nomes e acertos
    const acertosArray = [];
    for (const nome in acertos) {
        acertosArray.push({ nome, acertos: acertos[nome] });
    }

    //ordena o array em ordem decrescente de acertos
    acertosArray.sort((a, b) => b.acertos - a.acertos);

    return acertosArray;
}

document.getElementById('calcular').addEventListener('click', function () {
    // Exibir o botão de copiar após o ranking ser calculado
    const botaoCopiar = document.getElementById('botao-copiar');
    const rankingText = document.getElementById('ranking').textContent;

    if (rankingText.trim() !== "") {
        botaoCopiar.style.display = 'flex';
    } else {
        botaoCopiar.style.display = 'none';
    }
});

document.getElementById('botao-copiar').addEventListener('click', function () {
    const rankingText = document.getElementById('ranking').innerText; // Alterado para innerText

    if (rankingText.trim() !== "") {
        navigator.clipboard.writeText(rankingText).then(() => {
            const mensagemCopiado = document.createElement('span');
            mensagemCopiado.textContent = 'Ranking copiado!';
            mensagemCopiado.style.color = '#fff';
            mensagemCopiado.style.fontSize = '14px';
            mensagemCopiado.style.marginLeft = '10px';
            mensagemCopiado.style.animation = 'fadeOut 2s forwards';

            const botaoCopiar = document.getElementById('botao-copiar');
            botaoCopiar.parentNode.insertBefore(mensagemCopiado, botaoCopiar.nextSibling);

            setTimeout(() => {
                mensagemCopiado.remove();
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar o ranking: ', err);
        });
    }
});





