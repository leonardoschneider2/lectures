## Vamos criar um objeto

```typescript

let objPerson = {
	nome: string,
	idade: number,
	habilidades: {
		artes: boolean,
		esportes: boolean,
	},
} = {
	nome: 'Leonardo',
	idade: 22,
	habilidades: {
		artes: boolean,
		esportes: boolean,
	},
};

```

```typescript

type Habilidades = {
	artes: boolean,
	esportes: boolean,
};

type Pessoa = {
	nome: string,
	idade: number,
	habilidades: Habilidades,
}

const objPerson: Pessoa = {
	nome: 'Leonardo',
	idade: 22,
	habilidades: {
		artes: boolean,
		esportes: boolean,
	},
}

```


## Vamos contruir arrays com varios tipos

```typescript

const valoresAleatorios: (string|boolean|string)[] = ['leo', true, true, 10];

```

## Vamos contruir arrays com tuplas

```typescript

const valoresAleatorios: [string, boolean, number] = ['leo', true, 10];

```

## Bora criar uma classe calculadora

```typescript

class Calculadora {
	num1: number;
	num2: number;
	
	constructor(num1: number, num2: number) { // O que fazemos antes da inicialização
		this.num1 = num1;
		this.num2 = num2;
	}
	
	soma() {
		return this.num1 + this.num2;
	}
	
	subtrai() {
		return this.num1 - this.num2;
	}
	
	multiplica() {
		return this.num1 * this.num2;
	}
	
	divide() {
		return this.num1 / this.num2;
	}
};

const calc = new Calculadora(10, 2);

console.log(calc.soma());
console.log(calc.subtrai());
console.log(calc.divide());
console.log(calc.multiplica());

```

## criar uma interface:

Interface funciona como assinatura de um contrato. Siga as cláusulas.

```typescript

interface ave {
	penas: true,
	bico: true,
	dente: false,
	ovipara: true,
}

const pardal: ave = {
	penas: true,
	bico: true,
	dente: false,
	ovipara: true,
}

interface AveTerrestre extends ave { // Ave Terrestre herda todas as características de ave
	voar: false,
}

const emu: AveTerrestre = {
	voar: false,
	penas: true,
	bico: true,
	dente: false,
	ovipara: true,
}

```
## Criação de um type

```typescript
type Endereco = {
	rua: string,
	bairro: string,
}

type Profissao = {
	profissao: string,
	salario: number,
}

functions cadastro(
	nome: string,
	idade: number,
	informacoes: Endereco|Profissao
) {
	return {
		nome,
		idade,
		informacoes,
	}
}

const pessoa1 = cadastro(
	'João',
	26,
	{ rua: 'Das Neves', bairro: 'Cristal' },
);


console.log(pessoa1.informacoes.rua); // Aparece um erro em 'rua' pois em Profissao não existe essa chave, mesmo existindo em Endereco

// no segundo teste usamos o generics que resolveu o problema que tinhamos

functions cadastro2<T>(
	nome: string,
	idade: number,
	informacoes: T
) {
	return {
		nome,
		idade,
		informacoes,
	}
}

const pessoa 2 = cadastro2<Profissao>(
	'Maria',
	24,
	{ profissao: 'Fazendeira', salario: 1000 }
);

console.log(pessoa2.informacoes.profissao);

```





















