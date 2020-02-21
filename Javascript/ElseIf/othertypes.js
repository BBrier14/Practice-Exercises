var bigger = function(a, b) {
	return a > b ? a : b;
};

function nonTernary(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

console.log(bigger(1, 2));
console.log(bigger(2, 1));
console.log(bigger(5, 2));
console.log(bigger(1, 1));

console.log(nonTernary(1, 2));
console.log(nonTernary(2, 1));
console.log(nonTernary(5, 2));
console.log(nonTernary(1, 1));
