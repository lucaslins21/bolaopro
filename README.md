# BolãoPro

🎉 Um sistema para facilitar a organização e contagem de pontos em bolões de WhatsApp! Ideal para quem quer automatizar o trabalho cansativo de verificar palpites e calcular resultados. 

---

## 📖 Introdução

⏳ Os bolões no WhatsApp são uma tradição entre amigos e familiares, transformando palpites sobre placares de jogos de futebol em uma competição divertida e cheia de rivalidade.

🛡️ Um dos formatos mais populares é o **"Bolão de Times"**, onde participantes são distribuídos em **times fictícios**. Esses times competem em campeonatos organizados, com confrontos definidos rodada a rodada.

📊 A lógica é simples: cada palpite correto, também chamado de **"cravada"**, equivale a **um gol** para o time do jogador. O time que somar mais gols vence o confronto, ou ocorre um empate caso os gols sejam iguais.

🧍‍♂️ **O desafio**: Apesar da diversão, organizar e contabilizar os pontos de cada jogador manualmente pode ser uma tarefa trabalhosa e demorada, especialmente em bolões com muitos participantes e jogos.

🤔 **A solução**: Este código foi desenvolvido para **automatizar a contagem de acertos**, simplificando o trabalho dos organizadores e garantindo mais tempo para curtir os resultados e as brincadeiras entre os participantes.

---

## 🛠️ Funcionalidades

1. **Entrada Personalizada**: 
   - O usuário insere os resultados dos jogos.
   - Os palpites dos jogadores são inseridos em um formato padrão.

2. **Validação Automática**:
   - Verifica se os palpites seguem o formato correto.
   - Garante que o número de palpites corresponde ao número de resultados.

3. **Cálculo de Gols**:
   - Compara os palpites com os resultados reais e contabiliza os gols de cada jogador.

4. **Exibição do Ranking**:
   - Gera uma lista ordenada dos jogadores com suas respectivas pontuações.

5. **Botão de Copiar Ranking**:
   - Copie o ranking facilmente para compartilhar no WhatsApp ou outras plataformas.

6. **Interface Amigável**:
   - Design moderno e responsivo.
   - Mensagens de erro personalizadas para entradas inválidas.

7. **Histórico**:
   - Os últimos rankings calculados ficam salvos no input, facilitando alterações rápidas.

---

## 📋 Como Usar

1. **Adicione os Resultados dos Jogos**:
   - No campo "RESULTADOS DOS JOGOS", insira os placares reais separados por `-`, `x` ou `X` e os jogos separados por `/`.
   - Exemplo: `2-1/1X0/0x0/3-2`.

2. **Adicione os Palpites**:
   - No campo "PALPITES", insira o nome do jogador seguido dos palpites.
   - Cada jogador deve ter o mesmo número de palpites que os resultados fornecidos.
   - Exemplo:
     ```
     Nome 1
     2-1/1-0/0-0/3-2
     Nome 2
     1-1/0-0/2-2/1-3
     ```

3. **Clique em "CALCULAR ACERTOS"**:
   - O sistema calcula os gols de cada jogador e exibe o ranking.

4. **Copie o Ranking**:
   - Clique no botão de cópia no canto superior direito da seção "Ranking" para copiar o ranking para a área de transferência.

---

## ⚙️ Exemplo de Uso

### Entradas:
- **Resultados dos Jogos**: `2-1/1X0/0x0/3-2`
- **Palpites**: 
🇧🇷 Lins 
2-1/1-0/0-0/3-2 
🇺🇾 Rafael 
1-1/0-0/2-2/1-3


### Saída:
- Ranking 
🇧🇷 Lins (4) 
🇺🇾 Rafael (2)


---

## 🖥️ Tecnologias

- **HTML**: Estrutura da aplicação.
- **CSS**: Design responsivo e estilização moderna.
- **JavaScript**: Lógica de validação, cálculo e funcionalidades interativas.

---

## 📊 Logo do Projeto

![Logo do Projeto](https://i.ibb.co/7kfsRnp/60d606e3-2955-4c1d-85fe-3999ccaf0a14.png)

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e adaptá-lo como quiser!

---

## 💡 Autor

Feito por [Lucas Lins](hhttps://www.linkedin.com/in/lucaslinszz/)