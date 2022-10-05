require('dotnev').connfig();
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/', routes);

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

const PORT = 3000;
app.listen(process.env['PORT'] || 3000, () => {
    console.log("Server listing on PORT 3000",process.env['PORT'] );
});
