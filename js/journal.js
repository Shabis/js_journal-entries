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
