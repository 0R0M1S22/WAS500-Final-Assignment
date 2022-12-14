const express = require('express');
const app = express();

const mongoose = require ("mongoose");
mongoose.connect(
    "mongodb+srv://Omar:WAS500@was500.pvqj6ck.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once("open", () => {
    console.log("Ah! connected to MongoDB using Mongoose!!");
});

const Books = require('./books.js');
Books.create(
    {
        _id: '1',
        title: 'Skyward',
        Description: 'Spensas world has been under alien attack for decades. Pilots are the heroes of whats left of humanity, and becoming a pilot is Spensas dream. Ever since she was a little girl, Spensa has dreamed of soaring skyward and proving her bravery. But her fathers legacy stands in the way, he was a pilot who was killed for desertion years ago, branding Spensa the daughter of a coward, and making her chances of attending flight school slim to none.',
        Author: 'Brandon Sanderson',
        image: '../Public/images/Skyward.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );

 Books.create(
    {
        _id: '2',
        title: 'Starsight',
        Description: 'All her life, Spensa has dreamed of becoming a pilot. Of proving shes a hero like her father. She made it to the sky, but the truths she learned about her father were crushing. The rumors of his cowardice are true, he deserted his flight during battle against the Krell. Worse, though, he turned against his team and attacked them.Spensa is sure theres more to the story. And shes sure that whatever happened to her father in his starship could happen to her. When she made it outside the protective shell of her planet, she heard the stars, and it was terrifying. Everything Spensa has been taught about her world is a lie.',
        Author: 'Brandon Sanderson',
        image: '../Public/images/Starsight.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );



 Books.create(
    {
        _id: '3',
        title: 'Cytonic',
        Description: 'Spensas life as a Defiant Defense Force pilot has been far from ordinary. She proved herself one of the best starfighters in the human enclave of Detritus, and she saved her people from extermination at the hands of the Krell, the enigmatic alien species that has been holding them captive for decades. Whats more, she traveled light-years from home as an undercover spy to infiltrate the Superiority, where she learned of the galaxy beyond her small, desolate planet home.',
        Author: 'Brandon Sanderson',
        image: '../Public/images/Cytonic.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );
