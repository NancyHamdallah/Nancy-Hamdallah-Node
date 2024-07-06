const nodemon = require('nodemon');
const fs = require ('fs');
const {readMyFile} = require ('./readThisfile');
const { countWords } = require('./numberOfWords');

//read JSON File
let filesNames = readMyFile('./config.json')
let arrayOfNames = JSON.parse(filesNames).files

// iterate over all files and perform operations on contents
arrayOfNames.forEach(element => {
    //read contents in each files
    let data = readMyFile('./'+element)
    
    //send content to function numberOfWords to count the words
    console.log(element +' : ' + countWords(data) + ' words')
});
