const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors()); //It could come into play later -- keep incase
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


//Routs
const userRouter = require('./routes/user');
app.use('/user', userRouter);



app.listen(port, () => {
    console.log(`Wu-Node: ${port}`);
});