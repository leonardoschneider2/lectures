## AULA 25.3 - ORM Sequelize - Associations N:N e transactions

<details><summary><strong>1 - CRIAR MIGRATION DE modules (create)</strong></summary>

````JAVASCRIPT



````
</details>

#### 2 - COMMIT -d

#### 3 - npx sequelize db:migrate

<details><summary><strong>4 - CRIAR A MODEL DA TABELA modules (map, cria CRUDs)</strong></summary>

````JAVASCRIPT



````
</details>

<details><summary><strong>5 - CRIAR AS SEEDERS DA TABELA modules (inserção inicial)</strong></summary>

````JAVASCRIPT



````
</details>

#### 6 - COMMIT -d

<details>
<summary><strong>7 - CRIAR MIGRATION DE course_modules (create)</strong></summary>

````JAVASCRIPT
module.exports = {
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('course_modules');
	},
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('course_modules', {
			course_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'courses', // APONTA PARA A TABELA
					key: 'id', // APONTA PARA A COLUNA
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			module_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'modules',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onCreate: 'CASCADE',
			}
		}, {});
	},
}
````
</details>

#### 8 - COMMIT -d

<details><summary><strong>9 - CRIAR A MODEL DA TABELA 'course_models'</strong></summary>

````JAVASCRIPT

module.exports = (sequelize, DataTypes) => {
	const CourseModule = sequelize.define('CourseModule', {
		course_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		module_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
	}, {
		timestamps: false,
		tableName: 'course_modules',
	});

	// Associate
	CourseModule.associate = (models) => {
		CourseModule.Course.belongsToMany( // Curso pertence a vários Modulos
			models.Module,
			{
				as: 'modules', // apelido
				foreignKey: 'course_id', // Sempre aponta pra quem chama
				otherKey: 'module_id',
				through: CourseModule,
			},
		);
	};

	CourseModule.associate = (models) => {
		models.Module.belongsToMany( // Modulo pertence a vários Cursos
			models.Course,
			{
				as: 'courses', // apelido
				foreignKey: 'module_id', // Sempre aponta pra quem chama
				otherKey: 'course_id', // Sempre aponta pra quem é chamado
				through: CourseModule,
			},
		);
	};

	return CourseModule;
}

````
</details>

<details><summary><strong>10 - Criar Seeder para tabela 'course_module'</strong></summary>

````JAVASCRIPT



````
</details>