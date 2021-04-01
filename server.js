const express = require('express');                         // Imports express lib
const https = require('https');                             // Imports https library
const helmet = require('helmet');                           // Imports helmet lib for improved header security
const app = express();
const port = process.env.PORT || 80;                        // Defines port
const addresses = require('./routes/fumo-routes');          // Imports fumo-routes for routing the pages
const css = require('./routes/style-routes');               // Imports style-routes for routing the css

app.use(helmet());                                          // Tells app to use helmet

let options = {                                             // This object defines options for as to how express will handle all express.static requests

    dotfiles: 'ignore',
    extensions: ['html, css'],
    index: false,
    maxAge: '7d'

};

app.use(express.static("static", options));                 // Defines static folder so that express looks for files like favicon.ico there

app.use('/css', css);
app.use('/', addresses);                                    // Tells app to use the file referenced on 'addresses' to handle all routes starting with '/'

app.listen(port,
    console.log(`Server is listening on port ${port}`));    // Listens on designated port