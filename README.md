## Docker 

#### - Comando para verificar as imagens
  docker images

#### - Comando para verificar containers a partir das imagens
  docker ps -a

#### - Removendo uma imagem
  docker images
  docker rmi -f ID

#### Criando um container a partir de uma imagem
  docker run --name NOME_DO_CONTAINER -it ubuntu
-it ou -dit -> flag para o container ficar aberto rodando no terminal, a operação tradicional seria startar e a aplicação morrer
  
#### Abrindo um Container
  docker start-ai NOME_OU_ID_DO_CONTAINER

#### Curiosidade: Como escrever dentro de um documento.txt no teminal do Ubuntu
touch DOCUMENTO.txt
echo "Escrevendo alguma coisa dentro do meu documento de texto" > DOCUMENTO.txt

###### Mostrar o DOCUMENTO.txt
cat DOCUMENTO.txt

#### sair do Terminal do ubuntu
exit
Sair do container, não significa que o container foi apagado .



## Container Layer
Camada do Container que pode ser modificada.
Mantém a estrutura básica estática e altera o Container Layer

#### Docker NetWork
Colocar os Containers (ambiente isolados) para conversar.

#### Remover uma imagem do Docker
  docker rmi

#### Executar algo dentro do meu container
  docker container exec -it ID_DO_CONTAINER bash

#### Docker Mapeamento de Portas:
  docker run -d -P httpd:2.4

  usa a imagem httpd na versão 2.4 para abrir o container em uma porta do localhost:

  para colocar uma porta específica posso fazer a mesma coisa com p minúsculo

## Comandos do Docker File

FROM node:alpine (a imagem que será baixada seguido pela versão @NUMERO_DA_VERSÃO)
WORKDIR /usr/app (em qual local dentro do container vai ficar o meu projeto)
ADD (faz o mesmo que o copy, mas permite usar um link)
COPY package*.json ./ (passo para o copy um parametro, e este comando colca o parametro no meu espaço de trabalho - 1º Param: Arquivo - 2º Param: local)
COPY . . (copia tudo que temos na pasta local direto para a pasta base mostrada no WORKDIR)
RUN npm install (RUN executa um comando em específico. ex: npm install é um comando para instalar as dependecias da pasta).
EXPOSE 3000 (Tem o intuito de informar qual a porta vamos utilizar. ATENÇÃO: Isso é uma informação para o desenvolvedor e não uma informação para a aplicação. NÃO É MAPEAMENTO DE PORTAS!)
CMD npm start (sempre é executado quando o container é iniciado. Podemos ter mais de um CMD, mas somente o último definido será executado!)
LABEL maintener="Leonardo Schnedier leocoelho256@gmail.com" 
ENTRYPOINT flags postas no start do container (
  1 - docker run -it --rm --name test top
  ENTRIES = ["top"]
  2 - docker run -it --rm --name test top -P
  ENTRIES = ["top", "-P"]
)


# Vamos para o VSCODE. 
#### Vamos começar criando uma imagem docker

Crie um arquivo nomeado "Dockerfile"

cole: 
(
  FROM node:alpine

  WORKDIR /usr/app

  COPY package*.json ./

  COPY . .

  EXPOSE 3000

  CMD npm start

  LABEL maintener="Leonardo Schnedier leocoelho256@gmail.com" 
)

rode: 
docker build -t leonardoS/node .


PRONTO! IMAGEM CRIADA. Vamos agora desenvolver um container a partir dessa imagem

#### Agora podemos criar um container a partir da Imagem criada:

rode: 

docker run -p 3000:3000 -dit leonardoS/node

a flag -p coloca uma porta específica de acesso para o servidor local (localhost:3000 por exemplo)

#### Vamos agora rodar a aplicação com o node

docker exec -it ID_CONTAINER sh

sh => é a mesma coisa do bash do ubuntu, porém é o bash do node

#### Rodar os logs e ficar escutando os logs sendo gerados:

docker logs ID_CONTAINER -f

a Flag -f faz o terminal abrir e continuar executando e aguardando as operações até ser encerrado. Quando tiramos a flag -f o terminal (node terminal -sh) faz com que a aplicação seja executada e se encerre logo depois de encerrar a aplicação

#### Vamos para o localHost:3000

A aplicação já está rodando e padronizada de acordo com a imagem docker!