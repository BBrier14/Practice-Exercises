//-----Create a function that takes the arguement and shows its number in the sequence

// Basic Implementation
function fibonacci(num) {
	var a = 1,
		b = 0,
		temp;

	while (num >= 0) {
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}

	return b;
}

console.log(fibonacci(3));

// Recursive Solution
function fibonacci(num) {
	if (num <= 1) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));

// Memoization
function fibonacci(num, memo) {
	memo = memo || {};

	if (memo[num]) return memo[num];
	if (num <= 1) return 1;

	return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

console.log(fibonacci(10));
