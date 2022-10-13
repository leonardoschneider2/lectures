const path = require('path');
const fs = require('fs').promises;

const activitieJson = '../activities.json';
// const data = JSON.parse(await fs.readFile(path.resolve(__dirname, activitieJson)));

const readAll = async () => {
  const data = JSON.parse(await fs.readFile(path.resolve(__dirname, activitieJson)));
  return data;
};

const readById = async (id) => {
  const data = JSON.parse(await fs.readFile(path.resolve(__dirname, activitieJson)));
  const dataById = data.find((a) => a.id === Number(id));
  return dataById;
};

const insert = async (activitie) => {
  const data = JSON.parse(await fs.readFile(path.resolve(__dirname, activitieJson)));
  const index = Math.max(...data.map((a) => a.id)) + 1;
  activitie.id = index;
  const resolve = [...data, activitie];
  await fs.writeFile(path.resolve(__dirname, activitieJson), JSON.stringify(resolve));
  return resolve;
};

module.exports = {
  readAll,
  readById,
  insert,
};
