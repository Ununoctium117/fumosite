const express = require('express');
const css = express.Router();
const path = require('path');
const style = path.join(__dirname, '..', 'static', 'pages'); // References css folder

// ROUTES FOR STYLE FILES (CSS)
css
    .get('/index.css', (req,res) => {
        res.sendFile(style + '/index.css');
    });

module.exports = css;