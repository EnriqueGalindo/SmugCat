const cors = require('cors');
const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//From here to Routes is just mongoDB setup
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    //Bitches at dev w/o all 3
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo-Wu!");
})



//Routes
//This is most likely the section ur looking to change


//Routs to Views
const loginRouter = require('./routes/login');
app.use('/', loginRouter);

const createAccountRouter = require('./routes/createAccount');
//Whats the best name for this?
app.use('/create', createAccountRouter);

const storefrontRouter = require('./routes/storefront');
app.use('/storefront', storefrontRouter);

const profileRouter = require('./routes/profile');
app.use('/profile', profileRouter);



//Routes for the mongoAPI
const userRouter = require('./routes/user');
app.use('/user', userRouter);






//If we don't have this then we cant display anything:
app.listen(port, () => {
    console.log(`Wu-Node: ${port}`);
});