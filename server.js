const express = require('express');                         // Imports express lib
const http = require('http');                               // Imports http library
const helmet = require('helmet');                           // Imports helmet lib for improved header security
const app = express();
const port = process.env.PORT || 80;                        // Defines port
const cors = require('cors');                               // Import cors
const addresses = require('./routes/fumo-routes');          // Imports fumo-routes for routing the pages

const server = http.createServer(app);                      // Create server using express app

app.use(helmet());                                          
app.use(cors());

app.use(express.static("static"));                          // Defines static folder so that express looks for files like css and favicon.ico there


app.use('/', addresses);                                    // Tells app to use the file referenced on 'addresses' to handle all routes starting with '/'

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});                                                         // Listens on designated port