const express = require('express');
const app = express();
const { sequelize } = require('./models');
sequelize.sync({ force: false }).then(()=> {
  console.log('데이터베이스 연결 성공'
  )}).catch((err) => {
  console.error(err);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })