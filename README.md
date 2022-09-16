# Docker

### Instruções sobre Docker:
#### - Criar container
  docker container run hello-world
  (hello-world is the container name)
  --name name (caso queira dar um nome ao container, ou recebe um nome aleatório)

#### - Mostrar containers que estão em execução
  docker ps

#### - Mostrar todos os containers
  docker ps -a

#### - Interagir com o terminal do container do Ubuntu
  docker container run -it ubuntu bash
  Vai criar o container da imagem do ubuntu, permitir que acesse ao terminal, e com o bash ele já vai mostrar o terminal do ubuntu no container

#### - Sair do Container
  exit

#### - Criar um container
  docker container create ubuntu

#### - Startar um container
  docker ps -a = PARA QUE POSSAMOS ENXERGAR OS CONTAINERS CRIADOS
  docker container start id-ou-nome-do-container

  Caso não informe ao bash que quero continuar com o container em execução


#### - Mantém o container rodando
  docker container start -dit id-ou-nome-do-container


#### - Remover todos os containers da Máquina
  docker container prune

