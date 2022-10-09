const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    console.log(result);
    (result) ? res.status(200).json(result)
      : res.status(404).json({ message: "Id da pessoa não encontrada" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    console.log(person);
    const [result] = await peopleDB.update({ id, ...person });
    console.log(result);
    (result.affectedRows > 0) ? res.status(200).json(result) : res.status(404).json({ message: "Id da pessoa não encontrada" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    console.log(result);
    (result.affectedRows > 0) ? res.status(200).json(result) : res.status(404).json({ message: "Id da pessoa não encontrada" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

module.exports = router;