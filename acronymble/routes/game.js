#!/usr/bin/env node
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var express = require("express");
var router = express.Router();
var Game = require("../models/game");


// global variable to keep all phrase submit by player
var phrases=[];
// when user submit a phrase
router.post("/phrase", function(req, res){
	user = req.body.user;
	phrase = req.body.phrase;
	phrases.push({user,phrase});
});

// keep track voting


// end_game event
router.post("/endGame", function (req, res) {
// loop through the phrases array and find the winner


});

module.exports = router;
