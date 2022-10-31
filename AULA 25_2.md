#### 1 - startamos os containers mysql e node

#### 2 - entramos no container do node:16

#### 3 - rodamos o comando npm i

#### 4 - fazemos a criação das tabelas com o código:
	npx sequelize db:create
	
#### 5 - Existem arquivos de seeders queryInterface.bulkinsert(). Existem migrations para criar a tabela e para criar novas colunas nas tabelas addColumn() [e no down o removeColumn();

#### 6 - Para criar o arquivo de migration
	npx sequelize migration:generate --name create-students
#### 7 - Começamos a alterar o código da MIGRATION que foi adicionada em /src/migrations/202020020220-create-students.js

`````JAVASCRIPT
	'use strict';
	
	module.exports = {
	  async up (queryInterface, Sequelize) {
			await queryInterface.createTable(
				'users', // Primeiro Parametro: Nome da tabela 
				{ // Segundo Parametro, configurando as chaves da tabela
					id: {
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
						type: Sequelize.INTEGER,
					},
					name: {
						type: Sequelize.STRING,
					},
					email: {
						type: Sequelize.STRING,
					},
					birthday: {
						type: Sequelize.DATE,
					},
					active: {
						type: Sequelize.BOOLEAN,
					},
				},
			);
		};
		
		async down (queryInteface, Sequelize) {
			await queryInterface.dropTable('users');
		}
	}

`````

#### 8 - Agora vamos criar um arquivo de MODELS para mapear a tabela

`````JAVASCRIPT
module.exports = (sequelize, DataTypes) => {
	const Student = sequelize.define(
		'Student',
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			birthday: DataTypes.DATE,
			active: DataTypes.BOOLEAN,
			courseId: DataTypes.INTEGER,
		},
		{ // Terceiro Parametro, configurando a tabela
			timestamps: true,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'Students'
		},
	);
	
	Student.associate = (models) => {
		Student.belongsTo(models.Course, {
			foreignKey: 'course_id',
			as: 'course',
		})

	};
	return Student;
};

`````

#### 9 - Vamos criar uma nova coluna na tabela que já existe:

* Para isso vamos montar uma MIGRATION para inserir uma coluna na tabela de estudantes

* npx sequelize migration:generate --name add-column-course-id-in-table-students

* no arquivo que foi gerado na pasta /src/migrations vamos alterar as funções "up" e "down":

* vai ficar assim:

`````JAVASCRIPT
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn(
			'students', // nome da tabela já existente
			'course_id', // nome da Coluna que vamos criar
			{ // Parâmetros da Coluna que vamos criar
				allowNull: false,
				type: DataTypes.INTEGER,
				references: { 
					model: 'courses', // nome da tabela que essa coluna é FK
					key: 'id', // coluna correspondente
				},
			},
		);
	};
	async down (queryInterface, Sequelize) {
		await queryInterface.removeColumn(
			'students', // Nome da tabela a ser removida
			'course_id', // Nome da coluna a ser removida
		);
	};
};
`````

* MODEL 

`````JAVASCRIPT
module.exports = (sequelize, DataTypes) => {
	const Courses = sequelize.define(
		'Course',
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			birthday: DataTypes.DATE,
			active: DataTypes.BOOLEAN,
		},
		{ // Terceiro Parametro, configurando a tabela
			timestamps: true,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'Students'
		},
	);

	Courses.associate = (models) => {
		Courses.hasMany(models.Students, {
			as: 'students',
			foreignKey: 'course_id',
		});
	};
	
	return Student;
};

`````


#### 10 - Vamos criar um seeders para povoar o database de estudantes:

* Rodar o código no terminal: 

* npx sequelize seed:generate --name students

* abrir o arquivo que foi criado na pasta /src/seeders: 20291029230201-students.js

`````JAVASCRIPT

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'students', // nome da tabela que vamos adicionar os dados
			[ // dados que vamos adicionar na tabela
				{
					name: 'Leo',
					email: 'leo@leo.com',
					birthday: '2000-11-01T07:00:00',
					active: true,
					course_id: 1
				},
				{
					name: 'Leo',
					email: 'leo@leo.com',
					birthday: '2000-11-01T07:00:00',
					active: true,
					course_id: 1
				},
				{
					name: 'Leo',
					email: 'leo@leo.com',
					birthday: '2000-11-01T07:00:00',
					active: true,
					course_id: 1
				},
			];
		)
	}
	
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('students', null, { where: { id: 1 } });
	}
};

`````

* 11 - Podemos rodar a inserção dessas seeders no database com o comando 

*	npx sequelize db:seed:all
	
#### 12 - Listar os objetos com informações agregadas, (INNER JOIN - LEFT JOIN - RIGHT JOIN): EAGER LOADING - Usa o relacionamento entre as tabelas e com apenas uma query traz as requisições 

*	nas services, quando vamos fazer a chamada da model findAll vamos passar para a função alguns parâmetros
	
`````JAVASCRIPT
// No arquivo /src/services/courses.services.js
const { student } = require('../models'); // Não pode importar do arquivo /models/student.js por que ele vai trazer uma função e na verdade queremos usar o retorno da função.

const getCourses = async () => ModelCourse.findAll({
	include: [
		{ model: student, as: 'students' },
	],
});

`````

* Com essas linhas a requisição vai trazer as informações dos courses e em cada course um array na chave students com todos os estudantes listados no array.

* Prestar atenção nas associações nesse momento

#### 13 - Lazy Loading: Duas querys para trazer os dados, o contrário do EAGER LOADING. 

`````JAVASCRIPT
// No arquivo /src/services/student.services.js
const { student, course } = require('../models'); // Não pode importar do arquivo /models/student.js por que ele vai trazer uma função e na verdade queremos usar o retorno da função.

const findById = async (id) => {
	const Student = await student.findByPk(id);
	const Course = await course.findByPl(Student.courseId);
	
	return { student, course };
}

`````





































