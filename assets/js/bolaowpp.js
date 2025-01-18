function contarAcertos(resultados, palpites) {
    const resultadosArray = resultados.split('/');
    const palpitesArray = palpites.split('\n');
    const acertos = {};
  
    for (let i = 0; i < palpitesArray.length; i += 2) {
      const nome = palpitesArray[i];
      const palpite = palpitesArray[i + 1].split('/');
  
      let acertosCount = 0;
  
      for (let j = 0; j < resultadosArray.length; j++) {
        if (resultadosArray[j] === palpite[j]) {
          acertosCount++;
        }
      }
  
      acertos[nome] = acertosCount;
    }
  
    return acertos;
  }
  
  const resultados = '1-2/2-1/1-1';
  const palpites = `Danilo
1-2/1-1/0-0
Lucas
1-1/1-1/1-1
Paulo
2-1/2-1/1-1`;
  
  const acertos = contarAcertos(resultados, palpites);
  
  //criar um array com os nomes e acertos
  const acertosArray = [];
  for (const nome in acertos) {
    acertosArray.push({ nome, acertos: acertos[nome] });
  }
  
  //ordenar o array em ordem decrescente de acertos
  acertosArray.sort((a, b) => b.acertos - a.acertos);
  
  //imprimir o array ordenado
  for (const item of acertosArray) {
    console.log(`${item.nome} (${item.acertos})`);
  }