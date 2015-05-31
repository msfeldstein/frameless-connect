#!/usr/bin/env node
var port = process.argv[2];
console.log(port)
var connector = require('./index.js');
connector(port)
