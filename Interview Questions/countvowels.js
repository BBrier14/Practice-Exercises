// ----- Count the vowels in a given string -----//

// Method 1
var countVowels = function(str) {
	var count = 0;
	var input = str.toLowerCase();
	for (var i = 0; i < input.length; i++) {
		if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
			count++;
		}
	}
	return count;
};

// Method 2
var countVowelsAnother = function(str) {
	var count = 0;
	var input = str.toLowerCase();
	var vowelArr = [ 'a', 'e', 'i', 'o', 'u' ];
	for (var i = 0; i < input.length; i++) {
		if (vowelArr.includes(input[i])) {
			count++;
		}
	}
	return count;
};

// Regular Expression
var regexImplementation = function(str) {
	var regex = /[aeiou]/g;
	var result = str.match(regex);
	return !result ? 0 : result.length;
};

console.log(countVowels('hello'));
console.log(countVowels('you are great!'));
console.log(countVowels('why?'));

console.log('------------------');

console.log(countVowelsAnother('hello'));
console.log(countVowelsAnother('you are great!'));
console.log(countVowelsAnother('why?'));

console.log('-------------------');

console.log(regexImplementation('hello'));
console.log(regexImplementation('you are great!'));
console.log(regexImplementation('why?'));
