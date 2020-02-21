// Create a function to determine if a word is a palindrome

function isPalindrome(string) {
	return string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
}

// Test
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
