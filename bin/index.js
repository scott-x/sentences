#!/usr/bin/env node
'use strict'
// process.title = 'sc';
var program = require('commander');
var chalk = require('chalk');
var inquirer = require('inquirer');

program.version(require('../package').version)
.usage('<command> [options]');

inquirer
    .prompt([
      /* Pass your questions in here */
        {
          type: 'rawlist',
          name: 'type',
          message: `${chalk.magenta(' What\'s your new job type？Please choose one of the following:')}`,
          choices: ['USA','CAN','Print','NON WMT'],
          default: 'USA'
        }
     
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
       switch (answers.type){
          case 'USA':
              console.log('usa')
             break;
          case  'CAN':
              console.log('usa')
             break;
          case  'Print':
              console.log('usa')
             break;
          case  'NON WMT':
              console.log('usa')
             break;   
       }

    });
program.parse(process.argv)

if(!program.args.length){
    program.help()
}
