(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Journal = require('../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var journalTitle = $('#title').val();
     $('#journal-title').append("<li>" + journalTitle + "</li>");
    });

  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var teaser = $('#text').val();
    var newJournal = new Journal(teaser);
    var result = newJournal.getTeaser(teaser);
     $('#teaser').append("<li>" + result + "</li>");
    });

    $('#journal-entry').submit(function(event) {
      event.preventDefault();
      var words = ($('#text').val());
      var newJournal = new Journal("hot");
      var output = newJournal.numberOfWords(words);
       $('#words').append("<li>" + output + "</li>");
      });

    $('#journal-entry').submit(function(event) {
      event.preventDefault();
      var vowelCount = ($('#text').val());
      var newJournal = new Journal("hot");
      var vowelOutput = newJournal.numberOfVowels(vowelCount);
       $('#vowels').append("<li>" + vowelOutput + "</li>");
      });

    $('#journal-entry').submit(function(event) {
      event.preventDefault();
      var consonantCount = ($('#text').val());
      var newJournal = new Journal("hot");
      var consonantOutput = newJournal.numberOfConsonants(consonantCount);
       $('#consonants').append("<li>" + consonantOutput + "</li>");
      });
  });

},{"../js/journal.js":2}],2:[function(require,module,exports){
function Journal(entry) {
  this.entry = entry;
}

Journal.prototype.numberOfWords = function(str) {
  var word = (str.split(" ").length);
  return word;
};

Journal.prototype.numberOfVowels = function(str) {
var vowels = str.match(/[aeiou]/gi);
if (vowels === null) {
  return 0;
} else {
  return vowels.length;
}
};

Journal.prototype.numberOfConsonants = function(str) {
  var consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  if (consonants === null) {
    return 0;
  } else {
    return consonants.length;
  }
  };

Journal.prototype.getTeaser = function(str) {
  var sentence = (str.split("."));
  var firstSentence = sentence[0];
  if ((firstSentence.split(" ").length) <= 7) {
    return firstSentence;
  } else {
    var fss = (firstSentence.split(" "));
    var firstEight = [];
    for (var i = 0; i < 8; i++) {
      firstEight.push(fss[i]);
    }

    var join = firstEight.join(" ");
    return join;
 }
};

exports.journalModule = Journal;

},{}]},{},[1]);
