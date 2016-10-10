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
