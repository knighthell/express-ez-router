const express = require('express');
const ezRouter = require('express-ez-router');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(ezRouter('./api', '.api.js'));

app.listen(PORT, () => {
    console.log(`API Server Started. PORT: ${PORT}`);
    console.log('If you wanna EXIT, Press Ctrl+C.');
});