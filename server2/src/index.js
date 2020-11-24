const express = require('express');
const app = express();
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');
const colorConsole = require('./lib/console');
const api = require('./api');

sequelize.sync();

app.set('port', process.env.PORT || 8086);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', api);

app.listen(app.get('port'), () => {
    colorConsole.green(`server is running at port ${app.get('port')}`);
});