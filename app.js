const express = require('express');
const bparser = require('body-parser');
const session = require('express-session');

const root_route =require('./routes/root');

const PORT = process.env.PORT || 5000;
const app  = express();

app.use(bparser.json({extended: false}));
app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false
}))

app.use(root_route);

app.listen(PORT, () => console.log("Server started"));