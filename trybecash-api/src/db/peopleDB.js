const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstname, person.lastname, person.email, person.phone],
);

const findAll = () => connection.execute('SELECT * FROM people');

const findById = (id) => connection.execute('SELECT * FROM people WHERE id = ?', [id]);

const update = ({ id, firstname, lastname, email, phone }) => connection.execute(
  `UPDATE people
  SET
    first_name = ?,
    last_name = ?,
    email = ?,
    phone = ?
  WHERE id = ?`,
  [firstname, lastname, email, phone, id]
);

const remove = (id) => connection.execute(`DELETE FROM people WHERE id = ?`, [id]);

module.exports = {
  update,
  remove,
  insert,
  findAll,
  findById
}