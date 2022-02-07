#include <iostream>
#include <string>

using namespace std;

int main() {
  int qtdJogos, qtdPart, qtdTimes, i, j=0;
  char caracter;

  // informações necessárias do usuário
  cout<<"Digite o número de jogos que possui na tabela: ";
  cin>>qtdJogos;
  cout<<"Digite o número de pessoas que palpitaram: ";
  cin>>qtdPart;

  //o número de times é o dobro do número de jogos
  qtdTimes = qtdJogos * 2;

  int placares[qtdTimes], palpites[qtdTimes];

  cout<<"Digite os placares corretos: ";

  //esse loop vai ler do usuario os qtdJogos-1 placares corretos, no formato 2-2/1-1/0-0 ou 2x2/1-1/0-0, perceba que os qtdJogos-1 primeiros seguem o padrão Int Caracter Int Caracter, enquanto o último placar só tem Int Caracter Int, por isso separei o último do resto
  for(i=0; i<qtdTimes-2; i++){
    cin>>placares[i];
    cin>>caracter;
  }
  //ultimo placar correto
  cin>>placares[qtdTimes-2];
  cin>>caracter;
  cin>>placares[qtdTimes-1];

  cout<<"Cole TODOS os palpites aqui: ";

  int qtdAcertos, k;

  while(j<qtdPart){
    string nome;
    cin>>nome;
    qtdAcertos = 0, k=0;

  for(i=0; i<qtdTimes-2; i++){
    cin>>palpites[i];
    cin>>caracter;
  }
  cin>>palpites[qtdTimes-2];
  cin>>caracter;
  cin>>palpites[qtdTimes-1];

  for(k=0; k<qtdTimes; k=k+2){
    if ((placares[k]==palpites[k]) && (placares[k+1]==palpites[k+1])) qtdAcertos++;
  }

  cout<<"\n\n" <<nome <<": " <<qtdAcertos <<" gols.";

    j++;
  }

} 