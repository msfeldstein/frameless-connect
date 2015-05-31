#!/usr/bin/env node
var port = process.argv[2];
var connector = require('./index.js');
connector(port)
