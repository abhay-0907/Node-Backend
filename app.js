const express = require('express');
const app = express();

const people = require('./Express/routes/people');

const auth = require('./Express/routes/auth');
// Static assets
app.use(express.static('./method-public'));

// parse data
app.use(express.urlencoded({ extended:false }))

//parse json
app.use(express.json());


app.use('/api/people',people);



app.use('/login',auth)

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});