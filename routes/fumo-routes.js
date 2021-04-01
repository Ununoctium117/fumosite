const express = require('express');     // Imports express
const router = express.Router();        // Uses express router() function
const path = require('path');
const pages = path.join(__dirname, '..', 'static', 'pages'); // References pages folder

// ROUTES
router
    .get('/', (req, res) => {
        res.sendFile(pages + '/index.html');
    })
    .get('/fumolist', (req, res) => {
        res.sendFile(pages + '/fumo_list.html');
    })
    .get('/fumotable', (req, res) => {
        res.sendFile(pages + '/fumo_table.html');
    })
    .get('/japanese', (req, res) => {
        res.sendFile(pages + '/japanese.html');
    })
    .get('/proxyforward', (req, res) => {
        res.sendFile(pages + '/proxy_forward.html');
    })
    .get('/reseller', (req, res) => {
        res.sendFile(pages + '/reseller.html');
    });

    // Exports router
    module.exports = router;
