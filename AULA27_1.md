## Instalar o TypeScript:
	
	npm install -D typescript
	npx tsc --init
	
## Alterar o rootDir e outDir:

	line 25 - "rootDir": "local que arquivos ts estão armazenados",
	line 50 - "outDir": "local que vamos armazenar arquivos transpilados",
	
## Criamos o primeiro código:

```typescript
	let nome: string = 'Leo';
	let idade: number = 22;
	let motorista: boolean = true;
	let voto: string | number = 13; // aceita somente string e number
	
	motorista = 'sim'; // ERROR!!! aceita somente boolean
	voto = 'Bolsonaro'; // aceita somente string e number
```

## Vamos transpilar o Código: (flag -w para o transpilador "assistir as alterações e transpilar cada vez que salvar o código)
	npx tsc -w
	
	
## Agora vamos criar uma função que recebe duas notas e declara a média dessas duas:

````typescript

const retornaMediaTrimestre = (valor1: number, valor2: number, pessoa: string): string /* retorno da função */ => {
	const media:number = (valor1 + valor2) / 2;
	return `a média de ${pessoa} é ${media}`;
}

const retornaMediaAnual = (array: number[], pessoa: string): string => {
	const media = array.reduce((accumulador: number, nota: number): number => acc + nota, 0) / array.length;
	return `A média de ${pessoa} é ${media}`;
	
}

```

## Criação de um enum (similar a um objeto:

```typescript

enum httpStatus {
	ok = 200,
	created = 201,
	internalServerError = 500,
};

enum StatusStudents {
	aprovado/* = 10 */, // teste também descomentando o = 10
	recuperacao,
	reprovado,
};



// Enum é uma lista numerada

console.log(httpStatus.created);
console.log(StatusStudents.reprovado);

```


