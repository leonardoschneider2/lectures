### Exercícios:

//  Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
1 - docker pull debian:stable-slim


// Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag
2 - docker container run -it --name meu-container debian:stable-slim bash


// No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.
3 - cat /etc/*-release


// Encerre o terminal.
4 - exit


// Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.
5 - docker container ls -a


// Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.
6 - docker start nome-do-container

// Retome o contêiner
7 -  docker exec -it nome-do-container bash

// Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.
8 - cat /etc/debian_version

// Encerre o terminal
9 - exit

// Remova somente o contêiner criado para esse exercício.
10 - docker container rm -f nome-do-container